import{i as e,t}from"./wii-DFanSMW3.js";import{A as n,D as r,L as i,O as a,U as o,V as s,b as c,o as l}from"./widev-BKJDWmod.js";import{n as u}from"./vendor-Dkcx8wGc.js";import{a as d}from"./index-D0682O7w.js";import{c as f,f as p,m,n as h,o as g,p as _,r as v,s as y,u as b,v as x,y as S}from"./devblog-CIJmvaRJ.js";u(`#wiad_styles`).length||u(`<style id="wiad_styles">`).text(`
    .wi_ad_link { max-width:300px; }
    .wi_ad_link:hover { opacity:1!important; transform:scale(1.01); }
    .wi_ad_img { margin-block:4vh 2vh; }
  `).appendTo(`head`);var C=`
  <div class="lc_ad_side lc_ad_r">
    <a href="https://wtaype.me/" target="_blank" class="lc_ad_box wi_ad_link">
      <img src="https://typingwii.web.app/Img1.webp" alt="Ad Right" class="wi_ad_img" />
    </a>
  </div>
`,w=e=>`<a href="/${e.slug||e.id}" class="po_rel_card" ${s(e.resumen||e.titulo)}><div class="po_rel_img"><img src="${e.imagen}" alt="${e.imagenAlt||e.titulo}" loading="lazy"/></div><div class="po_rel_info"><span class="po_rel_cat"><i class="fas fa-paw"></i> ${e.categoria}</span><strong>${e.titulo}</strong><span class="po_rel_meta"><i class="fas fa-calendar"></i> ${x(e.actualizado||e.creado)} · <i class="fas fa-eye"></i> ${e.vistas||0} · <i class="fas fa-heart" style="color:#fe0149"></i> ${e.likes||0}</span></div></a>`,T=(e,t,n=`po_fade po_visible`)=>e||t?`
    <div class="po_pn_box ${n}" style="--d:.4s">
      ${e?`<a href="/${e.slug||e.id}" class="po_pn_card pn_prev" ${s(`Anterior`)}><div class="po_pn_img"><img src="${e.imagen}" loading="lazy"/></div><div class="po_pn_info"><span class="po_pn_lb"><i class="fas fa-arrow-left"></i> Anterior</span><strong class="po_pn_tit">${e.titulo}</strong></div></a>`:`<div></div>`}
      ${t?`<a href="/${t.slug||t.id}" class="po_pn_card pn_next" ${s(`Siguiente`)}><div class="po_pn_info"><span class="po_pn_lb">Siguiente <i class="fas fa-arrow-right"></i></span><strong class="po_pn_tit">${t.titulo}</strong></div><div class="po_pn_img"><img src="${t.imagen}" loading="lazy"/></div></a>`:`<div></div>`}
    </div>`:``,E=(r,i,a,o,c)=>{let l=n.user?.usuario,u=c?`po_fade po_visible`:`po_fade`,d=i!==null&&a!==null,f=i||[],p=a||[],m=f[0]||p[0],h=f[1]||p[1],g=d?T(m,h,u):`<div id="po_nav_container"></div>`;return`
    <div class="po_progress_bar" id="po_progress"></div>
    <div class="po_wrap"><div class="po_layout">
      <div class="po_col_main"><div class="po_content">
        <div class="po_hero ${u}" style="--d:0s">
          <img src="${r.imagenTop||r.imagen}" alt="${r.imagenAlt||r.titulo}" class="po_hero_img" loading="eager"/>
          <div class="po_hero_over">
            <a href="/blog" class="po_back" ${s(`Volver`)}><i class="fas fa-arrow-left"></i> Blog</a>
            <div class="po_hero_badges">
              <span class="po_cat_badge" ${s(r.categoria)}><i class="fas fa-paw"></i> ${r.categoria}</span>
              ${r.pin?`<span class="po_dest_badge" ${s(`Destacada`)}><i class="fas fa-thumbtack"></i> Pin</span>`:``}
              <button class="po_like_btn po_like_sync ${localStorage.getItem(`wi_like_`+o)?`active`:``}" data-slug="${o}" ${s(`Me encanta`)} style="border-color:rgba(255,255,255,0.2);background:rgba(0,0,0,0.4);color:#fff;padding:.6vh 1.2vh;font-size:var(--fz_s4)"><i class="fas fa-heart"></i> <span class="po_likes_count_text">${r.likes||0}</span></button>
            </div>
          </div>
        </div>
        <header class="po_header ${u}" style="--d:.1s">
          <h1 class="po_titulo">${r.titulo}</h1>
          <p class="po_resumen">${r.resumen}</p>
          <div class="po_meta">
            <span ${s(`Autor`)}><i class="fas fa-user-pen"></i> ${r.autor}</span>
            <span ${s(`Fecha`)}><i class="fas fa-calendar"></i> ${x(r.creado,!0)}</span>
            <span ${s(`Lectura`)}><i class="fas fa-clock"></i> ${r.tiempoLectura}</span>
            <span ${s(`Vistas`)}><i class="fas fa-eye"></i> ${(r.vistas||0)+1}</span>
            <button class="po_like_btn po_like_sync ${localStorage.getItem(`wi_like_`+o)?`active`:``}" data-slug="${o}" ${s(`Me encanta`)}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${r.likes||0}</span></button>
            ${c?`<span class="po_cache_badge" ${s(`Cache ⚡`)}><i class="fas fa-bolt"></i> Local</span>`:``}
          </div>
        </header>
        <div class="po_contenido ${u}" style="--d:.2s">${r.contenido}</div>
        ${g}
        <div class="po_share ${u}" style="--d:.45s"><span><i class="fas fa-share-nodes"></i> Comparte</span>
          <div class="po_share_btns">
            <button class="po_like_btn po_like_sync ${localStorage.getItem(`wi_like_`+o)?`active`:``}" data-slug="${o}" ${s(`Me encanta`)}><i class="fas fa-heart"></i> <span class="po_likes_count_text">${r.likes||0}</span></button>
            ${S(r.titulo)}<button class="po_share_btn po_copy" style="--sc:var(--mco)" ${s(`Copiar`)}><i class="fas fa-link"></i></button>
          </div>
        </div>
      </div>
      <div id="wi_comments" class="po_comments ${u}" style="--d:.55s"><div class="po_comments_title"><i class="fas fa-comments"></i> Comentarios</div><div id="disqus_thread"></div></div>
    </div>
    <aside class="po_sidebar">
      <div class="po_side_card ${u}" style="--d:.15s">
        <div class="po_side_title"><i class="fas fa-user-pen"></i> Autor</div>
        <div class="po_autor_box"><div class="po_autor_av"><img src="/cumplewii/smile.avif" alt="${r.autor}"/></div><div class="po_autor_info"><strong>${r.autor}</strong><span>${t} <i class="fas ${e}"></i></span></div></div>
        ${l?`<div class="po_admin_actions" style="margin-top:.8vh"><a href="/nuevo?edit=${o}" class="po_admin_btn_edit" ${s(`Editar`)}><i class="fas fa-pen"></i> Editar</a><button id="po_refresh" class="po_admin_btn_refresh" data-slug="${o}" data-cat="${r.categoria}" ${s(`Recargar`)}><i class="fas fa-rotate"></i></button></div>`:``}
      </div>
      <div id="po_ultimas_container">${d?p.length?`<div class="po_side_card ${u}" style="--d:.2s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_relacionados" data-showi="100">${p.map(w).join(``)}</div></div>`:``:`<div class="po_side_card po_fade po_visible" style="--d:.2s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_sk_side shimmer" style="height:120px"></div></div>`}</div>
      <div id="po_rels_container">${d?f.length?`<div class="po_side_card ${u}" style="--d:.25s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${r.categoria}</div><div class="po_relacionados" data-showi="100">${f.map(w).join(``)}</div></div>`:``:`<div class="po_side_card po_fade po_visible" style="--d:.25s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${r.categoria}</div><div class="po_sk_side shimmer" style="height:120px"></div></div>`}</div>
    
      <!-- AdSense Sticky Sidebar 300x600 con adRight Fallback -->
      <div class="po_ad_sticky ${u}" style="--d:.3s; position: sticky; top: 8vh; margin-top: 2vh; text-align:center; min-height:600px;">
         <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1362457560630815" data-ad-slot="1800353788" data-ad-format="auto" data-full-width-responsive="true"></ins>
         <div class="wi_ad_fallback">${C}</div>
      </div>
    </aside>
  </div></div>`},D=!1,O=e=>{let t=e&&c(`wi_post_${e}`);if(t)return D=!0,E(t,c(`wi_mas_${t.categoria}`)||[],c(`wi_sidebar_posts`)||[],e,!0);D=!1;let n=e&&p(e);return n?`
    <div class="po_wrap"><div class="po_layout"><div class="po_col_main"><div class="po_content">
      <div class="po_hero po_fade po_visible" style="--d:0s"><img src="${n.imagenTop||n.imagen}" alt="${n.imagenAlt||n.titulo}" class="po_hero_img" loading="eager"/><div class="po_hero_over"><a href="/blog" class="po_back" ${s(`Volver`)}><i class="fas fa-arrow-left"></i> Blog</a><div class="po_hero_badges"><span class="po_cat_badge"><i class="fas fa-paw"></i> ${n.categoria}</span></div></div></div>
      <header class="po_header po_fade po_visible" style="--d:0s"><h1 class="po_titulo">${n.titulo}</h1><p class="po_resumen">${n.resumen}</p></header>
      <div class="po_contenido po_fade" style="--d:.1s; min-height:98vh;"><div class="po_sk_body">${`<div class="po_sk_p shimmer"></div>`.repeat(6)}</div></div>
    </div></div><aside class="po_sidebar" style="min-height:98vh;">${`<div class="po_sk_side shimmer"></div>`.repeat(3)}</aside></div></div>`:`<div class="po_wrap"><div class="po_layout"><div class="po_col_main"><div class="po_content"><div class="po_sk_img shimmer"></div><div class="po_sk_body" style="min-height:98vh;"><div class="po_sk_cat shimmer"></div><div class="po_sk_tit shimmer"></div><div class="po_sk_meta shimmer"></div>${`<div class="po_sk_p shimmer"></div>`.repeat(5)}</div></div></div><aside class="po_sidebar" style="min-height:98vh;">${`<div class="po_sk_side shimmer"></div>`.repeat(3)}</aside></div></div>`},k=async(e,n=!1)=>{if(e){D&&!n&&(f(`po_fade`),a(),A(),j());try{let o=await b(e,n);if(!o?.data?.activo)return u(`#wimain`).html(`<div class="po_err dpvc"><i class="fas fa-paw"></i><h2>Historia no encontrada</h2><p>No existe o no está disponible 🐾</p><a href="/blog" class="po_back_btn"><i class="fas fa-arrow-left"></i> Ver historias</a></div>`);let{data:s,fromCache:c}=o;!c&&!n&&v(e),r({title:s.titulo,desc:s.resumen,keywords:s.keywords,img:s.imagenTop||s.imagen,path:`/${e}`,type:`Article`,datePublished:s.creado}),!D||n?(u(`#wimain`).html(E(s,null,null,e,c)),f(`po_fade`),a(),A(),j()):c||u(`.po_cache_badge`).remove();let l=(e,t)=>{u(`#po_nav_container`).html(T(e[0]||t[0],e[1]||t[1])),u(`#po_ultimas_container`).html(t.length?`<div class="po_side_card po_fade po_visible" style="--d:0s"><div class="po_side_title"><i class="fas fa-clock"></i> Últimas historias</div><div class="po_relacionados" data-showi="100">${t.map(w).join(``)}</div></div>`:``),u(`#po_rels_container`).html(e.length?`<div class="po_side_card po_fade po_visible" style="--d:0s"><div class="po_side_title"><i class="fas fa-heart"></i> Más historias de ${s.categoria}</div><div class="po_relacionados" data-showi="100">${e.map(w).join(``)}</div></div>`:``),a()};Promise.all([_(e,s.categoria,n),m(e,n)]).then(([e,t])=>{l(e||[],t||[])});let d=function(){this.page.url=`https://wiihope.com/${e}`,this.page.identifier=e,this.page.title=s.titulo};window.DISQUS?window.DISQUS.reset({reload:!0,config:d}):(window.disqus_config=d,i({disqus:[async()=>u(`body`).append(u(`<script>`,{src:`https://superwii.disqus.com/embed.js`,"data-timestamp":+new Date}))]})),console.log(`🐾 ${t} Post OK`),window.__WIREADY__=!0}catch(e){console.error(`[post]`,e),l(`Error al cargar`,`error`)}}};function A(){if(u(`.po_toc_box`).length)return;let e=u(`.po_contenido`).find(`h2,h3`);if(!e.length)return;let t=`<div class="po_toc_box po_fade" style="--d:.15s"><div class="po_toc_title"><i class="fas fa-list"></i> En este artículo</div><ul class="po_toc">`;e.each((e,n)=>{let r=`po_h_`+e;u(n).attr(`id`,r).css(`scroll-margin-top`,`7vh`),t+=`<li style="margin-left:${n.tagName.toLowerCase()===`h3`?`1.5vh`:`0`}"><a href="#${r}" class="po_toc_link">${u(n).text()}</a></li>`}),u(t+`</ul></div>`).insertBefore(`.po_contenido`)}function j(){u(window).off(`scroll.post_prog`).on(`scroll.post_prog`,()=>u(`#po_progress`).css(`width`,u(window).scrollTop()/Math.max(u(document).height()-u(window).height(),1)*100+`%`))}u(document).on(`click.post`,`.po_copy,.po_copy2`,()=>o(location.href,`.po_copy`,`¡Enlace copiado! 🔗`)).on(`click.post`,`.po_rel_card`,function(e){e.preventDefault(),d(()=>import(`./index-D0682O7w.js`).then(e=>e.rutas.navigate(u(this).attr(`href`))),[])}).on(`click.post`,`.po_like_sync`,function(){let e=u(this).data(`slug`);localStorage.getItem(`wi_like_`+e)||(localStorage.setItem(`wi_like_`+e,`1`),u(`.po_like_sync`).addClass(`active`),u(`.po_likes_count_text`).text((parseInt(u(`.po_likes_count_text`).first().text())||0)+1),h(e))}).on(`click.post`,`.po_yt_btn`,async function(){let e=u(this).data(`yt`);u(`#wi_yt_modal`).length||(u(`body`).append(`
        <div id="wi_yt_modal" class="wiModal">
          <div class="modalBody" style="background:#000; padding:0; border-radius:1.5vh; overflow:hidden; width:95%; max-width:800px; border:1px solid rgba(255,255,255,.1);">
            <button class="modalX wi_yt_close" style="color:#fff; text-shadow:0 0 8px #000; right:1.5vh; top:1vh; font-size:2.2rem; z-index:10;">&times;</button>
            <div id="wi_yt_player" style="width:100%; aspect-ratio:16/9; background:#000;"></div>
          </div>
        </div>`),u(`#wi_yt_modal`).on(`click`,function(e){e.target===this&&u(`.wi_yt_close`).trigger(`click`)})),u(`#wi_yt_player`).html(`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${e}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);let{abrirModal:t}=await d(async()=>{let{abrirModal:e}=await import(`./widev-BKJDWmod.js`).then(e=>e.W);return{abrirModal:e}},[]);t(`wi_yt_modal`)}).on(`click.post`,`.wi_yt_close`,async function(){let{cerrarModal:e}=await d(async()=>{let{cerrarModal:e}=await import(`./widev-BKJDWmod.js`).then(e=>e.W);return{cerrarModal:e}},[]);e(`wi_yt_modal`),setTimeout(()=>u(`#wi_yt_player`).html(``),300)}).on(`click.post`,`#po_refresh`,async function(){let e=u(this);e.html(`<i class="fas fa-spinner fa-spin"></i>`).prop(`disabled`,!0),g(e.data(`slug`)),y(e.data(`cat`)),await k(e.data(`slug`),!0)});var M=()=>u(window).off(`scroll.post_prog`);export{M as cleanup,k as init,O as render};