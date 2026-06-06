// ════════════════════════════════════════════════════════════════════
// paginas.js — CumpleWii · Admin · Control de Páginas
// Jesús es mi Señor 🙏
// ════════════════════════════════════════════════════════════════════
import './paginas.css';
import $ from 'jquery';
import { getls } from '../widev.js';
import { RUTAS } from '../rutas.js';

const isAdmin = () => getls('wiSmile')?.rol === 'admin';

// ─── Mapa de páginas con metadata enriquecida ─────────────────────────────────
// Cada entrada extiende RUTAS con ícono, descripción y categoría visual
const PAGES = [

  // ── 🌐 Público — sin autenticación ─────────────────────────────────────────
  {
    path: '/',
    ico: 'fa-house',
    txt: 'Inicio',
    desc: 'Página de bienvenida pública.',
    cat: 'publico',
  },
  {
    path: '/cumples',
    ico: 'fa-cake-candles',
    txt: 'Cumpleaños',
    desc: 'Gestión y listado de cumpleaños.',
    cat: 'publico',
  },
  {
    path: '/meses',
    ico: 'fa-calendar-days',
    txt: 'Meses',
    desc: 'Vista mensual de fechas importantes.',
    cat: 'publico',
  },
  {
    path: '/blog',
    ico: 'fa-newspaper',
    txt: 'Blog',
    desc: 'Artículos y publicaciones del equipo.',
    cat: 'publico',
  },
  {
    path: '/emojis',
    ico: 'fa-face-smile',
    txt: 'Emojis',
    desc: 'Tabla de emojis disponibles.',
    cat: 'publico',
  },
  {
    path: '/acerca',
    ico: 'fa-circle-info',
    txt: 'Acerca',
    desc: 'Información sobre la plataforma.',
    cat: 'publico',
  },
  {
    path: '/descubre',
    ico: 'fa-compass',
    txt: 'Descubre',
    desc: 'Explorar comunidad y usuarios públicos.',
    cat: 'publico',
  },
  {
    path: '/precios',
    ico: 'fa-tags',
    txt: 'Precios',
    desc: 'Planes y suscripciones de CumpleWii.',
    cat: 'publico',
  },
  {
    path: '/terminos',
    ico: 'fa-file-contract',
    txt: 'Términos',
    desc: 'Términos y condiciones de uso.',
    cat: 'publico',
  },
  {
    path: '/privacidad',
    ico: 'fa-shield-halved',
    txt: 'Privacidad',
    desc: 'Política de privacidad de datos.',
    cat: 'publico',
  },
  {
    path: '/feedback',
    ico: 'fa-comments',
    txt: 'Feedback',
    desc: 'Formulario de sugerencias y mejoras.',
    cat: 'publico',
  },
  {
    path: '/contacto',
    ico: 'fa-envelope',
    txt: 'Contacto',
    desc: 'Canal de contacto directo.',
    cat: 'publico',
  },

  // ── 👤 Usuario ──────────────────────────────────────────────────────────────
  {
    path: '/smile',
    ico: 'fa-gauge-high',
    txt: 'Dashboard',
    desc: 'Panel principal del usuario registrado.',
    cat: 'usuario',
  },
  {
    path: '/perfil',
    ico: 'fa-user-gear',
    txt: 'Perfil',
    desc: 'Edición de datos personales y avatar.',
    cat: 'usuario',
  },
  {
    path: '/musica',
    ico: 'fa-headphones',
    txt: 'Música',
    desc: 'Gestor y reproductor de música.',
    cat: 'usuario',
  },
  {
    path: '/word',
    ico: 'fa-file-word',
    txt: 'Tareas / Word',
    desc: 'Editor de documentos y tareas.',
    cat: 'usuario',
  },
  {
    path: '/notas',
    ico: 'fa-book-open',
    txt: 'Notas',
    desc: 'Cuaderno de notas rápidas.',
    cat: 'usuario',
  },
  {
    path: '/win',
    ico: 'fa-file-shield',
    txt: 'WiWin Cloud',
    desc: 'Almacenamiento personal en la nube.',
    cat: 'usuario',
  },
  {
    path: '/mensajes',
    ico: 'fa-bell',
    txt: 'Mensajes',
    desc: 'Buzón de notificaciones y mensajes.',
    cat: 'usuario',
  },

  // ── ✍️ Editor ───────────────────────────────────────────────────────────────
  {
    path: '/editor',
    ico: 'fa-newspaper',
    txt: 'Dashboard Editor',
    desc: 'Panel de gestión de contenido editorial.',
    cat: 'editor',
  },
  {
    path: '/nuevo',
    ico: 'fa-pen-to-square',
    txt: 'Crear Post',
    desc: 'Redacta y publica nuevos artículos.',
    cat: 'editor',
  },
  {
    path: '/chat',
    ico: 'fa-comments',
    txt: 'Chat Grupal',
    desc: 'Mensajería interna del equipo editorial.',
    cat: 'editor',
  },
  {
    path: '/registrado',
    ico: 'fa-clock',
    txt: 'Cuenta Pendiente',
    desc: 'Vista de cuenta en espera de aprobación.',
    cat: 'editor',
  },

  // ── 🏢 Gestor ───────────────────────────────────────────────────────────────
  {
    path: '/gestor',
    ico: 'fa-users-gear',
    txt: 'Dashboard Gestor',
    desc: 'Panel de control del gestor de equipos.',
    cat: 'gestor',
  },

  // ── 🛡️ Admin ────────────────────────────────────────────────────────────────
  {
    path: '/admin',
    ico: 'fa-globe-americas',
    txt: 'Centro de Control',
    desc: 'Dashboard global de la plataforma.',
    cat: 'admin',
  },
  {
    path: '/usuarios',
    ico: 'fa-users-cog',
    txt: 'Gestión de Usuarios',
    desc: 'Moderación, roles y planes de usuarios.',
    cat: 'admin',
  },
  {
    path: '/paginas',
    ico: 'fa-sitemap',
    txt: 'Páginas',
    desc: 'Vista de todas las rutas de la plataforma.',
    cat: 'admin',
  },
  {
    path: '/verificar',
    ico: 'fa-lock',
    txt: 'Verificar Acceso',
    desc: 'Pantalla de verificación del administrador.',
    cat: 'admin',
  },
];

// ─── Config de grupos/categorías ─────────────────────────────────────────────
const GRUPOS = [
  {
    key: 'publico',
    ico: 'fa-globe',
    label: 'Páginas Públicas',
    desc: 'Accesibles sin autenticación',
    color: '#22c55e',
    roles: ['todos'],
  },
  {
    key: 'usuario',
    ico: 'fa-user',
    label: 'Zona Usuario',
    desc: 'Disponibles para todos los roles autenticados',
    color: '#3b82f6',
    roles: ['usuario', 'editor', 'gestor', 'admin'],
  },
  {
    key: 'editor',
    ico: 'fa-pen-nib',
    label: 'Zona Editor',
    desc: 'Herramientas de creación de contenido',
    color: '#10b981',
    roles: ['editor', 'gestor', 'admin'],
  },
  {
    key: 'gestor',
    ico: 'fa-users-gear',
    label: 'Zona Gestor',
    desc: 'Módulos de administración de equipos',
    color: '#f97316',
    roles: ['gestor', 'admin'],
  },
  {
    key: 'admin',
    ico: 'fa-shield-halved',
    label: 'Zona Admin',
    desc: 'Control maestro exclusivo del administrador',
    color: '#8b5cf6',
    roles: ['admin'],
  },
];

// ─── Color por categoría (card bar y ícono) ───────────────────────────────────
const CAT_COLOR = {
  publico: '#22c55e',
  usuario: '#3b82f6',
  editor:  '#10b981',
  gestor:  '#f97316',
  admin:   '#8b5cf6',
};

// ─── Chips de rol con sus etiquetas legibles ──────────────────────────────────
const _rolesChips = roles => {
  if (!roles || !roles.length) return `<span class="pag_role_chip todos">Público</span>`;
  return roles.map(r => `<span class="pag_role_chip ${r}">${r}</span>`).join('');
};

// ─── Obtiene los roles de una ruta desde RUTAS (fuente de verdad) ─────────────
const _getRoles = path => {
  if (path === '/') return null; // público
  const r = RUTAS.find(rt => rt.path === path);
  return r?.roles ?? null;
};

// ─── Construir HTML de una card ───────────────────────────────────────────────
const _cardHtml = (page, idx) => {
  const roles  = _getRoles(page.path);
  const color  = CAT_COLOR[page.cat] || '#f59e0b';
  const search = `${page.txt} ${page.desc} ${page.path}`.toLowerCase();

  return `
    <a href="${page.path}"
       class="pag_card nv_item"
       data-page="${page.path === '/' ? 'inicio' : page.path.slice(1)}"
       data-cat="${page.cat}"
       data-search="${search}"
       style="--c-bar:${color}; animation-delay:${idx * 0.03}s"
       title="${page.txt}">
      <i class="fas fa-arrow-right pag_card_arrow"></i>
      <div class="pag_card_top">
        <div class="pag_card_ico">
          <i class="fas ${page.ico}"></i>
        </div>
        <div class="pag_card_body">
          <h3>${page.txt}</h3>
          <p>${page.desc}</p>
        </div>
      </div>
      <div class="pag_card_footer">
        <span class="pag_card_path">${page.path}</span>
        <div class="pag_card_roles">
          ${roles ? _rolesChips(roles) : '<span class="pag_role_chip todos">Público</span>'}
        </div>
      </div>
    </a>`;
};

// ─── Construir HTML de un grupo ───────────────────────────────────────────────
const _grupoHtml = (grupo) => {
  const pages = PAGES.filter(p => p.cat === grupo.key);
  if (!pages.length) return '';

  const cardsHtml = pages.map((p, i) => _cardHtml(p, i)).join('');

  return `
    <div class="pag_group" data-group="${grupo.key}">
      <div class="pag_group_header" style="--g-color:${grupo.color}">
        <div class="pag_group_ico" style="--g-color:${grupo.color}">
          <i class="fas ${grupo.ico}"></i>
        </div>
        <div>
          <h2 class="pag_group_title">${grupo.label}</h2>
        </div>
        <span class="pag_group_count">${pages.length} páginas</span>
      </div>
      <div class="pag_grid">
        ${cardsHtml}
      </div>
    </div>`;
};

// ─── RENDER ───────────────────────────────────────────────────────────────────
export const render = () => {
  if (!isAdmin()) return `<div class="pag_wrap"><div class="pag_empty"><i class="fas fa-ban"></i><p>Acceso denegado.</p></div></div>`;

  const totalPub  = PAGES.filter(p => !_getRoles(p.path)).length;
  const totalAuth = PAGES.filter(p => {
    const r = _getRoles(p.path);
    return r && r.includes('usuario') && !r.includes('admin');
  }).length;
  const totalAdmin = PAGES.filter(p => {
    const r = _getRoles(p.path);
    return r && r.includes('admin');
  }).length;

  const gruposHtml = GRUPOS.map(_grupoHtml).join('');

  return /* html */`
  <div class="pag_wrap" id="pag_wrap">

    <!-- ══ HEADER ══ -->
    <div class="pag_header">
      <div class="pag_header_stripe"></div>
      <div class="pag_header_text">
        <div class="pag_badge"><i class="fas fa-sitemap"></i> Mapa del Sitio</div>
        <h1 class="pag_title"><i class="fas fa-map"></i> Control de Páginas</h1>
        <p class="pag_subtitle">Todas las rutas de CumpleWii organizadas por zona de acceso. Navega a cualquier página directamente.</p>
      </div>
      <div class="pag_search">
        <i class="fas fa-search"></i>
        <input type="text" id="pag_search_input" placeholder="Buscar página…" autocomplete="off">
      </div>
    </div>

    <!-- ══ STATS ══ -->
    <div class="pag_stats">
      <div class="pag_stat s_total">
        <span class="pag_stat_num">${PAGES.length}</span>
        <span class="pag_stat_lbl">Total</span>
      </div>
      <div class="pag_stat s_pub">
        <span class="pag_stat_num">${totalPub}</span>
        <span class="pag_stat_lbl">Públicas</span>
      </div>
      <div class="pag_stat s_auth">
        <span class="pag_stat_num">${totalAuth}</span>
        <span class="pag_stat_lbl">Autenticadas</span>
      </div>
      <div class="pag_stat s_admin">
        <span class="pag_stat_num">${totalAdmin}</span>
        <span class="pag_stat_lbl">Solo Admin</span>
      </div>
    </div>

    <!-- ══ GRUPOS ══ -->
    <div id="pag_content">
      ${gruposHtml}
    </div>

    <!-- Sin resultados de búsqueda -->
    <div id="pag_no_results" style="display:none">
      <div class="pag_empty">
        <i class="fas fa-search"></i>
        <p>Sin resultados para tu búsqueda.</p>
      </div>
    </div>

  </div>`;
};

// ─── INIT ─────────────────────────────────────────────────────────────────────
export const init = () => {
  if (!isAdmin()) return;

  $(document).off('.pag');

  // ── Búsqueda en tiempo real
  $(document).on('input.pag', '#pag_search_input', function () {
    const q = $(this).val().toLowerCase().trim();

    if (!q) {
      // Mostrar todo
      $('.pag_card').removeClass('pag_hidden');
      $('.pag_group').removeClass('pag_group_hidden');
      $('#pag_no_results').hide();
      return;
    }

    let total = 0;

    // Filtrar cards
    $('.pag_card').each(function () {
      const search = $(this).data('search') || '';
      const match  = search.includes(q);
      $(this).toggleClass('pag_hidden', !match);
      if (match) total++;
    });

    // Ocultar grupos sin resultados visibles
    $('.pag_group').each(function () {
      const visible = $(this).find('.pag_card:not(.pag_hidden)').length > 0;
      $(this).toggleClass('pag_group_hidden', !visible);
    });

    // Mostrar/ocultar bloque "sin resultados"
    $('#pag_no_results').toggle(total === 0);
  });

  window.__WIREADY__ = true;
};

// ─── CLEANUP ──────────────────────────────────────────────────────────────────
export const cleanup = () => {
  $(document).off('.pag');
};
