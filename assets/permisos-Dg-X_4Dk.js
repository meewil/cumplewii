import{b as e,f as t,o as n}from"./widev-Czq8ue36.js";import{n as r}from"./vendor-Dkcx8wGc.js";import{A as i,E as a,S as o,T as s,_ as c,k as l,v as u}from"./firebase-BY5GISzq.js";import{n as d}from"./firebase-BOoMX3kr.js";var f=()=>e(`wiSmile`),p=[],m=()=>{let e=f();return!e||e.rol!==`admin`?`<div class="adp_page"><div class="adp_empty"><i class="fas fa-ban"></i><p>Acceso denegado.</p></div></div>`:`
  <div class="adp_page">

    <!-- HERO PRO -->
    <div class="adp_hero">
      <div class="adp_hero_left">
        <div class="adp_hero_icon"><i class="fas fa-user-shield"></i></div>
        <div class="adp_hero_txt">
          <div class="adp_badge"><i class="fas fa-key"></i> Autorización</div>
          <h1 class="adp_hero_title">Gestión de Permisos</h1>
          <p class="adp_hero_sub">Promueve usuarios a Editores, Gestores o revoca sus accesos.</p>
        </div>
      </div>
    </div>

    <!-- BUSCADOR DIRECTO -->
    <div class="adp_finder">
      <div class="adp_finder_txt">
        <h3 class="adp_finder_tit">Buscar Usuario</h3>
        <p class="adp_finder_sub">Ingresa el ID (usuario) exacto para modificar su rol.</p>
      </div>
      <div class="adp_finder_inp_wrap">
        <input type="text" id="adp_inp_search" class="adp_finder_inp" placeholder="Ej. geluksee..." autocomplete="off">
        <button id="adp_btn_search" class="adp_finder_btn"><i class="fas fa-search"></i> Buscar</button>
      </div>
    </div>

    <!-- GRID DE PRIVILEGIADOS -->
    <h2 class="adp_sec_title"><i class="fas fa-star"></i> Cuentas Privilegiadas Actuales</h2>
    <div class="adp_grid" id="adp_grid">
      <div class="adp_empty"><i class="fas fa-spinner fa-spin"></i><p>Buscando cuentas especiales...</p></div>
    </div>

    <!-- MODALES -->
    <div id="adp_modales"></div>

  </div>`},h=async()=>{let t=f();!t||t.rol!==`admin`||(r(document).off(`.adp`),await v(),r(document).on(`click.adp`,`#adp_btn_search`,async function(){let e=r(`#adp_inp_search`).val().trim();if(!e)return;let t=r(this).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i>`);try{let t=await c(i(d,`smiles`,e));t.exists()?b({id:t.id,...t.data()}):n(`Usuario no encontrado`,`warning`)}catch{n(`Error en la búsqueda`,`error`)}t.prop(`disabled`,!1).html(`<i class="fas fa-search"></i> Buscar`)}),r(document).on(`keydown.adp`,`#adp_inp_search`,e=>{e.key===`Enter`&&r(`#adp_btn_search`).click()}),r(document).on(`click.adp`,`.adp_btn_edit`,function(){let e=r(this).data(`id`),t=p.find(t=>t.id===e);t&&b(t)}),r(document).on(`click.adp`,`.adp_role_opt`,function(){r(`.adp_role_opt`).removeClass(`selected`),r(this).addClass(`selected`)}),r(document).on(`click.adp`,`#adp_btn_save_rol`,async function(){let a=r(this).data(`id`),o=r(`.adp_role_opt.selected`).data(`rol`);if(!o||a===t.usuario&&o!==`admin`&&!confirm(`¿Estás seguro de quitarte los permisos de admin a ti mismo? Cerrarás tu propia sesión.`))return;let c=r(this).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Guardando...`);try{if(await s(i(d,`smiles`,a),{rol:o}),n(`Rol actualizado a ${o.toUpperCase()}`,`success`),_(),r(`#adp_inp_search`).val(``),await v(),a===t.usuario&&o!==`admin`){let t=e(`wiSmile`);t.rol=o,localStorage.setItem(`wiSmile`,JSON.stringify(t)),setTimeout(()=>location.reload(),1e3)}}catch{n(`Error al guardar`,`error`),c.prop(`disabled`,!1).html(`Guardar Permisos`)}}),r(document).on(`click.adp`,`.adp_modal_close, .adp_btn_cancel`,_),r(document).on(`click.adp`,`.adp_modal_bg`,e=>{r(e.target).hasClass(`adp_modal_bg`)&&_()}))},g=()=>{r(document).off(`.adp`)};function _(){r(`#adp_modales`).html(``)}async function v(){try{p=(await u(o(l(d,`smiles`),a(`rol`,`in`,[`editor`,`gestor`,`admin`])))).docs.map(e=>({id:e.id,...e.data()})),y()}catch(e){console.error(`[admin_permisos] Error VIPs:`,e),r(`#adp_grid`).html(`<div class="adp_empty"><i class="fas fa-exclamation-triangle"></i><p>Error cargando cuentas VIP.</p></div>`)}}function y(){if(!p.length){r(`#adp_grid`).html(`<div class="adp_empty"><i class="fas fa-user-shield"></i><p>No hay cuentas privilegiadas asignadas aún.</p></div>`);return}let e={editor:`#10b981`,gestor:`#8b5cf6`,admin:`#020617`},n=p.map(n=>{let r=n.rol||`usuario`,i=e[r]||`#38bdf8`,a=n.nombres||n.nombre||n.id,o=n.email||`Sin correo registrado`;return`
      <div class="adp_card" style="--clr:${i}">
        <div class="adp_c_rol">${r}</div>
        <div class="adp_av">${t(a)}</div>
        <div class="adp_nom">${a}</div>
        <div class="adp_eml">${o}</div>
        <button class="adp_btn_edit" data-id="${n.id}"><i class="fas fa-sliders-h"></i> Editar Rol</button>
      </div>`}).join(``);r(`#adp_grid`).html(n)}function b(e){let n=e.nombres||e.nombre||e.id,i=t(n),a=e.rol||`usuario`,o=[{id:`usuario`,ic:`fa-user`,tit:`Usuario`,sub:`Acceso estándar para registrar y ver ventas.`,c:`#38bdf8`},{id:`editor`,ic:`fa-edit`,tit:`Editor`,sub:`Acceso para redactar artículos del blog y lecciones.`,c:`#10b981`},{id:`gestor`,ic:`fa-chalkboard-teacher`,tit:`Gestor`,sub:`Gestión de RRHH, precios y reportes.`,c:`#8b5cf6`},{id:`admin`,ic:`fa-crown`,tit:`Admin`,sub:`Control total de la plataforma y usuarios.`,c:`#020617`}].map(e=>`
    <div class="adp_role_opt ${a===e.id?`selected`:``}" data-rol="${e.id}" style="--ac:${e.c}">
      <i class="fas ${e.ic}"></i>
      <b>${e.tit}</b>
      <small>${e.sub}</small>
    </div>
  `).join(``);r(`#adp_modales`).html(`
    <div class="adp_modal_bg">
      <div class="adp_modal_card">
        <div class="adp_modal_hdr">
          <h3 class="adp_modal_title"><i class="fas fa-user-tag"></i> Asignar Permisos</h3>
          <button class="adp_modal_close"><i class="fas fa-times"></i></button>
        </div>
        <div class="adp_modal_body">
          <div class="adp_usr_preview">
            <div class="adp_av" style="width:5vh;height:5vh;margin:0;font-size:2vh">${i}</div>
            <div>
              <div style="font-weight:800;font-size:var(--fz_m1);color:var(--tx)">${n}</div>
              <div style="font-size:var(--fz_s4);color:var(--tx3)">@${e.id}</div>
            </div>
          </div>
          <div style="font-weight:700;color:var(--tx)">Selecciona el nivel de acceso:</div>
          <div class="adp_roles_grid">
            ${o}
          </div>
        </div>
        <div class="adp_modal_foot">
          <button class="adp_btn_cancel">Cancelar</button>
          <button class="adp_btn_save" id="adp_btn_save_rol" data-id="${e.id}">Guardar Permisos</button>
        </div>
      </div>
    </div>`)}export{g as cleanup,h as init,m as render};