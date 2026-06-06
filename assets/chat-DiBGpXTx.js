import{A as e,B as t,E as n,R as r,b as i,n as a,o}from"./widev-BKJDWmod.js";import{n as s}from"./vendor-Dkcx8wGc.js";import{_ as c,b as l,f as u,g as d,l as f,m as p,n as ee,o as m,r as h,s as g,u as _}from"./firebase-C5pCnWkN.js";import{n as v}from"./firebase-CHrAjG0U.js";var y=`.chat`,b=`chatSmileMsgs`,x=.1,S=7,C=5,te=3e4,w=500,T=[],E=[],D=``,O=null,k=!1,A=``,j=``,M=!1,N=!0,P=null,F=()=>`
  <div class="chat_wrap wi_fadeUp">
    <div class="chat_container" id="chatContainer">

      <!-- ═══ SIDEBAR (LEFT COLUMN) ═══ -->
      <aside class="chat_sidebar">
        <div class="chat_sidebar_header">
          <div class="chat_sidebar_title">
            <i class="fas fa-users-viewfinder"></i>
            <h2>Mi Equipo</h2>
            <span class="chat_sidebar_count" id="sidebarCount">0</span>
          </div>
          <button class="chat_sidebar_close_btn" id="chatSidebarClose" title="Cerrar">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="chat_sidebar_search">
          <div class="chat_search_box">
            <i class="fas fa-search"></i>
            <input
              type="text"
              id="chatSearchInput"
              placeholder="Buscar compañero…"
              autocomplete="off"
            >
          </div>
        </div>

        <div class="chat_sidebar_list" id="chatSidebarList">
          ${I()}
        </div>
      </aside>

      <!-- ═══ MAIN CHAT (RIGHT COLUMN) ═══ -->
      <main class="chat_main">
        <!-- ══ HEADER ══ -->
        <div class="chat_header smw_loading" id="chatHeader">
          <div class="chat_header_left">
            <button class="chat_sidebar_toggle_btn" id="chatSidebarToggle" title="Ver colaboradores">
              <i class="fas fa-users"></i>
              <span class="chat_sidebar_indicator"></span>
            </button>
            <div class="chat_header_icon">
              <i class="fas fa-comments"></i>
            </div>
            <div class="chat_header_text">
              <h1 class="chat_title">Chat del Equipo</h1>
              <p class="chat_subtitle">Canal interno de <em>Usuarios</em></p>
            </div>
          </div>
          <div class="chat_header_actions">
            <div class="chat_online_badge" id="chatOnline">
              <span class="chat_online_dot"></span>
              <span id="chatOnlineCount">—</span> activos
            </div>
            <button class="chat_refresh_btn" id="chatRefresh" title="Actualizar mensajes">
              <i class="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>

        <!-- ══ MESSAGES AREA ══ -->
        <div class="chat_messages" id="chatMessages">
          ${L()}
        </div>

        <!-- ══ INPUT AREA ══ -->
        <div class="chat_input_area" id="chatInputArea">
          <div class="chat_input_card">
            <div class="chat_textarea_wrap">
              <textarea
                id="chatTextarea"
                class="chat_textarea"
                placeholder="Escribe un mensaje…"
                rows="1"
                maxlength="${w}"
              ></textarea>
            </div>
            <button class="chat_send_btn" id="chatSendBtn" title="Enviar mensaje">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
          <div class="chat_blocked_msg" id="chatBlockedMsg" style="display:none;">
            <i class="fas fa-lock"></i>
            Solo los colaboradores activos pueden enviar mensajes.
          </div>
        </div>
      </main>

    </div>

    <!-- CHAT DELETION MODAL -->
    <div class="chat_modal" id="chatEliminarModal">
      <div class="chat_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer y se borrará para todos.</p>
        <div class="chat_modal_acts">
          <button class="chat_cancel" id="chatCancelDeleteBtn">Cancelar</button>
          <button class="chat_confirm" id="chatConfirmDeleteBtn">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
`;function I(){return[,,,,,].fill(0).map(()=>`
    <div class="chat_sidebar_sk_item">
      <div class="chat_sidebar_sk_avatar smw_sk_el"></div>
      <div class="chat_sidebar_sk_info">
        <div class="chat_sidebar_sk_name smw_sk_el"></div>
        <div class="chat_sidebar_sk_sub smw_sk_el"></div>
      </div>
    </div>
  `).join(``)}function L(){return[{mine:!1,w:`62%`},{mine:!0,w:`48%`},{mine:!1,w:`75%`},{mine:!0,w:`55%`},{mine:!1,w:`68%`}].map(({mine:e,w:t})=>`
    <div class="chat_bubble_wrap ${e?`mine`:`other`}">
      ${e?``:`<div class="chat_sk_avatar smw_sk_el"></div>`}
      <div class="chat_sk_block">
        <div class="chat_sk_name smw_sk_el" style="width:90px;"></div>
        <div class="chat_sk_bubble smw_sk_el" style="width:${t};"></div>
      </div>
      ${e?`<div class="chat_sk_avatar smw_sk_el"></div>`:``}
    </div>
  `).join(``)}var R=(e=``)=>{let t=e.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0][0].toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase():`?`},z=[`#3b82f6`,`#f97316`,`#a855f7`,`#22c55e`,`#ef4444`,`#0ea5e9`,`#eab308`,`#ec4899`],B=(e=``)=>{let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return z[Math.abs(t)%z.length]},V=n=>{if(n.tipo===`snapshot`)return H(n);let r=n.usuario||n.autor||``,i=r&&A&&r.toLowerCase().trim()===A.toLowerCase().trim(),o=B(r),s=R(n.nombre||r||`?`),c=t(n.creado||n.ts),l=U(n.texto||``).replace(/\n/g,`<br>`),u=e.user?.rol===`gestor`||e.user?.rol===`admin`,d=i||u,f=n.imagen,p=`
    <div class="chat_avatar_wrap" title="${a(n.nombre||r||``)}">
      ${f?`<img class="chat_avatar_img" src="${n.imagen}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:``}
      <div class="chat_avatar_fallback" style="background:${o}; ${f?`display:none;`:``}">
        ${s}
      </div>
    </div>
  `;return`
    <div class="chat_bubble_wrap ${i?`mine`:`other`} chat_msg_in ${n.temp?`chat_msg_pending`:``}" data-id="${n.id||``}">
      ${i?``:p}
      <div class="chat_bubble_col">
        <div class="chat_bubble_meta ${i?`right`:``}">
          <span class="chat_bubble_name">${a(n.nombre||r||`Colaborador`)}</span>
          <span class="chat_bubble_time">${c}</span>
          ${d?`<button class="chat_msg_delete_btn" data-id="${n.id||``}" title="Eliminar mensaje"><i class="fas fa-trash-alt"></i></button>`:``}
        </div>
        <div class="chat_bubble ${i?`mine`:`other`}">
          <span>${l}</span>
        </div>
      </div>
      ${i?p:``}
    </div>
  `},H=e=>`
    <div class="chat_snapshot_card chat_msg_in">
      <div class="chat_snapshot_icon">📊</div>
      <div class="chat_snapshot_body">
        <div class="chat_snapshot_label">
          <i class="fas fa-chart-bar"></i> Snapshot del equipo
          <span class="chat_snapshot_time">${t(e.creado||e.ts)}</span>
        </div>
        <div class="chat_snapshot_text">${U(e.texto||``)}</div>
      </div>
    </div>
  `,U=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),W=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),G=()=>{let e=s(`#chatTextarea`).val()||``;s(`.chat_sidebar_item`).each(function(){let t=(s(this).attr(`data-nombre`)||``).trim();t&&(RegExp(`@`+W(t)+`(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])`,`i`).test(e)?s(this).addClass(`active`):s(this).removeClass(`active`))})},K=(e=!1)=>{let t=s(`#chatMessages`);if(!T.length){t.html(`
      <div class="chat_empty">
        <div class="chat_empty_icon">💬</div>
        <p class="chat_empty_title">Sin mensajes aún</p>
        <p class="chat_empty_sub">¡Sé el primero en escribir!</p>
      </div>
    `);return}let n=T.map(V).join(``);N&&T.length>=S&&(n=`<div class="chat_paginate_container"><button class="chat_paginate_btn" id="chatPaginateBtn"><i class="fas fa-history"></i> Cargar anteriores (+5)</button></div>`+n),t.html(n),s(`#chatMessages .chat_msg_in`).each(function(e){s(this).css(`animation-delay`,`${e*.02}s`)}),e||J()},q=()=>{let e=s(`#chatSidebarList`);if(!e.length)return;let t=E.filter(e=>{let t=D.toLowerCase().trim(),n=(e.nombre||``).toLowerCase(),r=(e.apellidos||``).toLowerCase(),i=(e.usuario||``).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)});if(s(`#sidebarCount`).text(t.length),!t.length){e.html(`
      <div class="chat_sidebar_empty">
        <i class="fas fa-search-minus"></i>
        <p class="chat_sidebar_empty_title">Sin resultados</p>
        <p class="chat_sidebar_empty_sub">Intenta buscar otra palabra</p>
      </div>
    `);return}let n=t.map(e=>{let t=e.usuario===A,n=R(e.nombre||`?`),r=B(e.usuario||``),i=e.estado===`activo`,o=e.imagen||e.avatar,s=o?`<img class="chat_sidebar_avatar_img" src="${o}" alt="${e.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:``;return`${e.nombre||``} ${e.apellidos||``}`.replace(/\s+/g,` `).trim(),`
      <div class="chat_sidebar_item ${t?`chat_sidebar_item_me`:``}" data-usuario="${e.usuario}" data-nombre="${e.usuario}">
        <div class="chat_sidebar_avatar_wrap">
          ${s}
          <div class="chat_sidebar_avatar_fallback" style="background:${r}; ${o?`display:none;`:``}">
            ${n}
          </div>
          <span class="chat_sidebar_avatar_dot ${i?`online`:`offline`}"></span>
        </div>
        <div class="chat_sidebar_info">
          <div class="chat_sidebar_name_row">
            <span class="chat_sidebar_name">${a(e.nombre)} ${a(e.apellidos||``)}</span>
            ${t?`<span class="chat_sidebar_me_badge">Tú</span>`:``}
          </div>
          <div class="chat_sidebar_status_row">
            <span class="chat_sidebar_role chat_badge_${e.rol||`usuario`}">
              ${e.rol===`gestor`?`Gestor`:e.rol===`admin`?`Admin`:e.rol===`editor`?`Editor`:`Usuario`}
            </span>
            <span class="chat_sidebar_username">@${e.usuario}</span>
          </div>
        </div>
        <div class="chat_sidebar_action" title="Mencionar">
          <i class="fas fa-at"></i>
        </div>
      </div>
    `}).join(``);e.html(n),G()},J=(e=!1)=>{let t=document.getElementById(`chatMessages`);t&&t.scrollTo({top:t.scrollHeight,behavior:e?`smooth`:`auto`})},Y=e=>{s(`#chatOnlineCount`).text(e)},X=async(e=!1)=>{if(!M){if(M=!0,!e){let e=i(b);if(e&&Array.isArray(e)){T=e,N=!0,K(),M=!1;return}}e&&s(`#chatRefresh`).addClass(`chat_spinning`),s(`#chatHeader`).addClass(`smw_loading`);try{let e=await m(_(d(v,`chatGrupal`),f(`creado`,`desc`),g(S)));T=e.docs.reverse().map(e=>({id:e.id,...e.data()})),N=e.size>=S,n(b,T,x),K(),Y(new Set(T.map(e=>e.usuario||e.autor).filter(Boolean)).size)}catch(e){console.error(`[Chat] loadMensajes error:`,e),T.length||s(`#chatMessages`).html(`
        <div class="chat_empty chat_empty_error">
          <div class="chat_empty_icon">⚠️</div>
          <p class="chat_empty_title">Error al cargar</p>
          <p class="chat_empty_sub">Revisa tu conexión e intenta de nuevo.</p>
          <button class="chat_retry_btn" id="chatRetry">
            <i class="fas fa-redo"></i> Reintentar
          </button>
        </div>
      `),o(`No se pudieron cargar los mensajes`,`error`)}finally{M=!1,s(`#chatHeader`).removeClass(`smw_loading`),s(`#chatRefresh`).removeClass(`chat_spinning`)}}},ne=async()=>{if(M||!N||!T.length)return;let e=s(`#chatMessages`),t=T[0].creado||T[0].ts;if(!t){o(`No se puede paginar: falta cursor de tiempo`,`warning`);return}M=!0,s(`#chatPaginateBtn`).prop(`disabled`,!0).html(`<i class="fas fa-circle-notch fa-spin"></i> Cargando anteriores...`);try{let n=await m(_(d(v,`chatGrupal`),f(`creado`,`desc`),u(t),g(C)));if(n.empty){N=!1,K(!0),o(`No hay más mensajes anteriores`,`info`);return}let r=n.docs.reverse().map(e=>({id:e.id,...e.data()}));r.length<C&&(N=!1);let i=e[0].scrollHeight,a=e[0].scrollTop;T=[...r,...T],K(!0);let s=e[0].scrollHeight;e[0].scrollTop=a+(s-i),o(`Cargados ${r.length} mensajes anteriores`,`success`)}catch(e){console.error(`[Chat] loadAnteriores error:`,e),o(`Error al cargar anteriores`,`error`)}finally{M=!1}},Z=async()=>{try{E=(await m(_(d(v,`smiles`),p(`estado`,`==`,`activo`)))).docs.map(e=>{let t=e.data();return{usuario:e.id,nombre:t.nombre||``,apellidos:t.apellidos||``,imagen:t.avatar||t.imagen||``,avatar:t.avatar||``,rol:t.rol||`usuario`,estado:t.estado||`activo`,...t}}),q()}catch(e){console.error(`[Chat] _loadColaboradores error:`,e)}},Q=async()=>{if(!k)return;let t=s(`#chatTextarea`),r=t.val().trim();if(!r)return;if(r.length>w){o(`El mensaje excede ${w} caracteres`,`warning`);return}t.val(``).trigger(`input`),$(t[0]);let i=`temp_`+Date.now()+Math.random().toString(36).substr(2,5),a=e.user,c=a?.imagen||a?.avatar||``,u={id:i,texto:r,usuario:A,email:a?.email||``,nombre:j,imagen:c,creado:new Date,ts:new Date,tipo:`texto`,temp:!0};T.push(u),K(!1),ee(d(v,`chatGrupal`),{texto:r,usuario:A,email:a?.email||``,nombre:j,imagen:c,creado:l(),ts:l(),tipo:`texto`}).then(e=>{let t=T.findIndex(e=>e.id===i);t!==-1&&(T[t].id=e.id,delete T[t].temp,n(b,T,x),K(!0))}).catch(e=>{console.error(`[Chat] Background send error:`,e),o(`No se pudo entregar el mensaje`,`error`),T=T.filter(e=>e.id!==i),n(b,T,x),K(!0)})},$=e=>{e&&(e.style.height=`auto`,e.style.height=Math.min(e.scrollHeight,96)+`px`,e.style.overflowY=e.scrollHeight>96?`auto`:`hidden`)},re=()=>{let e=s(`#chatTextarea`),t=s(`#chatSendBtn`),n=s(`#chatBlockedMsg`);k?(e.prop(`disabled`,!1).attr(`placeholder`,`Escribe un mensaje…`),t.prop(`disabled`,!1).removeClass(`chat_send_disabled`),n.hide()):(e.prop(`disabled`,!0).attr(`placeholder`,`No puedes enviar mensajes (cuenta inactiva o sin permisos)`),t.prop(`disabled`,!0).addClass(`chat_send_disabled`),n.show())},ie=async()=>{s(`.chat_wrap`).addClass(`visible`),window.__WIREADY__=!0;let t=e.user;t&&(A=t.usuario||t.email||``,j=t.nombre||t.usuario||`Colaborador`,k=t.estado===`activo`&&(t.rol===`editor`||t.rol===`gestor`||t.rol===`admin`)),re(),X(!1),Z(),O=setInterval(()=>{n(b,null,0),X(!0),Z()},te),s(document).on(`input${y}`,`#chatTextarea`,function(){$(this),G()}),s(document).on(`keydown${y}`,`#chatTextarea`,function(e){e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),Q())}),s(document).on(`click${y}`,`#chatSendBtn`,()=>Q()),s(document).on(`click${y}`,`#chatRefresh`,async function(){n(b,null,0),N=!0,await X(!0),await Z(),o(`Mensajes actualizados`,`success`)}),s(document).on(`click${y}`,`#chatPaginateBtn`,()=>ne()),s(document).on(`click${y}`,`.chat_msg_delete_btn`,function(){let e=s(this).attr(`data-id`);e&&(P=e,s(`#chatEliminarModal`).addClass(`show`))}),s(document).on(`click${y}`,`#chatCancelDeleteBtn, #chatEliminarModal`,function(e){s(e.target).is(`#chatCancelDeleteBtn, #chatEliminarModal`)&&(s(`#chatEliminarModal`).removeClass(`show`),P=null)}),s(document).on(`click${y}`,`#chatConfirmDeleteBtn`,async function(){if(!P)return;let e=this;r(e,!0,`Eliminando...`);try{let e=P;await h(c(v,`chatGrupal`,e)),o(`Mensaje eliminado permanentemente`,`success`),s(`#chatEliminarModal`).removeClass(`show`),P=null;let t=s(`.chat_bubble_wrap[data-id="${e}"]`);t.length?t.fadeOut(300,function(){s(this).remove(),T=T.filter(t=>t.id!==e),n(b,T,x)}):(T=T.filter(t=>t.id!==e),n(b,T,x),K(!0))}catch(e){console.error(`[Chat] deleteDoc error:`,e),o(`Error al eliminar mensaje`,`error`)}finally{r(e,!1,`Eliminar`)}}),s(document).on(`input${y}`,`#chatSearchInput`,function(){D=s(this).val(),q()}),s(document).on(`click${y}`,`.chat_sidebar_item`,function(e){if(!k)return;let t=(s(this).attr(`data-nombre`)||``).trim(),n=s(`#chatTextarea`),r=s(this).hasClass(`active`),i=n.val(),a=`@${t}`;if(r){let e=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),r=RegExp(`@`+e+`(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])\\s*`,`gi`);i=i.replace(r,``),i=i.replace(/\s+/g,` `).trim(),n.val(i?i+` `:``)}else{let e=i?i.endsWith(` `)?``:` `:``;n.val(i+e+a+` `)}n.trigger(`input`),n.focus(),$(n[0]),s(`#chatContainer`).removeClass(`chat_sidebar_active`)}),s(document).on(`click${y}`,`#chatSidebarToggle`,function(){s(`#chatContainer`).addClass(`chat_sidebar_active`)}),s(document).on(`click${y}`,`#chatSidebarClose`,function(){s(`#chatContainer`).removeClass(`chat_sidebar_active`)}),s(document).on(`click${y}`,`#chatRetry`,()=>{s(`#chatMessages`).html(L()),s(`#chatSidebarList`).html(I()),X(!0),Z()}),s(document).on(`focus${y}`,`#chatTextarea`,function(){setTimeout(()=>J(!0),350)})},ae=()=>{s(document).off(y),clearInterval(O),O=null,T=[],E=[],D=``,k=!1,A=``,j=``,M=!1,N=!0,P=null};export{ae as cleanup,ie as init,F as render};