import './smile.css';
import '../todos/cumples.css';
import { db } from '../firebase.js';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getls, savels, showi } from '../widev.js';
import { app } from '../wii.js';
import { rutas } from '../rutas.js';

const wiUser = () => getls('wiSmile') || null;

const getBirthdaysList = async () => {
  const user = wiUser();
  if (user && user.uid) {
    try {
      const snap = await getDocs(query(collection(db, 'cumples'), where('userId', '==', user.uid)));
      if (snap.empty) return [];
      return snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(c => c.activo !== false);
    } catch (e) {
      console.warn('Error loading from Firestore:', e);
      return [];
    }
  } else {
    const local = localStorage.getItem('cumplesLocal');
    if (local) {
      try { return JSON.parse(local).filter(c => c.activo !== false); } catch { return []; }
    }
    return [];
  }
};

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

let birthdaysCache = [];

export const render = () => {
  const user = wiUser();
  if (!user) { location.replace('/'); return ''; }

  const firstName = user.nombre || user.usuario || 'amigo';

  return `
    <div class="smw_dash" data-showi="80">
      <header class="smw_hero">
        <div class="smw_hero_glow"></div>
        <div class="smw_hero_content">
          <div class="smw_hero_left">
            <div class="smw_avatar_wrap">
              <div class="smw_avatar" id="smwAvatar">${(firstName[0] || '?').toUpperCase()}</div>
              <div class="smw_avatar_ring"></div>
            </div>
            <div class="smw_welcome">
              <h1 id="smwSaludo">¡Hola, ${firstName}!</h1>
              <p id="smwNext">Tu agenda de cumpleaños lista para empezar.</p>
            </div>
          </div>
        </div>
      </header>

      <section class="smw_kpi_band" id="smwKpis">
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiHoy" style="color: var(--Cielo)">0</span>
          <span class="smw_kpi_lbl">Hoy</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiTotal" style="color: var(--Oro)">0</span>
          <span class="smw_kpi_lbl">Total</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiPins" style="color: var(--Mora)">0</span>
          <span class="smw_kpi_lbl">Pins</span>
        </div>
      </section>

      <nav class="smw_quick_nav">
        ${[
          { page: 'cumples', ico: 'fa-cake-candles', col: '#FF5C69', tit: 'Cumples', sub: 'Gestionar fechas especiales' },
          { page: 'meses',   ico: 'fa-calendar-days', col: '#FFDA34', tit: 'Meses',    sub: 'Calendario mensual' },
          { page: 'musica',  ico: 'fa-headphones',    col: '#0EBEFF', tit: 'Música',   sub: 'Canciones de cumpleaños' },
        ].map((a, i) => `
          <a href="/${a.page}" class="smw_qcard nv_item" data-page="${a.page}" style="--qc:${a.col};">
            <div class="smw_qcard_ico" style="--qc: ${a.col}"><i class="fas ${a.ico}"></i></div>
            <div class="smw_qcard_txt">
              <strong>${a.tit}</strong>
              <span>${a.sub}</span>
            </div>
            <i class="fas fa-arrow-right smw_qcard_arr"></i>
          </a>
        `).join('')}
      </nav>

      <div class="cp_wrap" style="padding-top: 0; padding-left: 0; padding-right: 0;">
        <h2 class="ms_list_title" style="margin-top: 2vh; margin-bottom: 2vh;">Próximos Cumpleaños</h2>
        <div class="cp_grid" id="upcoming_grid" data-showi="60">
          <div style="text-align: center; padding: 4vh; color: var(--tx3); font-style: italic;">No hay próximos cumpleaños.</div>
        </div>
      </div>
    </div>
  `;
};

const handleCardClick = (e) => {
  const card = e.target.closest('.cp_card');
  if (card) {
    rutas.navigate('/cumples');
  }
};

const updateUI = (list) => {
  const hoyCount = list.filter(c => daysUntil(c) === 0).length;
  const totalCount = list.length;
  const pinsCount = list.filter(c => c.pin).length;

  const kpiHoy = document.getElementById('kpiHoy');
  const kpiTotal = document.getElementById('kpiTotal');
  const kpiPins = document.getElementById('kpiPins');

  if (kpiHoy) kpiHoy.textContent = hoyCount;
  if (kpiTotal) kpiTotal.textContent = totalCount;
  if (kpiPins) kpiPins.textContent = pinsCount;

  const nextEl = document.getElementById('smwNext');
  const gridEl = document.getElementById('upcoming_grid');

  if (list.length > 0) {
    const sorted = [...list].sort((a, b) => daysUntil(a) - daysUntil(b));
    const next = sorted[0];
    const days = daysUntil(next);
    let when = '';
    if (days === 0) when = '¡Hoy!';
    else if (days === 1) when = 'mañana';
    else when = `en ${days} días`;

    if (nextEl) {
      nextEl.innerHTML = `Próximo: <strong>${next.nombre}</strong> (${when})`;
    }

    const upcoming = sorted.slice(0, 3);
    const gridHtml = upcoming.map(c => {
      const daysLeft = daysUntil(c);
      const isUrgent = daysLeft >= 0 && daysLeft <= 3;
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
        <div class="cp_card ${isUrgent ? 'urgent' : ''} ${c.pin ? 'pinned' : ''}" data-id="${c.id}" style="cursor: pointer;">
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
              <span class="cp_pill ${isUrgent ? 'urgent' : ''}">${countdownText(daysLeft)}</span>
            </div>
          </div>
          
          <div class="cp_card_body">
            <div class="cp_date_block">
              <i class="fas fa-cake-candles"></i>
              <span>${c.dia} de ${monthNames[c.mes - 1]} ${c.anio ? `· <strong>${new Date().getFullYear() - c.anio} años</strong>` : ''}</span>
            </div>
            ${c.nota ? `<div class="cp_note_box"><i class="fas fa-quote-left"></i><span>${c.nota}</span></div>` : ''}
          </div>
        </div>
      `;
    }).join('');

    if (gridEl) {
      gridEl.innerHTML = gridHtml;
    }
  } else {
    if (nextEl) {
      nextEl.textContent = 'Tu agenda de cumpleaños lista para empezar.';
    }
    if (gridEl) {
      gridEl.innerHTML = `<div style="text-align: center; padding: 4vh; color: var(--tx3); font-style: italic;">No hay próximos cumpleaños.</div>`;
    }
  }

  showi('[data-showi]');
};

export const init = async () => {
  const user = wiUser();
  if (!user) return setTimeout(() => rutas.navigate('/login'), 100);

  const iniciales = `${(user.nombre || '?')[0]}${(user.apellidos || '')[0] || ''}`.toUpperCase();
  const avatarEl = document.getElementById('smwAvatar');
  if (avatarEl) avatarEl.textContent = iniciales;

  // SWR: Load from Cache first
  const cacheKey = `cumplesCache_${user.uid}`;
  const cachedData = getls(cacheKey);
  
  if (cachedData && Array.isArray(cachedData)) {
    birthdaysCache = cachedData;
    updateUI(birthdaysCache);
  } else {
    const gridEl = document.getElementById('upcoming_grid');
    if (gridEl) {
      gridEl.innerHTML = `<div style="text-align: center; padding: 4vh; color: var(--tx3); font-style: italic;">Cargando cumpleaños...</div>`;
    }
  }

  // SWR: Fetch fresh data in background
  getBirthdaysList().then((freshList) => {
    savels(cacheKey, freshList, 24); // cache for 24h
    birthdaysCache = freshList;
    updateUI(birthdaysCache);
  }).catch((e) => {
    console.error('Error fetching fresh birthdays:', e);
  });

  document.addEventListener('click', handleCardClick);

  console.log(`🏜️ ${app} Dashboard de cumpleaños cargado`);
  window.__WIREADY__ = true;
};

export const cleanup = () => {
  document.removeEventListener('click', handleCardClick);
};
