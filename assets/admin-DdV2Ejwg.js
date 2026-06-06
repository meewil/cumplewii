import{n as e,s as t,t as n}from"./wii-DFanSMW3.js";import{E as r,b as i,o as a,s as o}from"./widev-BKJDWmod.js";import{n as s}from"./vendor-Dkcx8wGc.js";import{g as c,i as l,m as u,u as d}from"./firebase-C5pCnWkN.js";import{n as f}from"./firebase-CHrAjG0U.js";var p=()=>i(`wiSmile`),m=`am_users`,h=`am_activos`,g=`am_cumples`,_=`am_musica`,v=`am_blog`,y=`am_chat`,b=`am_plan_free`,x=`am_plan_pro`,S=`am_plan_vip`,C=`am_rol_usuario`,w=`am_rol_editor`,T=`am_rol_gestor`,E=`am_rol_admin`,D=()=>{let r=p();return!r||r.rol!==`admin`?`<div class="am_page"><div class="am_empty"><i class="fas fa-ban"></i> Acceso denegado.</div></div>`:`
  <div class="am_page">

    <!-- ══ HERO ══ -->
    <div class="am_hero">
      <div class="am_hero_left">
        <div class="am_hero_icon"><i class="fas fa-cake-candles"></i></div>
        <div class="am_hero_txt">
          <div class="am_badge"><i class="fas fa-shield-halved"></i> Admin Master</div>
          <h1 class="am_hero_title">Centro de Control</h1>
          <p class="am_hero_sub">${o()}, <strong>${r.nombre||r.usuario||`Admin`}</strong> · ${n} v11 · Desde ${t}</p>
        </div>
      </div>
      <div class="am_hero_right">
        <div class="am_hero_meta">
          <span class="am_hero_tag"><i class="fas fa-code-branch"></i> v11</span>
          <span class="am_hero_tag"><i class="fas fa-user-pen"></i> ${e}</span>
        </div>
        <button class="am_btn_sync" id="am_btn_refresh">
          <i class="fas fa-sync-alt"></i> Sincronizar
        </button>
      </div>
    </div>

    <!-- ══ KPIs ══ -->
    <div class="am_grid_6">

      <div class="am_kpi" style="--c:#38bdf8">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-users"></i></div>
          <span class="am_ki_label">Usuarios</span>
        </div>
        <div class="am_ki_val" id="am_n_users">—</div>
        <div class="am_ki_trend"><i class="fas fa-user-plus"></i> Registros totales</div>
      </div>

      <div class="am_kpi" style="--c:#22c55e">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-circle-check"></i></div>
          <span class="am_ki_label">Activos</span>
        </div>
        <div class="am_ki_val" id="am_n_activos">—</div>
        <div class="am_ki_trend"><i class="fas fa-toggle-on"></i> Cuentas habilitadas</div>
      </div>

      <div class="am_kpi" style="--c:#f59e0b">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-cake-candles"></i></div>
          <span class="am_ki_label">Cumpleaños</span>
        </div>
        <div class="am_ki_val" id="am_n_cumples">—</div>
        <div class="am_ki_trend"><i class="fas fa-calendar-day"></i> Eventos registrados</div>
      </div>

      <div class="am_kpi" style="--c:#ec4899">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-headphones"></i></div>
          <span class="am_ki_label">Música</span>
        </div>
        <div class="am_ki_val" id="am_n_musica">—</div>
        <div class="am_ki_trend"><i class="fas fa-music"></i> Tracks en biblioteca</div>
      </div>

      <div class="am_kpi" style="--c:#8b5cf6">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-newspaper"></i></div>
          <span class="am_ki_label">Blog</span>
        </div>
        <div class="am_ki_val" id="am_n_blog">—</div>
        <div class="am_ki_trend"><i class="fas fa-pen-nib"></i> Artículos publicados</div>
      </div>

      <div class="am_kpi" style="--c:#06b6d4">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-comments"></i></div>
          <span class="am_ki_label">Chat</span>
        </div>
        <div class="am_ki_val" id="am_n_chat">—</div>
        <div class="am_ki_trend"><i class="fas fa-message"></i> Mensajes en el canal</div>
      </div>

    </div>

    <!-- ══ ESTADO DE LA PLATAFORMA ══ -->
    <div class="am_sec_header">
      <i class="fas fa-database"></i>
      <h2 class="am_sec_h2">Estado de la Plataforma</h2>
    </div>

    <div class="am_status_grid">

      <div class="am_status_card">
        <div class="am_status_head">
          <i class="fas fa-layer-group"></i>
          <span>Colecciones Firestore</span>
        </div>
        <ul class="am_col_list">
          <li><span class="am_col_dot" style="background:#38bdf8"></span><code>smiles</code><em>Usuarios</em></li>
          <li><span class="am_col_dot" style="background:#22c55e"></span><code>registros</code><em>Auth index</em></li>
          <li><span class="am_col_dot" style="background:#f59e0b"></span><code>cumples</code><em>Cumpleaños</em></li>
          <li><span class="am_col_dot" style="background:#ec4899"></span><code>wimusica</code><em>Biblioteca música</em></li>
          <li><span class="am_col_dot" style="background:#8b5cf6"></span><code>blog</code><em>Artículos</em></li>
          <li><span class="am_col_dot" style="background:#06b6d4"></span><code>chatGrupal</code><em>Chat equipo</em></li>
          <li><span class="am_col_dot" style="background:#64748b"></span><code>wiNotas</code><em>Notas</em></li>
          <li><span class="am_col_dot" style="background:#64748b"></span><code>word</code><em>Documentos</em></li>
          <li><span class="am_col_dot" style="background:#64748b"></span><code>wiMensajes</code><em>Notificaciones</em></li>
          <li><span class="am_col_dot" style="background:#64748b"></span><code>musicaLikes</code><em>Likes música</em></li>
        </ul>
      </div>

      <div class="am_status_card">
        <div class="am_status_head">
          <i class="fas fa-crown"></i>
          <span>Distribución de Planes</span>
        </div>
        <div class="am_plan_bar">
          <div class="am_plan_row">
            <span class="am_plan_lbl">Free</span>
            <div class="am_plan_track">
              <div class="am_plan_fill" id="am_bar_free" style="--w:0%;background:#64748b"></div>
            </div>
            <span class="am_plan_num" id="am_cnt_free">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">Pro</span>
            <div class="am_plan_track">
              <div class="am_plan_fill" id="am_bar_pro" style="--w:0%;background:#38bdf8"></div>
            </div>
            <span class="am_plan_num" id="am_cnt_pro">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">VIP</span>
            <div class="am_plan_track">
              <div class="am_plan_fill" id="am_bar_vip" style="--w:0%;background:linear-gradient(90deg,#f59e0b,#8b5cf6)"></div>
            </div>
            <span class="am_plan_num" id="am_cnt_vip">—</span>
          </div>
        </div>
        <div class="am_status_head" style="margin-top:2vh">
          <i class="fas fa-user-tag"></i>
          <span>Distribución de Roles</span>
        </div>
        <div class="am_plan_bar">
          <div class="am_plan_row">
            <span class="am_plan_lbl">Usuario</span>
            <div class="am_plan_track"><div class="am_plan_fill" id="am_bar_rol_usuario" style="--w:0%;background:#3b82f6"></div></div>
            <span class="am_plan_num" id="am_cnt_rol_usuario">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">Editor</span>
            <div class="am_plan_track"><div class="am_plan_fill" id="am_bar_rol_editor" style="--w:0%;background:#10b981"></div></div>
            <span class="am_plan_num" id="am_cnt_rol_editor">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">Gestor</span>
            <div class="am_plan_track"><div class="am_plan_fill" id="am_bar_rol_gestor" style="--w:0%;background:#f97316"></div></div>
            <span class="am_plan_num" id="am_cnt_rol_gestor">—</span>
          </div>
          <div class="am_plan_row">
            <span class="am_plan_lbl">Admin</span>
            <div class="am_plan_track"><div class="am_plan_fill" id="am_bar_rol_admin" style="--w:0%;background:#8b5cf6"></div></div>
            <span class="am_plan_num" id="am_cnt_rol_admin">—</span>
          </div>
        </div>
      </div>

      <div class="am_status_card">
        <div class="am_status_head">
          <i class="fas fa-info-circle"></i>
          <span>Info del Proyecto</span>
        </div>
        <ul class="am_info_list">
          <li><i class="fas fa-cake-candles"></i><span>App</span><strong>${n}</strong></li>
          <li><i class="fas fa-code-branch"></i><span>Versión</span><strong>v11</strong></li>
          <li><i class="fas fa-calendar-check"></i><span>Lanzamiento</span><strong>${t}</strong></li>
          <li><i class="fas fa-user-pen"></i><span>Developer</span><strong>${e}</strong></li>
          <li><i class="fas fa-link"></i><span>Web</span><strong><a href="https://cumplewii.web.app" target="_blank" rel="noopener">cumplewii.web.app</a></strong></li>
          <li><i class="fas fa-fire"></i><span>Backend</span><strong>Firebase / Firestore</strong></li>
          <li><i class="fas fa-bolt"></i><span>Build</span><strong>Vite + jQuery</strong></li>
          <li><i class="fas fa-palette"></i><span>UI</span><strong>Vanilla CSS + WiDev</strong></li>
        </ul>
      </div>

    </div>

    <!-- ══ ACCESO RÁPIDO ══ -->
    <div class="am_sec_header">
      <i class="fas fa-bolt"></i>
      <h2 class="am_sec_h2">Acceso Rápido</h2>
    </div>

    <div class="am_quick_grid">
      <a href="/smile" class="am_quick_card nv_item" data-page="smile">
        <i class="fas fa-gauge-high"></i><span>Dashboard</span>
      </a>
      <a href="/cumples" class="am_quick_card nv_item" data-page="cumples">
        <i class="fas fa-cake-candles"></i><span>Cumpleaños</span>
      </a>
      <a href="/musica" class="am_quick_card nv_item" data-page="musica">
        <i class="fas fa-headphones"></i><span>Música</span>
      </a>
      <a href="/blog" class="am_quick_card nv_item" data-page="blog">
        <i class="fas fa-newspaper"></i><span>Blog</span>
      </a>
      <a href="/notas" class="am_quick_card nv_item" data-page="notas">
        <i class="fas fa-book-open"></i><span>Notas</span>
      </a>
      <a href="/word" class="am_quick_card nv_item" data-page="word">
        <i class="fas fa-file-word"></i><span>Tareas</span>
      </a>
      <a href="/chat" class="am_quick_card nv_item" data-page="chat">
        <i class="fas fa-comments"></i><span>Chat</span>
      </a>
      <a href="/perfil" class="am_quick_card nv_item" data-page="perfil">
        <i class="fas fa-user-gear"></i><span>Perfil</span>
      </a>
    </div>

  </div>`},O=async()=>{let e=p();!e||e.rol!==`admin`||(s(document).off(`.am`),A(),M(),s(document).on(`click.am`,`#am_btn_refresh`,function(){let e=s(this).find(`i`).addClass(`fa-spin`);M(!0).finally(()=>{setTimeout(()=>e.removeClass(`fa-spin`),600)})}))},k=()=>{s(document).off(`.am`)};function A(){s(`#am_n_users`).text(i(m)??`—`),s(`#am_n_activos`).text(i(h)??`—`),s(`#am_n_cumples`).text(i(g)??`—`),s(`#am_n_musica`).text(i(_)??`—`),s(`#am_n_blog`).text(i(v)??`—`),s(`#am_n_chat`).text(i(y)??`—`);let e=i(m)||0;j(`free`,b,e),j(`pro`,x,e),j(`vip`,S,e),j(`rol_usuario`,C,e),j(`rol_editor`,w,e),j(`rol_gestor`,T,e),j(`rol_admin`,E,e)}function j(e,t,n){let r=i(t);if(r===null)return;let a=n>0?Math.round(r/n*100):0;s(`#am_cnt_${e}`).text(r),s(`#am_bar_${e}`).css(`--w`,`${a}%`)}async function M(e=!1){try{let t=c(f,`smiles`),n=c(f,`cumples`),o=c(f,`wimusica`),p=c(f,`blog`),D=c(f,`chatGrupal`),O=(e,t)=>e?[t()]:[],k=[...O(e||i(m)===null,()=>l(t).then(e=>{let t=e.data().count;r(m,t,1),s(`#am_n_users`).text(t)})),...O(e||i(h)===null,()=>l(d(t,u(`activo`,`==`,!0))).then(e=>{let t=e.data().count;r(h,t,1),s(`#am_n_activos`).text(t)})),...O(e||i(g)===null,()=>l(n).then(e=>{let t=e.data().count;r(g,t,1),s(`#am_n_cumples`).text(t)})),...O(e||i(_)===null,()=>l(o).then(e=>{let t=e.data().count;r(_,t,1),s(`#am_n_musica`).text(t)})),...O(e||i(v)===null,()=>l(p).then(e=>{let t=e.data().count;r(v,t,1),s(`#am_n_blog`).text(t)})),...O(e||i(y)===null,()=>l(D).then(e=>{let t=e.data().count;r(y,t,1),s(`#am_n_chat`).text(t)}))],A=[{key:b,id:`free`,val:`free`},{key:x,id:`pro`,val:`pro`},{key:S,id:`vip`,val:`vip`}],j=[{key:C,id:`rol_usuario`,val:`usuario`},{key:w,id:`rol_editor`,val:`editor`},{key:T,id:`rol_gestor`,val:`gestor`},{key:E,id:`rol_admin`,val:`admin`}],M=A.filter(t=>e||i(t.key)===null).map(e=>l(d(t,u(`plan`,`==`,e.val))).then(t=>{let n=t.data().count;r(e.key,n,1);let a=i(m)||1,o=Math.round(n/a*100);s(`#am_cnt_${e.id}`).text(n),s(`#am_bar_${e.id}`).css(`--w`,`${o}%`)})),N=j.filter(t=>e||i(t.key)===null).map(e=>l(d(t,u(`rol`,`==`,e.val))).then(t=>{let n=t.data().count;r(e.key,n,1);let a=i(m)||1,o=Math.round(n/a*100);s(`#am_cnt_${e.id}`).text(n),s(`#am_bar_${e.id}`).css(`--w`,`${o}%`)}));await Promise.allSettled([...k,...M,...N]);let P=i(m)||1;[...A,...j].forEach(e=>{let t=i(e.key);if(t!==null){let n=Math.round(t/P*100);s(`#am_cnt_${e.id}`).text(t),s(`#am_bar_${e.id}`).css(`--w`,`${n}%`)}}),e&&a(`Estadísticas sincronizadas ✅`,`success`)}catch(t){console.error(`[Admin] Error stats:`,t),e&&a(`Error al sincronizar`,`error`)}}export{k as cleanup,O as init,D as render};