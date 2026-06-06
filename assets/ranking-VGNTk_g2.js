import{E as e,b as t,k as n,n as r,o as i,t as a}from"./widev-Czq8ue36.js";import{n as o}from"./vendor-Dkcx8wGc.js";import{n as s}from"./index-U_klNYw1.js";import{A as c,C as l,N as u,O as d,_ as f,k as p,v as m}from"./firebase-BY5GISzq.js";import{n as h}from"./firebase-BOoMX3kr.js";import{getMesActual as g,obtenerRankingMes as _}from"./zsmile-CA_7WcPo.js";var v=()=>`
  <div class="smw_rank_view">
    
    <!-- CABECERA PREMIUM: idéntica a historial -->
    <header class="smw_rank_header wi_fadeUp">
      <div class="smw_rank_title_row">
        <h1><i class="fas fa-trophy smw_gold_glow"></i> Salón de Campeones</h1>
        <p class="smw_rank_subtitle">Puntuaciones y ventas acumuladas del mes</p>
      </div>
      
      <div class="smw_rank_controls">
        <!-- Selector de Mes – cápsula con flechas -->
        <div class="smw_month_selector_wrap">
          <button class="smw_month_nav_btn" id="btnMesAnt" title="Mes Anterior">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="smw_month_display" id="btnMonthDropdown">
            <i class="fas fa-calendar-alt"></i>
            <span id="txtMesSeleccionado">...</span>
            <select id="selRankingMes" class="smw_month_hidden_select"></select>
          </div>
          <button class="smw_month_nav_btn" id="btnMesSig" title="Mes Siguiente">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- BANDA GLOBAL: KPIs del Mes – skeletons en render, datos via init -->
    <section class="smw_rank_kpis_grid wi_fadeUp" id="rankKpiGrid">
      
      <div class="smw_rkpi_card" style="--kpi-color: var(--Cielo)">
        <div class="smw_rkpi_icon"><i class="fas fa-car-side"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiToursHoy"><span class="smw_sk_el" style="width:38px;height:22px;border-radius:6px"></span></span>
          <span class="smw_rkpi_lbl">Tours Hoy</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Paz)">
        <div class="smw_rkpi_icon"><i class="fas fa-route"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiToursMes"><span class="smw_sk_el" style="width:38px;height:22px;border-radius:6px"></span></span>
          <span class="smw_rkpi_lbl">Total Tours Mes</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Mora)">
        <div class="smw_rkpi_icon"><i class="fas fa-star"></i></div>
        <div class="smw_rkpi_info">
          <span class="smw_rkpi_val" id="rkpiPuntosEquipo"><span class="smw_sk_el" style="width:52px;height:22px;border-radius:6px"></span></span>
          <span class="smw_rkpi_lbl">Puntos Equipo</span>
        </div>
      </div>

      <div class="smw_rkpi_card" style="--kpi-color: var(--Oro)">
        <div class="smw_rkpi_icon"><i class="fas fa-bullseye"></i></div>
        <div class="smw_rkpi_info" style="width: 100%;">
          <div class="smw_meta_progress_wrap">
            <span class="smw_rkpi_val" id="rkpiMetaMes"><span class="smw_sk_el" style="width:42px;height:22px;border-radius:6px"></span></span>
            <span class="smw_rkpi_lbl">Meta (2500 pts)</span>
          </div>
          <div class="smw_meta_progress_bar">
            <div class="smw_meta_progress_fill" id="metaProgressFill" style="width: 0%"></div>
          </div>
        </div>
      </div>

    </section>

    <!-- SECCIÓN DEL PODIO 3D (Top 3) -->
    <section class="smw_podium_section wi_fadeUp" id="podiumSection">
      <!-- Renderizado Dinámico -->
    </section>

    <!-- SECCIÓN INFERIOR: Top Ganancia + Tabla + Sidebar -->
    <div class="smw_rank_bottom_grid wi_fadeUp">
      
      <!-- Columna Izquierda: Top Ganancia + Tabla de Ventas -->
      <div class="smw_rank_list_card">

        <!-- ① Top 3 · Mayor Ganancia -->
        <div class="smw_card_header">
          <h2><i class="fas fa-sack-dollar" style="color:var(--Paz)"></i> Top Ventas · Mayor Ganancia</h2>
          <span class="smw_badge" id="lblCountParticipantes">— registros</span>
        </div>
        <div id="topGananciaSection" class="smw_top_ganancia_wrap">
          <!-- Skeletons → cargando -->
          ${z()}
        </div>

        <!-- ② Tabla de Ventas del Mes -->
        <div class="smw_card_subheader">
          <h3><i class="fas fa-table" style="color:var(--mco)"></i> Ventas del Mes</h3>
        </div>
        <div id="ventasTablaSection">
          <!-- Skeletons → cargando -->
          ${B()}
        </div>

      </div>

      <!-- Columna Derecha: Sidebar (Ganador anterior y Avisos) -->
      <div class="smw_rank_sidebar">
        
        <!-- Tarjeta de Ganador Anterior -->
        <div class="smw_winner_card" id="lastWinnerCard">
          <div class="smw_winner_header">
            <i class="fas fa-crown"></i>
            <h3>Campeón del Mes Anterior</h3>
          </div>
          <div class="smw_winner_body" id="winnerBody">
            <div class="smw_winner_loading">
              <i class="fas fa-spinner fa-spin"></i> Cargando campeón...
            </div>
          </div>
        </div>

        <!-- Tarjeta de Avisos del Equipo -->
        <div class="smw_notes_card">
          <div class="smw_notes_header">
            <i class="fas fa-bullhorn" style="color:var(--mco)"></i>
            <h3>Avisos del Equipo</h3>
          </div>
          <ul class="smw_notes_list" id="notesList">
            <div class="smw_winner_loading">
              <i class="fas fa-spinner fa-spin"></i> Cargando avisos...
            </div>
          </ul>
        </div>

      </div>

    </div>

  </div>
`,y=async()=>{if(!n.user)return setTimeout(()=>s.navigate(`/login`),100);o(`.wi_fadeUp`).addClass(`visible wi_visible`),window.__WIREADY__=!0,C(),w(g()),P(),console.log(`🏆 SPA Ranking montado — cargando datos en paralelo...`)},b=()=>{o(document).off(`.ranking`),o(`#selRankingMes`).off(`.ranking`),o(`#btnMesAnt`).off(`.ranking`),o(`#btnMesSig`).off(`.ranking`)};function x(e=6){let t=[],n=new Date,r=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];for(let i=0;i<e;i++){let e=new Date(n.getFullYear(),n.getMonth()-i,1),a=e.getFullYear(),o=`${a}-${String(e.getMonth()+1).padStart(2,`0`)}`,s=`${r[e.getMonth()]} ${a}`;t.push({val:o,lbl:s})}return t}function S(e){let[t,n]=e.split(`-`),r=new Date(parseInt(t),parseInt(n)-2,1);return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,`0`)}`}function C(){let e=x(6),t=o(`#selRankingMes`);t.empty(),e.forEach(e=>{t.append(`<option value="${e.val}">${e.lbl}</option>`)});let n=g();t.val(n),o(`#txtMesSeleccionado`).text(t.find(`option:selected`).text()),t.on(`change.ranking`,async()=>{let e=t.val();o(`#txtMesSeleccionado`).text(t.find(`option:selected`).text()),await w(e)}),o(`#btnMesAnt`).on(`click.ranking`,()=>{let n=t.prop(`selectedIndex`);n<e.length-1?t.prop(`selectedIndex`,n+1).trigger(`change`):i(`No hay meses anteriores disponibles.`,`info`)}),o(`#btnMesSig`).on(`click.ranking`,()=>{let e=t.prop(`selectedIndex`);e>0?t.prop(`selectedIndex`,e-1).trigger(`change`):i(`Estás en el mes más reciente.`,`info`)})}async function w(e){let t=o(`.smw_rank_header`);t.addClass(`smw_loading`);try{o(`#podiumSection`).html(I()),o(`#topGananciaSection`).html(z()),o(`#ventasTablaSection`).html(B());let[t,n]=await Promise.all([_(e),T(e)]),r=new Set(t.map(e=>e.usuario)),i=n.filter(e=>r.has(e.vendedor));o(`#podiumSection`).html(E(t)),o(`#topGananciaSection`).html(D(i,t)),o(`#ventasTablaSection`).html(O(i,t)),o(`#lblCountParticipantes`).text(`${i.length} registro${i.length===1?``:`s`}`),await A(e),await M(e,t),setTimeout(()=>{o(`.smw_anim_bounce, .smw_anim_fade`).addClass(`visible`)},50)}catch(e){console.error(`Error cargando mes:`,e),i(`Error cargando clasificación del mes`,`error`)}finally{t.removeClass(`smw_loading`)}}async function T(n){let[r,i]=n.split(`-`).map(Number),a=e=>e.filter(e=>{let t=e.fechaTour;if(!t)return!1;if(t.toDate){let e=t.toDate();return e.getFullYear()===r&&e.getMonth()+1===i}if(typeof t==`string`){let[e,n]=t.split(`-`).map(Number);return e===r&&n===i}return!1}),o=t(`todasVentasSmile`);if(o)return a(o);let s=(await m(p(h,`registrosdb`))).docs.map(e=>({id:e.id,...e.data()}));return e(`todasVentasSmile`,s,5),a(s)}function E(e){let t=e[0]||null,n=e[1]||null,i=e[2]||null,o=(e,t,n,i,o)=>{if(!e)return`
        <div class="smw_podium_place smw_empty_place ${n}">
          <div class="smw_podium_pedestal">
            <span class="smw_pedestal_num">#${t}</span>
          </div>
        </div>
      `;let s=`${(e.nombre||`?`)[0]}${(e.nombre||``)[1]||``}`.toUpperCase(),c=e.imagen?`<img src="${e.imagen}" alt="${e.nombre}" class="smw_podium_img">`:`<div class="smw_podium_avatar_initials">${s}</div>`,l=t===1?`<div class="smw_crown_icon"><i class="fas fa-crown"></i></div>`:``;return`
      <div class="smw_podium_place ${n} smw_anim_bounce" style="animation-delay: ${(3-t)*.15}s">
        ${l}
        <div class="smw_podium_avatar_wrap" style="--glow-color: ${i}">
          ${c}
          <div class="smw_podium_badge"><i class="fas ${o}"></i></div>
        </div>
        <div class="smw_podium_info">
          <h3>${r(e.nombre)}</h3>
          <p>${a(e.descripcion||`Colaborador`)}</p>
        </div>
        <div class="smw_podium_score">
          <span class="smw_podium_pts">${e.totalPuntos} <span>pts</span></span>
          <span class="smw_podium_tours">${e.totalVentas} tours</span>
        </div>
        <div class="smw_podium_pedestal" style="--ped-color: ${i}">
          <span class="smw_pedestal_num">#${t}</span>
        </div>
      </div>
    `};return`
    <div class="smw_podium_container">
      ${o(n,2,`smw_pos_2`,`#A0A0A0`,`fa-medal`)}
      ${o(t,1,`smw_pos_1`,`#FFD700`,`fa-crown`)}
      ${o(i,3,`smw_pos_3`,`#CD7F32`,`fa-award`)}
    </div>
  `}function D(e,t){if(!e.length)return`
    <div class="smw_list_empty"><i class="fas fa-inbox"></i><span>Sin ventas este mes.</span></div>`;let n={};e.forEach(e=>{let t=e.vendedor;n[t]||(n[t]={ganancia:0,ventas:0,puntos:0}),n[t].ganancia+=parseFloat(e.ganancia||0),n[t].ventas+=1,n[t].puntos+=parseInt(e.puntos||0)});let i=Object.entries(n).sort((e,t)=>t[1].ganancia-e[1].ganancia).slice(0,3),a=[`🥇`,`🥈`,`🥉`],o=[`#FFD700`,`#A0A0A0`,`#CD7F32`],s=[`rgba(255,215,0,0.08)`,`rgba(160,160,160,0.06)`,`rgba(205,127,50,0.07)`];return`<div class="smw_top_ganancia_grid">
    ${i.map(([e,n],i)=>{let c=t.find(t=>t.usuario===e),l=r(c?c.nombre:e),u=l.slice(0,2).toUpperCase(),d=c?.imagen?`<img src="${c.imagen}" alt="${l}" class="smw_tg_avatar" onerror="this.style.display='none'">`:`<div class="smw_tg_avatar_initials" style="--tg-color:${o[i]}">${u}</div>`;return`
        <div class="smw_tg_card smw_anim_fade" style="--tg-color:${o[i]};--tg-bg:${s[i]};animation-delay:${i*.08}s">
          <div class="smw_tg_medal">${a[i]}</div>
          <div class="smw_tg_avatar_wrap">${d}</div>
          <div class="smw_tg_info">
            <strong>${l}</strong>
            <span>${n.ventas} venta${n.ventas===1?``:`s`} · <i class="fas fa-star" style="color:#F59E0B"></i> ${n.puntos} pts</span>
          </div>
          <div class="smw_tg_ganancia">
            <strong>S/ ${n.ganancia.toFixed(2)}</strong>
            <span>ganancia</span>
          </div>
        </div>`}).join(``)}
  </div>`}function O(e,t){return e.length?`
    <div class="smw_vt_responsive">
      <table class="smw_vt_table">
        <thead>
          <tr>
            <th><i class="fas fa-calendar"></i> Fecha</th>
            <th><i class="fas fa-route"></i> Tour</th>
            <th><i class="fas fa-user"></i> Usuario</th>
            <th><i class="fas fa-calculator"></i> Total</th>
            <th><i class="fas fa-hand-holding-usd"></i> Ganancia</th>
            <th><i class="fas fa-star"></i> Puntos</th>
          </tr>
        </thead>
        <tbody>${[...e].sort((e,t)=>{let n=e.fechaTour?.toDate?e.fechaTour.toDate():new Date(e.fechaTour||0);return(t.fechaTour?.toDate?t.fechaTour.toDate():new Date(t.fechaTour||0))-n}).map(e=>{let n=t.find(t=>t.usuario===e.vendedor),i=n?r(n.nombre):a(e.vendedor),o=i.slice(0,2).toUpperCase(),s=n?.imagen?`<img src="${n.imagen}" alt="${i}" class="smw_vt_avatar" onerror="this.style.display='none'">`:`<div class="smw_vt_avatar_initials">${o}</div>`;return`
      <tr class="smw_vt_row">
        <td><span class="smw_vt_fecha">${k(e.fechaTour)}</span></td>
        <td><span class="smw_vt_tour_pill">${e.tipoTour||`—`}</span></td>
        <td>
          <div class="smw_vt_user">
            <div class="smw_vt_avatar_wrap">${s}</div>
            <span>${i}</span>
          </div>
        </td>
        <td><strong class="smw_vt_total">S/ ${parseFloat(e.importeTotal||0).toFixed(2)}</strong></td>
        <td><span class="smw_vt_profit">S/ ${parseFloat(e.ganancia||0).toFixed(2)}</span></td>
        <td><span class="smw_vt_pts"><i class="fas fa-star"></i> ${e.puntos||0}</span></td>
      </tr>`}).join(``)}</tbody>
      </table>
    </div>`:`
    <div class="smw_list_empty"><i class="fas fa-inbox"></i><span>Sin ventas este mes.</span></div>`}function k(e){if(!e)return`—`;if(e.toDate){let t=e.toDate();return`${String(t.getDate()).padStart(2,`0`)}/${String(t.getMonth()+1).padStart(2,`0`)}/${t.getFullYear()}`}if(typeof e==`string`){let t=e.split(`T`)[0].split(`-`);return t.length===3?`${t[2]}/${t[1]}/${t[0]}`:e}if(e.seconds){let t=new Date(e.seconds*1e3);return`${String(t.getDate()).padStart(2,`0`)}/${String(t.getMonth()+1).padStart(2,`0`)}/${t.getFullYear()}`}return`—`}async function A(n){try{let r=`resumenMes_${n}`,i=new Date,a=`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,`0`)}-${String(i.getDate()).padStart(2,`0`)}`,o=t(r);if(o&&o.mes===n&&o.dia===a){j(o);return}let s=await m(p(h,`registrosdb`)),[c,l]=n.split(`-`).map(Number),u=0,d=0,f=0;s.docs.forEach(e=>{let t=e.data(),n=t.fechaTour;if(!n)return;let r,i,o;if(typeof n==`string`){let e=n.split(`-`);r=Number(e[0]),i=Number(e[1]),o=n}else if(n.toDate){let e=n.toDate();r=e.getFullYear(),i=e.getMonth()+1,o=`${r}-${String(i).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}else return;r===c&&i===l&&(u+=parseInt(t.qventa)||0,d+=parseInt(t.puntos)||0,o===a&&(f+=parseInt(t.qventa)||0))});let g={mes:n,dia:a,toursHoy:f,toursMes:u,totalPuntos:d,meta:2500};e(r,g,.25),j(g)}catch(e){console.error(`Error actualizando KPIs globales:`,e)}}function j({toursHoy:e,toursMes:t,totalPuntos:n,meta:r}){o(`#rkpiToursHoy`).text(e),o(`#rkpiToursMes`).text(t),o(`#rkpiPuntosEquipo`).text(n);let i=Math.min(Math.round(n/r*100),100);o(`#rkpiMetaMes`).text(`${i}%`),o(`#metaProgressFill`).css(`width`,`${i}%`)}async function M(n,r){try{let i=S(n),a=`ganadorMes_${i}`,s=t(a);if(s){N(s,r);return}o(`#winnerBody`).html(L());let g=i.replace(`-`,``),_=await f(c(h,`ganadores`,g));if(_.exists()){let t=_.data();e(a,t,1440),N(t,r);return}let[v,y]=i.split(`-`).map(Number),b=await m(p(h,`registrosdb`)),x={};b.docs.forEach(e=>{let t=e.data(),n=t.fechaTour;if(!n)return;let r,i;if(typeof n==`string`)[r,i]=n.split(`-`).map(Number);else if(n.toDate){let e=n.toDate();r=e.getFullYear(),i=e.getMonth()+1}else return;if(r===v&&i===y){let e=t.vendedor;x[e]||(x[e]={puntos:0,ventas:0}),x[e].puntos+=parseInt(t.puntos)||0,x[e].ventas+=parseInt(t.qventa)||1}});let C=Object.entries(x);if(!C.length){o(`#winnerBody`).html(`
        <div class="smw_winner_empty">
          <i class="fas fa-question-circle"></i>
          <span>No hay datos de ventas en ${y}/${v} para definir un campeón.</span>
        </div>
      `);return}let[w,T]=C.sort((e,t)=>t[1].puntos-e[1].puntos)[0],E={ganador:w,puntosGanados:T.puntos,totalVentas:T.ventas,mes:y,year:v,mesCompleto:(e=>{let[t,n,r]=e.split(`-`).map(Number),i=new Date,a=new Date(t,n-1,r,i.getHours(),i.getMinutes(),i.getSeconds());return d.fromDate(a)})(`${i}-01`),fechaRegistro:u()};await l(c(h,`ganadores`,g),E),e(a,E,1440),N(E,r)}catch(e){console.error(`Error cargando campeón anterior:`,e),o(`#winnerBody`).html(`
      <div class="smw_winner_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar campeón anterior</span>
      </div>
    `)}}function N(e,t){let n=t.find(t=>t.usuario===e.ganador||t.nombre===e.ganador),i=r(e.ganador||``),a=i.slice(0,2).toUpperCase(),s=n?.imagen?`<img src="${n.imagen}" alt="${e.ganador}">`:`<div class="smw_winner_avatar_initials">${a}</div>`;o(`#winnerBody`).html(`
    <div class="smw_winner_content">
      <div class="smw_winner_avatar_wrap">
        ${s}
        <div class="smw_winner_crown"><i class="fas fa-crown"></i></div>
      </div>
      <div class="smw_winner_details">
        <h4>${i}</h4>
        <p class="smw_winner_period"><i class="fas fa-calendar-alt"></i> Competencia: ${e.mes}/${e.year}</p>
        <div class="smw_winner_stats">
          <span class="smw_w_stat_pts"><i class="fas fa-star"></i> <strong>${e.puntosGanados}</strong> pts</span>
          <span class="smw_w_stat_tours"><i class="fas fa-route"></i> <strong>${e.totalVentas}</strong> tours</span>
        </div>
      </div>
    </div>
  `)}async function P(){try{let n=t(`notasSmile`);if(n){F(n);return}o(`#notesList`).html(R());let r=await m(p(h,`notas`));if(r.empty){F([]);return}let i=r.docs.map(e=>({id:e.id,...e.data()}));e(`notasSmile`,i,10),F(i)}catch(e){console.warn(`Error cargando notas:`,e),F([])}}function F(e){if(!e||!e.length){o(`#notesList`).html(`
      <div class="smw_notes_empty">
        <i class="fas fa-info-circle"></i>
        <span>No hay avisos recientes del equipo.</span>
      </div>
    `);return}let t=e.map(e=>`
    <li class="smw_note_item">
      <i class="fas fa-bullhorn"></i>
      <span>${e.nota||``}</span>
    </li>
  `).join(``);o(`#notesList`).html(t)}function I(){return`
    <div class="smw_podium_container smw_sk_podium">
      <!-- Lugar #2 -->
      <div class="smw_podium_place smw_pos_2">
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 11vh; height: 11vh;"></div>
        <div class="smw_sk_el" style="width: 80px; height: 16px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 55px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 90px; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
      <!-- Lugar #1 -->
      <div class="smw_podium_place smw_pos_1">
        <div class="smw_crown_icon" style="color: var(--brd); opacity: 0.3;"><i class="fas fa-crown"></i></div>
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 13.5vh; height: 13.5vh;"></div>
        <div class="smw_sk_el" style="width: 90px; height: 18px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 60px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 120px; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
      <!-- Lugar #3 -->
      <div class="smw_podium_place smw_pos_3">
        <div class="smw_podium_avatar_wrap smw_sk_el smw_sk_circle" style="border-color: var(--brd); width: 11vh; height: 11vh;"></div>
        <div class="smw_sk_el" style="width: 80px; height: 16px; margin: 1.5vh 0 0.5vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 55px; height: 12px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
        <div class="smw_podium_pedestal smw_sk_el" style="height: 60px; width: 100%; border-radius: 1.5vh 1.5vh 0 0;"></div>
      </div>
    </div>
  `}function L(){return`
    <div class="smw_winner_content smw_sk_winner">
      <div class="smw_winner_avatar_wrap smw_sk_el smw_sk_circle" style="border-radius: 50%; width: 9vh; height: 9vh; background: none;"></div>
      <div class="smw_winner_details" style="flex: 1;">
        <div class="smw_sk_el" style="width: 100px; height: 16px; margin-bottom: 0.8vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 120px; height: 12px; margin-bottom: 1.2vh; border-radius: 4px;"></div>
        <div class="smw_winner_stats" style="display: flex; gap: 1.5vh;">
          <span class="smw_sk_el" style="width: 60px; height: 16px; border-radius: 4px;"></span>
          <span class="smw_sk_el" style="width: 60px; height: 16px; border-radius: 4px;"></span>
        </div>
      </div>
    </div>
  `}function R(){return`
    <div class="smw_notes_sk" style="width: 100%; padding: 1vh 0;">
      <div class="smw_sk_el" style="width: 100%; height: 14px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
      <div class="smw_sk_el" style="width: 90%; height: 14px; margin-bottom: 1.5vh; border-radius: 4px;"></div>
      <div class="smw_sk_el" style="width: 95%; height: 14px; border-radius: 4px;"></div>
    </div>
  `}function z(){return`<div class="smw_top_ganancia_grid">${[0,1,2].map(e=>`
    <div class="smw_tg_card" style="--tg-color:var(--brd);--tg-bg:var(--bg5)">
      <div class="smw_sk_el" style="width:32px;height:32px;border-radius:50%;flex-shrink:0"></div>
      <div class="smw_sk_el smw_sk_circle" style="width:5vh;height:5vh;flex-shrink:0"></div>
      <div style="flex:1;display:flex;flex-direction:column;gap:0.7vh">
        <div class="smw_sk_el" style="width:90px;height:14px"></div>
        <div class="smw_sk_el" style="width:70px;height:11px"></div>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.5vh;align-items:flex-end">
        <div class="smw_sk_el" style="width:65px;height:18px"></div>
        <div class="smw_sk_el" style="width:45px;height:11px"></div>
      </div>
    </div>`).join(``)}</div>`}function B(){return`<div class="smw_vt_responsive">
    <table class="smw_vt_table">
      <thead><tr>
        <th>Fecha</th><th>Tour</th><th>Usuario</th><th>Total</th><th>Ganancia</th><th>Puntos</th>
      </tr></thead>
      <tbody>${[,,,,,].fill(0).map(()=>`
        <tr class="smw_vt_row">
          <td><span class="smw_sk_el" style="width:65px;height:13px"></span></td>
          <td><span class="smw_sk_el" style="width:90px;height:22px;border-radius:5px"></span></td>
          <td><div style="display:flex;align-items:center;gap:8px">
            <span class="smw_sk_el smw_sk_circle" style="width:26px;height:26px"></span>
            <span class="smw_sk_el" style="width:75px;height:13px"></span>
          </div></td>
          <td><span class="smw_sk_el" style="width:55px;height:14px"></span></td>
          <td><span class="smw_sk_el" style="width:50px;height:14px"></span></td>
          <td><span class="smw_sk_el" style="width:44px;height:20px;border-radius:50px"></span></td>
        </tr>`).join(``)}
      </tbody>
    </table>
  </div>`}export{b as cleanup,y as init,v as render};