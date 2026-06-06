import{t as e}from"./wii-DFanSMW3.js";import{E as t,O as n,b as r}from"./widev-BKJDWmod.js";import{r as i}from"./index-DzBLy80i.js";import{g as a,m as o,o as s,u as c}from"./firebase-C5pCnWkN.js";import{n as l}from"./firebase-CHrAjG0U.js";import"./cumples-BDYtcOKV.js";var u=()=>r(`wiSmile`)||null,d=async()=>{let e=u();if(e&&e.uid)try{let t=await s(c(a(l,`cumples`),o(`userId`,`==`,e.uid)));return t.empty?[]:t.docs.map(e=>({id:e.id,...e.data()})).filter(e=>e.activo!==!1)}catch(e){return console.warn(`Error loading from Firestore:`,e),[]}else{let e=localStorage.getItem(`cumplesLocal`);if(e)try{return JSON.parse(e).filter(e=>e.activo!==!1)}catch{return[]}return[]}},f=e=>{let t=new Date;t.setHours(0,0,0,0);let n=t.getFullYear(),r=new Date(n,e.mes-1,e.dia);r.setHours(0,0,0,0),r<t&&r.setFullYear(n+1);let i=r-t;return Math.ceil(i/(1e3*60*60*24))},p=e=>e===0?`Hoy`:e===1?`Mañana`:`Faltan ${e} días`,m=e=>{switch(e?.toLowerCase()){case`dulce`:return`linear-gradient(135deg, #FF5C69, #FF8B95)`;case`mora`:return`linear-gradient(135deg, #7000FF, #9D5CFF)`;case`cielo`:return`linear-gradient(135deg, #0EBEFF, #66D5FF)`;case`paz`:return`linear-gradient(135deg, #29C72E, #72EA76)`;default:return`linear-gradient(135deg, #FFDA34, #FFE366)`}},h=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`],g=[],_=()=>{let e=u();if(!e)return location.replace(`/`),``;let t=e.nombre||e.usuario||`amigo`;return`
    <div class="smw_dash" data-showi="80">
      <header class="smw_hero">
        <div class="smw_hero_glow"></div>
        <div class="smw_hero_content">
          <div class="smw_hero_left">
            <div class="smw_avatar_wrap">
              <div class="smw_avatar" id="smwAvatar">${(t[0]||`?`).toUpperCase()}</div>
              <div class="smw_avatar_ring"></div>
            </div>
            <div class="smw_welcome">
              <h1 id="smwSaludo">¡Hola, ${t}!</h1>
              <p id="smwNext">Tu agenda de cumpleaños lista para empezar.</p>
            </div>
          </div>
        </div>
      </header>

      <section class="smw_kpi_band" id="smwKpis">
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiHoy" style="color: var(--Cielo)">0</span>
          <span class="smw_kpi_lbl">Hoy</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiTotal" style="color: var(--Oro)">0</span>
          <span class="smw_kpi_lbl">Total</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiPins" style="color: var(--Mora)">0</span>
          <span class="smw_kpi_lbl">Pins</span>
        </div>
      </section>

      <nav class="smw_quick_nav">
        ${[{page:`cumples`,ico:`fa-cake-candles`,col:`#FF5C69`,tit:`Cumples`,sub:`Gestionar fechas especiales`},{page:`meses`,ico:`fa-calendar-days`,col:`#FFDA34`,tit:`Meses`,sub:`Calendario mensual`},{page:`musica`,ico:`fa-headphones`,col:`#0EBEFF`,tit:`Música`,sub:`Canciones de cumpleaños`}].map((e,t)=>`
          <a href="/${e.page}" class="smw_qcard nv_item" data-page="${e.page}" style="--qc:${e.col};">
            <div class="smw_qcard_ico" style="--qc: ${e.col}"><i class="fas ${e.ico}"></i></div>
            <div class="smw_qcard_txt">
              <strong>${e.tit}</strong>
              <span>${e.sub}</span>
            </div>
            <i class="fas fa-arrow-right smw_qcard_arr"></i>
          </a>
        `).join(``)}
      </nav>

      <div class="cp_wrap" style="padding-top: 0; padding-left: 0; padding-right: 0;">
        <h2 class="ms_list_title" style="margin-top: 2vh; margin-bottom: 2vh;">Próximos Cumpleaños</h2>
        <div class="cp_grid" id="upcoming_grid" data-showi="60">
          <div style="text-align: center; padding: 4vh; color: var(--tx3); font-style: italic;">No hay próximos cumpleaños.</div>
        </div>
      </div>
    </div>
  `},v=e=>{e.target.closest(`.cp_card`)&&i.navigate(`/cumples`)},y=e=>{let t=e.filter(e=>f(e)===0).length,r=e.length,i=e.filter(e=>e.pin).length,a=document.getElementById(`kpiHoy`),o=document.getElementById(`kpiTotal`),s=document.getElementById(`kpiPins`);a&&(a.textContent=t),o&&(o.textContent=r),s&&(s.textContent=i);let c=document.getElementById(`smwNext`),l=document.getElementById(`upcoming_grid`);if(e.length>0){let t=[...e].sort((e,t)=>f(e)-f(t)),n=t[0],r=f(n),i=``;i=r===0?`¡Hoy!`:r===1?`mañana`:`en ${r} días`,c&&(c.innerHTML=`Próximo: <strong>${n.nombre}</strong> (${i})`);let a=t.slice(0,3).map(e=>{let t=f(e),n=t>=0&&t<=3,r=m(e.avatarColorNombre||`Oro`),i={amigo:{txt:`Amistad`,ico:`fa-user-group`,cls:`rel_amigo`},familia:{txt:`Familia`,ico:`fa-house-chimney-user`,cls:`rel_familia`},pareja:{txt:`Amor`,ico:`fa-heart`,cls:`rel_pareja`},trabajo:{txt:`Trabajo`,ico:`fa-briefcase`,cls:`rel_trabajo`},conocido:{txt:`Contacto`,ico:`fa-handshake`,cls:`rel_conocido`}}[e.relacion?.toLowerCase()]||{txt:`Personal`,ico:`fa-user`,cls:`rel_personal`};return`
        <div class="cp_card ${n?`urgent`:``} ${e.pin?`pinned`:``}" data-id="${e.id}" style="cursor: pointer;">
          <div class="cp_card_header">
            <div class="cp_avatar_container">
              <div class="cp_avatar_ring" style="background: ${r}"></div>
              <div class="cp_avatar_wrap" style="background: ${e.avatar?`url('${e.avatar}')`:r}; background-size: cover; background-position: center;">
                ${e.avatar?``:e.iniciales||`CW`}
              </div>
            </div>
            <div class="cp_info">
              <div class="cp_name_row">
                <span class="cp_name" title="${e.nombre}">${e.nombre}</span>
              </div>
              <div class="cp_rel_row">
                <span class="cp_rel_badge ${i.cls}">
                  <i class="fas ${i.ico}"></i> ${i.txt}
                </span>
              </div>
            </div>
            <div class="cp_badge_side">
              <span class="cp_pill ${n?`urgent`:``}">${p(t)}</span>
            </div>
          </div>
          
          <div class="cp_card_body">
            <div class="cp_date_block">
              <i class="fas fa-cake-candles"></i>
              <span>${e.dia} de ${h[e.mes-1]} ${e.anio?`· <strong>${new Date().getFullYear()-e.anio} años</strong>`:``}</span>
            </div>
            ${e.nota?`<div class="cp_note_box"><i class="fas fa-quote-left"></i><span>${e.nota}</span></div>`:``}
          </div>
        </div>
      `}).join(``);l&&(l.innerHTML=a)}else c&&(c.textContent=`Tu agenda de cumpleaños lista para empezar.`),l&&(l.innerHTML=`<div style="text-align: center; padding: 4vh; color: var(--tx3); font-style: italic;">No hay próximos cumpleaños.</div>`);n(`[data-showi]`)},b=async()=>{let n=u();if(!n)return setTimeout(()=>i.navigate(`/login`),100);let a=`${(n.nombre||`?`)[0]}${(n.apellidos||``)[0]||``}`.toUpperCase(),o=document.getElementById(`smwAvatar`);o&&(o.textContent=a);let s=`cumplesCache_${n.uid}`,c=r(s);if(c&&Array.isArray(c))g=c,y(g);else{let e=document.getElementById(`upcoming_grid`);e&&(e.innerHTML=`<div style="text-align: center; padding: 4vh; color: var(--tx3); font-style: italic;">Cargando cumpleaños...</div>`)}d().then(e=>{t(s,e,24),g=e,y(g)}).catch(e=>{console.error(`Error fetching fresh birthdays:`,e)}),document.addEventListener(`click`,v),console.log(`🏜️ ${e} Dashboard de cumpleaños cargado`),window.__WIREADY__=!0},x=()=>{document.removeEventListener(`click`,v)};export{x as cleanup,b as init,_ as render};