import{E as e,L as t,b as n,k as r,n as i,o as a,z as o}from"./widev-Czq8ue36.js";import{n as s}from"./vendor-Dkcx8wGc.js";import{A as c,N as l,S as u,h as d,k as f,m as p,v as m,w as h,x as g,y as _}from"./firebase-BY5GISzq.js";import{n as v}from"./firebase-BOoMX3kr.js";import{cargarTodosEmpleados as y}from"./zsmile-CA_7WcPo.js";var b=`.chat`,x=`chatSmileMsgs`,S=.1,C=7,w=5,ee=3e4,T=500,E=[],D=[],O=``,k=null,A=!1,j=``,M=``,N=!1,P=!0,F=null,I=()=>`
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
          ${L()}
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
          ${R()}
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
                maxlength="${T}"
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
`;function L(){return[,,,,,].fill(0).map(()=>`
    <div class="chat_sidebar_sk_item">
      <div class="chat_sidebar_sk_avatar smw_sk_el"></div>
      <div class="chat_sidebar_sk_info">
        <div class="chat_sidebar_sk_name smw_sk_el"></div>
        <div class="chat_sidebar_sk_sub smw_sk_el"></div>
      </div>
    </div>
  `).join(``)}function R(){return[{mine:!1,w:`62%`},{mine:!0,w:`48%`},{mine:!1,w:`75%`},{mine:!0,w:`55%`},{mine:!1,w:`68%`}].map(({mine:e,w:t})=>`
    <div class="chat_bubble_wrap ${e?`mine`:`other`}">
      ${e?``:`<div class="chat_sk_avatar smw_sk_el"></div>`}
      <div class="chat_sk_block">
        <div class="chat_sk_name smw_sk_el" style="width:90px;"></div>
        <div class="chat_sk_bubble smw_sk_el" style="width:${t};"></div>
      </div>
      ${e?`<div class="chat_sk_avatar smw_sk_el"></div>`:``}
    </div>
  `).join(``)}var z=(e=``)=>{let t=e.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0][0].toUpperCase():(t[0][0]+t[t.length-1][0]).toUpperCase():`?`},B=[`#3b82f6`,`#f97316`,`#a855f7`,`#22c55e`,`#ef4444`,`#0ea5e9`,`#eab308`,`#ec4899`],V=(e=``)=>{let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return B[Math.abs(t)%B.length]},H=e=>{if(e.tipo===`snapshot`)return U(e);let t=e.usuario||e.autor||``,n=t&&j&&t.toLowerCase().trim()===j.toLowerCase().trim(),a=V(t),s=z(e.nombre||t||`?`),c=o(e.creado||e.ts),l=W(e.texto||``).replace(/\n/g,`<br>`),u=r.user?.rol===`gestor`||r.user?.rol===`admin`,d=n||u,f=e.imagen,p=`
    <div class="chat_avatar_wrap" title="${i(e.nombre||t||``)}">
      ${f?`<img class="chat_avatar_img" src="${e.imagen}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:``}
      <div class="chat_avatar_fallback" style="background:${a}; ${f?`display:none;`:``}">
        ${s}
      </div>
    </div>
  `;return`
    <div class="chat_bubble_wrap ${n?`mine`:`other`} chat_msg_in ${e.temp?`chat_msg_pending`:``}" data-id="${e.id||``}">
      ${n?``:p}
      <div class="chat_bubble_col">
        <div class="chat_bubble_meta ${n?`right`:``}">
          <span class="chat_bubble_name">${i(e.nombre||t||`Colaborador`)}</span>
          <span class="chat_bubble_time">${c}</span>
          ${d?`<button class="chat_msg_delete_btn" data-id="${e.id||``}" title="Eliminar mensaje"><i class="fas fa-trash-alt"></i></button>`:``}
        </div>
        <div class="chat_bubble ${n?`mine`:`other`}">
          <span>${l}</span>
        </div>
      </div>
      ${n?p:``}
    </div>
  `},U=e=>`
    <div class="chat_snapshot_card chat_msg_in">
      <div class="chat_snapshot_icon">📊</div>
      <div class="chat_snapshot_body">
        <div class="chat_snapshot_label">
          <i class="fas fa-chart-bar"></i> Snapshot del equipo
          <span class="chat_snapshot_time">${o(e.creado||e.ts)}</span>
        </div>
        <div class="chat_snapshot_text">${W(e.texto||``)}</div>
      </div>
    </div>
  `,W=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),G=e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),K=()=>{let e=s(`#chatTextarea`).val()||``;s(`.chat_sidebar_item`).each(function(){let t=(s(this).attr(`data-nombre`)||``).trim();t&&(RegExp(`@`+G(t)+`(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])`,`i`).test(e)?s(this).addClass(`active`):s(this).removeClass(`active`))})},q=(e=!1)=>{let t=s(`#chatMessages`);if(!E.length){t.html(`
      <div class="chat_empty">
        <div class="chat_empty_icon">💬</div>
        <p class="chat_empty_title">Sin mensajes aún</p>
        <p class="chat_empty_sub">¡Sé el primero en escribir!</p>
      </div>
    `);return}let n=E.map(H).join(``);P&&E.length>=C&&(n=`<div class="chat_paginate_container"><button class="chat_paginate_btn" id="chatPaginateBtn"><i class="fas fa-history"></i> Cargar anteriores (+5)</button></div>`+n),t.html(n),s(`#chatMessages .chat_msg_in`).each(function(e){s(this).css(`animation-delay`,`${e*.02}s`)}),e||Y()},J=()=>{let e=s(`#chatSidebarList`);if(!e.length)return;let t=D.filter(e=>{let t=O.toLowerCase().trim(),n=(e.nombre||``).toLowerCase(),r=(e.apellidos||``).toLowerCase(),i=(e.usuario||``).toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)});if(s(`#sidebarCount`).text(t.length),!t.length){e.html(`
      <div class="chat_sidebar_empty">
        <i class="fas fa-search-minus"></i>
        <p class="chat_sidebar_empty_title">Sin resultados</p>
        <p class="chat_sidebar_empty_sub">Intenta buscar otra palabra</p>
      </div>
    `);return}let n=t.map(e=>{let t=e.usuario===j,n=z(e.nombre||`?`),r=V(e.usuario||``),a=e.estado===`activo`,o=e.imagen||e.avatar,s=o?`<img class="chat_sidebar_avatar_img" src="${o}" alt="${e.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`:``;return`${e.nombre||``} ${e.apellidos||``}`.replace(/\s+/g,` `).trim(),`
      <div class="chat_sidebar_item ${t?`chat_sidebar_item_me`:``}" data-usuario="${e.usuario}" data-nombre="${e.usuario}">
        <div class="chat_sidebar_avatar_wrap">
          ${s}
          <div class="chat_sidebar_avatar_fallback" style="background:${r}; ${o?`display:none;`:``}">
            ${n}
          </div>
          <span class="chat_sidebar_avatar_dot ${a?`online`:`offline`}"></span>
        </div>
        <div class="chat_sidebar_info">
          <div class="chat_sidebar_name_row">
            <span class="chat_sidebar_name">${i(e.nombre)} ${i(e.apellidos||``)}</span>
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
    `}).join(``);e.html(n),K()},Y=(e=!1)=>{let t=document.getElementById(`chatMessages`);t&&t.scrollTo({top:t.scrollHeight,behavior:e?`smooth`:`auto`})},te=e=>{s(`#chatOnlineCount`).text(e)},X=async(t=!1)=>{if(!N){if(N=!0,!t){let e=n(x);if(e&&Array.isArray(e)){E=e,P=!0,q(),N=!1;return}}t&&s(`#chatRefresh`).addClass(`chat_spinning`),s(`#chatHeader`).addClass(`smw_loading`);try{let t=await m(u(f(v,`chatSmiles`),g(`creado`,`desc`),_(C)));E=t.docs.reverse().map(e=>({id:e.id,...e.data()})),P=t.size>=C,e(x,E,S),q(),te(new Set(E.map(e=>e.usuario||e.autor).filter(Boolean)).size)}catch(e){console.error(`[Chat] loadMensajes error:`,e),E.length||s(`#chatMessages`).html(`
        <div class="chat_empty chat_empty_error">
          <div class="chat_empty_icon">⚠️</div>
          <p class="chat_empty_title">Error al cargar</p>
          <p class="chat_empty_sub">Revisa tu conexión e intenta de nuevo.</p>
          <button class="chat_retry_btn" id="chatRetry">
            <i class="fas fa-redo"></i> Reintentar
          </button>
        </div>
      `),a(`No se pudieron cargar los mensajes`,`error`)}finally{N=!1,s(`#chatHeader`).removeClass(`smw_loading`),s(`#chatRefresh`).removeClass(`chat_spinning`)}}},ne=async()=>{if(N||!P||!E.length)return;let e=s(`#chatMessages`),t=E[0].creado||E[0].ts;if(!t){a(`No se puede paginar: falta cursor de tiempo`,`warning`);return}N=!0,s(`#chatPaginateBtn`).prop(`disabled`,!0).html(`<i class="fas fa-circle-notch fa-spin"></i> Cargando anteriores...`);try{let n=await m(u(f(v,`chatSmiles`),g(`creado`,`desc`),h(t),_(w)));if(n.empty){P=!1,q(!0),a(`No hay más mensajes anteriores`,`info`);return}let r=n.docs.reverse().map(e=>({id:e.id,...e.data()}));r.length<w&&(P=!1);let i=e[0].scrollHeight,o=e[0].scrollTop;E=[...r,...E],q(!0);let s=e[0].scrollHeight;e[0].scrollTop=o+(s-i),a(`Cargados ${r.length} mensajes anteriores`,`success`)}catch(e){console.error(`[Chat] loadAnteriores error:`,e),a(`Error al cargar anteriores`,`error`)}finally{N=!1}},Z=async()=>{try{D=await y(!0),J()}catch(e){console.error(`[Chat] _loadColaboradores error:`,e)}},Q=async()=>{if(!A)return;let t=s(`#chatTextarea`),n=t.val().trim();if(!n)return;if(n.length>T){a(`El mensaje excede ${T} caracteres`,`warning`);return}t.val(``).trigger(`input`),$(t[0]);let i=`temp_`+Date.now()+Math.random().toString(36).substr(2,5),o=r.user,c=o?.imagen||o?.avatar||``,u={id:i,texto:n,usuario:j,email:o?.email||``,nombre:M,imagen:c,creado:new Date,ts:new Date,tipo:`texto`,temp:!0};E.push(u),q(!1),p(f(v,`chatSmiles`),{texto:n,usuario:j,email:o?.email||``,nombre:M,imagen:c,creado:l(),ts:l(),tipo:`texto`}).then(t=>{let n=E.findIndex(e=>e.id===i);n!==-1&&(E[n].id=t.id,delete E[n].temp,e(x,E,S),q(!0))}).catch(t=>{console.error(`[Chat] Background send error:`,t),a(`No se pudo entregar el mensaje`,`error`),E=E.filter(e=>e.id!==i),e(x,E,S),q(!0)})},$=e=>{e&&(e.style.height=`auto`,e.style.height=Math.min(e.scrollHeight,96)+`px`,e.style.overflowY=e.scrollHeight>96?`auto`:`hidden`)},re=()=>{let e=s(`#chatTextarea`),t=s(`#chatSendBtn`),n=s(`#chatBlockedMsg`);A?(e.prop(`disabled`,!1).attr(`placeholder`,`Escribe un mensaje…`),t.prop(`disabled`,!1).removeClass(`chat_send_disabled`),n.hide()):(e.prop(`disabled`,!0).attr(`placeholder`,`No puedes enviar mensajes (participación inactiva)`),t.prop(`disabled`,!0).addClass(`chat_send_disabled`),n.show())},ie=async()=>{s(`.chat_wrap`).addClass(`visible`),window.__WIREADY__=!0;let n=r.user;n&&(j=n.usuario||n.email||``,M=n.nombre||n.usuario||`Colaborador`,A=n.participa===`si`),re(),X(!1),Z(),k=setInterval(()=>{e(x,null,0),X(!0),Z()},ee),s(document).on(`input${b}`,`#chatTextarea`,function(){$(this),K()}),s(document).on(`keydown${b}`,`#chatTextarea`,function(e){e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),Q())}),s(document).on(`click${b}`,`#chatSendBtn`,()=>Q()),s(document).on(`click${b}`,`#chatRefresh`,async function(){e(x,null,0),P=!0,await X(!0),await Z(),a(`Mensajes actualizados`,`success`)}),s(document).on(`click${b}`,`#chatPaginateBtn`,()=>ne()),s(document).on(`click${b}`,`.chat_msg_delete_btn`,function(){let e=s(this).attr(`data-id`);e&&(F=e,s(`#chatEliminarModal`).addClass(`show`))}),s(document).on(`click${b}`,`#chatCancelDeleteBtn, #chatEliminarModal`,function(e){s(e.target).is(`#chatCancelDeleteBtn, #chatEliminarModal`)&&(s(`#chatEliminarModal`).removeClass(`show`),F=null)}),s(document).on(`click${b}`,`#chatConfirmDeleteBtn`,async function(){if(!F)return;let n=this;t(n,!0,`Eliminando...`);try{let t=F;await d(c(v,`chatSmiles`,t)),a(`Mensaje eliminado permanentemente`,`success`),s(`#chatEliminarModal`).removeClass(`show`),F=null;let n=s(`.chat_bubble_wrap[data-id="${t}"]`);n.length?n.fadeOut(300,function(){s(this).remove(),E=E.filter(e=>e.id!==t),e(x,E,S)}):(E=E.filter(e=>e.id!==t),e(x,E,S),q(!0))}catch(e){console.error(`[Chat] deleteDoc error:`,e),a(`Error al eliminar mensaje`,`error`)}finally{t(n,!1,`Eliminar`)}}),s(document).on(`input${b}`,`#chatSearchInput`,function(){O=s(this).val(),J()}),s(document).on(`click${b}`,`.chat_sidebar_item`,function(e){if(!A)return;let t=(s(this).attr(`data-nombre`)||``).trim(),n=s(`#chatTextarea`),r=s(this).hasClass(`active`),i=n.val(),a=`@${t}`;if(r){let e=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`),r=RegExp(`@`+e+`(?![a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ])\\s*`,`gi`);i=i.replace(r,``),i=i.replace(/\s+/g,` `).trim(),n.val(i?i+` `:``)}else{let e=i?i.endsWith(` `)?``:` `:``;n.val(i+e+a+` `)}n.trigger(`input`),n.focus(),$(n[0]),s(`#chatContainer`).removeClass(`chat_sidebar_active`)}),s(document).on(`click${b}`,`#chatSidebarToggle`,function(){s(`#chatContainer`).addClass(`chat_sidebar_active`)}),s(document).on(`click${b}`,`#chatSidebarClose`,function(){s(`#chatContainer`).removeClass(`chat_sidebar_active`)}),s(document).on(`click${b}`,`#chatRetry`,()=>{s(`#chatMessages`).html(R()),s(`#chatSidebarList`).html(L()),X(!0),Z()}),s(document).on(`focus${b}`,`#chatTextarea`,function(){setTimeout(()=>Y(!0),350)})},ae=()=>{s(document).off(b),clearInterval(k),k=null,E=[],D=[],O=``,A=!1,j=``,M=``,N=!1,P=!0,F=null};export{ae as cleanup,ie as init,I as render};