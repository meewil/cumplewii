import{t as e}from"./wii-DFanSMW3.js";import{E as t,b as n,o as r}from"./widev-BKJDWmod.js";import{n as i}from"./vendor-Dkcx8wGc.js";import{g as a,i as o,m as s,u as c}from"./firebase-C5pCnWkN.js";import{n as l}from"./firebase-CHrAjG0U.js";var u=()=>n(`wiSmile`),d=`amUsersTotal`,f=`amUsersPro`,p=`amOrgsTotal`,m=`amLessonsTotal`,h=()=>{let t=u();return!t||t.rol!==`admin`?`<div class="am_page"><div class="am_empty"><i class="fas fa-ban"></i> Acceso denegado.</div></div>`:`
  <div class="am_page">
    
    <!-- ══ COMPACT HERO ══ -->
    <div class="am_hero">
      <div class="am_hero_left">
        <div class="am_hero_icon"><i class="fas fa-globe-americas"></i></div>
        <div class="am_hero_txt">
          <div class="am_badge"><i class="fas fa-chart-line"></i> Dashboard Global</div>
          <h1 class="am_hero_title">Centro de Control</h1>
          <p class="am_hero_sub">Administración maestra de la infraestructura ${e}.</p>
        </div>
      </div>
      <div>
        <button class="am_btn_sync" id="am_btn_refresh">
          <i class="fas fa-sync-alt"></i> Sincronizar Data
        </button>
      </div>
    </div>

    <!-- ══ MASTER KPIs ══ -->
    <div class="am_grid_4">
      <div class="am_kpi" style="--c:#38bdf8">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-users"></i></div>
          <span class="am_ki_label">Usuarios</span>
        </div>
        <div class="am_ki_val" id="am_n_total">—</div>
        <div class="am_ki_trend"><i class="fas fa-arrow-up"></i> Cuentas totales</div>
      </div>

      <div class="am_kpi" style="--c:#8b5cf6">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-star"></i></div>
          <span class="am_ki_label">Suscripciones</span>
        </div>
        <div class="am_ki_val" id="am_n_pro">—</div>
        <div class="am_ki_trend"><i class="fas fa-check-circle"></i> Gestores / Empresas</div>
      </div>

      <div class="am_kpi" style="--c:#f59e0b">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-building"></i></div>
          <span class="am_ki_label">Empresas B2B</span>
        </div>
        <div class="am_ki_val" id="am_n_org">—</div>
        <div class="am_ki_trend"><i class="fas fa-briefcase"></i> Organizaciones activas</div>
      </div>

      <div class="am_kpi" style="--c:#10b981">
        <div class="am_kpi_head">
          <div class="am_ki_ico"><i class="fas fa-book-open"></i></div>
          <span class="am_ki_label">Lecciones</span>
        </div>
        <div class="am_ki_val" id="am_n_les">—</div>
        <div class="am_ki_trend"><i class="fas fa-layer-group"></i> Nivel base de la app</div>
      </div>
    </div>

    <!-- ══ ACCIONES MAESTRAS ══ -->
    <div class="am_sec_header">
      <i class="fas fa-cogs"></i>
      <h2 class="am_sec_h2">Módulos Administrativos</h2>
    </div>

    <div class="am_actions_grid">
      <!-- Módulo Usuarios -->
      <a href="/usuarios" class="am_act_card nv_item" data-page="usuarios">
        <div class="am_act_ico" style="--c:#38bdf8"><i class="fas fa-users-cog"></i></div>
        <div class="am_act_info">
          <strong>Usuarios Globales</strong>
          <span>Moderación y perfiles de base de datos</span>
        </div>
      </a>

      <!-- Módulo Permisos -->
      <a href="/permisos" class="am_act_card nv_item" data-page="permisos">
        <div class="am_act_ico" style="--c:#8b5cf6"><i class="fas fa-user-shield"></i></div>
        <div class="am_act_info">
          <strong>Permisos y Roles</strong>
          <span>Asignación de privilegios VIP</span>
        </div>
      </a>

      <!-- Módulo Sistema -->
      <a href="/sistema" class="am_act_card nv_item" data-page="sistema">
        <div class="am_act_ico" style="--c:#10b981"><i class="fas fa-database"></i></div>
        <div class="am_act_info">
          <strong>Sistema y Data</strong>
          <span>Mantenimiento y comunicados</span>
        </div>
      </a>

      <!-- Modulo FCM -->
      <a href="/mifcm" class="am_act_card nv_item" data-page="mifcm">
        <div class="am_act_ico" style="--c:#f59e0b"><i class="fas fa-bell"></i></div>
        <div class="am_act_info">
          <strong>Mi FCM</strong>
          <span>Payloads listos para Firebase Console</span>
        </div>
      </a>
    </div>

  </div>`},g=async()=>{let e=u();!e||e.rol!==`admin`||(i(document).off(`.am`),v(),y(),i(document).on(`click.am`,`#am_btn_refresh`,function(){let e=i(this).find(`i`).addClass(`fa-spin`);y(!0).then(()=>{setTimeout(()=>e.removeClass(`fa-spin`),500)})}))},_=()=>{i(document).off(`.am`)};function v(){i(`#am_n_total`).text(n(d)||`—`),i(`#am_n_pro`).text(n(f)||`—`),i(`#am_n_org`).text(n(p)||`—`),i(`#am_n_les`).text(n(m)||`45`)}async function y(e=!1){try{let u=a(l,`smiles`);if(e||!n(d)){let e=(await o(u)).data().count;t(d,e),i(`#am_n_total`).text(e)}if(e||!n(f)){let e=(await o(c(u,s(`rol`,`in`,[`gestor`,`empresa`,`admin`])))).data().count;t(f,e),i(`#am_n_pro`).text(e)}if(e||!n(p)){let e=(await o(c(u,s(`rol`,`==`,`empresa`)))).data().count;t(p,e),i(`#am_n_org`).text(e)}e&&r(`Estadísticas sincronizadas`,`success`)}catch(t){console.error(`[Admin] Error cargando stats:`,t),e&&r(`Error sincronizando`,`error`)}}export{_ as cleanup,g as init,h as render};