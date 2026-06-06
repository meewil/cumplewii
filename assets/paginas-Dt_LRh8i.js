import{b as e}from"./widev-BKJDWmod.js";import{n as t}from"./vendor-Dkcx8wGc.js";import{n}from"./index-D0682O7w.js";var r=()=>e(`wiSmile`)?.rol===`admin`,i=[{path:`/`,ico:`fa-house`,txt:`Inicio`,desc:`Página de bienvenida pública.`,cat:`publico`},{path:`/cumples`,ico:`fa-cake-candles`,txt:`Cumpleaños`,desc:`Gestión y listado de cumpleaños.`,cat:`publico`},{path:`/meses`,ico:`fa-calendar-days`,txt:`Meses`,desc:`Vista mensual de fechas importantes.`,cat:`publico`},{path:`/blog`,ico:`fa-newspaper`,txt:`Blog`,desc:`Artículos y publicaciones del equipo.`,cat:`publico`},{path:`/emojis`,ico:`fa-face-smile`,txt:`Emojis`,desc:`Tabla de emojis disponibles.`,cat:`publico`},{path:`/acerca`,ico:`fa-circle-info`,txt:`Acerca`,desc:`Información sobre la plataforma.`,cat:`publico`},{path:`/descubre`,ico:`fa-compass`,txt:`Descubre`,desc:`Explorar comunidad y usuarios públicos.`,cat:`publico`},{path:`/precios`,ico:`fa-tags`,txt:`Precios`,desc:`Planes y suscripciones de CumpleWii.`,cat:`publico`},{path:`/terminos`,ico:`fa-file-contract`,txt:`Términos`,desc:`Términos y condiciones de uso.`,cat:`publico`},{path:`/privacidad`,ico:`fa-shield-halved`,txt:`Privacidad`,desc:`Política de privacidad de datos.`,cat:`publico`},{path:`/feedback`,ico:`fa-comments`,txt:`Feedback`,desc:`Formulario de sugerencias y mejoras.`,cat:`publico`},{path:`/contacto`,ico:`fa-envelope`,txt:`Contacto`,desc:`Canal de contacto directo.`,cat:`publico`},{path:`/smile`,ico:`fa-gauge-high`,txt:`Dashboard`,desc:`Panel principal del usuario registrado.`,cat:`usuario`},{path:`/perfil`,ico:`fa-user-gear`,txt:`Perfil`,desc:`Edición de datos personales y avatar.`,cat:`usuario`},{path:`/musica`,ico:`fa-headphones`,txt:`Música`,desc:`Gestor y reproductor de música.`,cat:`usuario`},{path:`/word`,ico:`fa-file-word`,txt:`Tareas / Word`,desc:`Editor de documentos y tareas.`,cat:`usuario`},{path:`/notas`,ico:`fa-book-open`,txt:`Notas`,desc:`Cuaderno de notas rápidas.`,cat:`usuario`},{path:`/win`,ico:`fa-file-shield`,txt:`WiWin Cloud`,desc:`Almacenamiento personal en la nube.`,cat:`usuario`},{path:`/mensajes`,ico:`fa-bell`,txt:`Mensajes`,desc:`Buzón de notificaciones y mensajes.`,cat:`usuario`},{path:`/editor`,ico:`fa-newspaper`,txt:`Dashboard Editor`,desc:`Panel de gestión de contenido editorial.`,cat:`editor`},{path:`/nuevo`,ico:`fa-pen-to-square`,txt:`Crear Post`,desc:`Redacta y publica nuevos artículos.`,cat:`editor`},{path:`/chat`,ico:`fa-comments`,txt:`Chat Grupal`,desc:`Mensajería interna del equipo editorial.`,cat:`editor`},{path:`/registrado`,ico:`fa-clock`,txt:`Cuenta Pendiente`,desc:`Vista de cuenta en espera de aprobación.`,cat:`editor`},{path:`/gestor`,ico:`fa-users-gear`,txt:`Dashboard Gestor`,desc:`Panel de control del gestor de equipos.`,cat:`gestor`},{path:`/admin`,ico:`fa-globe-americas`,txt:`Centro de Control`,desc:`Dashboard global de la plataforma.`,cat:`admin`},{path:`/usuarios`,ico:`fa-users-cog`,txt:`Gestión de Usuarios`,desc:`Moderación, roles y planes de usuarios.`,cat:`admin`},{path:`/paginas`,ico:`fa-sitemap`,txt:`Páginas`,desc:`Vista de todas las rutas de la plataforma.`,cat:`admin`},{path:`/verificar`,ico:`fa-lock`,txt:`Verificar Acceso`,desc:`Pantalla de verificación del administrador.`,cat:`admin`}],a=[{key:`publico`,ico:`fa-globe`,label:`Páginas Públicas`,desc:`Accesibles sin autenticación`,color:`#22c55e`,roles:[`todos`]},{key:`usuario`,ico:`fa-user`,label:`Zona Usuario`,desc:`Disponibles para todos los roles autenticados`,color:`#3b82f6`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{key:`editor`,ico:`fa-pen-nib`,label:`Zona Editor`,desc:`Herramientas de creación de contenido`,color:`#10b981`,roles:[`editor`,`gestor`,`admin`]},{key:`gestor`,ico:`fa-users-gear`,label:`Zona Gestor`,desc:`Módulos de administración de equipos`,color:`#f97316`,roles:[`gestor`,`admin`]},{key:`admin`,ico:`fa-shield-halved`,label:`Zona Admin`,desc:`Control maestro exclusivo del administrador`,color:`#8b5cf6`,roles:[`admin`]}],o={publico:`#22c55e`,usuario:`#3b82f6`,editor:`#10b981`,gestor:`#f97316`,admin:`#8b5cf6`},s=e=>!e||!e.length?`<span class="pag_role_chip todos">Público</span>`:e.map(e=>`<span class="pag_role_chip ${e}">${e}</span>`).join(``),c=e=>e===`/`?null:n.find(t=>t.path===e)?.roles??null,l=(e,t)=>{let n=c(e.path),r=o[e.cat]||`#f59e0b`,i=`${e.txt} ${e.desc} ${e.path}`.toLowerCase();return`
    <a href="${e.path}"
       class="pag_card nv_item"
       data-page="${e.path===`/`?`inicio`:e.path.slice(1)}"
       data-cat="${e.cat}"
       data-search="${i}"
       style="--c-bar:${r}; animation-delay:${t*.03}s"
       title="${e.txt}">
      <i class="fas fa-arrow-right pag_card_arrow"></i>
      <div class="pag_card_top">
        <div class="pag_card_ico">
          <i class="fas ${e.ico}"></i>
        </div>
        <div class="pag_card_body">
          <h3>${e.txt}</h3>
          <p>${e.desc}</p>
        </div>
      </div>
      <div class="pag_card_footer">
        <span class="pag_card_path">${e.path}</span>
        <div class="pag_card_roles">
          ${n?s(n):`<span class="pag_role_chip todos">Público</span>`}
        </div>
      </div>
    </a>`},u=e=>{let t=i.filter(t=>t.cat===e.key);if(!t.length)return``;let n=t.map((e,t)=>l(e,t)).join(``);return`
    <div class="pag_group" data-group="${e.key}">
      <div class="pag_group_header" style="--g-color:${e.color}">
        <div class="pag_group_ico" style="--g-color:${e.color}">
          <i class="fas ${e.ico}"></i>
        </div>
        <div>
          <h2 class="pag_group_title">${e.label}</h2>
        </div>
        <span class="pag_group_count">${t.length} páginas</span>
      </div>
      <div class="pag_grid">
        ${n}
      </div>
    </div>`},d=()=>{if(!r())return`<div class="pag_wrap"><div class="pag_empty"><i class="fas fa-ban"></i><p>Acceso denegado.</p></div></div>`;let e=i.filter(e=>!c(e.path)).length,t=i.filter(e=>{let t=c(e.path);return t&&t.includes(`usuario`)&&!t.includes(`admin`)}).length,n=i.filter(e=>{let t=c(e.path);return t&&t.includes(`admin`)}).length,o=a.map(u).join(``);return`
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
        <span class="pag_stat_num">${i.length}</span>
        <span class="pag_stat_lbl">Total</span>
      </div>
      <div class="pag_stat s_pub">
        <span class="pag_stat_num">${e}</span>
        <span class="pag_stat_lbl">Públicas</span>
      </div>
      <div class="pag_stat s_auth">
        <span class="pag_stat_num">${t}</span>
        <span class="pag_stat_lbl">Autenticadas</span>
      </div>
      <div class="pag_stat s_admin">
        <span class="pag_stat_num">${n}</span>
        <span class="pag_stat_lbl">Solo Admin</span>
      </div>
    </div>

    <!-- ══ GRUPOS ══ -->
    <div id="pag_content">
      ${o}
    </div>

    <!-- Sin resultados de búsqueda -->
    <div id="pag_no_results" style="display:none">
      <div class="pag_empty">
        <i class="fas fa-search"></i>
        <p>Sin resultados para tu búsqueda.</p>
      </div>
    </div>

  </div>`},f=()=>{r()&&(t(document).off(`.pag`),t(document).on(`input.pag`,`#pag_search_input`,function(){let e=t(this).val().toLowerCase().trim();if(!e){t(`.pag_card`).removeClass(`pag_hidden`),t(`.pag_group`).removeClass(`pag_group_hidden`),t(`#pag_no_results`).hide();return}let n=0;t(`.pag_card`).each(function(){let r=(t(this).data(`search`)||``).includes(e);t(this).toggleClass(`pag_hidden`,!r),r&&n++}),t(`.pag_group`).each(function(){let e=t(this).find(`.pag_card:not(.pag_hidden)`).length>0;t(this).toggleClass(`pag_group_hidden`,!e)}),t(`#pag_no_results`).toggle(n===0)}),window.__WIREADY__=!0)},p=()=>{t(document).off(`.pag`)};export{p as cleanup,f as init,d as render};