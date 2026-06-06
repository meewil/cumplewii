const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-YFk7wr3b.css"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./wii-DFanSMW3.js";import{b as n,i as r}from"./widev-BKJDWmod.js";import{n as i}from"./vendor-Dkcx8wGc.js";import{a,i as o}from"./index-D0682O7w.js";import{E as s,_ as c,a as l,b as u,d}from"./firebase-C5pCnWkN.js";import{n as f,t as p}from"./firebase-CHrAjG0U.js";var m=()=>new Promise(e=>{if(p.currentUser)return e(p.currentUser);let t=s(p,n=>{t(),e(n)})}),h=`ABCDEFGHIJKLMNOPQRSTUVWXYZ234567`,g=e=>{let t=0,n=0,r=[];for(let i of e.replace(/=+$/,``).toUpperCase())n=n<<5|h.indexOf(i),t+=5,t>=8&&(r.push(n>>>t-8&255),t-=8);return new Uint8Array(r)},_=()=>{let e=crypto.getRandomValues(new Uint8Array(20));return Array.from(e,e=>h[e&31]).join(``)},v=async(e,t=0)=>{let n=Math.floor(Date.now()/3e4)+t,r=new ArrayBuffer(8);new DataView(r).setUint32(4,n,!1);let i=await crypto.subtle.importKey(`raw`,g(e),{name:`HMAC`,hash:`SHA-1`},!1,[`sign`]),a=new Uint8Array(await crypto.subtle.sign(`HMAC`,i,r)),o=a[19]&15;return(((a[o]&127)<<24|a[o+1]<<16|a[o+2]<<8|a[o+3])%1e6).toString().padStart(6,`0`)},y=async(e,t)=>{for(let n of[-1,0,1])if(await v(t,n)===e)return!0;return!1},b=e=>{let t=n(`wiSmile`);return!e||!t?(o.navigate(`/login`),!1):t.rol===`admin`?t.estado===`activo`?sessionStorage.getItem(`vault_unlocked`)===`true`?(o.navigate(`/admin`),!1):t:(o.navigate(`/registrado`),!1):(o.navigate(`/`),!1)},x=`
  <svg viewBox="0 0 512 512" class="vault_svg_logo" xml:space="preserve">
    <path fill="#1A73E8" d="M440,256.0v0.0C440,273.1,426.1,287,409.0,287H302l-46-93.0l49.7-86.0 c8.6-14.8,27.5-19.9,42.3-11.3l0.0,0.0c14.8,8.6,19.9,27.5,11.3,42.3 L309.7,225h99.3C426.1,225,440,238.9,440,256.0z"/>
    <path fill="#EA4335" d="M348.0,415.3l-0.0,0.0c-14.8,8.6-33.8,3.5-42.3-11.3L256,318.0 l-49.7,86.0c-8.6,14.8-27.5,19.9-42.3,11.3l-0.0-0.0 c-14.8-8.6-19.9-27.5-11.3-42.3L202.3,287L256,285l53.7,2l49.7,86.0 C367.9,387.8,362.8,406.8,348.0,415.3z"/>
    <path fill="#FBBC04" d="M256,194.0L242,232l-39.7-7l-49.7-86.0 c-8.6-14.8-3.5-33.8,11.3-42.3l0.0-0.0c14.8-8.6,33.8-3.5,42.3,11.3 L256,194.0z"/>
    <path fill="#34A853" d="M248,225l-36,62H103.0C85.9,287,72,273.1,72,256.0v-0.0 C72,238.9,85.9,225,103.0,225H248z"/>
    <polygon fill="#185DB7" points="309.7,287 202.3,287 256,194.0 "/>
  </svg>
`,S=`
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
`,C=`
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
`,w=null,T=null,E=60;function D(){T&&clearInterval(T);let e=localStorage.getItem(`vault_expire`);e||(e=Date.now()+E*1e3,localStorage.setItem(`vault_expire`,e));let t=()=>Math.max(0,Math.ceil((parseInt(e)-Date.now())/1e3)),n=t();i(`#vault_timer`).text(`${n}s`);let o=async()=>{if(n=t(),i(`#vault_timer`).text(`${n}s`),n<=0){T&&clearInterval(T),T=null,localStorage.removeItem(`vault_expire`),r(`Sesión cerrada por inactividad`,`error`);let{salir:e}=await a(async()=>{let{salir:e}=await import(`./login-BB13zy-_.js`);return{salir:e}},__vite__mapDeps([0]));await e()}};o(),n>0&&(T=setInterval(o,1e3))}var O=e=>{e.stopPropagation(),e.preventDefault(),r(`<i class="fas fa-exclamation-circle"></i> No está permitido cambiar de tema en esta página.`,`warning`)},k=()=>{let e=n(`wiSmile`);return!e||e.rol!==`admin`?``:`
    <div class="vault_wrap">
      <div class="vault_card" id="vault_card_container">
        <div class="vault_timer_band">
          <i class="fas fa-clock fa-spin"></i> Cierre de seguridad en <strong id="vault_timer">60s</strong>
        </div>
        <div class="vault_logo_wrapper">
          ${x}
        </div>
        <div id="vault_content_area" style="text-align:center;padding:1rem 0">
          <i class="fas fa-spinner fa-spin fa-2x" style="color:var(--tx3,#aaa)"></i>
          <p style="margin-top:1rem;color:var(--tx2)">Cargando Autenticación...</p>
        </div>
      </div>
    </div>
  `},A=async()=>{i(`body`).addClass(`is-vault-locked`),D();let e=document.getElementById(`wiTema`);e&&(e.addEventListener(`click`,O,{capture:!0}),e.style.opacity=`0.4`,e.style.cursor=`not-allowed`,e.querySelectorAll(`.tema`).forEach(e=>e.style.cursor=`not-allowed`)),i(document).off(`.vault_shield`),i(document).on(`click.vault_shield`,`a, [href], .nv_item`,function(e){if(i(`body`).hasClass(`is-vault-locked`)){let t=i(this);if(t.attr(`id`)===`btn_vault_back`||t.closest(`#btn_vault_back`).length)return;e.preventDefault(),e.stopPropagation(),r(`<i class="fas fa-exclamation-triangle"></i> Identidad no verificada. Completa el 2FA primero.`,`warning`)}}),i(document).on(`contextmenu.vault_shield`,function(e){i(`body`).hasClass(`is-vault-locked`)&&(e.preventDefault(),r(`<i class="fas fa-eye-slash"></i> Clic derecho inhabilitado por seguridad.`,`warning`))}),i(document).on(`copy.vault_shield cut.vault_shield paste.vault_shield`,`input, body`,function(e){i(`body`).hasClass(`is-vault-locked`)&&(e.preventDefault(),r(`<i class="fas fa-key"></i> Copiar y pegar inhabilitado en esta boveda.`,`warning`))}),i(document).on(`keydown.vault_shield`,function(e){if(i(`body`).hasClass(`is-vault-locked`)){if(e.keyCode===123)return e.preventDefault(),r(`<i class="fas fa-shield-alt"></i> DevTools bloqueado por seguridad.`,`error`),!1;if(e.ctrlKey||e.metaKey){let t=String.fromCharCode(e.keyCode).toLowerCase();if(t===`u`||t===`s`||t===`p`||e.shiftKey&&(t===`i`||t===`j`||t===`c`))return e.preventDefault(),r(`<i class="fas fa-shield-alt"></i> Combinación de teclas restringida en esta zona.`,`error`),!1}}});let t=b(await m());if(t)try{let e=await l(c(f,`configwii`,t.usuario)),n=e.exists()?e.data():null;n?.configurado&&n?.secret?(w=n.secret,i(`#vault_card_container`).removeClass(`vault_card_setup`),i(`#vault_content_area`).html(C),M(t)):(i(`#vault_card_container`).addClass(`vault_card_setup`),i(`#vault_content_area`).html(S),await j(t))}catch(e){console.error(`[verificar] init:`,e),r(`Error al cargar la bóveda`,`error`)}};async function j(o){let s=await a(()=>import(`./vendor-Dkcx8wGc.js`).then(t=>e(t.t(),1)),[]);w=_();let l=t,p=n(`wiSmile`),m=`otpauth://totp/${l}:${encodeURIComponent(p?.usuario||o.usuario)}?secret=${w}&issuer=${l}&algorithm=SHA1&digits=6&period=30`;await s.toCanvas(document.getElementById(`vault_qr`),m,{width:200,margin:2,color:{dark:`#0f172a`,light:`#ffffff`}}),i(document).on(`input.vault`,`#vault_code_setup`,function(){this.value=this.value.replace(/[^0-9]/g,``),i(`#btn_vault_confirmar`).prop(`disabled`,this.value.length!==6)}),i(document).on(`click.vault`,`#btn_vault_confirmar`,async function(){let e=i(`#vault_code_setup`).val().trim();if(e.length!==6)return;if(!await y(e,w)){r(`<i class="fas fa-times-circle"></i> Código incorrecto, intenta de nuevo`,`error`),i(`#vault_code_setup`).val(``).focus();return}let t=i(this);t.html(`<i class="fas fa-spinner fa-spin"></i> Guardando...`).prop(`disabled`,!0);try{await d(c(f,`configwii`,o.usuario),{configurado:!0,secret:w,email:o.email||``,creado:u(),actualizado:u()}),r(`<i class="fas fa-lock"></i> ¡Bóveda configurada! Bienvenido al panel.`,`success`),N()}catch(e){console.error(`[verificar] setup save:`,e),r(`Error al guardar la configuración`,`error`),t.html(`<i class="fas fa-lock"></i> Confirmar y Cerrar Puerta`).prop(`disabled`,!1)}})}function M(e){setTimeout(()=>i(`#vault_code`).focus(),100),i(document).on(`input.vault`,`#vault_code`,function(){this.value=this.value.replace(/[^0-9]/g,``),this.value.length===6&&i(`#btn_code`).click()}),i(document).on(`click.vault`,`#btn_code`,async function(){let e=i(`#vault_code`).val().trim();if(e.length!==6)return r(`Ingresa los 6 dígitos`,`warning`);let t=i(this),n=t.html();t.html(`<i class="fas fa-spinner fa-spin"></i> Verificando...`).prop(`disabled`,!0);try{await y(e,w)?(r(`<i class="fas fa-unlock"></i> ¡Bóveda desbloqueada!`,`success`),N()):(r(`<i class="fas fa-times-circle"></i> Código incorrecto o expirado`,`error`),i(`#vault_code`).val(``).focus(),t.html(n).prop(`disabled`,!1))}catch(e){console.error(`[verificar] unlock:`,e),t.html(n).prop(`disabled`,!1)}}),i(document).on(`click.vault`,`#btn_vault_back`,()=>{localStorage.removeItem(`vault_expire`),o.navigate(`/`)})}function N(){T&&=(clearInterval(T),null),localStorage.removeItem(`vault_expire`),i(`body`).removeClass(`is-vault-locked`),sessionStorage.setItem(`vault_unlocked`,`true`),window.location.href=`/admin`}var P=()=>{T&&=(clearInterval(T),null),i(`body`).removeClass(`is-vault-locked`),i(document).off(`.vault`),i(document).off(`.vault_shield`);let e=document.getElementById(`wiTema`);e&&(e.removeEventListener(`click`,O,{capture:!0}),e.style.opacity=``,e.style.cursor=``,e.querySelectorAll(`.tema`).forEach(e=>e.style.cursor=``))};export{P as cleanup,A as init,k as render};