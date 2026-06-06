import $ from 'jquery';
import './cumples.css';
import { auth, db } from '../firebase.js';
import { doc, getDocs, setDoc, deleteDoc, collection, query, where, serverTimestamp } from 'firebase/firestore';
import { getls, savels, Mensaje, wiTip } from '../widev.js';
import { rutas } from '../rutas.js';
import { app } from '../wii.js';

// --- DATA ACCESS HELPER (Firestore / LocalStorage) ---
const wiUser = () => getls('wiSmile') || null;

const getBirthdaysList = async () => {
  const user = wiUser();
  if (user && user.uid) {
    try {
      const snap = await getDocs(query(collection(db, 'cumples'), where('userId', '==', user.uid)));
      if (snap.empty) return [];
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      // Filtrar activos y ordenar por días restantes
      return list.filter(c => c.activo !== false).sort((a, b) => daysUntil(a) - daysUntil(b));
    } catch (e) {
      console.warn('Error loading from Firestore:', e);
      return [];
    }
  } else {
    const local = localStorage.getItem('cumplesLocal');
    if (local) {
      try {
        const parsed = JSON.parse(local);
        return parsed.filter(c => c.activo !== false).sort((a, b) => daysUntil(a) - daysUntil(b));
      } catch {
        return loadDemosLocal();
      }
    } else {
      return loadDemosLocal();
    }
  }
};

const saveBirthdayItem = async (birthday) => {
  const user = wiUser();
  if (user && user.uid) {
    const docId = birthday.id || `${cleanNameDoc(birthday.nombre)}_${Date.now()}`;
    const toSave = {
      ...birthday,
      id: docId,
      userId: user.uid,
      ownerUid: user.uid,
      usuario: user.usuario,
      email: user.email,
      actualizado: serverTimestamp(),
      creado: birthday.creado || serverTimestamp()
    };
    await setDoc(doc(db, 'cumples', docId), toSave);
    return toSave;
  } else {
    const list = await getBirthdaysList();
    const docId = birthday.id || `local_${Date.now()}`;
    const toSave = {
      ...birthday,
      id: docId,
      userId: 'local',
      ownerUid: 'local',
      usuario: 'Invitado',
      email: 'local@cumplewii.com',
      actualizado: new Date().toISOString(),
      creado: birthday.creado || new Date().toISOString()
    };
    
    const idx = list.findIndex(c => c.id === docId);
    if (idx !== -1) {
      list[idx] = toSave;
    } else {
      list.push(toSave);
    }
    localStorage.setItem('cumplesLocal', JSON.stringify(list));
    return toSave;
  }
};

const deleteBirthdayItem = async (birthdayId) => {
  const user = wiUser();
  if (user && user.uid) {
    if (!birthdayId.startsWith('local')) {
      await deleteDoc(doc(db, 'cumples', birthdayId));
    }
  } else {
    const list = await getBirthdaysList();
    const filtered = list.filter(c => c.id !== birthdayId);
    localStorage.setItem('cumplesLocal', JSON.stringify(filtered));
  }
};

const loadDemosLocal = () => {
  const today = new Date();
  const getRelativeDate = (days) => {
    const d = new Date();
    d.setDate(today.getDate() + days);
    return d;
  };
  
  const luciaDate = getRelativeDate(0);
  const mamaDate = getRelativeDate(3);
  const carlosDate = getRelativeDate(40);

  const demos = [
    {
      id: 'demo_1',
      nombre: 'Lucía Fernández',
      dia: luciaDate.getDate(),
      mes: luciaDate.getMonth() + 1,
      anio: luciaDate.getFullYear() - 22,
      relacion: 'amiga',
      telefono: '',
      nota: 'Le encantan los tulipanes blancos.',
      avatarColor: '#FF5C69',
      avatarColorNombre: 'Dulce',
      avatarCover: 'cover_dulce_01',
      activo: true,
      pin: false
    },
    {
      id: 'demo_2',
      nombre: 'Mamá',
      dia: mamaDate.getDate(),
      mes: mamaDate.getMonth() + 1,
      anio: today.getFullYear() - 50,
      relacion: 'familia',
      telefono: '',
      nota: 'Preparar llamada y abrazo bonito',
      avatarColor: '#7000FF',
      avatarColorNombre: 'Mora',
      avatarCover: 'cover_mora_01',
      activo: true,
      pin: true
    },
    {
      id: 'demo_3',
      nombre: 'Carlos',
      dia: carlosDate.getDate(),
      mes: carlosDate.getMonth() + 1,
      anio: carlosDate.getFullYear() - 30,
      relacion: 'amigo',
      telefono: '',
      nota: 'Buscar regalo con tiempo',
      avatarColor: '#0EBEFF',
      avatarColorNombre: 'Cielo',
      avatarCover: 'cover_cielo_01',
      activo: true,
      pin: false
    }
  ].map(d => ({
    ...d,
    iniciales: buildInitials(d.nombre),
    fechaTexto: `${String(d.dia).padStart(2, '0')}/${String(d.mes).padStart(2, '0')}/${d.anio}`
  }));
  
  localStorage.setItem('cumplesLocal', JSON.stringify(demos));
  return demos;
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

const buildInitials = (name) => {
  return name.trim()
    .split(/\s+/)
    .filter(w => w.length > 0)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('') || 'CW';
};

const cleanNameDoc = (name) => {
  return name.trim().split(/\s+/)[0].toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "") || 'cumple';
};

const colorForName = (name) => {
  const firstName = name.trim().split(/\s+/)[0] || '';
  const clean = firstName.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const last = clean.slice(-1);
  const previous = clean.slice(-2, -1);
  const consonants = "bcdfghjklmnpqrstvwxyz";
  
  if (last === 'a') return { hex: "#FF5C69", name: "Dulce" };
  if (consonants.includes(last) && previous === 'a') return { hex: "#7000FF", name: "Mora" };
  if (last === 'o' || last === 'e') return { hex: "#0EBEFF", name: "Cielo" };
  if (consonants.includes(last) && previous === 'e') return { hex: "#29C72E", name: "Paz" };
  return { hex: "#FFDA34", name: "Oro" };
};

const gradientForColor = (colorName) => {
  switch (colorName.toLowerCase()) {
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

// --- TEMPLATES ---
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
        <span class="cp_details_lbl" data-id="${c.id}"><i class="fas fa-circle-info"></i> Detalles</span>
        <button class="cp_action_btn pin ${c.pin ? 'active' : ''}" data-id="${c.id}" title="${c.pin ? 'Quitar destacado' : 'Destacar'}">
          <i class="fas ${c.pin ? 'fa-heart' : 'fa-heart-broken'}"></i>
        </button>
        <button class="cp_action_btn edit" data-id="${c.id}" title="Editar">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button class="cp_action_btn delete" data-id="${c.id}" title="Eliminar">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  `;
};

// --- GLOBAL MODULE STATE ---
let birthdaysCache = [];
let editTarget = null;

export const render = () => {
  const user = wiUser();
  const userName = user ? (user.nombre || user.usuario) : 'Invitado';
  const labelDb = user ? '<i class="fas fa-cloud"></i> Nube (Sincronizado)' : '<i class="fas fa-hdd"></i> Local (Sin sesión)';

  return `
    <div class="cp_wrap">
      
      <!-- HERO STATS -->
      <div class="cp_hero">
        <div class="cp_hero_top">
          <div class="cp_hero_info">
            <span class="cp_pill">${labelDb}</span>
            <h1 class="cp_hero_title">Cumples de ${userName}</h1>
            <p class="cp_hero_subtitle">Organiza y recuerda las fechas especiales de tu gente.</p>
          </div>
          <div class="cp_hero_icon">
            <i class="fas fa-cake-candles"></i>
          </div>
        </div>
        
        <div class="cp_stats">
          <div class="cp_stat_card">
            <i class="fas fa-calendar-day"></i>
            <span class="cp_stat_num" id="stat_hoy">0</span>
            <span class="cp_stat_lbl">Hoy</span>
          </div>
          <div class="cp_stat_card">
            <i class="fas fa-cake-candles"></i>
            <span class="cp_stat_num" id="stat_total">0</span>
            <span class="cp_stat_lbl">Total</span>
          </div>
          <div class="cp_stat_card">
            <i class="fas fa-heart"></i>
            <span class="cp_stat_num" id="stat_pins">0</span>
            <span class="cp_stat_lbl">Pins</span>
          </div>
        </div>
      </div>

      <!-- ACTIONS BAR -->
      <div class="cp_actions_bar">
        <div class="cp_search_wrap">
          <i class="fas fa-search"></i>
          <input type="text" class="cp_search_input" id="cp_buscar" placeholder="Buscar cumpleañero o notas...">
        </div>
        <button class="cp_add_btn" id="cp_add_btn">
          <i class="fas fa-plus"></i> Añadir cumple
        </button>
      </div>

      <!-- GRID LISTING -->
      <div class="cp_grid" id="cp_grid">
        <div style="text-align: center; padding: 4vh;"><i class="fas fa-spinner fa-spin"></i> Cargando cumpleaños...</div>
      </div>

    </div>

    <!-- SHEET MODAL FOR ADD/EDIT -->
    <div class="cp_modal_overlay" id="cp_modal">
      <div class="cp_modal_sheet">
        <div class="cp_modal_header">
          <h2 class="cp_modal_title" id="modal_title">Nuevo Cumpleaños</h2>
          <button class="cp_modal_close" id="modal_close"><i class="fas fa-times"></i></button>
        </div>
        
        <form class="cp_form" id="cp_form">
          <div class="cp_form_row">
            <div class="cp_form_grp">
              <label for="f_nombre">Nombre *</label>
              <input type="text" id="f_nombre" required placeholder="Ej. Lucía Fernández">
            </div>
            <div class="cp_form_grp">
              <label for="f_relacion">Relación</label>
              <select id="f_relacion">
                <option value="amigo">Amigo/a</option>
                <option value="familia">Familia</option>
                <option value="pareja">Pareja</option>
                <option value="trabajo">Trabajo</option>
                <option value="conocido">Conocido/a</option>
              </select>
            </div>
          </div>

          <div class="cp_form_row">
            <div class="cp_form_grp">
              <label>Fecha de Nacimiento *</label>
              <div style="display:flex; gap:1vh;">
                <select id="f_dia" style="flex:1;" required></select>
                <select id="f_mes" style="flex:2;" required></select>
                <select id="f_anio" style="flex:1.5;"></select>
              </div>
            </div>
            <div class="cp_form_grp">
              <label for="f_telefono">Teléfono</label>
              <input type="text" id="f_telefono" placeholder="Ej. +51 999...">
            </div>
          </div>

          <div class="cp_form_grp">
            <label for="f_avatar">Enlace del Avatar (URL)</label>
            <input type="text" id="f_avatar" placeholder="https://ejemplo.com/avatar.jpg">
          </div>

          <div class="cp_form_grp">
            <label for="f_gift">Ideas de Regalo</label>
            <input type="text" id="f_gift" placeholder="¿Qué le gustaría recibir?">
          </div>

          <div class="cp_form_grp">
            <label for="f_nota">Notas especiales</label>
            <textarea id="f_nota" rows="2" placeholder="Detalles, sorpresas o recordatorios..."></textarea>
          </div>

          <div class="cp_checkbox_row">
            <label for="f_pin">Destacar en Inicio (Pin)</label>
            <input type="checkbox" id="f_pin">
          </div>

          <button type="submit" class="cp_save_btn" id="f_submit">
            <i class="fas fa-save"></i> Guardar
          </button>
        </form>
      </div>
    </div>
  `;
};

const refreshGrid = (list) => {
  const grid = $('#cp_grid');
  if (!list || list.length === 0) {
    grid.html(`
      <div class="cp_empty">
        <i class="fas fa-cake-candles"></i>
        <div class="cp_empty_txt">Aún no hay cumpleaños registrados.</div>
        <p style="color:var(--tx3); font-size:var(--fz_m1);">¡Agrega el primero para comenzar a recordar!</p>
      </div>
    `);
    return;
  }
  
  // Ordenar pins primero
  const sorted = [...list].sort((a, b) => {
    if (a.pin && !b.pin) return -1;
    if (!a.pin && b.pin) return 1;
    return daysUntil(a) - daysUntil(b);
  });
  
  grid.html(sorted.map(cardHtml).join(''));
};

const updateStats = (list) => {
  const hoyCount = list.filter(c => daysUntil(c) === 0).length;
  const totalCount = list.length;
  const pinsCount = list.filter(c => c.pin).length;
  
  $('#stat_hoy').text(hoyCount);
  $('#stat_total').text(totalCount);
  $('#stat_pins').text(pinsCount);
};

const setupDateSelectors = () => {
  const diaSel = $('#f_dia');
  const mesSel = $('#f_mes');
  const anioSel = $('#f_anio');

  diaSel.html('<option value="" disabled selected>Día</option>');
  for (let i = 1; i <= 31; i++) {
    diaSel.append(`<option value="${i}">${i}</option>`);
  }

  mesSel.html('<option value="" disabled selected>Mes</option>');
  monthNames.forEach((m, idx) => {
    mesSel.append(`<option value="${idx + 1}">${m}</option>`);
  });

  const curYear = new Date().getFullYear();
  anioSel.html('<option value="">Año (opc)</option>');
  for (let i = curYear; i >= curYear - 100; i--) {
    anioSel.append(`<option value="${i}">${i}</option>`);
  }
};

const openModal = (birthday = null) => {
  editTarget = birthday;
  setupDateSelectors();
  
  if (birthday) {
    $('#modal_title').text('Editar Cumpleaños');
    $('#f_nombre').val(birthday.nombre);
    $('#f_relacion').val(birthday.relacion || 'amigo');
    $('#f_dia').val(birthday.dia);
    $('#f_mes').val(birthday.mes);
    $('#f_anio').val(birthday.anio || '');
    $('#f_telefono').val(birthday.telefono || '');
    $('#f_avatar').val(birthday.avatar || '');
    $('#f_gift').val(birthday.ideasRegalo || '');
    $('#f_nota').val(birthday.nota || '');
    $('#f_pin').prop('checked', birthday.pin || false);
  } else {
    $('#modal_title').text('Nuevo Cumpleaños');
    $('#cp_form')[0].reset();
  }
  
  $('#cp_modal').addClass('active');
};

const closeModal = () => {
  $('#cp_modal').removeClass('active');
  editTarget = null;
};

export const init = async () => {
  // Carga inicial
  birthdaysCache = await getBirthdaysList();
  refreshGrid(birthdaysCache);
  updateStats(birthdaysCache);

  $(document)
    .off('.cp')
    .on('click.cp', '#cp_add_btn', () => openModal())
    .on('click.cp', '#modal_close, #cp_modal', (e) => {
      if (e.target.id === 'modal_close' || e.target.id === 'cp_modal' || $(e.target).closest('#modal_close').length > 0) {
        closeModal();
      }
    })
    .on('input.cp', '#cp_buscar', function() {
      const query = $(this).val().toLowerCase().trim();
      if (!query) {
        refreshGrid(birthdaysCache);
      } else {
        const filtered = birthdaysCache.filter(c => 
          c.nombre.toLowerCase().includes(query) || 
          (c.nota && c.nota.toLowerCase().includes(query)) ||
          c.relacion.toLowerCase().includes(query)
        );
        refreshGrid(filtered);
      }
    })
    .on('submit.cp', '#cp_form', async function(e) {
      e.preventDefault();
      const nombre = $('#f_nombre').val().trim();
      const relacion = $('#f_relacion').val();
      const dia = parseInt($('#f_dia').val());
      const mes = parseInt($('#f_mes').val());
      const anioVal = $('#f_anio').val();
      const anio = anioVal ? parseInt(anioVal) : null;
      const telefono = $('#f_telefono').val().trim();
      const avatar = $('#f_avatar').val().trim();
      const gift = $('#f_gift').val().trim();
      const nota = $('#f_nota').val().trim();
      const pin = $('#f_pin').is(':checked');

      if (!nombre) return wiTip(document.getElementById('f_nombre'), 'Ingresa un nombre', 'error');
      if (!dia) return wiTip(document.getElementById('f_dia'), 'Selecciona el día', 'error');
      if (!mes) return wiTip(document.getElementById('f_mes'), 'Selecciona el mes', 'error');

      const colorData = colorForName(nombre);
      const coverData = coverFor(nombre, colorData.name);

      const toSave = {
        ...(editTarget || {}),
        nombre,
        relacion,
        dia,
        mes,
        anio,
        telefono,
        avatar,
        ideasRegalo: gift,
        nota,
        pin,
        activo: true,
        iniciales: buildInitials(nombre),
        avatarColor: colorData.hex,
        avatarColorNombre: colorData.name,
        avatarCover: coverData,
        fechaTexto: `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}${anio ? `/${anio}` : ''}`
      };

      $('#f_submit').prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Guardando...');
      try {
        const saved = await saveBirthdayItem(toSave);
        
        if (editTarget) {
          const idx = birthdaysCache.findIndex(c => c.id === saved.id);
          if (idx !== -1) birthdaysCache[idx] = saved;
          Mensaje('Cumpleaños actualizado ✅', 'success');
        } else {
          birthdaysCache.push(saved);
          Mensaje('Cumpleaños añadido 🎉', 'success');
        }

        closeModal();
        refreshGrid(birthdaysCache);
        updateStats(birthdaysCache);
      } catch (err) {
        console.error(err);
        Mensaje('Error al guardar', 'error');
      } finally {
        $('#f_submit').prop('disabled', false).html('<i class="fas fa-save"></i> Guardar');
      }
    })
    .on('click.cp', '.cp_action_btn.pin', async function(e) {
      e.stopPropagation();
      const id = $(this).data('id');
      const item = birthdaysCache.find(c => c.id === id);
      if (!item) return;
      
      const newPin = !item.pin;
      $(this).toggleClass('active', newPin).html(`<i class="fas ${newPin ? 'fa-heart' : 'fa-heart-broken'}"></i>`);
      
      try {
        item.pin = newPin;
        await saveBirthdayItem(item);
        updateStats(birthdaysCache);
        refreshGrid(birthdaysCache);
      } catch (err) {
        console.error(err);
        Mensaje('Error al actualizar destaque', 'error');
      }
    })
    .on('click.cp', '.cp_action_btn.edit', function(e) {
      e.stopPropagation();
      const id = $(this).data('id');
      const item = birthdaysCache.find(c => c.id === id);
      if (item) openModal(item);
    })
    .on('click.cp', '.cp_action_btn.delete', async function(e) {
      e.stopPropagation();
      const id = $(this).data('id');
      const item = birthdaysCache.find(c => c.id === id);
      if (!item) return;

      if (confirm(`¿Estás seguro de que deseas eliminar el cumpleaños de ${item.nombre}?`)) {
        try {
          await deleteBirthdayItem(id);
          birthdaysCache = birthdaysCache.filter(c => c.id !== id);
          refreshGrid(birthdaysCache);
          updateStats(birthdaysCache);
          Mensaje('Cumpleaños eliminado 🧹', 'success');
        } catch (err) {
          console.error(err);
          Mensaje('Error al eliminar', 'error');
        }
      }
    })
    .on('click.cp', '.cp_details_lbl', function(e) {
      e.stopPropagation();
      const id = $(this).data('id');
      const item = birthdaysCache.find(c => c.id === id);
      if (!item) return;
      
      let detailsHtml = `
        <div style="text-align:left; display:flex; flex-direction:column; gap:1.5vh;">
          <p><strong>Relación:</strong> ${item.relacion.toUpperCase()}</p>
          <p><strong>Día de Cumpleaños:</strong> ${item.dia} de ${monthNames[item.mes - 1]} ${item.anio ? `(${item.anio})` : ''}</p>
          ${item.telefono ? `<p><strong>Teléfono:</strong> <a href="tel:${item.telefono}">${item.telefono}</a></p>` : ''}
          ${item.ideasRegalo ? `<p><strong>Ideas de Regalo:</strong> ${item.ideasRegalo}</p>` : ''}
          ${item.nota ? `<p><strong>Notas:</strong> ${item.nota}</p>` : ''}
        </div>
      `;
      
      const detailsModal = $(`
        <div class="cp_modal_overlay active" id="details_modal">
          <div class="cp_modal_sheet" style="border-radius:2.5vh; max-width:450px; margin:auto;">
            <div class="cp_modal_header">
              <h2 class="cp_modal_title">${item.nombre}</h2>
              <button class="cp_modal_close" id="details_close"><i class="fas fa-times"></i></button>
            </div>
            <div style="padding:1vh 0;">
              ${detailsHtml}
            </div>
          </div>
        </div>
      `);
      
      $('body').append(detailsModal);
      
      $(document).on('click.details_close', '#details_close, #details_modal', (e2) => {
        if (e2.target.id === 'details_close' || e2.target.id === 'details_modal' || $(e2.target).closest('#details_close').length > 0) {
          detailsModal.remove();
          $(document).off('.details_close');
        }
      });
    });
};

export const cleanup = () => {
  $(document).off('.cp');
};
