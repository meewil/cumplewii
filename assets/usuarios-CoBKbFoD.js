import{E as e,T as t,b as n,n as r,o as i,t as a}from"./widev-BKJDWmod.js";import{n as o}from"./vendor-Dkcx8wGc.js";import{_ as s,b as c,g as l,o as u,p as d,r as f}from"./firebase-C5pCnWkN.js";import{n as p}from"./firebase-CHrAjG0U.js";var m=()=>n(`wiSmile`),h=()=>m()?.rol===`admin`,g=[],_=`todos`,v=``,y=null,b=!1,x=`aduUsuarios`,S=30,C=e=>((e.nombre||``)+` `+(e.apellidos||``)||e.usuario||`?`).trim().split(/\s+/).slice(0,2).map(e=>(e[0]||``).toUpperCase()).join(``),w=(e,t=42)=>{if(e.avatar)return`<div class="adu_avatar" style="width:${t}px;height:${t}px"><img src="${e.avatar}" alt="${a(e.nombre||e.usuario||`?`)}" loading="lazy"/></div>`;let n=C(e);return`<div class="adu_avatar adu_avatar_ini" data-rol="${(e.rol||`usuario`).toLowerCase()}" style="width:${t}px;height:${t}px;font-size:${Math.round(t*.36)}px">${n}</div>`},T=e=>{let t=(e||`usuario`).toLowerCase();return`<span class="adu_rol_badge adu_rol_${t}">${a(t)}</span>`},E=e=>{let t=(e||`free`).toLowerCase();return`<span class="adu_plan_badge adu_plan_${t}">${t.toUpperCase()}</span>`},D=e=>{let t=(e||`activo`).toLowerCase();return`<span class="adu_status adu_status_${t}">${a(t)}</span>`},O=(e,t)=>`<label class="adu_toggle" title="${t?`Activo`:`Inactivo`}">
    <input type="checkbox" class="adu_toggle_activo" data-id="${e}" ${t?`checked`:``}/>
    <span class="adu_toggle_slider" style="--c:#22c55e"></span>
  </label>`,k=()=>{let e=v.toLowerCase().trim();return g.filter(t=>!(_===`activos`&&!t.activo||_===`pendientes`&&(t.estado||`activo`)!==`pendiente`||_===`suspendidos`&&(t.estado||`activo`)!==`suspendido`||_===`inactivos`&&t.activo!==!1&&(t.estado||`activo`)!==`inactivo`||e&&![t.nombre,t.apellidos,t.usuario,t.email,t.id].join(` `).toLowerCase().includes(e)))},A=()=>{let e=g.length,t=g.filter(e=>e.activo===!0).length,n=g.filter(e=>(e.estado||``)===`pendiente`).length,r=g.filter(e=>e.activo===!1||(e.estado||``)===`inactivo`).length;o(`#adu_stat_total`).text(e),o(`#adu_stat_activos`).text(t),o(`#adu_stat_pendientes`).text(n),o(`#adu_stat_inactivos`).text(r)},j=()=>h()?`
  <div class="adu_wrap" id="adu_wrap">

    <!-- ══ HEADER CARD ══ -->
    <div class="adu_header_card" id="adu_header_card">
      <div class="adu_header_card_stripe"></div>
      <div class="adu_header_inner">
        <div class="adu_header_text">
          <h1 class="adu_title">
            <i class="fas fa-users-cog"></i>
            Gestión de Usuarios
          </h1>
          <p class="adu_subtitle">Administra cuentas, roles, planes y estado de cada usuario de la plataforma</p>
        </div>
        <div class="adu_header_actions">
          <button class="adu_refresh_btn" id="adu_refresh" title="Actualizar lista">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- ══ STATS BAR ══ -->
    <div class="adu_stats_bar" id="adu_stats">
      <div class="adu_stat_chip adu_stat_total">
        <span class="adu_stat_num" id="adu_stat_total">—</span>
        <span class="adu_stat_label">Total</span>
      </div>
      <div class="adu_stat_chip adu_stat_activos">
        <span class="adu_stat_num" id="adu_stat_activos">—</span>
        <span class="adu_stat_label">Activos</span>
      </div>
      <div class="adu_stat_chip adu_stat_pendientes">
        <span class="adu_stat_num" id="adu_stat_pendientes">—</span>
        <span class="adu_stat_label">Pendientes</span>
      </div>
      <div class="adu_stat_chip adu_stat_inactivos">
        <span class="adu_stat_num" id="adu_stat_inactivos">—</span>
        <span class="adu_stat_label">Inactivos</span>
      </div>
    </div>

    <!-- ══ SEARCH BAR ══ -->
    <div class="adu_search_bar">
      <i class="fas fa-search adu_search_icon"></i>
      <input
        type="text"
        id="adu_search"
        class="adu_search_input"
        placeholder="Buscar por nombre, usuario o email…"
        autocomplete="off"
      />
    </div>

    <!-- ══ FILTER TABS ══ -->
    <div class="adu_tabs" id="adu_tabs">
      <button class="adu_tab active" data-tab="todos">
        <i class="fas fa-list"></i> Todos
      </button>
      <button class="adu_tab" data-tab="activos">
        <i class="fas fa-circle-check"></i> Activos
      </button>
      <button class="adu_tab" data-tab="pendientes">
        <i class="fas fa-clock"></i> Pendientes
      </button>
      <button class="adu_tab" data-tab="suspendidos">
        <i class="fas fa-ban"></i> Suspendidos
      </button>
      <button class="adu_tab" data-tab="inactivos">
        <i class="fas fa-circle-xmark"></i> Inactivos
      </button>
    </div>

    <!-- ══ TABLE ══ -->
    <div class="adu_table_outer">
      <table class="adu_table" id="adu_table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Plan</th>
            <th>Activo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="adu_tbody">
          <tr><td colspan="9" class="adu_loading_cell">
            <div class="adu_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando usuarios…</div>
          </td></tr>
        </tbody>
      </table>
    </div>

  </div>

  <!-- ══ OVERLAY ══ -->
  <div class="adu_overlay" id="adu_overlay"></div>

  <!-- ══ SIDE PANEL ══ -->
  <aside class="adu_panel" id="adu_panel" aria-hidden="true">
    <div class="adu_panel_header">
      <div class="adu_panel_avatar_wrap" id="adu_panel_avatar"></div>
      <div class="adu_panel_title_wrap">
        <h2 class="adu_panel_name" id="adu_panel_name">Usuario</h2>
        <span class="adu_panel_user" id="adu_panel_user">@usuario</span>
      </div>
      <button class="adu_panel_close" id="adu_panel_close" aria-label="Cerrar panel">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="adu_panel_body">
      <form id="adu_edit_form" autocomplete="off">
        <input type="hidden" id="edit_uid"/>

        <!-- Datos Personales -->
        <div class="adu_form_section">
          <div class="adu_form_section_title"><i class="fas fa-id-card"></i> Datos Personales</div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_nombre">Nombre</label>
            <input class="adu_form_input" id="edit_nombre" type="text" placeholder="Nombre"/>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_apellidos">Apellidos</label>
            <input class="adu_form_input" id="edit_apellidos" type="text" placeholder="Apellidos"/>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_usuario">Usuario (ID)</label>
            <input class="adu_form_input adu_input_locked" id="edit_usuario" type="text" disabled/>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_email">Email</label>
            <input class="adu_form_input adu_input_locked" id="edit_email" type="email" disabled/>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_bio">Bio</label>
            <textarea class="adu_form_input adu_form_textarea" id="edit_bio" placeholder="Descripción breve del usuario…" rows="2"></textarea>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_avatar">Avatar (URL)</label>
            <input class="adu_form_input" id="edit_avatar" type="url" placeholder="https://tu-foto.com/imagen.jpg"/>
          </div>
        </div>

        <!-- Datos de Cuenta -->
        <div class="adu_form_section">
          <div class="adu_form_section_title"><i class="fas fa-shield-halved"></i> Cuenta y Acceso</div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_rol">Rol de acceso</label>
            <select class="adu_form_select" id="edit_rol">
              <option value="usuario">Usuario</option>
              <option value="smile">Smile</option>
              <option value="gestor">Gestor</option>
              <option value="empresa">Empresa</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_plan">Plan de acceso</label>
            <select class="adu_form_select" id="edit_plan">
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="vip">Vip</option>
            </select>
          </div>
          <div class="adu_form_row">
            <label class="adu_form_label" for="edit_estado">Estado</label>
            <select class="adu_form_select" id="edit_estado">
              <option value="activo">Activo</option>
              <option value="pendiente">Pendiente</option>
              <option value="suspendido">Suspendido</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
          <div class="adu_form_row adu_form_row_inline">
            <label class="adu_form_label">Cuenta activa</label>
            <label class="adu_toggle" id="edit_activo_toggle">
              <input type="checkbox" id="edit_activo"/>
              <span class="adu_toggle_slider" style="--c:#22c55e"></span>
            </label>
          </div>
        </div>

        <div class="adu_panel_footer">
          <button type="submit" class="adu_btn_save" id="adu_btn_save">
            <i class="fas fa-save"></i>
            <span>Guardar cambios</span>
          </button>
        </div>
      </form>
    </div>
  </aside>
`:`<div class="adu_wrap"><div class="adu_empty"><i class="fas fa-ban"></i><p>Acceso denegado.</p></div></div>`,M=()=>{A();let e=k();if(e.sort((e,t)=>{let n=+!e.activo,r=+!t.activo;return n===r?(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`):n-r}),!e.length){let e=v.trim();o(`#adu_tbody`).html(`
      <tr><td colspan="9">
        <div class="adu_empty">
          <i class="fas fa-user-slash"></i>
          <p>${e?`Sin resultados para "<strong>${e}</strong>"`:`No hay usuarios en esta categoría`}</p>
        </div>
      </td></tr>`);return}let t=e.map(e=>{let t=(e.estado||``)===`pendiente`,n=r((e.nombre||``)+` `+(e.apellidos||``)).trim()||`—`;return`
      <tr data-id="${e.id}" class="${e.activo?``:`adu_row_inactive`}">
        <td>${w(e,40)}</td>
        <td class="adu_nombre">${n}</td>
        <td class="adu_usuario">@${e.usuario||e.id||`—`}</td>
        <td class="adu_email">${e.email||`—`}</td>
        <td>${T(e.rol)}</td>
        <td>${E(e.plan)}</td>
        <td>${O(e.id,e.activo)}</td>
        <td>${D(e.estado)}</td>
        <td class="adu_actions_cell">
          <button class="adu_btn_editar" data-id="${e.id}" title="Editar usuario">
            <i class="fas fa-pen-to-square"></i> Editar
          </button>
          ${t?`
            <button class="adu_btn_approve" data-id="${e.id}" title="Aprobar cuenta">
              <i class="fas fa-check"></i>
            </button>
            <button class="adu_btn_reject" data-id="${e.id}" title="Rechazar solicitud">
              <i class="fas fa-times"></i>
            </button>`:``}
          <button class="adu_btn_delete" data-id="${e.id}" title="Eliminar usuario">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>`}).join(``);o(`#adu_tbody`).html(t)},N=e=>{let t=g.find(t=>t.id===e);if(!t)return;y=e;let n=r((t.nombre||``)+` `+(t.apellidos||``)).trim()||t.usuario||`—`;o(`#adu_panel_avatar`).html(w(t,52)),o(`#adu_panel_name`).text(n),o(`#adu_panel_user`).text(`@`+(t.usuario||t.id||`—`)),o(`#edit_uid`).val(e),o(`#edit_nombre`).val(t.nombre||``),o(`#edit_apellidos`).val(t.apellidos||``),o(`#edit_usuario`).val(t.usuario||t.id||``),o(`#edit_email`).val(t.email||``),o(`#edit_bio`).val(t.bio||``),o(`#edit_avatar`).val(t.avatar||``),o(`#edit_rol`).val(t.rol||`usuario`),o(`#edit_plan`).val(t.plan||`free`),o(`#edit_estado`).val(t.estado||`activo`),o(`#edit_activo`).prop(`checked`,t.activo!==!1),o(`#adu_panel`).addClass(`open`).attr(`aria-hidden`,`false`),o(`#adu_overlay`).addClass(`visible`),o(`body`).addClass(`adu_no_scroll`)},P=()=>{y=null,o(`#adu_panel`).removeClass(`open`).attr(`aria-hidden`,`true`),o(`#adu_overlay`).removeClass(`visible`),o(`body`).removeClass(`adu_no_scroll`)},F=async n=>{let r=g.findIndex(e=>e.id===n);if(r===-1)return;let o=!g[r].activo,c=a(g[r].nombre||g[r].usuario||n);try{await d(s(p,`smiles`,n),{activo:o}),g[r].activo=o,t(x),e(x,g,S),M(),i(`${c} ${o?`activado ✅`:`desactivado ❌`}`,o?`success`:`warning`)}catch(e){console.error(`[adu] toggleActivo:`,e),i(`Error al cambiar estado`,`error`),M()}},I=async n=>{let r=g.findIndex(e=>e.id===n);if(r===-1)return;let o=a(g[r].nombre||g[r].usuario||n);try{await d(s(p,`smiles`,n),{estado:`activo`,activo:!0}),g[r].estado=`activo`,g[r].activo=!0,t(x),e(x,g,S),M(),i(`${o} aprobado ✅`,`success`)}catch{i(`Error al aprobar`,`error`)}},L=async n=>{let r=g.findIndex(e=>e.id===n);if(r===-1)return;let o=a(g[r].nombre||g[r].usuario||n);try{await d(s(p,`smiles`,n),{estado:`inactivo`,activo:!1}),g[r].estado=`inactivo`,g[r].activo=!1,t(x),e(x,g,S),M(),i(`Solicitud de ${o} rechazada`,`warning`)}catch{i(`Error al rechazar`,`error`)}},R=async n=>{let r=g.find(e=>e.id===n),o=a(r?.nombre||r?.usuario||n);if(confirm(`¿Eliminar al usuario "${o}"? Esta acción es permanente.`))try{await f(s(p,`smiles`,n)),g=g.filter(e=>e.id!==n),t(x),e(x,g,S),M(),i(`${o} eliminado`,`info`)}catch{i(`Error al eliminar`,`error`)}},z=async()=>{if(b||!y)return;b=!0;let n=o(`#adu_btn_save`);n.addClass(`loading`).prop(`disabled`,!0),o(`#adu_header_card`).addClass(`adu_loading`);let r={nombre:o(`#edit_nombre`).val().trim(),apellidos:o(`#edit_apellidos`).val().trim(),bio:o(`#edit_bio`).val().trim(),avatar:o(`#edit_avatar`).val().trim(),rol:o(`#edit_rol`).val(),plan:o(`#edit_plan`).val(),estado:o(`#edit_estado`).val(),activo:o(`#edit_activo`).is(`:checked`),actualizado:c()};Object.keys(r).forEach(e=>{r[e]===``&&e!==`activo`&&delete r[e]});try{await d(s(p,`smiles`,y),r);let n=g.findIndex(e=>e.id===y);n!==-1&&Object.assign(g[n],r),t(x),e(x,g,S),M(),P(),i(`Usuario actualizado ✅`,`success`)}catch(e){console.error(`[adu] saveEdit:`,e),i(`Error al guardar cambios`,`error`)}finally{b=!1,n.removeClass(`loading`).prop(`disabled`,!1),o(`#adu_header_card`).removeClass(`adu_loading`)}},B=async(t=!1)=>{if(!t){let e=n(x);if(e){g=e,M();return}}o(`#adu_tbody`).html(`
    <tr><td colspan="9" class="adu_loading_cell">
      <div class="adu_spinner"><i class="fas fa-circle-notch fa-spin"></i> Cargando usuarios…</div>
    </td></tr>`);try{g=(await u(l(p,`smiles`))).docs.map(e=>({id:e.id,usuario:e.id,...e.data()})),g.sort((e,t)=>(e.nombre||e.usuario||``).localeCompare(t.nombre||t.usuario||``,`es`)),e(x,g,S),M()}catch(e){console.error(`[adu] loadUsuarios:`,e),o(`#adu_tbody`).html(`
      <tr><td colspan="9">
        <div class="adu_empty adu_empty_error">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Error al cargar usuarios. Intenta de nuevo.</p>
        </div>
      </td></tr>`),i(`Error al cargar usuarios`,`error`)}},V=async()=>{h()&&(o(document).off(`.adu`),_=`todos`,v=``,y=null,o(`#adu_wrap`).addClass(`visible`),B(!1),o(document).on(`input.adu`,`#adu_search`,function(){v=o(this).val(),M()}),o(document).on(`click.adu`,`.adu_tab`,function(){_=o(this).data(`tab`),o(`.adu_tab`).removeClass(`active`),o(this).addClass(`active`),M()}),o(document).on(`click.adu`,`#adu_refresh`,async function(){let e=o(this);e.addClass(`adu_spinning`),v=``,_=`todos`,o(`#adu_search`).val(``),o(`.adu_tab`).removeClass(`active`),o(`.adu_tab[data-tab="todos"]`).addClass(`active`),await B(!0),e.removeClass(`adu_spinning`),i(`Lista actualizada`,`success`)}),o(document).on(`change.adu`,`.adu_toggle_activo`,function(){F(o(this).data(`id`))}),o(document).on(`click.adu`,`.adu_btn_editar`,function(e){e.stopPropagation(),N(o(this).data(`id`))}),o(document).on(`click.adu`,`#adu_panel_close`,P),o(document).on(`click.adu`,`#adu_overlay`,P),o(document).on(`keydown.adu`,function(e){e.key===`Escape`&&P()}),o(document).on(`submit.adu`,`#adu_edit_form`,function(e){e.preventDefault(),z()}),o(document).on(`click.adu`,`.adu_btn_approve`,function(e){e.stopPropagation(),I(o(this).data(`id`))}),o(document).on(`click.adu`,`.adu_btn_reject`,function(e){e.stopPropagation(),L(o(this).data(`id`))}),o(document).on(`click.adu`,`.adu_btn_delete`,function(e){e.stopPropagation(),R(o(this).data(`id`))}))},H=()=>{o(document).off(`.adu`),o(`body`).removeClass(`adu_no_scroll`),g=[],_=`todos`,v=``,y=null,b=!1};export{H as cleanup,V as init,j as render};