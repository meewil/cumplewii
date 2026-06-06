const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-YFk7wr3b.css"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{b as t,i as n}from"./widev-Czq8ue36.js";import{n as r}from"./vendor-Dkcx8wGc.js";import{n as i,r as a}from"./index-U_klNYw1.js";import{A as o,C as s,N as c,_ as l,a as u}from"./firebase-BY5GISzq.js";import{n as d,t as f}from"./firebase-BOoMX3kr.js";var p=()=>new Promise(e=>{if(f.currentUser)return e(f.currentUser);let t=u(f,n=>{t(),e(n)})}),m=`ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`,h=e=>{let t=0,n=0,r=[];for(let i of e.replace(/=+$/,``).toUpperCase())n=n<<5|m.indexOf(i),t+=5,t>=8&&(r.push(n>>>t-8&255),t-=8);return new Uint8Array(r)},g=()=>{let e=crypto.getRandomValues(new Uint8Array(20));return Array.from(e,e=>m[e&31]).join(``)},_=async(e,t=0)=>{let n=Math.floor(Date.now()/3e4)+t,r=new ArrayBuffer(8);new DataView(r).setUint32(4,n,!1);let i=await crypto.subtle.importKey(`raw`,h(e),{name:`HMAC`,hash:`SHA-1`},!1,[`sign`]),a=new Uint8Array(await crypto.subtle.sign(`HMAC`,i,r)),o=a[19]&15;return(((a[o]&127)<<24|a[o+1]<<16|a[o+2]<<8|a[o+3])%1e6).toString().padStart(6,`0`)},v=async(e,t)=>{for(let n of[-1,0,1])if(await _(t,n)===e)return!0;return!1},y=e=>{let n=t(`wiSmile`);return!e||!n?(i.navigate(`/login`),!1):n.rol===`admin`?n.estado===`activo`?sessionStorage.getItem(`vault_unlocked`)===`true`?(i.navigate(`/admin`),!1):n:(i.navigate(`/registrado`),!1):(i.navigate(`/`),!1)},b=`
  <svg viewBox="0 0 100 100" class="vault_svg_logo" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g_glow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#4285F4"/>
        <stop offset="33%" stop-color="#EA4335"/>
        <stop offset="66%" stop-color="#FBBC05"/>
        <stop offset="100%" stop-color="#34A853"/>
      </linearGradient>
    </defs>
    <!-- Glowing ring -->
    <circle cx="50" cy="50" r="46" fill="none" stroke="url(#g_glow)" stroke-width="3" opacity="0.3" class="vault_glow_ring"/>
    <!-- Outer white dial with shadow -->
    <circle cx="50" cy="50" r="38" fill="var(--wb, #fff)" style="filter: drop-shadow(0px 8px 16px rgba(0,0,0,0.12))"/>
    
    <!-- Google Colors Dial segments -->
    <path d="M 50,18 A 32,32 0 0,1 82,50 L 50,50 Z" fill="#4285F4"/>
    <path d="M 82,50 A 32,32 0 0,1 50,82 L 50,50 Z" fill="#EA4335"/>
    <path d="M 50,82 A 32,32 0 0,1 18,50 L 50,50 Z" fill="#FBBC05"/>
    <path d="M 18,50 A 32,32 0 0,1 50,18 L 50,50 Z" fill="#34A853"/>
    
    <!-- White center hub with a lock keyhole -->
    <circle cx="50" cy="50" r="16" fill="var(--wb, #fff)"/>
    <circle cx="50" cy="46" r="4.5" fill="#1e293b"/>
    <path d="M 47.5,46 L 52.5,46 L 54,58 L 46,58 Z" fill="#1e293b"/>
  </svg>
`,x=`
  <div class="vault_badge">Admin</div>
  <h1 class="vault_title">Configura tu Bóveda</h1>
  <p class="vault_subtitle">Escanea este código QR con <strong>Google Authenticator</strong> para proteger el panel de administración.</p>

  <div id="vault_qr_wrap" class="vault_qr_wrap">
    <canvas id="vault_qr"></canvas>
    <div class="vault_qr_shine"></div>
  </div>
  <p class="vault_qr_hint"><i class="fas fa-info-circle"></i> Abre Google Authenticator → Añadir cuenta → Escanear QR</p>

  <div class="vault_auth_box" style="margin-top:1.5rem">
    <label>Ingresa el código de 6 dígitos para confirmar</label>
    <div class="vault_input_wrap">
      <i class="fas fa-th"></i>
      <input type="text" id="vault_code_setup" placeholder="000000" maxlength="6" autocomplete="off" inputmode="numeric" />
    </div>
    <button id="btn_vault_confirmar" class="vault_btn_primary" disabled>
      <i class="fas fa-lock"></i> Confirmar y Cerrar Puerta
    </button>
  </div>
`,S=`
  <h1 class="vault_title">Verificar que eres tú</h1>
  <p class="vault_subtitle">Abre <strong>Google Authenticator</strong> en tu celular e ingresa el código de 6 dígitos.</p>

  <div class="vault_auth_box">
    <div class="vault_input_wrap vault_input_lg">
      <i class="fas fa-th"></i>
      <input type="text" id="vault_code" placeholder="000000" maxlength="6"
             autocomplete="off" inputmode="numeric" autofocus />
    </div>
    <button id="btn_code" class="vault_btn_primary">
      <i class="fas fa-unlock"></i> Verificar y Entrar
    </button>
  </div>

  <button id="btn_vault_back" class="vault_btn_back">
    <i class="fas fa-arrow-left"></i> Volver al inicio
  </button>
`,C=null,w=null,T=60;function E(){w&&clearInterval(w);let e=localStorage.getItem(`vault_expire`);e||(e=Date.now()+T*1e3,localStorage.setItem(`vault_expire`,e));let t=()=>Math.max(0,Math.ceil((parseInt(e)-Date.now())/1e3)),i=t();r(`#vault_timer`).text(`${i}s`);let o=async()=>{if(i=t(),r(`#vault_timer`).text(`${i}s`),i<=0){w&&clearInterval(w),w=null,localStorage.removeItem(`vault_expire`),n(`Sesión cerrada por inactividad`,`error`);let{salir:e}=await a(async()=>{let{salir:e}=await import(`./login-zRCwPens.js`);return{salir:e}},__vite__mapDeps([0]));await e()}};o(),i>0&&(w=setInterval(o,1e3))}var D=()=>{let e=t(`wiSmile`);return!e||e.rol!==`admin`?``:`
    <div class="vault_wrap">
      <div class="vault_card" id="vault_card_container">
        <div class="vault_timer_band">
          <i class="fas fa-clock fa-spin"></i> Cierre de seguridad en <strong id="vault_timer">60s</strong>
        </div>
        <div class="vault_logo_wrapper">
          ${b}
        </div>
        <div id="vault_content_area" style="text-align:center;padding:1rem 0">
          <i class="fas fa-spinner fa-spin fa-2x" style="color:var(--tx3,#aaa)"></i>
          <p style="margin-top:1rem;color:var(--tx2)">Cargando Autenticación...</p>
        </div>
      </div>
    </div>
  `},O=async()=>{r(`body`).addClass(`is-vault-locked`),E(),r(document).off(`.vault_shield`),r(document).on(`click.vault_shield`,`a, [href], .nv_item`,function(e){if(r(`body`).hasClass(`is-vault-locked`)){let t=r(this);if(t.attr(`id`)===`btn_vault_back`||t.closest(`#btn_vault_back`).length)return;e.preventDefault(),e.stopPropagation(),n(`<i class="fas fa-exclamation-triangle"></i> Identidad no verificada. Completa el 2FA primero.`,`warning`)}}),r(document).on(`contextmenu.vault_shield`,function(e){r(`body`).hasClass(`is-vault-locked`)&&(e.preventDefault(),n(`<i class="fas fa-eye-slash"></i> Clic derecho inhabilitado por seguridad.`,`warning`))}),r(document).on(`copy.vault_shield cut.vault_shield paste.vault_shield`,`input, body`,function(e){r(`body`).hasClass(`is-vault-locked`)&&(e.preventDefault(),n(`<i class="fas fa-key"></i> Copiar y pegar inhabilitado en esta boveda.`,`warning`))}),r(document).on(`keydown.vault_shield`,function(e){if(r(`body`).hasClass(`is-vault-locked`)){if(e.keyCode===123)return e.preventDefault(),n(`<i class="fas fa-shield-alt"></i> DevTools bloqueado por seguridad.`,`error`),!1;if(e.ctrlKey||e.metaKey){let t=String.fromCharCode(e.keyCode).toLowerCase();if(t===`u`||t===`s`||t===`p`||e.shiftKey&&(t===`i`||t===`j`||t===`c`))return e.preventDefault(),n(`<i class="fas fa-shield-alt"></i> Combinación de teclas restringida en esta zona.`,`error`),!1}}});let e=y(await p());if(e)try{let t=await l(o(d,`configwii`,e.usuario)),n=t.exists()?t.data():null;n?.configurado&&n?.secret?(C=n.secret,r(`#vault_card_container`).removeClass(`vault_card_setup`),r(`#vault_content_area`).html(S),A(e)):(r(`#vault_card_container`).addClass(`vault_card_setup`),r(`#vault_content_area`).html(x),await k(e))}catch(e){console.error(`[verificar] init:`,e),n(`Error al cargar la bóveda`,`error`)}};async function k(i){let l=await a(()=>import(`./vendor-Dkcx8wGc.js`).then(t=>e(t.t(),1)),[]);C=g();let u=`WiiBlock`,f=t(`wiSmile`),p=`otpauth://totp/${u}:${encodeURIComponent(f?.usuario||i.usuario)}?secret=${C}&issuer=${u}&algorithm=SHA1&digits=6&period=30`;await l.toCanvas(document.getElementById(`vault_qr`),p,{width:200,margin:2,color:{dark:`#0f172a`,light:`#ffffff`}}),r(document).on(`input.vault`,`#vault_code_setup`,function(){this.value=this.value.replace(/[^0-9]/g,``),r(`#btn_vault_confirmar`).prop(`disabled`,this.value.length!==6)}),r(document).on(`click.vault`,`#btn_vault_confirmar`,async function(){let e=r(`#vault_code_setup`).val().trim();if(e.length!==6)return;if(!await v(e,C)){n(`<i class="fas fa-times-circle"></i> Código incorrecto, intenta de nuevo`,`error`),r(`#vault_code_setup`).val(``).focus();return}let t=r(this);t.html(`<i class="fas fa-spinner fa-spin"></i> Guardando...`).prop(`disabled`,!0);try{await s(o(d,`configwii`,i.usuario),{configurado:!0,secret:C,email:i.email||``,creado:c(),actualizado:c()}),n(`<i class="fas fa-lock"></i> ¡Bóveda configurada! Bienvenido al panel.`,`success`),j()}catch(e){console.error(`[verificar] setup save:`,e),n(`Error al guardar la configuración`,`error`),t.html(`<i class="fas fa-lock"></i> Confirmar y Cerrar Puerta`).prop(`disabled`,!1)}})}function A(e){setTimeout(()=>r(`#vault_code`).focus(),100),r(document).on(`input.vault`,`#vault_code`,function(){this.value=this.value.replace(/[^0-9]/g,``),this.value.length===6&&r(`#btn_code`).click()}),r(document).on(`click.vault`,`#btn_code`,async function(){let e=r(`#vault_code`).val().trim();if(e.length!==6)return n(`Ingresa los 6 dígitos`,`warning`);let t=r(this),i=t.html();t.html(`<i class="fas fa-spinner fa-spin"></i> Verificando...`).prop(`disabled`,!0);try{await v(e,C)?(n(`<i class="fas fa-unlock"></i> ¡Bóveda desbloqueada!`,`success`),j()):(n(`<i class="fas fa-times-circle"></i> Código incorrecto o expirado`,`error`),r(`#vault_code`).val(``).focus(),t.html(i).prop(`disabled`,!1))}catch(e){console.error(`[verificar] unlock:`,e),t.html(i).prop(`disabled`,!1)}}),r(document).on(`click.vault`,`#btn_vault_back`,()=>{localStorage.removeItem(`vault_expire`),i.navigate(`/`)})}function j(){w&&=(clearInterval(w),null),localStorage.removeItem(`vault_expire`),r(`body`).removeClass(`is-vault-locked`),sessionStorage.setItem(`vault_unlocked`,`true`),window.location.href=`/admin`}var M=()=>{w&&=(clearInterval(w),null),r(`body`).removeClass(`is-vault-locked`),r(document).off(`.vault`),r(document).off(`.vault_shield`)};export{M as cleanup,O as init,D as render};