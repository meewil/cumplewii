import{t as e}from"./wii-DFanSMW3.js";import{B as t,H as n,b as r,o as i,s as a}from"./widev-Czq8ue36.js";import{n as o}from"./vendor-Dkcx8wGc.js";import{n as s}from"./index-U_klNYw1.js";import{A as c,C as l,E as u,N as d,S as f,h as p,k as m,v as h,y as g}from"./firebase-BY5GISzq.js";import{n as _,t as v}from"./firebase-BOoMX3kr.js";var y=[],b=null,x=!1,S=null,C=null,w=`wi_mensajes_cache`,T=50,E=()=>r(`wiSmile`)||{},D=e=>{try{localStorage.setItem(w,JSON.stringify(e))}catch{}},O=()=>{try{return JSON.parse(localStorage.getItem(w)||`[]`)}catch{return[]}},k=()=>{let e=document.getElementById(`wmChat`);e&&requestAnimationFrame(()=>e.scrollTop=e.scrollHeight)},A=()=>{let n=E();if(!n.email)return location.replace(`/`),``;let r=n.nombre||n.usuario||n.email||v.currentUser?.email||``;return`
  <div class="wm_container">
    <div class="wm_header">
      <div class="wm_info">
        <img src="/smile.avif" alt="${e}" class="wm_avatar" />
        <div class="wm_text">
          <h1>Mis Mensajes</h1>
          <p>${a()} <strong>${r}</strong></p>
        </div>
      </div>
      <div class="wm_status">
        <span class="wm_dot"></span>
        <span class="wm_dotxt">Conectando...</span>
      </div>
    </div>

    <div class="wm_chat" id="wmChat">${R(O())}</div>

    <div class="wm_input">
      <div class="wm_wrap">
        <textarea id="wmNuevo" placeholder="Escribe un mensaje." rows="1" maxlength="500"></textarea>
        <span class="wm_count" id="wmCount">0/500</span>
      </div>
      <button id="wmEnviar" disabled ${t(`Enviar · Enter`)}><i class="fas fa-paper-plane"></i></button>
    </div>

    <div class="wm_modal" id="wmEliminar">
      <div class="wm_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="wm_modal_acts">
          <button class="wm_cancel" id="wmCancel">Cancelar</button>
          <button class="wm_confirm" id="wmConfirm">Eliminar</button>
        </div>
      </div>
    </div>
  </div>`},j=()=>{V();let e=E();if(!e.email)return s.navigate(`/`);let t=e.email||v.currentUser?.email;o(document).on(`input.wm`,`#wmNuevo`,function(){o(`#wmCount`).text(`${o(this).val().length}/500`),o(`#wmEnviar`).prop(`disabled`,!o(this).val().trim()),o(this).css(`height`,`auto`).css(`height`,Math.min(this.scrollHeight,150)+`px`)}).on(`keydown.wm`,`#wmNuevo`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),N(t))}).on(`click.wm`,`#wmEnviar`,()=>N(t)).on(`click.wm`,`.wm_item`,function(e){if(o(e.target).closest(`.wm_del`).length)return;let t=y.find(e=>e.id===o(this).data(`id`));t&&(n(t.mensaje,this,`¡Copiado! <i class="fas fa-check-circle"></i>`),o(this).addClass(`copied`),setTimeout(()=>o(this).removeClass(`copied`),800))}).on(`click.wm`,`.wm_del`,function(e){e.stopPropagation(),b=o(this).data(`id`),o(`#wmEliminar`).addClass(`show`)}).on(`click.wm`,`#wmCancel, #wmEliminar`,e=>{o(e.target).is(`#wmCancel, #wmEliminar`)&&(o(`#wmEliminar`).removeClass(`show`),b=null)}).on(`click.wm`,`#wmConfirm`,P),M(t,!0),S=setInterval(()=>!document.hidden&&M(t,!0),3e4),C=()=>{!document.hidden&&M(t,!0)},document.addEventListener(`visibilitychange`,C),k()},M=async(e,t=!1)=>{try{y=(await h(f(m(_,`wiMensajes`),u(`email`,`==`,e),g(T)))).docs.map(e=>({id:e.id,...e.data()})).sort((e,t)=>(e.fecha?.seconds||0)-(t.fecha?.seconds||0)),D(y),o(`#wmChat`).html(R(y)),F(!0),k()}catch(e){if(console.error(`❌`,e),F(!1),!t){let e=O();e.length?(y=e,o(`#wmChat`).html(R(y)),i(`Caché local 📦`,`warning`,2e3)):o(`#wmChat`).html(z(`fa-wifi-slash`,`Sin conexión`,`Verifica tu internet`))}}},N=e=>{if(x)return;let t=o(`#wmNuevo`),n=t.val().trim();if(!n)return;x=!0;let{usuario:r=``,nombre:a=``}=E(),s=`m${Date.now()}`,u={id:s,mensaje:n,email:e,usuario:a||r||e,fecha:{seconds:Date.now()/1e3}};y.push(u),D(y),o(`#wmChat`).html(R(y)),k(),t.val(``).css(`height`,`auto`).trigger(`focus`),o(`#wmCount`).text(`0/500`),o(`#wmEnviar`).prop(`disabled`,!0),l(c(_,`wiMensajes`,s),{id:s,mensaje:n,email:e,usuario:a||r||e,fecha:d()}).then(()=>{F(!0)}).catch(e=>{console.error(`❌`,e),y=y.filter(e=>e.id!==s),D(y),o(`#wmChat`).html(R(y)),i(`Error al guardar`,`error`)}).finally(()=>{x=!1})},P=()=>{if(!b)return;let e=b;b=null,o(`#wmEliminar`).removeClass(`show`);let t=[...y];y=y.filter(t=>t.id!==e),D(y),o(`.wm_item[data-id="${e}"]`).addClass(`deleting`),setTimeout(()=>{o(`#wmChat`).html(R(y))},250),p(c(_,`wiMensajes`,e)).then(()=>i(`Eliminado 🗑️`,`success`,1200)).catch(e=>{console.error(`❌`,e),y=t,D(y),o(`#wmChat`).html(R(y)),i(`Error al eliminar`,`error`)})},F=e=>{o(`.wm_dot`).removeClass(`active error`).addClass(e?`active`:`error`),o(`.wm_dotxt`).text(e?`Online`:`Offline`)},I=e=>{if(!e)return`Hoy`;let t=e.toDate?.()||new Date((e.seconds||0)*1e3),n=new Date,r=new Date(n);return n.setHours(0,0,0,0),r.setDate(r.getDate()-1),r.setHours(0,0,0,0),t>=n?`Hoy`:t>=r?`Ayer`:t.toLocaleDateString(`es`,{day:`numeric`,month:`long`})},L=e=>e?(e.toDate?.()||new Date((e.seconds||0)*1e3)).toLocaleTimeString(`es`,{hour:`2-digit`,minute:`2-digit`}):`Ahora`,R=e=>{if(!e?.length)return z(`fa-comment-dots`,`Sin mensajes aún`,`Escribe tu primer mensaje 👇`);let n=``;return e.map(e=>{let r=I(e.fecha),i=r===n?``:`<div class="wm_sep"><span>${r}</span></div>`;return n=r,`${i}<div class="wm_item" data-id="${e.id}" ${t(`Click para copiar`)}>
      <div class="wm_bubble">
        <p class="wm_txt">${B(e.mensaje).replace(/\n/g,`<br>`)}</p>
        <div class="wm_foot"><span class="wm_time">${L(e.fecha)}</span><i class="fas fa-check-double wm_check"></i></div>
      </div>
      <button class="wm_del" data-id="${e.id}" ${t(`Eliminar`)}><i class="fas fa-trash"></i></button>
    </div>`}).join(``)},z=(e,t,n)=>`<div class="wm_empty"><i class="fas ${e}"></i><p>${t}</p><span>${n}</span></div>`,B=e=>String(e||``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]),V=()=>{clearInterval(S),S=null,C&&=(document.removeEventListener(`visibilitychange`,C),null),o(document).off(`.wm`),[y,b,x]=[[],null,!1]};export{V as cleanup,j as init,A as render};