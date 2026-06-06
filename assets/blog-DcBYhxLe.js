import{C as e,V as t,b as n,o as r}from"./widev-BKJDWmod.js";import{n as i}from"./vendor-Dkcx8wGc.js";import{a}from"./index-D0682O7w.js";import{_ as o,a as s,d as c,g as l,h as u,i as d,l as f}from"./devblog-CIJmvaRJ.js";var p=16,m=8,h=[{id:`nuevo`,icon:`fa-clock`,label:`Recientes`},{id:`vistas`,icon:`fa-fire`,label:`Populares`}],g=e=>{let n=d(e.categoria);return`
  <a href="/${e.slug||e.id}" class="bl_card">
    <div class="bl_card_img">
      <img src="${e.imagen||`https://placehold.co/600x400?text=📖`}" alt="${e.imagenAlt||e.titulo}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=📖'"/>
      <div class="bl_card_over">
        <span class="bl_card_cat" style="--cc:${n.color}"><i class="fas ${n.icon}"></i> ${e.categoria||`—`}</span>
        ${e.pin?`<span class="bl_card_dest" ${t(`Destacada`)}><i class="fas fa-thumbtack"></i></span>`:``}
      </div>
    </div>
    <div class="bl_card_body">
      <h2 class="bl_card_tit">${e.titulo}</h2>
      <p class="bl_card_res">${e.resumen||``}</p>
      <div class="bl_card_footer">
        <div class="bl_card_meta">
          <span ${t(`Tiempo`)}><i class="fas fa-clock"></i> ${e.tiempoLectura||`—`}</span>
          <span ${t(`Vistas`)}><i class="fas fa-eye"></i> ${e.vistas||0}</span>
          <span ${t(`Likes`)}><i class="fas fa-heart" style="color:#fe0149"></i> ${e.likes||0}</span>
        </div>
        <span class="bl_card_leer">Leer <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  </a>`},_=()=>`
  <div class="bl_wrap">
    <div class="bl_hero" data-herowi="100">
      <h1 class="bl_hero_tit">Historias que <span class="bl_grad">inspiran</span> 🕊️</h1>
      <p class="bl_hero_sub">Reflexiones, fe y palabras que tocan el corazón</p>
    </div>
    <div class="bl_search_bar" id="bl_search_bar" style="display:none">
      <div class="bl_search_inner">
        <i class="fas fa-search bl_search_ico"></i>
        <input id="bl_search_inp" type="text" placeholder="Buscar historias..." autocomplete="off" spellcheck="false"/>
        <button id="bl_search_close" class="bl_search_close"><i class="fas fa-xmark"></i></button>
      </div>
    </div>
    <div class="bl_bar">
      <div class="bl_cats" id="bl_cats"></div>
      <div class="bl_bar_right">
        <div class="bl_orden">${h.map(e=>`<button class="bl_ord_btn ${e.id===`nuevo`?`active`:``}" data-ord="${e.id}"><i class="fas ${e.icon}"></i><span>${e.label}</span></button>`).join(``)}</div>
        <button class="bl_icon_btn" id="bl_search_toggle" ${t(`Buscar`)}><i class="fas fa-search"></i></button>
        <button class="bl_icon_btn" id="bl_refresh" ${t(`Actualizar`)}><i class="fas fa-rotate"></i></button>
      </div>
    </div>
    <div class="bl_result_bar" id="bl_result_bar"></div>
    <div class="bl_grid" id="bl_grid" data-herowi="140"></div>
    <div class="bl_mas_wrap" id="bl_mas_wrap" style="display:none"><button class="bl_mas_btn" id="bl_mas"><i class="fas fa-plus"></i> Ver más</button></div>
    <div class="bl_empty dpvc" id="bl_empty" style="display:none"><i class="fas fa-dove"></i><h3>Sin historias</h3></div>
  </div>`,v=async()=>{let h=`todo`,_=`nuevo`,v=[],y=!1,b=null,x=!0,S=!0,C=e=>a(()=>import(`./index-D0682O7w.js`).then(t=>t.rutas.navigate(e)),[]),w=e=>{let t=[...new Set(e.map(e=>e.categoria).filter(Boolean))].sort();localStorage.setItem(`wi_blogs_cats`,JSON.stringify(t)),i(`#bl_cats`).html(`<button class="bl_cat_btn ${h===`todo`?`active`:``}" data-cat="todo" style="--cc:var(--mco)"><i class="fas fa-grip"></i><span>Todas</span></button>`+t.map(e=>`<button class="bl_cat_btn ${h===e?`active`:``}" data-cat="${e}" style="--cc:${d(e).color}"><i class="fas ${d(e).icon}"></i><span>${e}</span></button>`).join(``))},T=(t,n=[])=>{let r=t||n.length?n:v;if(!r.length&&!t)return i(`#bl_empty`).show(),i(`#bl_mas_wrap`).hide(),i(`#bl_grid`).html(``);i(`#bl_empty`).hide(),i(`#bl_grid`)[t?`append`:`html`](r.map(g).join(``)),e(),i(`#bl_mas_wrap`).toggle(n.length&&n!==v?!1:x)},E=()=>{try{let e=JSON.parse(localStorage.getItem(`wi_blogs_cats`)||`[]`);e.length&&w(e.map(e=>({categoria:e})))}catch{}let e=n(h===`todo`&&_===`nuevo`?`wi_blogs`:`wi_blogs_${h}_${_}`);return Array.isArray(e)&&e.length?(v=e.slice(0,p),i(`#bl_result_bar`).html(`<span><strong>${v.length}</strong> historia${v.length===1?``:`s`}</span><span class="bl_cache_tag" ${t(`⚡ Memoria`)}><i class="fas fa-bolt"></i> Local</span>`),T(!1,v),S=!1,!0):!1},D=async(e=!1,t=!1)=>{if(y)return;y=!0;let n=t?m:p;t||(i(`#bl_empty,#bl_mas_wrap`).hide(),b=null);try{let r=await c(h,_,e,b,n);(S||JSON.stringify(t?[]:v)!==JSON.stringify(r.lista))&&(v=t?[...v,...r.lista]:r.lista,w(v),T(t,r.lista)),b=r.lastSnap,x=r.lista.length===n,i(`#bl_result_bar`).html(`<span><strong>${v.length}</strong> historia${v.length===1?``:`s`}</span>${o(r.fromCache)}`)}catch(e){console.error(`[blog]`,e),r(`Error`,`error`),!t&&!v.length&&i(`#bl_grid .bl_card`).length===0&&i(`#bl_empty`).show()}S=y=!1},O,k=e=>{clearTimeout(O),O=setTimeout(async()=>{if(!e.trim())return T(!1),i(`#bl_result_bar`).html(`<span><strong>${v.length}</strong> historias</span>`);let t=e.toLowerCase();i(`#bl_result_bar`).html(`<span><i class="fas fa-spinner fa-spin"></i> Buscando...</span>`);let n=(await f()).filter(e=>[e.titulo,e.resumen,e.categoria,...e.tags||[]].some(e=>e?.toLowerCase().includes(t)));i(`#bl_result_bar`).html(`<span><i class="fas fa-search"></i> <strong>${n.length}</strong> resultados — "<em>${e}</em>"</span>`),T(!1,n)},400)},A=()=>{S=!0,!E()&&i(`#bl_grid .bl_card`).length===0&&i(`#bl_grid`).html(Array(16).fill(l()).join(``))};E()||i(`#bl_grid .bl_card`).length===0&&i(`#bl_grid`).html(Array(16).fill(l()).join(``)),await D(!1,!1),window.__WIREADY__=!0,i(document).on(`click.blog`,`.bl_cat_btn`,function(){let e=i(this).data(`cat`);e!==h&&(h=e,A(),D())}).on(`click.blog`,`.bl_ord_btn`,function(){let e=i(this).data(`ord`);e!==_&&(_=e,A(),D())}).on(`click.blog`,`#bl_refresh`,async function(){i(this).html(`<i class="fas fa-spinner fa-spin"></i>`).prop(`disabled`,!0),s(),localStorage.removeItem(`wi_blogs_cats`),A(),await D(!0),i(this).html(`<i class="fas fa-rotate"></i>`).prop(`disabled`,!1),r(`Actualizado ✅`,`success`)}).on(`click.blog`,`#bl_search_toggle`,function(){i(`#bl_search_bar`).stop(!0).slideToggle(180,function(){i(this).is(`:visible`)?i(`#bl_search_inp`).focus():(i(`#bl_search_inp`).val(``),T(!1))})}).on(`click.blog`,`#bl_search_close`,()=>{i(`#bl_search_bar`).slideUp(160),i(`#bl_search_inp`).val(``),T(!1)}).on(`input.blog`,`#bl_search_inp`,function(){k(i(this).val())}).on(`click.blog`,`#bl_mas`,function(){let e=i(this),t=e.html();e.html(`<i class="fas fa-spinner fa-spin"></i> Cargando...`).prop(`disabled`,!0),D(!1,!0).finally(()=>e.html(t).prop(`disabled`,!1))}).on(`click.blog`,`.bl_card`,function(e){e.preventDefault();let t=i(this).attr(`href`);t&&C(t)}).on(`mouseenter.blog`,`.bl_card`,function(){let e=i(this).attr(`href`);e&&u(e.substring(1))}),e()},y=()=>i(document).off(`.blog`);export{y as cleanup,v as init,_ as render};