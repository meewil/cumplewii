import{V as e,b as t,i as n}from"./widev-BKJDWmod.js";import{n as r}from"./vendor-Dkcx8wGc.js";import"./index-DzBLy80i.js";import{_ as i,b as a,d as o,g as s,m as c,o as l,r as u,u as d}from"./firebase-C5pCnWkN.js";import{n as f}from"./firebase-CHrAjG0U.js";var p=()=>t(`wiSmile`)||null,m=async()=>{let e=p();if(e&&e.uid)try{let t=await l(d(s(f,`cumples`),c(`userId`,`==`,e.uid)));return t.empty?[]:t.docs.map(e=>({id:e.id,...e.data()})).filter(e=>e.activo!==!1).sort((e,t)=>v(e)-v(t))}catch(e){return console.warn(`Error loading from Firestore:`,e),[]}else{let e=localStorage.getItem(`cumplesLocal`);if(e)try{return JSON.parse(e).filter(e=>e.activo!==!1).sort((e,t)=>v(e)-v(t))}catch{return _()}else return _()}},h=async e=>{let t=p();if(t&&t.uid){let n=e.id||`${x(e.nombre)}_${Date.now()}`,r={...e,id:n,userId:t.uid,ownerUid:t.uid,usuario:t.usuario,email:t.email,actualizado:a(),creado:e.creado||a()};return await o(i(f,`cumples`,n),r),r}else{let t=await m(),n=e.id||`local_${Date.now()}`,r={...e,id:n,userId:`local`,ownerUid:`local`,usuario:`Invitado`,email:`local@cumplewii.com`,actualizado:new Date().toISOString(),creado:e.creado||new Date().toISOString()},i=t.findIndex(e=>e.id===n);return i===-1?t.push(r):t[i]=r,localStorage.setItem(`cumplesLocal`,JSON.stringify(t)),r}},g=async e=>{let t=p();if(t&&t.uid)e.startsWith(`local`)||await u(i(f,`cumples`,e));else{let t=(await m()).filter(t=>t.id!==e);localStorage.setItem(`cumplesLocal`,JSON.stringify(t))}},_=()=>{let e=new Date,t=t=>{let n=new Date;return n.setDate(e.getDate()+t),n},n=t(0),r=t(3),i=t(40),a=[{id:`demo_1`,nombre:`Lucía Fernández`,dia:n.getDate(),mes:n.getMonth()+1,anio:n.getFullYear()-22,relacion:`amiga`,telefono:``,nota:`Le encantan los tulipanes blancos.`,avatarColor:`#FF5C69`,avatarColorNombre:`Dulce`,avatarCover:`cover_dulce_01`,activo:!0,pin:!1},{id:`demo_2`,nombre:`Mamá`,dia:r.getDate(),mes:r.getMonth()+1,anio:e.getFullYear()-50,relacion:`familia`,telefono:``,nota:`Preparar llamada y abrazo bonito`,avatarColor:`#7000FF`,avatarColorNombre:`Mora`,avatarCover:`cover_mora_01`,activo:!0,pin:!0},{id:`demo_3`,nombre:`Carlos`,dia:i.getDate(),mes:i.getMonth()+1,anio:i.getFullYear()-30,relacion:`amigo`,telefono:``,nota:`Buscar regalo con tiempo`,avatarColor:`#0EBEFF`,avatarColorNombre:`Cielo`,avatarCover:`cover_cielo_01`,activo:!0,pin:!1}].map(e=>({...e,iniciales:b(e.nombre),fechaTexto:`${String(e.dia).padStart(2,`0`)}/${String(e.mes).padStart(2,`0`)}/${e.anio}`}));return localStorage.setItem(`cumplesLocal`,JSON.stringify(a)),a},v=e=>{let t=new Date;t.setHours(0,0,0,0);let n=t.getFullYear(),r=new Date(n,e.mes-1,e.dia);r.setHours(0,0,0,0),r<t&&r.setFullYear(n+1);let i=r-t;return Math.ceil(i/(1e3*60*60*24))},y=e=>e===0?`Hoy`:e===1?`Mañana`:`Faltan ${e} días`,b=e=>e.trim().split(/\s+/).filter(e=>e.length>0).slice(0,2).map(e=>e[0].toUpperCase()).join(``)||`CW`,x=e=>e.trim().split(/\s+/)[0].toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]/g,``)||`cumple`,S=e=>{let t=(e.trim().split(/\s+/)[0]||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``),n=t.slice(-1),r=t.slice(-2,-1),i=`bcdfghjklmnpqrstvwxyz`;return n===`a`?{hex:`#FF5C69`,name:`Dulce`}:i.includes(n)&&r===`a`?{hex:`#7000FF`,name:`Mora`}:n===`o`||n===`e`?{hex:`#0EBEFF`,name:`Cielo`}:i.includes(n)&&r===`e`?{hex:`#29C72E`,name:`Paz`}:{hex:`#FFDA34`,name:`Oro`}},C=e=>{switch(e.toLowerCase()){case`dulce`:return`linear-gradient(135deg, #FF5C69, #FF8B95)`;case`mora`:return`linear-gradient(135deg, #7000FF, #9D5CFF)`;case`cielo`:return`linear-gradient(135deg, #0EBEFF, #66D5FF)`;case`paz`:return`linear-gradient(135deg, #29C72E, #72EA76)`;default:return`linear-gradient(135deg, #FFDA34, #FFE366)`}},w=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`],T=e=>{let t=v(e),n=t>=0&&t<=3,r=C(e.avatarColorNombre||`Oro`),i={amigo:{txt:`Amistad`,ico:`fa-user-group`,cls:`rel_amigo`},familia:{txt:`Familia`,ico:`fa-house-chimney-user`,cls:`rel_familia`},pareja:{txt:`Amor`,ico:`fa-heart`,cls:`rel_pareja`},trabajo:{txt:`Trabajo`,ico:`fa-briefcase`,cls:`rel_trabajo`},conocido:{txt:`Contacto`,ico:`fa-handshake`,cls:`rel_conocido`}}[e.relacion?.toLowerCase()]||{txt:`Personal`,ico:`fa-user`,cls:`rel_personal`};return`
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
          <span class="cp_pill ${n?`urgent`:``}">${y(t)}</span>
        </div>
      </div>
      
      <div class="cp_card_body">
        <div class="cp_date_block">
          <i class="fas fa-cake-candles"></i>
          <span>${e.dia} de ${w[e.mes-1]} ${e.anio?`· <strong>${new Date().getFullYear()-e.anio} años</strong>`:``}</span>
        </div>
        ${e.nota?`<div class="cp_note_box"><i class="fas fa-quote-left"></i><span>${e.nota}</span></div>`:``}
      </div>
      
      <div class="cp_card_actions">
        <span class="cp_details_lbl" data-id="${e.id}"><i class="fas fa-circle-info"></i> Detalles</span>
        <button class="cp_action_btn pin ${e.pin?`active`:``}" data-id="${e.id}" title="${e.pin?`Quitar destacado`:`Destacar`}">
          <i class="fas ${e.pin?`fa-heart`:`fa-heart-broken`}"></i>
        </button>
        <button class="cp_action_btn edit" data-id="${e.id}" title="Editar">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button class="cp_action_btn delete" data-id="${e.id}" title="Eliminar">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  `},E=[],D=null,O=()=>{let e=p(),t=e?e.nombre||e.usuario:`Invitado`;return`
    <div class="cp_wrap">
      
      <!-- HERO STATS -->
      <div class="cp_hero">
        <div class="cp_hero_top">
          <div class="cp_hero_info">
            <span class="cp_pill">${e?`<i class="fas fa-cloud"></i> Nube (Sincronizado)`:`<i class="fas fa-hdd"></i> Local (Sin sesión)`}</span>
            <h1 class="cp_hero_title">Cumples de ${t}</h1>
            <p class="cp_hero_subtitle">Organiza y recuerda las fechas especiales de tu gente.</p>
          </div>
          <div class="cp_hero_icon">
            <i class="fas fa-cake-candles"></i>
          </div>
        </div>
        
        <div class="cp_stats">
          <div class="cp_stat_card">
            <i class="fas fa-calendar-day"></i>
            <span class="cp_stat_num" id="stat_hoy">0</span>
            <span class="cp_stat_lbl">Hoy</span>
          </div>
          <div class="cp_stat_card">
            <i class="fas fa-cake-candles"></i>
            <span class="cp_stat_num" id="stat_total">0</span>
            <span class="cp_stat_lbl">Total</span>
          </div>
          <div class="cp_stat_card">
            <i class="fas fa-heart"></i>
            <span class="cp_stat_num" id="stat_pins">0</span>
            <span class="cp_stat_lbl">Pins</span>
          </div>
        </div>
      </div>

      <!-- ACTIONS BAR -->
      <div class="cp_actions_bar">
        <div class="cp_search_wrap">
          <i class="fas fa-search"></i>
          <input type="text" class="cp_search_input" id="cp_buscar" placeholder="Buscar cumpleañero o notas...">
        </div>
        <button class="cp_add_btn" id="cp_add_btn">
          <i class="fas fa-plus"></i> Añadir cumple
        </button>
      </div>

      <!-- GRID LISTING -->
      <div class="cp_grid" id="cp_grid">
        <div style="text-align: center; padding: 4vh;"><i class="fas fa-spinner fa-spin"></i> Cargando cumpleaños...</div>
      </div>

    </div>

    <!-- SHEET MODAL FOR ADD/EDIT -->
    <div class="cp_modal_overlay" id="cp_modal">
      <div class="cp_modal_sheet">
        <div class="cp_modal_header">
          <h2 class="cp_modal_title" id="modal_title">Nuevo Cumpleaños</h2>
          <button class="cp_modal_close" id="modal_close"><i class="fas fa-times"></i></button>
        </div>
        
        <form class="cp_form" id="cp_form">
          <div class="cp_form_row">
            <div class="cp_form_grp">
              <label for="f_nombre">Nombre *</label>
              <input type="text" id="f_nombre" required placeholder="Ej. Lucía Fernández">
            </div>
            <div class="cp_form_grp">
              <label for="f_relacion">Relación</label>
              <select id="f_relacion">
                <option value="amigo">Amigo/a</option>
                <option value="familia">Familia</option>
                <option value="pareja">Pareja</option>
                <option value="trabajo">Trabajo</option>
                <option value="conocido">Conocido/a</option>
              </select>
            </div>
          </div>

          <div class="cp_form_row">
            <div class="cp_form_grp">
              <label>Fecha de Nacimiento *</label>
              <div style="display:flex; gap:1vh;">
                <select id="f_dia" style="flex:1;" required></select>
                <select id="f_mes" style="flex:2;" required></select>
                <select id="f_anio" style="flex:1.5;"></select>
              </div>
            </div>
            <div class="cp_form_grp">
              <label for="f_telefono">Teléfono</label>
              <input type="text" id="f_telefono" placeholder="Ej. +51 999...">
            </div>
          </div>

          <div class="cp_form_grp">
            <label for="f_avatar">Enlace del Avatar (URL)</label>
            <input type="text" id="f_avatar" placeholder="https://ejemplo.com/avatar.jpg">
          </div>

          <div class="cp_form_grp">
            <label for="f_gift">Ideas de Regalo</label>
            <input type="text" id="f_gift" placeholder="¿Qué le gustaría recibir?">
          </div>

          <div class="cp_form_grp">
            <label for="f_nota">Notas especiales</label>
            <textarea id="f_nota" rows="2" placeholder="Detalles, sorpresas o recordatorios..."></textarea>
          </div>

          <div class="cp_checkbox_row">
            <label for="f_pin">Destacar en Inicio (Pin)</label>
            <input type="checkbox" id="f_pin">
          </div>

          <button type="submit" class="cp_save_btn" id="f_submit">
            <i class="fas fa-save"></i> Guardar
          </button>
        </form>
      </div>
    </div>
  `},k=e=>{let t=r(`#cp_grid`);if(!e||e.length===0){t.html(`
      <div class="cp_empty">
        <i class="fas fa-cake-candles"></i>
        <div class="cp_empty_txt">Aún no hay cumpleaños registrados.</div>
        <p style="color:var(--tx3); font-size:var(--fz_m1);">¡Agrega el primero para comenzar a recordar!</p>
      </div>
    `);return}let n=[...e].sort((e,t)=>e.pin&&!t.pin?-1:!e.pin&&t.pin?1:v(e)-v(t));t.html(n.map(T).join(``))},A=e=>{let t=e.filter(e=>v(e)===0).length,n=e.length,i=e.filter(e=>e.pin).length;r(`#stat_hoy`).text(t),r(`#stat_total`).text(n),r(`#stat_pins`).text(i)},j=()=>{let e=r(`#f_dia`),t=r(`#f_mes`),n=r(`#f_anio`);e.html(`<option value="" disabled selected>Día</option>`);for(let t=1;t<=31;t++)e.append(`<option value="${t}">${t}</option>`);t.html(`<option value="" disabled selected>Mes</option>`),w.forEach((e,n)=>{t.append(`<option value="${n+1}">${e}</option>`)});let i=new Date().getFullYear();n.html(`<option value="">Año (opc)</option>`);for(let e=i;e>=i-100;e--)n.append(`<option value="${e}">${e}</option>`)},M=(e=null)=>{D=e,j(),e?(r(`#modal_title`).text(`Editar Cumpleaños`),r(`#f_nombre`).val(e.nombre),r(`#f_relacion`).val(e.relacion||`amigo`),r(`#f_dia`).val(e.dia),r(`#f_mes`).val(e.mes),r(`#f_anio`).val(e.anio||``),r(`#f_telefono`).val(e.telefono||``),r(`#f_avatar`).val(e.avatar||``),r(`#f_gift`).val(e.ideasRegalo||``),r(`#f_nota`).val(e.nota||``),r(`#f_pin`).prop(`checked`,e.pin||!1)):(r(`#modal_title`).text(`Nuevo Cumpleaños`),r(`#cp_form`)[0].reset()),r(`#cp_modal`).addClass(`active`)},N=()=>{r(`#cp_modal`).removeClass(`active`),D=null},P=async()=>{E=await m(),k(E),A(E),r(document).off(`.cp`).on(`click.cp`,`#cp_add_btn`,()=>M()).on(`click.cp`,`#modal_close, #cp_modal`,e=>{(e.target.id===`modal_close`||e.target.id===`cp_modal`||r(e.target).closest(`#modal_close`).length>0)&&N()}).on(`input.cp`,`#cp_buscar`,function(){let e=r(this).val().toLowerCase().trim();k(e?E.filter(t=>t.nombre.toLowerCase().includes(e)||t.nota&&t.nota.toLowerCase().includes(e)||t.relacion.toLowerCase().includes(e)):E)}).on(`submit.cp`,`#cp_form`,async function(t){t.preventDefault();let i=r(`#f_nombre`).val().trim(),a=r(`#f_relacion`).val(),o=parseInt(r(`#f_dia`).val()),s=parseInt(r(`#f_mes`).val()),c=r(`#f_anio`).val(),l=c?parseInt(c):null,u=r(`#f_telefono`).val().trim(),d=r(`#f_avatar`).val().trim(),f=r(`#f_gift`).val().trim(),p=r(`#f_nota`).val().trim(),m=r(`#f_pin`).is(`:checked`);if(!i)return e(document.getElementById(`f_nombre`),`Ingresa un nombre`,`error`);if(!o)return e(document.getElementById(`f_dia`),`Selecciona el día`,`error`);if(!s)return e(document.getElementById(`f_mes`),`Selecciona el mes`,`error`);let g=S(i),_=coverFor(i,g.name),v={...D||{},nombre:i,relacion:a,dia:o,mes:s,anio:l,telefono:u,avatar:d,ideasRegalo:f,nota:p,pin:m,activo:!0,iniciales:b(i),avatarColor:g.hex,avatarColorNombre:g.name,avatarCover:_,fechaTexto:`${String(o).padStart(2,`0`)}/${String(s).padStart(2,`0`)}${l?`/${l}`:``}`};r(`#f_submit`).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Guardando...`);try{let e=await h(v);if(D){let t=E.findIndex(t=>t.id===e.id);t!==-1&&(E[t]=e),n(`Cumpleaños actualizado ✅`,`success`)}else E.push(e),n(`Cumpleaños añadido 🎉`,`success`);N(),k(E),A(E)}catch(e){console.error(e),n(`Error al guardar`,`error`)}finally{r(`#f_submit`).prop(`disabled`,!1).html(`<i class="fas fa-save"></i> Guardar`)}}).on(`click.cp`,`.cp_action_btn.pin`,async function(e){e.stopPropagation();let t=r(this).data(`id`),i=E.find(e=>e.id===t);if(!i)return;let a=!i.pin;r(this).toggleClass(`active`,a).html(`<i class="fas ${a?`fa-heart`:`fa-heart-broken`}"></i>`);try{i.pin=a,await h(i),A(E),k(E)}catch(e){console.error(e),n(`Error al actualizar destaque`,`error`)}}).on(`click.cp`,`.cp_action_btn.edit`,function(e){e.stopPropagation();let t=r(this).data(`id`),n=E.find(e=>e.id===t);n&&M(n)}).on(`click.cp`,`.cp_action_btn.delete`,async function(e){e.stopPropagation();let t=r(this).data(`id`),i=E.find(e=>e.id===t);if(i&&confirm(`¿Estás seguro de que deseas eliminar el cumpleaños de ${i.nombre}?`))try{await g(t),E=E.filter(e=>e.id!==t),k(E),A(E),n(`Cumpleaños eliminado 🧹`,`success`)}catch(e){console.error(e),n(`Error al eliminar`,`error`)}}).on(`click.cp`,`.cp_details_lbl`,function(e){e.stopPropagation();let t=r(this).data(`id`),n=E.find(e=>e.id===t);if(!n)return;let i=`
        <div style="text-align:left; display:flex; flex-direction:column; gap:1.5vh;">
          <p><strong>Relación:</strong> ${n.relacion.toUpperCase()}</p>
          <p><strong>Día de Cumpleaños:</strong> ${n.dia} de ${w[n.mes-1]} ${n.anio?`(${n.anio})`:``}</p>
          ${n.telefono?`<p><strong>Teléfono:</strong> <a href="tel:${n.telefono}">${n.telefono}</a></p>`:``}
          ${n.ideasRegalo?`<p><strong>Ideas de Regalo:</strong> ${n.ideasRegalo}</p>`:``}
          ${n.nota?`<p><strong>Notas:</strong> ${n.nota}</p>`:``}
        </div>
      `,a=r(`
        <div class="cp_modal_overlay active" id="details_modal">
          <div class="cp_modal_sheet" style="border-radius:2.5vh; max-width:450px; margin:auto;">
            <div class="cp_modal_header">
              <h2 class="cp_modal_title">${n.nombre}</h2>
              <button class="cp_modal_close" id="details_close"><i class="fas fa-times"></i></button>
            </div>
            <div style="padding:1vh 0;">
              ${i}
            </div>
          </div>
        </div>
      `);r(`body`).append(a),r(document).on(`click.details_close`,`#details_close, #details_modal`,e=>{(e.target.id===`details_close`||e.target.id===`details_modal`||r(e.target).closest(`#details_close`).length>0)&&(a.remove(),r(document).off(`.details_close`))})})},F=()=>{r(document).off(`.cp`)};export{F as cleanup,P as init,O as render};