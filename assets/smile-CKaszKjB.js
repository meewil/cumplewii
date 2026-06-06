import{t as e}from"./wii-DFanSMW3.js";import{E as t,b as n,k as r,s as i,y as a}from"./widev-Czq8ue36.js";import{n as o}from"./vendor-Dkcx8wGc.js";import{n as s}from"./index-U_klNYw1.js";import{k as c,v as l}from"./firebase-BY5GISzq.js";import{n as u}from"./firebase-BOoMX3kr.js";import{getMesActual as d,obtenerRankingMes as f}from"./zsmile-CA_7WcPo.js";var p=d(),m=()=>`
    <div class="smw_dash">
      <header class="smw_hero wi_fadeUp">
        <div class="smw_hero_glow"></div>
        <div class="smw_hero_content">
          <div class="smw_hero_left">
            <div class="smw_avatar_wrap">
              <div class="smw_avatar" id="smwAvatar">?</div>
              <div class="smw_avatar_ring"></div>
            </div>
            <div class="smw_welcome">
              <h1 id="smwSaludo">Cargando...</h1>
              <p id="smwRole"><i class="fas fa-car-side"></i> Colaborador — Reto del Mes</p>
            </div>
          </div>
          <div class="smw_month_selector_container">
            <select id="smwMonthSelector" class="smw_select" style="min-width: 160px; backdrop-filter: blur(10px); background: var(--bg5);">
              ${y()}
            </select>
          </div>
        </div>
      </header>

      <section class="smw_kpi_band wi_fadeUp" id="smwKpis" style="animation-delay: 0.1s">
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiTours" style="color: var(--Cielo)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Tours este mes</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiPuntos" style="color: var(--Oro)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Mis puntos</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiPos" style="color: var(--Mora)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Posición</span>
        </div>
      </section>

      <nav class="smw_quick_nav wi_fadeUp" style="animation-delay: 0.2s">
        ${[{page:`registrar`,ico:`fa-plus-circle`,col:`#FF5C69`,tit:`Registrar Venta`,sub:`Nueva venta de tour`},{page:`ranking`,ico:`fa-trophy`,col:`#FFDA34`,tit:`Ver Ranking`,sub:`Puntos del mes`},{page:`historial`,ico:`fa-clipboard-list`,col:`#0EBEFF`,tit:`Historial`,sub:`Mis ventas registradas`},{page:`tours`,ico:`fa-route`,col:`#29C72E`,tit:`Catálogo Tours`,sub:`Lista de tours and precios`},{page:`avisar`,ico:`fa-bell`,col:`#7000FF`,tit:`Anuncios`,sub:`Noticias del equipo`}].map((e,t)=>`
          <a href="/${e.page}" class="smw_qcard nv_item" data-page="${e.page}" style="--qc:${e.col}; animation-delay: ${t*.05}s">
            <div class="smw_qcard_ico" style="--qc: ${e.col}"><i class="fas ${e.ico}"></i></div>
            <div class="smw_qcard_txt">
              <strong>${e.tit}</strong>
              <span>${e.sub}</span>
            </div>
            <i class="fas fa-arrow-right smw_qcard_arr"></i>
          </a>
        `).join(``)}
      </nav>
    </div>
  `,h=async()=>{let t=r.user;if(!t)return setTimeout(()=>s.navigate(`/login`),100);let n=a(t.nombre||t.usuario||``),c=`${(t.nombre||`?`)[0]}${(t.apellidos||``)[0]||``}`.toUpperCase();o(`#smwAvatar`).text(c),o(`#smwSaludo`).html(`${i()} <strong>${n}</strong>`),t.descripcion?o(`#smwRole`).html(`<i class="fas fa-user-tag"></i> ${t.descripcion}`):o(`#smwRole`).html(`<i class="fas fa-car-side"></i> Colaborador — Reto del Mes`),o(`#smwMonthSelector`).val(p),_(t.usuario,p),o(document).off(`change.smile_dash`).on(`change.smile_dash`,`#smwMonthSelector`,function(){p=o(this).val(),_(t.usuario,p)}),o(`.wi_fadeUp`).addClass(`visible wi_visible`),console.log(`🏜️ ${e} Smile Dashboard cargado`),window.__WIREADY__=!0},g=()=>{o(document).off(`change.smile_dash`)};async function _(e,r){try{o(`#kpiTours`).html(`<span class="smw_sk_kpi"></span>`),o(`#kpiPuntos`).html(`<span class="smw_sk_kpi"></span>`),o(`#kpiPos`).html(`<span class="smw_sk_kpi"></span>`);let i=`kpiSmile_${e}_${r}`,a=n(i);if(a)return v(a);let[s,d]=r.split(`-`).map(Number),p=await l(c(u,`registrosdb`)),m=0,h=0;p.docs.forEach(t=>{let n=t.data();if(n.vendedor!==e)return;let r=n.fechaTour,i,a;if(typeof r==`string`)[i,a]=r.split(`-`).map(Number);else if(r?.toDate){let e=r.toDate();i=e.getFullYear(),a=e.getMonth()+1}else return;i===s&&a===d&&(m+=parseInt(n.qventa)||1,h+=parseInt(n.puntos)||0)});let g=(await f(r)).findIndex(t=>t.usuario===e),_=g===-1?`—`:`#${g+1}`,y={tours:m,puntos:h,posicion:_};t(i,y,5),v(y)}catch(e){console.warn(`KPI error:`,e),v({tours:`?`,puntos:`?`,posicion:`?`})}}function v({tours:e,puntos:t,posicion:n}){o(`#kpiTours`).text(e),o(`#kpiPuntos`).text(t),o(`#kpiPos`).text(n)}function y(){let e=new Date,t=e.getFullYear(),n=e.getMonth(),r=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];return o.map(Array(7),(e,i)=>{let a=i-3,o=n+a,s=t+Math.floor(o/12),c=(o%12+12)%12;return`<option value="${`${s}-${String(c+1).padStart(2,`0`)}`}"${a===0?` selected`:``}>${r[c]} ${s}</option>`}).join(``)}export{g as cleanup,h as init,m as render};