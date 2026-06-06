import{_ as e,b as t,f as n,o as r}from"./widev-BKJDWmod.js";import{n as i}from"./vendor-Dkcx8wGc.js";import{_ as a,g as o,o as s,r as c,s as l,u}from"./firebase-C5pCnWkN.js";import{n as d}from"./firebase-CHrAjG0U.js";var f=()=>t(`wiSmile`),p=[],m=`todos`,h=()=>{let e=f();return!e||e.rol!==`admin`?`<div class="adu_page"><div class="adu_empty"><i class="fas fa-ban"></i><p>Acceso denegado.</p></div></div>`:`
  <div class="adu_page">

    <!-- HERO PRO -->
    <div class="adu_hero">
      <div class="adu_hero_left">
        <div class="adu_hero_icon"><i class="fas fa-users-cog"></i></div>
        <div class="adu_hero_txt">
          <div class="adu_badge"><i class="fas fa-shield-alt"></i> Seguridad Global</div>
          <h1 class="adu_hero_title">Usuarios Registrados</h1>
          <p class="adu_hero_sub">Administra todas las cuentas, empresas y gestores de la plataforma.</p>
        </div>
      </div>
      <div class="adu_hero_actions">
        <button class="adu_btn_primary" id="adu_btn_sync"><i class="fas fa-sync-alt"></i> Actualizar Base</button>
      </div>
    </div>

    <!-- CONTROLES -->
    <div class="adu_controls">
      <div class="adu_filters" id="adu_filters">
        <button class="adu_filter_btn active" data-rol="todos">Todos</button>
        <button class="adu_filter_btn" data-rol="usuario">Usuarios</button>
        <button class="adu_filter_btn" data-rol="smile">Smiles</button>
        <button class="adu_filter_btn" data-rol="gestor">Gestores</button>
        <button class="adu_filter_btn" data-rol="empresa">Empresas</button>
        <button class="adu_filter_btn" data-rol="admin">Admins</button>
      </div>
      <div class="adu_search">
        <i class="fas fa-search"></i>
        <input type="text" id="adu_input_search" placeholder="Buscar por email, usuario o nombre..." autocomplete="off">
      </div>
    </div>

    <!-- TABLA DE USUARIOS -->
    <div class="adu_table_card">
      <div class="adu_table_wrap">
        <table class="adu_table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Rol de Acceso</th>
              <th>Dependencia</th>
              <th>Registro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="adu_table_body">
            <tr><td colspan="5"><div class="adu_empty" style="padding:4vh"><i class="fas fa-spinner fa-spin"></i><p>Cargando base de datos...</p></div></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- MODALES -->
    <div id="adu_modales"></div>

  </div>`},g=async()=>{let e=f();!e||e.rol!==`admin`||(i(document).off(`.adu`),await v(),i(document).on(`input.adu`,`#adu_input_search`,function(){y()}),i(document).on(`click.adu`,`.adu_filter_btn`,function(){i(`.adu_filter_btn`).removeClass(`active`),i(this).addClass(`active`),m=i(this).data(`rol`),y()}),i(document).on(`click.adu`,`#adu_btn_sync`,async function(){let e=i(this).find(`i`).addClass(`fa-spin`);await v(!0),setTimeout(()=>e.removeClass(`fa-spin`),500)}),i(document).on(`click.adu`,`.adu_btn_ico.danger`,async function(){let e=i(this).data(`id`);if(confirm(`¿Atención! Eliminarás a "${e}" de forma permanente. ¿Continuar?`))try{await c(a(d,`smiles`,e)),r(`Usuario eliminado`,`info`),await v(!0)}catch{r(`Error al eliminar`,`error`)}}),i(document).on(`click.adu`,`.adu_btn_ico.view`,function(){let e=i(this).data(`id`),t=p.find(t=>t.id===e);t&&b(t)}),i(document).on(`click.adu`,`.adu_modal_close, .adu_btn_cancel`,()=>i(`#adu_modales`).html(``)),i(document).on(`click.adu`,`.adu_modal_bg`,e=>{i(e.target).hasClass(`adu_modal_bg`)&&i(`#adu_modales`).html(``)}))},_=()=>{i(document).off(`.adu`)};async function v(e=!1){try{p=(await s(u(o(d,`smiles`),l(300)))).docs.map(e=>({id:e.id,usuario:e.id,...e.data()})),y()}catch(e){console.error(`[admin_usuarios] Error:`,e),i(`#adu_table_body`).html(`<tr><td colspan="5"><div class="adu_empty" style="padding:4vh"><i class="fas fa-exclamation-triangle"></i><p>Error de conexión.</p></div></td></tr>`)}}function y(){let t=(i(`#adu_input_search`).val()||``).toLowerCase(),r=p.filter(e=>!(m!==`todos`&&(e.rol||`usuario`)!==m||t&&![e.id,e.email,e.nombre,e.nombres,e.apellidos].join(` `).toLowerCase().includes(t)));if(!r.length){i(`#adu_table_body`).html(`<tr><td colspan="5"><div class="adu_empty" style="padding:4vh"><i class="fas fa-user-slash"></i><p>No se encontraron usuarios.</p></div></td></tr>`);return}let a=r.map(t=>{let r=t.nombres||t.nombre||t.id,i=t.email||`—`,a=n(r),o=t.rol||`usuario`,s=t.fecha?.toDate?e(t.fecha):`—`;return`
      <tr class="adu_row">
        <td>
          <div class="adu_user_cell">
            <div class="adu_av">${a}</div>
            <div>
              <div class="adu_nom">${r}</div>
              <div class="adu_eml">${i}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="adu_role_badge ${o}"><i class="fas fa-circle" style="font-size:0.6em;margin-right:0.4vh"></i> ${o}</div>
        </td>
        <td>
          <span style="color:var(--tx3);font-weight:600"><i class="fas fa-building"></i> ${t.empresa||t.empresa_id||t.gestor||t.gestor_id||`Independiente`}</span>
        </td>
        <td>
          <div class="adu_date">${s.split(`,`)[0]}<small>${s.split(`,`)[1]||``}</small></div>
        </td>
        <td>
          <div class="adu_actions">
            <button class="adu_btn_ico view" data-id="${t.id}" title="Ver detalles"><i class="fas fa-eye"></i></button>
            <button class="adu_btn_ico danger" data-id="${t.id}" title="Eliminar usuario"><i class="fas fa-trash"></i></button>
          </div>
        </td>
      </tr>`}).join(``);i(`#adu_table_body`).html(a)}function b(t){let n=t.fecha?.toDate?e(t.fecha):`Desconocido`;i(`#adu_modales`).html(`
    <div class="adu_modal_bg">
      <div class="adu_modal_card">
        <div class="adu_modal_hdr">
          <h3 class="adu_modal_title"><i class="fas fa-address-card"></i> Información del Usuario</h3>
          <button class="adu_modal_close"><i class="fas fa-times"></i></button>
        </div>
        <div class="adu_modal_body">
          <div class="adu_field">
            <label>Username (ID)</label>
            <input type="text" class="adu_input" value="${t.id}" disabled>
          </div>
          <div class="adu_field">
            <label>Nombres y Apellidos</label>
            <input type="text" class="adu_input" value="${t.nombres||t.nombre||``} ${t.apellidos||``}" disabled>
          </div>
          <div class="adu_field">
            <label>Correo Electrónico</label>
            <input type="text" class="adu_input" value="${t.email||`—`}" disabled>
          </div>
          <div style="display:flex;gap:2vh">
            <div class="adu_field" style="flex:1">
              <label>Rol de Acceso</label>
              <input type="text" class="adu_input" value="${t.rol||`usuario`}" style="text-transform:uppercase;font-weight:bold" disabled>
            </div>
            <div class="adu_field" style="flex:1">
              <label>Fecha de Registro</label>
              <input type="text" class="adu_input" value="${n}" disabled>
            </div>
          </div>
        </div>
        <div class="adu_modal_foot">
          <button class="adu_btn_cancel">Cerrar panel</button>
        </div>
      </div>
    </div>`)}export{_ as cleanup,g as init,h as render};