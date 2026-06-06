import{b as e}from"./widev-BKJDWmod.js";import{n as t}from"./vendor-Dkcx8wGc.js";import{r as n}from"./index-DzBLy80i.js";import{g as r,m as i,o as a,u as o}from"./firebase-C5pCnWkN.js";import{n as s}from"./firebase-CHrAjG0U.js";var c=()=>e(`wiSmile`)||null,l=async()=>{let e=c();if(e&&e.uid)try{let t=await a(o(r(s,`cumples`),i(`userId`,`==`,e.uid)));return t.empty?[]:t.docs.map(e=>({id:e.id,...e.data()})).filter(e=>e.activo!==!1)}catch(e){return console.warn(`Error loading from Firestore:`,e),[]}else{let e=localStorage.getItem(`cumplesLocal`);if(e)try{return JSON.parse(e).filter(e=>e.activo!==!1)}catch{return[]}return[]}},u=e=>{let t=new Date;t.setHours(0,0,0,0);let n=t.getFullYear(),r=new Date(n,e.mes-1,e.dia);r.setHours(0,0,0,0),r<t&&r.setFullYear(n+1);let i=r-t;return Math.ceil(i/(1e3*60*60*24))},d=e=>e===0?`Hoy`:e===1?`Mañana`:`Faltan ${e} días`,f=e=>{switch(e?.toLowerCase()){case`dulce`:return`linear-gradient(135deg, #FF5C69, #FF8B95)`;case`mora`:return`linear-gradient(135deg, #7000FF, #9D5CFF)`;case`cielo`:return`linear-gradient(135deg, #0EBEFF, #66D5FF)`;case`paz`:return`linear-gradient(135deg, #29C72E, #72EA76)`;default:return`linear-gradient(135deg, #FFDA34, #FFE366)`}},p=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`],m=e=>{let t=u(e),n=t>=0&&t<=3,r=f(e.avatarColorNombre||`Oro`),i={amigo:{txt:`Amistad`,ico:`fa-user-group`,cls:`rel_amigo`},familia:{txt:`Familia`,ico:`fa-house-chimney-user`,cls:`rel_familia`},pareja:{txt:`Amor`,ico:`fa-heart`,cls:`rel_pareja`},trabajo:{txt:`Trabajo`,ico:`fa-briefcase`,cls:`rel_trabajo`},conocido:{txt:`Contacto`,ico:`fa-handshake`,cls:`rel_conocido`}}[e.relacion?.toLowerCase()]||{txt:`Personal`,ico:`fa-user`,cls:`rel_personal`};return`
    <div class="cp_card ${n?`urgent`:``} ${e.pin?`pinned`:``}" data-id="${e.id}">
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
          <span class="cp_pill ${n?`urgent`:``}">${d(t)}</span>
        </div>
      </div>
      
      <div class="cp_card_body">
        <div class="cp_date_block">
          <i class="fas fa-cake-candles"></i>
          <span>${e.dia} de ${p[e.mes-1]} ${e.anio?`· <strong>${new Date().getFullYear()-e.anio} años</strong>`:``}</span>
        </div>
        ${e.nota?`<div class="cp_note_box"><i class="fas fa-quote-left"></i><span>${e.nota}</span></div>`:``}
      </div>
      
      <div class="cp_card_actions">
        <span class="ms_edit_link" data-id="${e.id}"><i class="fas fa-pencil-alt"></i> Editar en Cumples ›</span>
      </div>
    </div>
  `},h=[],g=new Date().getFullYear(),_=new Date().getMonth()+1,v=null,y=()=>`
    <div class="ms_wrap">
      
      <!-- HERO -->
      <div class="ms_hero">
        <h1 class="ms_hero_title">Calendario Mensual</h1>
        <p class="ms_hero_subtitle">Visualiza y planifica los cumpleaños agrupados por mes.</p>
      </div>

      <!-- TWO COLUMN CONTAINER -->
      <div class="ms_container">
        
        <!-- LEFT COLUMN (CALENDAR) -->
        <div class="ms_col_left">
          <!-- MONTH NAVIGATOR -->
          <div class="ms_nav">
            <button class="ms_nav_btn" id="ms_prev"><i class="fas fa-chevron-left"></i></button>
            <span class="ms_nav_title" id="ms_nav_title">...</span>
            <button class="ms_nav_btn" id="ms_next"><i class="fas fa-chevron-right"></i></button>
          </div>

          <!-- CALENDAR GRID -->
          <div class="ms_calendar">
            <div class="ms_weekdays">
              <div class="ms_weekday">Lun</div>
              <div class="ms_weekday">Mar</div>
              <div class="ms_weekday">Mié</div>
              <div class="ms_weekday">Jue</div>
              <div class="ms_weekday">Vie</div>
              <div class="ms_weekday">Sáb</div>
              <div class="ms_weekday">Dom</div>
            </div>
            <div class="ms_days_grid" id="ms_days_grid"></div>
          </div>
        </div>

        <!-- RIGHT COLUMN (BIRTHDAY LISTING) -->
        <div class="ms_col_right">
          <!-- FILTER TITLE SECTION -->
          <div class="ms_list_header">
            <h2 class="ms_list_title" id="ms_list_title">Cumpleaños</h2>
            <button class="ms_clear_filter" id="ms_clear_filter" style="display: none;">Ver todo el mes</button>
          </div>

          <!-- LIST OF BIRTHDAYS -->
          <div class="ms_list" id="ms_list">
            <div style="text-align: center; padding: 4vh;"><i class="fas fa-spinner fa-spin"></i> Cargando...</div>
          </div>
        </div>

      </div>

    </div>
  `,b=()=>{let e=t(`#ms_days_grid`);e.empty(),t(`#ms_nav_title`).text(`${p[_-1]} ${g}`);let n=new Date(g,_,0).getDate(),r=new Date(g,_-1,1).getDay();r=r===0?6:r-1;for(let t=0;t<r;t++)e.append(`<div class="ms_day_cell empty"></div>`);let i=new Date,a=i.getFullYear()===g&&i.getMonth()+1===_,o=h.filter(e=>e.mes===_);for(let r=1;r<=n;r++){let n=o.some(e=>e.dia===r),s=t(`
      <div class="ms_day_cell ${a&&i.getDate()===r?`today`:``} ${v===r?`selected`:``} ${n?`has_birthdays`:``}" data-day="${r}">
        <span class="ms_day_num">${r}</span>
      </div>
    `);e.append(s)}x()},x=()=>{let e=t(`#ms_list`),n=h.filter(e=>e.mes===_),r=n.sort((e,t)=>e.dia-t.dia);if(v===null?(t(`#ms_list_title`).text(`Cumpleaños de ${p[_-1]}`),t(`#ms_clear_filter`).hide()):(r=n.filter(e=>e.dia===v),t(`#ms_list_title`).text(`Cumpleaños del ${v} de ${p[_-1]}`),t(`#ms_clear_filter`).show()),r.length===0){e.html(`
      <div style="text-align: center; padding: 4vh; color: var(--tx3); font-style: italic;">
        <i class="fas fa-calendar-times" style="font-size: 2rem; margin-bottom: 1.5vh; display: block; color: var(--tx3);"></i>
        ${v===null?`No hay cumpleaños para este mes.`:`No hay cumpleaños para este día.`}
      </div>
    `);return}e.html(r.map(m).join(``))},S=async()=>{h=await l(),b(),t(document).off(`.ms`).on(`click.ms`,`#ms_prev`,()=>{_--,_<1&&(_=12,g--),v=null,b()}).on(`click.ms`,`#ms_next`,()=>{_++,_>12&&(_=1,g++),v=null,b()}).on(`click.ms`,`.ms_day_cell[data-day]`,function(){let e=parseInt(t(this).data(`day`));v=v===e?null:e,t(`.ms_day_cell`).removeClass(`selected`),v!==null&&t(this).addClass(`selected`),x()}).on(`click.ms`,`#ms_clear_filter`,()=>{v=null,t(`.ms_day_cell`).removeClass(`selected`),b()}).on(`click.ms`,`.ms_edit_link`,function(){n.navigate(`/cumples`)})},C=()=>{t(document).off(`.ms`)};export{C as cleanup,S as init,y as render};