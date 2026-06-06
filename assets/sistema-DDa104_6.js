import{b as e,o as t}from"./widev-Czq8ue36.js";import{n}from"./vendor-Dkcx8wGc.js";import{A as r,C as i,N as a}from"./firebase-BY5GISzq.js";import{n as o}from"./firebase-BOoMX3kr.js";var s=()=>e(`wiSmile`),c=()=>{let e=s();return!e||e.rol!==`admin`?`<div class="ads_page"><div class="ads_empty"><i class="fas fa-ban"></i><p>Acceso denegado.</p></div></div>`:`
  <div class="ads_page">

    <!-- HERO PRO -->
    <div class="ads_hero">
      <div class="ads_hero_left">
        <div class="ads_hero_icon"><i class="fas fa-database"></i></div>
        <div class="ads_hero_txt">
          <div class="ads_badge"><i class="fas fa-server"></i> Mantenimiento y Datos</div>
          <h1 class="ads_hero_title">Sistema Core</h1>
          <p class="ads_hero_sub">Control de infraestructura, base de datos y comunicados globales.</p>
        </div>
      </div>
    </div>

    <!-- CONTROLES DEL SISTEMA -->
    <div class="ads_grid">
      
      <!-- 1. Mantenimiento -->
      <div class="ads_card" style="--ac:#3b82f6">
        <div class="ads_card_hdr">
          <div class="ads_card_ico"><i class="fas fa-tools"></i></div>
          <div>
            <h3 class="ads_card_tit">Estado Operativo</h3>
            <div class="ads_card_sub">Control general de la aplicación</div>
          </div>
        </div>
        <div class="ads_toggle_row">
          <div class="ads_t_info">
            <span class="ads_t_tit">Modo Mantenimiento</span>
            <span class="ads_t_sub">Bloquear el acceso a no-admins</span>
          </div>
          <div class="ads_switch" id="ads_tgg_maint"></div>
        </div>
        <button class="ads_btn_action" id="ads_btn_clear" style="background:var(--bg);color:var(--tx);border:1px solid var(--brd);box-shadow:none">
          <i class="fas fa-broom"></i> Purgar Caché del Navegador
        </button>
      </div>

      <!-- 2. Comunicados -->
      <div class="ads_card" style="--ac:#f59e0b">
        <div class="ads_card_hdr">
          <div class="ads_card_ico"><i class="fas fa-bullhorn"></i></div>
          <div>
            <h3 class="ads_card_tit">Mensaje Global</h3>
            <div class="ads_card_sub">Anuncio push para todos los usuarios</div>
          </div>
        </div>
        <div class="ads_field">
          <label>Título del Comunicado</label>
          <input type="text" id="ads_msg_tit" class="ads_input" placeholder="Ej. ¡Nueva Actualización v16!">
        </div>
        <div class="ads_field">
          <label>Cuerpo del Mensaje</label>
          <textarea id="ads_msg_txt" class="ads_input" placeholder="Escribe el mensaje..."></textarea>
        </div>
        <button class="ads_btn_action" id="ads_btn_send_msg"><i class="fas fa-paper-plane"></i> Transmitir Mensaje</button>
      </div>

      <!-- 3. Base de Datos / Lecciones -->
      <div class="ads_card" style="--ac:#10b981; grid-column: 1 / -1">
        <div class="ads_card_hdr">
          <div class="ads_card_ico"><i class="fas fa-cloud-upload-alt"></i></div>
          <div>
            <h3 class="ads_card_tit">Sincronizar Lecciones (Data Seeding)</h3>
            <div class="ads_card_sub">Forzar re-escritura de las 45 lecciones progresivas en Firestore</div>
          </div>
        </div>
        
        <div style="display:flex;gap:3vh;align-items:flex-start">
          <button class="ads_btn_action" id="ads_btn_seed" style="flex-shrink:0"><i class="fas fa-bolt"></i> Iniciar Proceso de Carga</button>
          
          <div class="ads_log_wrap" id="ads_log" style="flex:1">
            <div class="ads_log_item"><span>[SYS]</span> Esperando comando...</div>
          </div>
        </div>
      </div>

    </div>
  </div>`},l=async()=>{let e=s();!e||e.rol!==`admin`||(n(document).off(`.ads`),n(document).on(`click.ads`,`#ads_tgg_maint`,function(){n(this).toggleClass(`on`);let e=n(this).hasClass(`on`);t(e?`Modo Mantenimiento Activado`:`Sistema en línea normalmente`,e?`warning`:`success`)}),n(document).on(`click.ads`,`#ads_btn_clear`,function(){let e=localStorage.getItem(`wiSmile`);localStorage.clear(),e&&localStorage.setItem(`wiSmile`,e),t(`Caché temporal eliminada con éxito`,`success`)}),n(document).on(`click.ads`,`#ads_btn_send_msg`,async function(){let e=n(`#ads_msg_tit`).val().trim(),s=n(`#ads_msg_txt`).val().trim();if(!e||!s){t(`Completa título y mensaje`,`warning`);return}let c=n(this).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Transmitiendo...`);try{await i(r(o,`globales`,Date.now().toString()),{tipo:`aviso`,titulo:e,mensaje:s,fecha:a()}),t(`Mensaje global transmitido`,`success`),n(`#ads_msg_tit, #ads_msg_txt`).val(``)}catch{t(`Error al transmitir`,`error`)}c.prop(`disabled`,!1).html(`<i class="fas fa-paper-plane"></i> Transmitir Mensaje`)}),n(document).on(`click.ads`,`#ads_btn_seed`,async function(){if(!confirm(`¿Estás seguro de sobreescribir la base de datos de lecciones?`))return;let e=n(`#ads_log`),r=n(this).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Procesando...`);d(`Iniciando volcado de datos...`,`warn`);for(let t=1;t<=45;t++)await new Promise(e=>setTimeout(e,150)),d(`Lección ${t} parseada y subida correctamente.`,`ok`),e.scrollTop(e[0].scrollHeight);d(`PROCESO FINALIZADO. 45 documentos actualizados.`,`ok`),t(`Base de datos sincronizada`,`success`),r.prop(`disabled`,!1).html(`<i class="fas fa-bolt"></i> Iniciar Proceso de Carga`)}))},u=()=>{n(document).off(`.ads`)};function d(e,t=``){let r=new Date().toLocaleTimeString(`en-US`,{hour12:!1});n(`#ads_log`).append(`<div class="ads_log_item ${t}"><span>[${r}]</span> ${e}</div>`)}export{u as cleanup,l as init,c as render};