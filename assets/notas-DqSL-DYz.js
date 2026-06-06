import{t as e}from"./wii-DFanSMW3.js";import{V as t,b as n,o as r,s as i}from"./widev-BKJDWmod.js";import{n as a}from"./vendor-Dkcx8wGc.js";import{r as o}from"./index-DzBLy80i.js";import{_ as s,b as c,d as l,g as u,m as d,o as f,r as p,s as m,u as h}from"./firebase-C5pCnWkN.js";import{n as g,t as _}from"./firebase-CHrAjG0U.js";var v=[],y=null,b=null,x=null,S=`wi_notas_cache`,C=`wi_notas_cache_time`,w=100,T=1200,E=300*1e3,D=()=>n(`wiSmile`)||{},O=e=>{try{localStorage.setItem(S,JSON.stringify(e)),localStorage.setItem(C,Date.now().toString())}catch{}},k=()=>{try{return JSON.parse(localStorage.getItem(S)||`[]`)}catch{return[]}},A=()=>{let e=parseInt(localStorage.getItem(C)||`0`);return Date.now()-e<E},j=()=>{localStorage.removeItem(S),localStorage.removeItem(C)},M=[{id:`Cielo`,hex:`#0EBEFF`,bg:`rgba(14,190,255,.12)`,tx:`var(--tx)`,rgb:`14,190,255`},{id:`Dulce`,hex:`#FF5C93`,bg:`rgba(255,92,147,.12)`,tx:`var(--tx)`,rgb:`255,92,147`},{id:`Paz`,hex:`#10B981`,bg:`rgba(16,185,129,.12)`,tx:`var(--tx)`,rgb:`16,185,129`},{id:`Mora`,hex:`#8B5CF6`,bg:`rgba(139,92,246,.12)`,tx:`var(--tx)`,rgb:`139,92,246`},{id:`Sol`,hex:`#F59E0B`,bg:`rgba(245,158,11,.12)`,tx:`var(--tx)`,rgb:`245,158,11`}],N=()=>{let n=D();if(!n.email)return location.replace(`/`),``;let r=n.nombre||n.usuario||n.email||_.currentUser?.email||``;return`
  <div class="wn_container">
    <div class="wn_header">
      <div class="wn_info">
        <img src="/smile.avif" alt="${e}" class="wn_avatar" />
        <div class="wn_text">
          <h1><i class="fas fa-sticky-note"></i> Mis Notas</h1>
          <p>${i()} <strong>${r}</strong></p>
        </div>
      </div>
      <div class="wn_actions">
        <button class="wn_btn_new" id="wnNueva" ${t(`Nueva nota`)}>
          <i class="fas fa-plus"></i> <span>Nueva</span>
        </button>
        <div class="wn_status_wrap">
          <div class="wn_status">
            <span class="wn_dot"></span>
            <span class="wn_dotxt">Cargando...</span>
          </div>
          <button class="wn_btn_sync" id="wnSync" ${t(`Sincronizar`)}>
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="wn_grid" id="wnGrid">${Y(k())}</div>

    <div class="wn_modal" id="wnEliminar">
      <div class="wn_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar nota?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="wn_modal_acts">
          <button class="wn_cancel" id="wnCancel">Cancelar</button>
          <button class="wn_confirm" id="wnConfirm">Eliminar</button>
        </div>
      </div>
    </div>
  </div>`},P=()=>{Q();let e=D();if(!e.email)return o.navigate(`/`);let t=e.email||_.currentUser?.email;a(document).on(`click.wn`,`#wnNueva`,()=>z(t)).on(`click.wn`,`#wnSync`,()=>I(t)).on(`click.wn`,`.wn_card`,function(e){a(e.target).closest(`.wn_toolbar, .wn_colors`).length||B(a(this).data(`id`))}).on(`input.wn`,`.wn_titulo, .wn_contenido`,function(){V(a(this).closest(`.wn_card`).data(`id`),t)}).on(`click.wn`,`.wn_pin`,function(e){e.stopPropagation(),U(a(this).closest(`.wn_card`).data(`id`),t)}).on(`click.wn`,`.wn_color`,function(e){e.stopPropagation(),a(this).closest(`.wn_card`).find(`.wn_colors`).toggleClass(`show`)}).on(`click.wn`,`.wn_color_opt`,function(e){e.stopPropagation();let n=a(this).closest(`.wn_card`);W(n.data(`id`),a(this).data(`color`),t),n.find(`.wn_colors`).removeClass(`show`)}).on(`click.wn`,`.wn_del`,function(e){e.stopPropagation(),y=a(this).closest(`.wn_card`).data(`id`),a(`#wnEliminar`).addClass(`show`)}).on(`click.wn`,`#wnCancel, #wnEliminar`,e=>{a(e.target).is(`#wnCancel, #wnEliminar`)&&(a(`#wnEliminar`).removeClass(`show`),y=null)}).on(`click.wn`,`#wnConfirm`,()=>G(t)).on(`click.wn`,e=>{a(e.target).closest(`.wn_colors, .wn_color`).length||a(`.wn_colors`).removeClass(`show`)}),F(t),x=()=>{!document.hidden&&!A()&&L(t,!0)},document.addEventListener(`visibilitychange`,x)},F=e=>{let t=k();t.length&&A()?(v=t,R(),a(`#wnGrid`).html(Y(v)),K(!0,`Cache`)):L(e,!1)},I=async e=>{a(`#wnSync`).addClass(`spinning`),j(),await L(e,!1),a(`#wnSync`).removeClass(`spinning`),r(`Sincronizado ✓`,`success`,1500)},L=async(e,t=!1)=>{try{K(!1,`Cargando...`),v=(await f(h(u(g,`wiNotas`),d(`email`,`==`,e),m(w)))).docs.map(e=>({id:e.id,...e.data()})),R(),O(v),a(`#wnGrid`).html(Y(v)),K(!0)}catch(e){if(console.error(`❌ Notas:`,e),K(!1,`Offline`),!t){let e=k();e.length?(v=e,a(`#wnGrid`).html(Y(v)),r(`Usando caché local 📦`,`warning`,2e3)):a(`#wnGrid`).html(X(`fa-wifi-slash`,`Sin conexión`,`Verifica tu internet`))}}},R=()=>{v.sort((e,t)=>e.pin===t.pin?(t.fecha?.seconds||0)-(e.fecha?.seconds||0):t.pin?1:-1)},z=async e=>{let t=`nota_${Date.now()}`,{usuario:n=``,nombre:i=``}=D(),o={id:t,titulo:``,contenido:``,color:`Cielo`,pin:!1,email:e,usuario:i||n||e,fecha:{seconds:Date.now()/1e3}};v.unshift(o),O(v),a(`#wnGrid`).html(Y(v)),setTimeout(()=>{a(`.wn_card[data-id="${t}"]`).addClass(`editing`).find(`.wn_titulo`).focus()},50);try{await l(s(g,`wiNotas`,t),{...o,fecha:c()}),K(!0),r(`Nueva nota ✨`,`success`,1200)}catch(e){console.error(`❌`,e),v=v.filter(e=>e.id!==t),O(v),a(`#wnGrid`).html(Y(v)),r(`Error al crear`,`error`)}},B=e=>{let t=a(`.wn_card[data-id="${e}"]`);a(`.wn_card.editing`).not(t).removeClass(`editing`),t.toggleClass(`editing`),t.hasClass(`editing`)&&t.find(`.wn_titulo`).focus()},V=(e,t)=>{clearTimeout(b),b=setTimeout(()=>H(e,t),T)},H=async(e,t)=>{let n=a(`.wn_card[data-id="${e}"]`),i=n.find(`.wn_titulo`).text().trim(),o=n.find(`.wn_contenido`).text().trim(),u=v.find(t=>t.id===e);if(u&&!(u.titulo===i&&u.contenido===o)){u.titulo=i,u.contenido=o,O(v),n.addClass(`saving`);try{await l(s(g,`wiNotas`,e),{id:e,titulo:i,contenido:o,color:u.color,pin:u.pin,email:t,usuario:u.usuario,fecha:c()}),K(!0),n.removeClass(`saving`).addClass(`saved`),setTimeout(()=>n.removeClass(`saved`),800)}catch(e){console.error(`❌`,e),n.removeClass(`saving`),r(`Error al guardar`,`error`)}}},U=async(e,t)=>{let n=v.find(t=>t.id===e);if(n){n.pin=!n.pin,R(),O(v),a(`#wnGrid`).html(Y(v));try{await l(s(g,`wiNotas`,e),{...n,fecha:c()}),K(!0),r(n.pin?`Fijada 📌`:`Desanclada`,`success`,1e3)}catch(e){console.error(`❌`,e),n.pin=!n.pin,R(),O(v),a(`#wnGrid`).html(Y(v))}}},W=async(e,t,n)=>{let r=v.find(t=>t.id===e);if(!r||r.color===t)return;let i=r.color;r.color=t,O(v),a(`#wnGrid`).html(Y(v));try{await l(s(g,`wiNotas`,e),{...r,fecha:c()}),K(!0)}catch(e){console.error(`❌`,e),r.color=i,O(v),a(`#wnGrid`).html(Y(v))}},G=async()=>{if(!y)return;let e=y;y=null,a(`#wnEliminar`).removeClass(`show`);let t=[...v];v=v.filter(t=>t.id!==e),O(v),a(`.wn_card[data-id="${e}"]`).addClass(`deleting`),setTimeout(()=>a(`#wnGrid`).html(Y(v)),250);try{await p(s(g,`wiNotas`,e)),r(`Eliminada 🗑️`,`success`,1e3)}catch(e){console.error(`❌`,e),v=t,O(v),a(`#wnGrid`).html(Y(v)),r(`Error al eliminar`,`error`)}},K=(e,t)=>{a(`.wn_dot`).removeClass(`active error`).addClass(e?`active`:`error`),a(`.wn_dotxt`).text(t||(e?`Online`:`Offline`))},q=e=>M.find(t=>t.id===e)||M[0],J=e=>{if(!e)return`Ahora`;let t=e.toDate?.()||new Date((e.seconds||0)*1e3),n=new Date;n.setHours(0,0,0,0);let r=new Date(n);return r.setDate(r.getDate()-1),t>=n?t.toLocaleTimeString(`es`,{hour:`2-digit`,minute:`2-digit`}):t>=r?`Ayer`:t.toLocaleDateString(`es`,{day:`numeric`,month:`short`})},Y=e=>e?.length?e.map(e=>{let n=q(e.color);return`
    <div class="wn_card${e.pin?` pinned`:``}" data-id="${e.id}" style="--c-bg:${n.bg};--c-tx:${n.tx};--c-accent:${n.hex}">
      <div class="wn_card_inner">
        ${e.pin?`<span class="wn_pin_badge"><i class="fas fa-thumbtack"></i></span>`:``}
        <div class="wn_titulo" contenteditable="true" data-placeholder="Título" spellcheck="false">${Z(e.titulo)}</div>
        <div class="wn_contenido" contenteditable="true" data-placeholder="Escribe aquí..." spellcheck="false">${Z(e.contenido).replace(/\n/g,`<br>`)}</div>
        <div class="wn_footer">
          <span class="wn_fecha">${J(e.fecha)}</span>
          <span class="wn_saved"><i class="fas fa-check"></i></span>
        </div>
        <div class="wn_toolbar">
          <button class="wn_pin${e.pin?` active`:``}" ${t(`Fijar`)}><i class="fas fa-thumbtack"></i></button>
          <button class="wn_color" ${t(`Color`)}><i class="fas fa-palette"></i></button>
          <button class="wn_del" ${t(`Eliminar`)}><i class="fas fa-trash"></i></button>
        </div>
        <div class="wn_colors">${M.map(t=>`<span class="wn_color_opt${t.id===e.color?` active`:``}" data-color="${t.id}" style="--cc:${t.hex}"></span>`).join(``)}</div>
      </div>
    </div>`}).join(``):X(`fa-sticky-note`,`Sin notas aún`,`Crea tu primera nota 👆`),X=(e,t,n)=>`<div class="wn_empty"><i class="fas ${e}"></i><p>${t}</p><span>${n}</span></div>`,Z=e=>String(e||``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]),Q=()=>{clearTimeout(b),x&&=(document.removeEventListener(`visibilitychange`,x),null),a(document).off(`.wn`),[v,y,b]=[[],null,null]};export{Q as cleanup,P as init,N as render};