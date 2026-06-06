import{E as e,T as t,b as n,n as r,o as i,t as a}from"./widev-Czq8ue36.js";import{n as o}from"./vendor-Dkcx8wGc.js";import"./index-U_klNYw1.js";import{A as s,N as c,T as l,k as u,v as d}from"./firebase-BY5GISzq.js";import{n as f}from"./firebase-BOoMX3kr.js";var p=[],m=`todos`,h=``,g=null,_=!1,v=`rrhhUsuarios`,y=30,b=e=>((e.nombre||``)+` `+(e.apellidos||``)||e.usuario||`?`).trim().split(/\s+/).slice(0,2).map(e=>(e[0]||``).toUpperCase()).join(``),x=(e,t=40)=>{if(e.imagen)return`<div class="rrhh_avatar" style="width:${t}px;height:${t}px"><img src="${e.imagen}" alt="${a(e.nombre||e.usuario||`?`)}" loading="lazy"/></div>`;let n=b(e);return`<div class="rrhh_avatar rrhh_avatar_initials" data-rol="${e.rol||`usuario`}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.36)}px">${n}</div>`},S=e=>{let t=(e||`usuario`).toLowerCase();return`<span class="rrhh_rol_badge rrhh_rol_${t}">${a(t)}</span>`},C=(e,t)=>{let n=t===`activo`;return`
    <label class="rrhh_toggle" title="${n?`Activo`:`Inactivo`}">
      <input type="checkbox" class="rrhh_toggle_estado_input" data-id="${e}" ${n?`checked`:``} />
      <span class="rrhh_toggle_slider" style="--c: #29C72E"></span>
    </label>
  `},w=(e,t)=>`
    <label class="rrhh_toggle" title="${t===`si`?`Participando`:`No participa`}">
      <input type="checkbox" class="rrhh_toggle_participa" data-id="${e}" ${t===`si`?`checked`:``} />
      <span class="rrhh_toggle_slider"></span>
    </label>
  `,T=()=>{let e=h.toLowerCase().trim(),t=n(`wiSmile`)?.rol||`usuario`;return p.filter(n=>!(t===`gestor`&&n.rol===`admin`||m===`activos`&&n.participa!==`si`||m===`pendientes`&&n.estado!==`pendiente`||m===`inactivos`&&n.participa!==`no`&&n.estado!==`inactivo`||e&&![n.nombre,n.apellidos,n.usuario,n.email].join(` `).toLowerCase().includes(e)))},E=()=>`
  <div class="rrhh_wrap">

    <!-- ══ HEADER CARD ══ -->
    <div class="rrhh_header_card" id="rrhh_header_card">
      <div class="rrhh_header_card_stripe"></div>
      <div class="rrhh_header_inner">
        <div class="rrhh_header_text">
          <h1 class="rrhh_title">
            <i class="fas fa-users-gear"></i>
            Gestión de Colaboradores
          </h1>
          <p class="rrhh_subtitle">Administra el equipo, roles, estado y participación en el reto</p>
        </div>
        <div class="rrhh_header_actions">
          <button class="rrhh_refresh_btn" id="rrhh_refresh" title="Actualizar lista">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- ══ STATS BAR ══ -->
    <div class="rrhh_stats_bar" id="rrhh_stats">
      <div class="rrhh_stat_chip rrhh_stat_total">
        <span class="rrhh_stat_num" id="stat_total">—</span>
        <span class="rrhh_stat_label">Total</span>
      </div>
      <div class="rrhh_stat_chip rrhh_stat_activos">
        <span class="rrhh_stat_num" id="stat_activos">—</span>
        <span class="rrhh_stat_label">Activos</span>
      </div>
      <div class="rrhh_stat_chip rrhh_stat_pendientes">
        <span class="rrhh_stat_num" id="stat_pendientes">—</span>
        <span class="rrhh_stat_label">Pendientes</span>
      </div>
      <div class="rrhh_stat_chip rrhh_stat_inactivos">
        <span class="rrhh_stat_num" id="stat_inactivos">—</span>
        <span class="rrhh_stat_label">Inactivos</span>
      </div>
    </div>

    <!-- ══ SEARCH BAR ══ -->
    <div class="rrhh_search_bar">
      <i class="fas fa-search rrhh_search_icon"></i>
      <input
        type="text"
        id="rrhh_search"
        class="rrhh_search_input"
        placeholder="Buscar por nombre, usuario o email…"
        autocomplete="off"
      />
    </div>

    <!-- ══ FILTER TABS ══ -->
    <div class="rrhh_tabs" id="rrhh_tabs">
      <button class="rrhh_tab active" data-tab="todos">
        <i class="fas fa-list"></i> Todos
      </button>
      <button class="rrhh_tab" data-tab="activos">
        <i class="fas fa-circle-check"></i> Activos
      </button>
      <button class="rrhh_tab" data-tab="pendientes">
        <i class="fas fa-clock"></i> Pendientes
      </button>
      <button class="rrhh_tab" data-tab="inactivos">
        <i class="fas fa-circle-xmark"></i> Inactivos
      </button>
    </div>

    <!-- ══ TABLE ══ -->
    <table class="rrhh_table" id="rrhhTable">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Participa</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody id="rrhh_tbody">
        <tr>
          <td colspan="8" class="rrhh_loading_cell">
            <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>

  <!-- ══ SIDE PANEL OVERLAY ══ -->
  <div class="rrhh_overlay" id="rrhh_overlay"></div>

  <!-- ══ SIDE PANEL ══ -->
  <aside class="rrhh_panel" id="rrhh_panel" aria-hidden="true">
    <div class="rrhh_panel_header">
      <div class="rrhh_panel_avatar_wrap" id="rrhh_panel_avatar"></div>
      <div class="rrhh_panel_title_wrap">
        <h2 class="rrhh_panel_name" id="rrhh_panel_name">Colaborador</h2>
        <span class="rrhh_panel_user" id="rrhh_panel_user">@usuario</span>
      </div>
      <button class="rrhh_panel_close" id="rrhh_panel_close" aria-label="Cerrar panel">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="rrhh_panel_body">
      <form id="rrhh_edit_form" autocomplete="off">
        <input type="hidden" id="edit_uid" />

        <!-- Personal -->
        <div class="rrhh_form_section">
          <div class="rrhh_form_section_title"><i class="fas fa-id-card"></i> Datos Personales</div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_nombre">Nombre</label>
            <input class="rrhh_form_input" id="edit_nombre" type="text" placeholder="Nombre" />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_apellidos">Apellidos</label>
            <input class="rrhh_form_input" id="edit_apellidos" type="text" placeholder="Apellidos" />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_usuario">Usuario</label>
            <input class="rrhh_form_input rrhh_input_locked" id="edit_usuario" type="text" disabled />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_email">Email</label>
            <input class="rrhh_form_input rrhh_input_locked" id="edit_email" type="email" disabled />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_descripcion">Descripción</label>
            <textarea class="rrhh_form_input rrhh_form_textarea" id="edit_descripcion" placeholder="Bio o descripción…" rows="2"></textarea>
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_imagen">Imagen (URL)</label>
            <input class="rrhh_form_input" id="edit_imagen" type="url" placeholder="https://…" />
          </div>
        </div>

        <!-- Laboral -->
        <div class="rrhh_form_section">
          <div class="rrhh_form_section_title"><i class="fas fa-briefcase"></i> Datos Laborales</div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_rol">Rol</label>
            <select class="rrhh_form_select" id="edit_rol">
              <option value="usuario">Usuario</option>
              <option value="editor">Editor</option>
              <option value="gestor">Gestor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_estado">Estado</label>
            <select class="rrhh_form_select" id="edit_estado">
              <option value="activo">Activo</option>
              <option value="pendiente">Pendiente</option>
              <option value="suspendido">Suspendido</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
          <div class="rrhh_form_row rrhh_form_row_inline">
            <label class="rrhh_form_label">Participa en el reto</label>
            <label class="rrhh_toggle" id="edit_participa_toggle">
              <input type="checkbox" id="edit_participa" />
              <span class="rrhh_toggle_slider"></span>
            </label>
          </div>
        </div>

        <!-- Banca -->
        <div class="rrhh_form_section">
          <div class="rrhh_form_section_title"><i class="fas fa-building-columns"></i> Datos Bancarios</div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_banco">Banco / Método</label>
            <select class="rrhh_form_select" id="edit_banco">
              <option value="">— Seleccionar —</option>
              <option value="BCP">BCP</option>
              <option value="BBVA">BBVA</option>
              <option value="Interbank">Interbank</option>
              <option value="Yape">Yape</option>
              <option value="Plin">Plin</option>
              <option value="Efectivo">Efectivo</option>
            </select>
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_numeroCuenta">Número de Cuenta</label>
            <input class="rrhh_form_input" id="edit_numeroCuenta" type="text" placeholder="N.º cuenta o celular" />
          </div>
          <div class="rrhh_form_row">
            <label class="rrhh_form_label" for="edit_titularCuenta">Titular</label>
            <input class="rrhh_form_input" id="edit_titularCuenta" type="text" placeholder="Nombre del titular" />
          </div>
        </div>

        <div class="rrhh_panel_footer">
          <button type="submit" class="rrhh_btn_save" id="rrhh_btn_save">
            <i class="fas fa-save"></i>
            <span>Guardar cambios</span>
          </button>
        </div>
      </form>
    </div>
  </aside>
`,D=()=>{let e=p.length,t=p.filter(e=>e.participa===`si`).length,n=p.filter(e=>e.estado===`pendiente`).length,r=p.filter(e=>e.participa!==`si`).length;o(`#stat_total`).text(e),o(`#stat_activos`).text(t),o(`#stat_pendientes`).text(n),o(`#stat_inactivos`).text(r)},O=()=>{D();let e=T();if(e.sort((e,t)=>{let n=e.participa===`si`?0:1,r=t.participa===`si`?0:1;return n===r?(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`):n-r}),!e.length){let e=h.toLowerCase().trim();o(`#rrhh_tbody`).html(`
      <tr>
        <td colspan="8">
          <div class="rrhh_empty">
            <i class="fas fa-user-slash"></i>
            <p>${e?`Sin resultados para "<strong>${e}</strong>"`:`No hay colaboradores en esta categoría`}</p>
          </div>
        </td>
      </tr>
    `);return}let t=e.map(e=>{let t=e.estado===`pendiente`;return`
      <tr data-id="${e.id}" class="${e.participa===`si`?``:`rrhh_row_inactive`}">
        <td>${x(e,40)}</td>
        <td class="rrhh_nombre">${r((e.nombre||``)+` `+(e.apellidos||``)).trim()||`—`}</td>
        <td class="rrhh_usuario">@${e.usuario||`—`}</td>
        <td class="rrhh_email">${e.email||`—`}</td>
        <td>${S(e.rol)}</td>
        <td>${w(e.id,e.participa)}</td>
        <td>${C(e.id,e.estado)}</td>
        <td class="rrhh_actions_cell">
          <button class="rrhh_btn_editar" data-id="${e.id}" title="Editar colaborador">
            <i class="fas fa-pen-to-square"></i> Editar
          </button>
          ${t?`
            <button class="rrhh_btn_approve" data-id="${e.id}" title="Aprobar solicitud">
              <i class="fas fa-check"></i>
            </button>
            <button class="rrhh_btn_reject" data-id="${e.id}" title="Rechazar solicitud">
              <i class="fas fa-times"></i>
            </button>
          `:``}
        </td>
      </tr>
    `}).join(``);o(`#rrhh_tbody`).html(t)},k=e=>{let t=p.find(t=>t.id===e);if(!t)return;g=e;let i=r((t.nombre||``)+` `+(t.apellidos||``)).trim()||t.usuario||`—`;o(`#rrhh_panel_avatar`).html(x(t,52)),o(`#rrhh_panel_name`).text(i),o(`#rrhh_panel_user`).text(`@`+(t.usuario||`—`)),o(`#edit_uid`).val(e),o(`#edit_nombre`).val(t.nombre||``),o(`#edit_apellidos`).val(t.apellidos||``),o(`#edit_usuario`).val(t.usuario||``),o(`#edit_email`).val(t.email||``),o(`#edit_descripcion`).val(t.descripcion||``),o(`#edit_imagen`).val(t.imagen||``),o(`#edit_rol`).val(t.rol||`usuario`),o(`#edit_estado`).val(t.estado||`activo`),o(`#edit_participa`).prop(`checked`,t.participa===`si`),o(`#edit_banco`).val(t.banco||``),o(`#edit_numeroCuenta`).val(t.numeroCuenta||``),o(`#edit_titularCuenta`).val(t.titularCuenta||``),(n(`wiSmile`)?.rol||`usuario`)===`gestor`?o(`#edit_rol option[value="admin"]`).hide():o(`#edit_rol option[value="admin"]`).show(),o(`#rrhh_panel`).addClass(`open`).attr(`aria-hidden`,`false`),o(`#rrhh_overlay`).addClass(`visible`),o(`body`).addClass(`rrhh_no_scroll`)},A=()=>{g=null,o(`#rrhh_panel`).removeClass(`open`).attr(`aria-hidden`,`true`),o(`#rrhh_overlay`).removeClass(`visible`),o(`body`).removeClass(`rrhh_no_scroll`)},j=async n=>{let r=p.findIndex(e=>e.id===n);if(r===-1)return;let o=p[r].participa===`si`?`no`:`si`,c=a(p[r].nombre||p[r].usuario||n);try{await l(s(f,`smiles`,n),{participa:o}),p[r].participa=o,t(v),e(v,p,y),O(),i(`${c} ahora ${o===`si`?`participa ✅`:`no participa ❌`}`,o===`si`?`success`:`warning`)}catch(e){console.error(`[RRHH] toggleParticipa:`,e),i(`Error al actualizar participación`,`error`),O()}},M=async n=>{let r=p.findIndex(e=>e.id===n);if(r===-1)return;let o=p[r].estado===`activo`?`inactivo`:`activo`,c=a(p[r].nombre||p[r].usuario||n);try{await l(s(f,`smiles`,n),{estado:o}),p[r].estado=o,t(v),e(v,p,y),O(),i(`${c} ahora está ${o===`activo`?`Activo ✅`:`Inactivo ❌`}`,o===`activo`?`success`:`warning`)}catch(e){console.error(`[RRHH] toggleEstado:`,e),i(`Error al actualizar estado`,`error`),O()}},N=async()=>{if(_||!g)return;_=!0;let n=o(`#rrhh_btn_save`);n.addClass(`loading`).prop(`disabled`,!0),o(`#rrhh_header_card`).addClass(`smw_loading`);let r={nombre:o(`#edit_nombre`).val().trim(),apellidos:o(`#edit_apellidos`).val().trim(),usuario:o(`#edit_usuario`).val().trim(),email:o(`#edit_email`).val().trim(),descripcion:o(`#edit_descripcion`).val().trim(),imagen:o(`#edit_imagen`).val().trim(),rol:o(`#edit_rol`).val(),estado:o(`#edit_estado`).val(),participa:o(`#edit_participa`).is(`:checked`)?`si`:`no`,banco:o(`#edit_banco`).val(),numeroCuenta:o(`#edit_numeroCuenta`).val().trim(),titularCuenta:o(`#edit_titularCuenta`).val().trim(),updatedAt:c()};Object.keys(r).forEach(e=>{r[e]===``&&delete r[e]});try{await l(s(f,`smiles`,g),r);let n=p.findIndex(e=>e.id===g);n!==-1&&Object.assign(p[n],r),t(v),e(v,p,y),O(),A(),i(`Colaborador actualizado ✅`,`success`)}catch(e){console.error(`[RRHH] saveEdit:`,e),i(`Error al guardar cambios`,`error`)}finally{_=!1,n.removeClass(`loading`).prop(`disabled`,!1),o(`#rrhh_header_card`).removeClass(`smw_loading`)}},P=async n=>{let r=p.findIndex(e=>e.id===n);if(r===-1)return;let o=a(p[r].nombre||p[r].usuario||n);try{await l(s(f,`smiles`,n),{estado:`activo`,participa:`si`}),p[r].estado=`activo`,p[r].participa=`si`,t(v),e(v,p,y),O(),i(`${o} aprobado como colaborador ✅`,`success`)}catch(e){console.error(`[RRHH] aprobar:`,e),i(`Error al aprobar solicitud`,`error`)}},F=async n=>{let r=p.findIndex(e=>e.id===n);if(r===-1)return;let o=a(p[r].nombre||p[r].usuario||n);try{await l(s(f,`smiles`,n),{estado:`inactivo`,participa:`no`}),p[r].estado=`inactivo`,p[r].participa=`no`,t(v),e(v,p,y),O(),i(`Solicitud de ${o} rechazada`,`warning`)}catch(e){console.error(`[RRHH] rechazar:`,e),i(`Error al rechazar solicitud`,`error`)}},I=async(t=!1)=>{if(!t){let e=n(v);if(e){p=e,O();return}}o(`#rrhh_tbody`).html(`
    <tr>
      <td colspan="8" class="rrhh_loading_cell">
        <div class="rrhh_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando colaboradores…</div>
      </td>
    </tr>
  `);try{p=(await d(u(f,`smiles`))).docs.map(e=>({id:e.id,...e.data()})),p.sort((e,t)=>{let n=e.participa===`si`?0:1,r=t.participa===`si`?0:1;return n===r?(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`):n-r}),e(v,p,y),O()}catch(e){console.error(`[RRHH] loadUsuarios:`,e),o(`#rrhh_tbody`).html(`
      <tr>
        <td colspan="8">
          <div class="rrhh_empty rrhh_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar colaboradores. Intenta de nuevo.</p>
          </div>
        </td>
      </tr>
    `),i(`Error al cargar colaboradores`,`error`)}},L=async()=>{o(`.rrhh_wrap`).addClass(`visible`),window.__WIREADY__=!0,I(!1),o(document).on(`input.rrhh`,`#rrhh_search`,function(){h=o(this).val(),O()}),o(document).on(`click.rrhh`,`.rrhh_tab`,function(){m=o(this).data(`tab`),o(`.rrhh_tab`).removeClass(`active`),o(this).addClass(`active`),O()}),o(document).on(`click.rrhh`,`#rrhh_refresh`,async function(){let e=o(this);e.addClass(`rrhh_spinning`),h=``,m=`todos`,o(`#rrhh_search`).val(``),o(`.rrhh_tab`).removeClass(`active`),o(`.rrhh_tab[data-tab="todos"]`).addClass(`active`),await I(!0),e.removeClass(`rrhh_spinning`),i(`Lista actualizada`,`success`)}),o(document).on(`change.rrhh`,`.rrhh_toggle_participa`,function(){j(o(this).data(`id`))}),o(document).on(`change.rrhh`,`.rrhh_toggle_estado_input`,function(){M(o(this).data(`id`))}),o(document).on(`click.rrhh`,`.rrhh_btn_editar`,function(e){e.stopPropagation(),k(o(this).data(`id`))}),o(document).on(`click.rrhh`,`#rrhh_panel_close`,A),o(document).on(`click.rrhh`,`#rrhh_overlay`,A),o(document).on(`keydown.rrhh`,function(e){e.key===`Escape`&&(A(),_closeModal())}),o(document).on(`submit.rrhh`,`#rrhh_edit_form`,function(e){e.preventDefault(),N()}),o(document).on(`click.rrhh`,`.rrhh_btn_approve`,function(e){e.stopPropagation(),P(o(this).data(`id`))}),o(document).on(`click.rrhh`,`.rrhh_btn_reject`,function(e){e.stopPropagation(),F(o(this).data(`id`))})},R=()=>{o(document).off(`.rrhh`),o(`body`).removeClass(`rrhh_no_scroll`),p=[],m=`todos`,h=``,g=null,_=!1};export{R as cleanup,L as init,E as render};