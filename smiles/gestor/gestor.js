import './gestor.css';
import { getls, showi } from '../widev.js';
import { app } from '../wii.js';
import { rutas } from '../rutas.js';

const wiUser = () => getls('wiSmile') || null;

export const render = () => {
  const user = wiUser();
  if (!user) { location.replace('/'); return ''; }

  const firstName = user.nombre || user.usuario || 'Gestor';
  
  // Read sizes from cache
  const cachedCumples = getls(`cumplesCache_${user.uid}`) || getls('cumplesLocal') || [];
  const cachedMusic = getls('wiMusica') || [];
  const cachedPosts = getls(`wi_editor_posts_${user.usuario.trim().toLowerCase()}`) || [];

  const roleText = user.rol === 'admin' ? 'Administrador' : 'Gestor de Contenido';

  return `
    <div class="ges_container" data-showi="80">
      
      <!-- Banner de Bienvenida Amable -->
      <header class="ges_hero">
        <div class="ges_hero_glow"></div>
        <div class="ges_hero_content">
          <div class="ges_avatar_wrap">
            <div class="ges_avatar">${(firstName[0] || '?').toUpperCase()}</div>
          </div>
          <div class="ges_welcome">
            <h1>¡Qué bueno verte de nuevo, <strong>${firstName}</strong>! 👋</h1>
            <p>Bienvenido a tu panel de control. Desde aquí puedes supervisar el contenido de la plataforma de forma rápida.</p>
            <span class="ges_badge_role"><i class="fas fa-user-shield"></i> ${roleText}</span>
          </div>
        </div>
      </header>

      <!-- Panel de Estadísticas Rápidas (Usando Cachés Disponibles) -->
      <section class="ges_stats_grid">
        <div class="ges_stat_card">
          <div class="ges_stat_icon cumples"><i class="fas fa-cake-candles"></i></div>
          <div class="ges_stat_info">
            <span class="ges_stat_val" id="st_cumples">${cachedCumples.length}</span>
            <span class="ges_stat_lbl">Cumpleaños Guardados</span>
          </div>
        </div>
        <div class="ges_stat_card">
          <div class="ges_stat_icon musica"><i class="fas fa-headphones"></i></div>
          <div class="ges_stat_info">
            <span class="ges_stat_val" id="st_musica">${cachedMusic.length}</span>
            <span class="ges_stat_lbl">Pistas de Música</span>
          </div>
        </div>
        <div class="ges_stat_card">
          <div class="ges_stat_icon blog"><i class="fas fa-feather"></i></div>
          <div class="ges_stat_info">
            <span class="ges_stat_val" id="st_blog">${cachedPosts.length}</span>
            <span class="ges_stat_lbl">Tus Historias Redactadas</span>
          </div>
        </div>
      </section>

      <!-- Navegación de Gestión -->
      <div>
        <h2 class="ges_nav_title"><i class="fas fa-compass"></i> Accesos Rápidos de Gestión</h2>
        <div class="ges_quick_nav" data-showi="60">
          ${[
            { page: 'musica',  ico: 'fa-headphones',   col: '#0EBEFF', tit: 'Gestionar Música', sub: 'Subir, editar y destacar canciones (.mp3)' },
            { page: 'editor',  ico: 'fa-feather',      col: '#FFDA34', tit: 'Panel de Redactor', sub: 'Escribir y publicar artículos en el blog' },
            { page: 'cumples', ico: 'fa-cake-candles', col: '#FF5C69', tit: 'Calendario de Cumples', sub: 'Controlar fechas especiales' },
            { page: 'chat',    ico: 'fa-comments',     col: '#7000FF', tit: 'Chat del Equipo', sub: 'Coordinar con otros editores y administradores' },
            { page: 'precios', ico: 'fa-tags',         col: '#29C72E', tit: 'Planes y Precios', sub: 'Consultar tarifas y suscripciones premium' }
          ].map(a => `
            <a href="/${a.page}" class="ges_nav_card nv_item" data-page="${a.page}">
              <div class="ges_nav_left">
                <div class="ges_nav_icon" style="background: ${a.col}"><i class="fas ${a.ico}"></i></div>
                <div class="ges_nav_details">
                  <strong>${a.tit}</strong>
                  <span>${a.sub}</span>
                </div>
              </div>
              <i class="fas fa-arrow-right"></i>
            </a>
          `).map((a, i) => a).join('')}
        </div>
      </div>

    </div>
  `;
};

export const init = () => {
  const user = wiUser();
  if (!user) return setTimeout(() => rutas.navigate('/login'), 100);

  // load caches and refresh stats displays in case they changed
  const cachedCumples = getls(`cumplesCache_${user.uid}`) || getls('cumplesLocal') || [];
  const cachedMusic = getls('wiMusica') || [];
  const cachedPosts = getls(`wi_editor_posts_${user.usuario.trim().toLowerCase()}`) || [];

  const stCumples = document.getElementById('st_cumples');
  const stMusica = document.getElementById('st_musica');
  const stBlog = document.getElementById('st_blog');

  if (stCumples) stCumples.textContent = cachedCumples.length;
  if (stMusica) stMusica.textContent = cachedMusic.length;
  if (stBlog) stBlog.textContent = cachedPosts.length;

  showi('[data-showi]');

  console.log(`🛡️ ${app} Dashboard del Gestor cargado (Caché activo, 0 Firestore reads)`);
  window.__WIREADY__ = true;
};

export const cleanup = () => {
  // no-op
};
