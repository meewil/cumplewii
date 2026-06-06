import $ from 'jquery';
import './meses.css';
import { getls, savels, Mensaje } from '../widev.js';
import { rutas } from '../rutas.js';
import { auth, db } from '../firebase.js';
import { doc, getDocs, collection, query, where } from 'firebase/firestore';

// --- DATA ACCESS HELPER ---
const wiUser = () => getls('wiSmile') || null;

const getBirthdaysList = async () => {
  const user = wiUser();
  if (user && user.uid) {
    try {
      const snap = await getDocs(query(collection(db, 'cumples'), where('userId', '==', user.uid)));
      if (snap.empty) return [];
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      return list.filter(c => c.activo !== false);
    } catch (e) {
      console.warn('Error loading from Firestore:', e);
      return [];
    }
  } else {
    const local = localStorage.getItem('cumplesLocal');
    if (local) {
      try {
        const parsed = JSON.parse(local);
        return parsed.filter(c => c.activo !== false);
      } catch {
        return [];
      }
    }
    return [];
  }
};

// --- HELPER CALCULATIONS ---
const daysUntil = (birthday) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const currentYear = today.getFullYear();
  let bdate = new Date(currentYear, birthday.mes - 1, birthday.dia);
  bdate.setHours(0, 0, 0, 0);
  
  if (bdate < today) {
    bdate.setFullYear(currentYear + 1);
  }
  
  const diffTime = bdate - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const countdownText = (days) => {
  if (days === 0) return 'Hoy';
  if (days === 1) return 'Mañana';
  return `Faltan ${days} días`;
};

const gradientForColor = (colorName) => {
  switch (colorName?.toLowerCase()) {
    case 'dulce': return 'linear-gradient(135deg, #FF5C69, #FF8B95)';
    case 'mora': return 'linear-gradient(135deg, #7000FF, #9D5CFF)';
    case 'cielo': return 'linear-gradient(135deg, #0EBEFF, #66D5FF)';
    case 'paz': return 'linear-gradient(135deg, #29C72E, #72EA76)';
    case 'oro':
    default: return 'linear-gradient(135deg, #FFDA34, #FFE366)';
  }
};

const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const cardHtml = (c) => {
  const days = daysUntil(c);
  const isUrgent = days >= 0 && days <= 3;
  const gradient = gradientForColor(c.avatarColorNombre || 'Oro');
  
  const relMap = {
    amigo: { txt: 'Amistad', ico: 'fa-user-group', cls: 'rel_amigo' },
    familia: { txt: 'Familia', ico: 'fa-house-chimney-user', cls: 'rel_familia' },
    pareja: { txt: 'Amor', ico: 'fa-heart', cls: 'rel_pareja' },
    trabajo: { txt: 'Trabajo', ico: 'fa-briefcase', cls: 'rel_trabajo' },
    conocido: { txt: 'Contacto', ico: 'fa-handshake', cls: 'rel_conocido' }
  };
  const rel = relMap[c.relacion?.toLowerCase()] || { txt: 'Personal', ico: 'fa-user', cls: 'rel_personal' };

  return `
    <div class="cp_card ${isUrgent ? 'urgent' : ''} ${c.pin ? 'pinned' : ''}" data-id="${c.id}">
      <div class="cp_card_header">
        <div class="cp_avatar_container">
          <div class="cp_avatar_ring" style="background: ${gradient}"></div>
          <div class="cp_avatar_wrap" style="background: ${c.avatar ? `url('${c.avatar}')` : gradient}; background-size: cover; background-position: center;">
            ${c.avatar ? '' : c.iniciales || 'CW'}
          </div>
        </div>
        <div class="cp_info">
          <div class="cp_name_row">
            <span class="cp_name" title="${c.nombre}">${c.nombre}</span>
          </div>
          <div class="cp_rel_row">
            <span class="cp_rel_badge ${rel.cls}">
              <i class="fas ${rel.ico}"></i> ${rel.txt}
            </span>
          </div>
        </div>
        <div class="cp_badge_side">
          <span class="cp_pill ${isUrgent ? 'urgent' : ''}">${countdownText(days)}</span>
        </div>
      </div>
      
      <div class="cp_card_body">
        <div class="cp_date_block">
          <i class="fas fa-cake-candles"></i>
          <span>${c.dia} de ${monthNames[c.mes - 1]} ${c.anio ? `· <strong>${new Date().getFullYear() - c.anio} años</strong>` : ''}</span>
        </div>
        ${c.nota ? `<div class="cp_note_box"><i class="fas fa-quote-left"></i><span>${c.nota}</span></div>` : ''}
      </div>
      
      <div class="cp_card_actions">
        <span class="ms_edit_link" data-id="${c.id}"><i class="fas fa-pencil-alt"></i> Editar en Cumples ›</span>
      </div>
    </div>
  `;
};

// --- GLOBAL MODULE STATE ---
let birthdaysCache = [];
let visibleYear = new Date().getFullYear();
let visibleMonth = new Date().getMonth() + 1; // 1-indexed (1: Enero, 12: Diciembre)
let selectedDay = null;

export const render = () => {
  return `
    <div class="ms_wrap">
      
      <!-- HERO -->
      <div class="ms_hero">
        <h1 class="ms_hero_title">Calendario Mensual</h1>
        <p class="ms_hero_subtitle">Visualiza y planifica los cumpleaños agrupados por mes.</p>
      </div>

      <!-- TWO COLUMN CONTAINER -->
      <div class="ms_container">
        
        <!-- LEFT COLUMN (CALENDAR) -->
        <div class="ms_col_left">
          <!-- MONTH NAVIGATOR -->
          <div class="ms_nav">
            <button class="ms_nav_btn" id="ms_prev"><i class="fas fa-chevron-left"></i></button>
            <span class="ms_nav_title" id="ms_nav_title">...</span>
            <button class="ms_nav_btn" id="ms_next"><i class="fas fa-chevron-right"></i></button>
          </div>

          <!-- CALENDAR GRID -->
          <div class="ms_calendar">
            <div class="ms_weekdays">
              <div class="ms_weekday">Lun</div>
              <div class="ms_weekday">Mar</div>
              <div class="ms_weekday">Mié</div>
              <div class="ms_weekday">Jue</div>
              <div class="ms_weekday">Vie</div>
              <div class="ms_weekday">Sáb</div>
              <div class="ms_weekday">Dom</div>
            </div>
            <div class="ms_days_grid" id="ms_days_grid"></div>
          </div>
        </div>

        <!-- RIGHT COLUMN (BIRTHDAY LISTING) -->
        <div class="ms_col_right">
          <!-- FILTER TITLE SECTION -->
          <div class="ms_list_header">
            <h2 class="ms_list_title" id="ms_list_title">Cumpleaños</h2>
            <button class="ms_clear_filter" id="ms_clear_filter" style="display: none;">Ver todo el mes</button>
          </div>

          <!-- LIST OF BIRTHDAYS -->
          <div class="ms_list" id="ms_list">
            <div style="text-align: center; padding: 4vh;"><i class="fas fa-spinner fa-spin"></i> Cargando...</div>
          </div>
        </div>

      </div>

    </div>
  `;
};

const renderCalendar = () => {
  const daysGrid = $('#ms_days_grid');
  daysGrid.empty();

  // Actualizar título del navegador
  $('#ms_nav_title').text(`${monthNames[visibleMonth - 1]} ${visibleYear}`);

  // Días en el mes visible
  const daysInMonth = new Date(visibleYear, visibleMonth, 0).getDate();

  // Índice del primer día de la semana (1 de este mes)
  // Ajustamos para que Lunes sea el primer día de la semana (0: Lun, 6: Dom)
  let firstDayIdx = new Date(visibleYear, visibleMonth - 1, 1).getDay();
  firstDayIdx = firstDayIdx === 0 ? 6 : firstDayIdx - 1;

  // Celdas vacías para el desfase inicial
  for (let i = 0; i < firstDayIdx; i++) {
    daysGrid.append('<div class="ms_day_cell empty"></div>');
  }

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === visibleYear && (today.getMonth() + 1) === visibleMonth;

  // Filtrar los cumpleaños del mes visible
  const monthBirthdays = birthdaysCache.filter(c => c.mes === visibleMonth);

  // Crear celdas para cada día
  for (let day = 1; day <= daysInMonth; day++) {
    const hasBirthdays = monthBirthdays.some(c => c.dia === day);
    const isToday = isCurrentMonth && today.getDate() === day;
    const isSelected = selectedDay === day;

    const cell = $(`
      <div class="ms_day_cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${hasBirthdays ? 'has_birthdays' : ''}" data-day="${day}">
        <span class="ms_day_num">${day}</span>
      </div>
    `);

    daysGrid.append(cell);
  }

  renderBirthdaysList();
};

const renderBirthdaysList = () => {
  const listContainer = $('#ms_list');
  const monthBirthdays = birthdaysCache.filter(c => c.mes === visibleMonth);
  
  let filtered = monthBirthdays.sort((a, b) => a.dia - b.dia);
  
  if (selectedDay !== null) {
    filtered = monthBirthdays.filter(c => c.dia === selectedDay);
    $('#ms_list_title').text(`Cumpleaños del ${selectedDay} de ${monthNames[visibleMonth - 1]}`);
    $('#ms_clear_filter').show();
  } else {
    $('#ms_list_title').text(`Cumpleaños de ${monthNames[visibleMonth - 1]}`);
    $('#ms_clear_filter').hide();
  }

  if (filtered.length === 0) {
    listContainer.html(`
      <div style="text-align: center; padding: 4vh; color: var(--tx3); font-style: italic;">
        <i class="fas fa-calendar-times" style="font-size: 2rem; margin-bottom: 1.5vh; display: block; color: var(--tx3);"></i>
        ${selectedDay !== null ? 'No hay cumpleaños para este día.' : 'No hay cumpleaños para este mes.'}
      </div>
    `);
    return;
  }

  listContainer.html(filtered.map(cardHtml).join(''));
};

export const init = async () => {
  birthdaysCache = await getBirthdaysList();
  renderCalendar();

  $(document)
    .off('.ms')
    .on('click.ms', '#ms_prev', () => {
      visibleMonth--;
      if (visibleMonth < 1) {
        visibleMonth = 12;
        visibleYear--;
      }
      selectedDay = null;
      renderCalendar();
    })
    .on('click.ms', '#ms_next', () => {
      visibleMonth++;
      if (visibleMonth > 12) {
        visibleMonth = 1;
        visibleYear++;
      }
      selectedDay = null;
      renderCalendar();
    })
    .on('click.ms', '.ms_day_cell[data-day]', function() {
      const day = parseInt($(this).data('day'));
      selectedDay = selectedDay === day ? null : day;
      
      // Actualizar estado activo en la UI
      $('.ms_day_cell').removeClass('selected');
      if (selectedDay !== null) {
        $(this).addClass('selected');
      }
      
      renderBirthdaysList();
    })
    .on('click.ms', '#ms_clear_filter', () => {
      selectedDay = null;
      $('.ms_day_cell').removeClass('selected');
      renderCalendar();
    })
    .on('click.ms', '.ms_edit_link', function() {
      // Redirige a la página de cumples y abre el editor si se requiere
      rutas.navigate('/cumples');
    });
};

export const cleanup = () => {
  $(document).off('.ms');
};
