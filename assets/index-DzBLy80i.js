const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/admin-FWOua3Ty.css","assets/usuarios-BMnNRUe5.css","assets/verificar-mialvYKy.css","assets/blog-Pvtd5AbW.css","assets/nuevo-BJdQZpYp.css","assets/post-CaVCZ_Tu.css","assets/chat-CZ6DaJJ8.css","assets/editor-0_aE1vIm.css","assets/registrado-DMFE_p3X.css","assets/gestor-DXymzUiX.css","assets/acerca-rEkuWwpI.css","assets/contacto-C-QNnnsD.css","assets/cookies-CEyXQAUt.css","assets/descubre-Dq_06vmy.css","assets/chatwil-R1-t4gNv.css","assets/cumples-C5SrUtv5.css","assets/emojis-GLPEIk5R.css","assets/login-YFk7wr3b.css","assets/meses-B-eLuyGm.css","assets/precios-DedPuPHh.css","assets/widevpro-BK0d8wGP.css","assets/mensajes-MIv6zaMF.css","assets/musica-DK1QJUly.css","assets/notas-dOX0449r.css","assets/perfil-BZqPOASC.css","assets/smile-Cn6fn9Cw.css","assets/win-CFprZW1q.css","assets/word-vV8fNusV.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{t}from"./wii-DFanSMW3.js";import{H as n,L as r,M as i,P as a,V as o,b as s,o as c,s as l}from"./widev-BKJDWmod.js";import{n as u}from"./vendor-Dkcx8wGc.js";var d=e({cleanup:()=>S,init:()=>x,render:()=>b}),f=[`Recordatorios Inteligentes ⏰`,`Organizador de Eventos 🎉`,`Lista de Invitados 👥`,`Ideas de Regalos Perfectas 🎁`,`Tarjetas de Invitación con QR ✉️`],p=[{valor:100,label:`Recordatorios Exitosos`,sufijo:`%`},{valor:0,label:`Cumpleaños Olvidados`,sufijo:``},{valor:10,label:`Más Fácil y Rápido`,sufijo:`x`}],m=[{id:`recordatorios`,icon:`fa-bell`,color:`#FF5C69`,nombre:`Avisos Inteligentes`,desc:`Nunca más olvides un cumpleaños especial`,items:[{icon:`fa-whatsapp`,name:`WhatsApp Directo`,desc:`Envía saludos predefinidos o personalizados en un clic`},{icon:`fa-envelope`,name:`Alertas al Email`,desc:`Recibe notificaciones en tu correo con días de anticipación`},{icon:`fa-clock`,name:`Planificación de Alertas`,desc:`Configura avisos a la hora exacta que prefieras`}]},{id:`eventos`,icon:`fa-gift`,color:`#29C72E`,nombre:`Gestor de Eventos`,desc:`Planifica fiestas inolvidables fácilmente`,items:[{icon:`fa-list-check`,name:`Lista de Tareas`,desc:`Asigna responsables y organiza la compra de decoración`},{icon:`fa-money-bill-wave`,name:`Control de Presupuesto`,desc:`Lleva la cuenta de gastos de pastel, bebidas y regalos`},{icon:`fa-users`,name:`Lista de Invitados`,desc:`Gestiona confirmaciones de asistencia en tiempo real`}]},{id:`regalos`,icon:`fa-wand-magic-sparkles`,color:`#FFDA34`,nombre:`Sugerencias de Regalo`,desc:`Encuentra el detalle perfecto para cada quien`,items:[{icon:`fa-heart`,name:`Lista de Deseos`,desc:`Guarda gustos, tallas y marcas favoritas de tus amigos`},{icon:`fa-basket-shopping`,name:`Tiendas Recomendadas`,desc:`Acceso rápido a ideas de regalo ordenadas por categorías`},{icon:`fa-note-sticky`,name:`Notas Rápidas`,desc:`Anota ideas que surjan en conversaciones casuales`}]},{id:`invitaciones`,icon:`fa-paper-plane`,color:`#7000FF`,nombre:`Invitaciones con QR`,desc:`Crea pases interactivos para tus fiestas`,items:[{icon:`fa-qrcode`,name:`Acceso con Código QR`,desc:`Tus invitados solo escanean para ver la ubicación de la fiesta`},{icon:`fa-map-location-dot`,name:`Ubicación GPS Integrada`,desc:`Vincula mapas de Google Maps o Waze en la invitación`},{icon:`fa-mobile-screen`,name:`Diseño 100% Móvil`,desc:`Invitaciones responsivas que lucen hermosas en WhatsApp`}]},{id:`calendario`,icon:`fa-calendar-days`,color:`#0EBEFF`,nombre:`Calendario Visual`,desc:`Organiza tus celebraciones anuales`,items:[{icon:`fa-eye`,name:`Vista de un Vistazo`,desc:`Todos los cumpleaños ordenados cronológicamente por meses`},{icon:`fa-circle-chevron-right`,name:`Días Restantes`,desc:`Visualiza cuántos días faltan para la próxima gran fiesta`},{icon:`fa-user-plus`,name:`Importación Sencilla`,desc:`Añade contactos rápidamente sin formularios tediosos`}]},{id:`estadisticas`,icon:`fa-chart-pie`,color:`#FF8F00`,nombre:`Datos de Celebración`,desc:`Métricas divertidas sobre tus festejos`,items:[{icon:`fa-champagne-glasses`,name:`Fiestas Organizadas`,desc:`Muestra el conteo de eventos exitosos del año`},{icon:`fa-cake-candles`,name:`Pasteles Compartidos`,desc:`Reportes interactivos y curiosidades de tus amigos`},{icon:`fa-heart`,name:`Amigo del Año`,desc:`Estadísticas sobre quién ha recibido las mejores fiestas`}]}],h=[{icon:`fa-face-smile-beam`,titulo:`100% Fácil y Divertido`,desc:`Diseñado para arrancar sonrisas. Registra fechas, crea invitaciones y planifica celebraciones de la forma más amigable posible.`},{icon:`fa-lock`,titulo:`Privacidad Garantizada`,desc:`Tus datos y los de tus seres queridos están completamente seguros, encriptados y bajo tu absoluto control en todo momento.`},{icon:`fa-champagne-glasses`,titulo:`Totalmente Gratis`,desc:`Sin cargos ocultos ni suscripciones obligatorias. Creemos que celebrar la vida con quienes amas debe ser libre y accesible para todos.`}],g=e=>`
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${e.valor}" data-sufijo="${e.sufijo}">0</div>
    <div class="ini_stat_l">${e.label}</div>
  </div>`,_=e=>`
  <div class="ini_cat_card" style="--cc:${e.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${e.icon}"></i></div>
      <div class="ini_cat_info"><h3>${e.nombre}</h3><p>${e.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${e.items.map(e=>`
        <li><div class="ini_tool_a">
          <i class="fas ${e.icon}"></i>
          <div><strong>${e.name}</strong><span>${e.desc}</span></div>
          <i class="fas fa-check ini_ext" style="color:var(--success)"></i>
        </div></li>`).join(``)}
    </ul>
  </div>`,v=(e,t)=>`
  <div class="ini_about_card" style="--d:${t*.15}s">
    <div class="ini_card_ico"><i class="fas ${e.icon}"></i></div>
    <h3>${e.titulo}</h3>
    <p>${e.desc}</p>
  </div>`,y,b=()=>`
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${l()}</span><span class="ini_wave">👋</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Gestiona Cumpleaños Feliz con <span class="ini_grad">${t}</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${f.map((e,t)=>`<span class="ini_role${t===0?` active`:``}">${e}</span>`).join(``)}
      </div>

      <p class="ini_sub" style="--d:.54s">
        Organiza celebraciones, recuerda fechas especiales y planifica momentos inolvidables con tus amigos y familiares de la manera más sencilla y amigable del mundo.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${p.map(g).join(``)}
      </div>

      <div class="ini_btns" style="--d:.9s">
        <a href="/login" class="ini_btn_p"><i class="fas fa-arrow-right-to-bracket"></i> Empezar Gratis</a>
      </div>

    </div>

    <!-- Derecha: simulador de tarjeta de cumpleaños interactiva -->
    <div class="ini_hero_visual">
      <div class="ini_nw_preview" style="--d:.3s; padding: 2.5vh; max-width: 330px; height: auto;">
        <div class="ini_nw_head" style="height: auto; padding: 1vh 0; display: flex; justify-content: space-between; border-bottom: 2px solid var(--brd); background: transparent;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-cake-candles" style="color: var(--mco); font-size: 1.4rem;"></i>
            <span style="font-weight: 800; font-size: 0.95rem; color: var(--tx);">${t}</span>
          </div>
          <div style="font-size: 0.65rem; font-weight: 700; background: var(--bg5); color: var(--mco); padding: 2px 6px; border-radius: 20px;">
            v11
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 2vh; padding: 2.5vh 0 1vh;">
          <div class="txc">
            <span style="font-size: 0.7rem; font-weight: 600; color: var(--tx3); text-transform: uppercase; letter-spacing: 0.5px;">Próximo Cumpleaños</span>
            <h3 id="widget_nombre" style="font-size: 1.2rem; font-weight: 800; color: var(--mco); margin-top: 0.5vh;">🎂 ¡Wilder Taype! 🥳</h3>
          </div>
          
          <!-- Cuenta regresiva interactiva -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; text-align: center;">
            <div style="background: var(--bg1); padding: 6px; border-radius: 8px; border: 1px solid var(--brd);">
              <div id="wd_dias" style="font-size: 1.1rem; font-weight: 800; color: var(--tx);">0</div>
              <div style="font-size: 0.55rem; color: var(--tx3); font-weight: 600;">DÍAS</div>
            </div>
            <div style="background: var(--bg1); padding: 6px; border-radius: 8px; border: 1px solid var(--brd);">
              <div id="wd_horas" style="font-size: 1.1rem; font-weight: 800; color: var(--tx);">0</div>
              <div style="font-size: 0.55rem; color: var(--tx3); font-weight: 600;">HORAS</div>
            </div>
            <div style="background: var(--bg1); padding: 6px; border-radius: 8px; border: 1px solid var(--brd);">
              <div id="wd_mins" style="font-size: 1.1rem; font-weight: 800; color: var(--tx);">0</div>
              <div style="font-size: 0.55rem; color: var(--tx3); font-weight: 600;">MINS</div>
            </div>
            <div style="background: var(--bg1); padding: 6px; border-radius: 8px; border: 1px solid var(--brd);">
              <div id="wd_segs" style="font-size: 1.1rem; font-weight: 800; color: var(--tx);">0</div>
              <div style="font-size: 0.55rem; color: var(--tx3); font-weight: 600;">SEGS</div>
            </div>
          </div>
          
          <!-- Inputs interactivos del widget de portada -->
          <div style="border-top: 1px solid var(--brd); padding-top: 2vh; display: flex; flex-direction: column; gap: 1vh;">
            <div style="display: flex; flex-direction: column; gap: 0.4vh;">
              <label style="font-size: 0.7rem; font-weight: 700; color: var(--tx2); text-align: left;">Prueba el planificador:</label>
              <input type="text" id="widget_input_nombre" value="Wilder Taype" placeholder="Nombre del cumpleañero" style="font-size: 0.8rem; padding: 0.8vh 1.2vh; border-radius: 6px; border: 1px solid var(--brd); background: var(--inp); color: var(--tx);" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4vh;">
              <label style="font-size: 0.7rem; font-weight: 700; color: var(--tx2); text-align: left;">Fecha especial:</label>
              <input type="date" id="widget_input_fecha" style="font-size: 0.8rem; padding: 0.8vh 1.2vh; border-radius: 6px; border: 1px solid var(--brd); background: var(--inp); color: var(--tx);" />
            </div>
          </div>
        </div>
      </div>
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${o(`Pastel`)}><i class="fas fa-cake-candles"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${o(`Regalos`)}><i class="fas fa-gift"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${o(`Celebrar`)}><i class="fas fa-champagne-glasses"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${o(`Amigos`)}><i class="fas fa-face-smile-beam"></i></div>
    </div>
  </section>

  <!-- ===== FUNCIONALIDADES ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Los <span class="ini_grad">6 Pilares</span> de ${t}</h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">Todo lo necesario para celebrar la vida en grande y sin complicaciones</p>
    </div>
    <div class="ini_cats_grid">${m.map(_).join(``)}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Qué beneficios tienes al usar <span class="ini_grad">${t}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${h.map(v).join(``)}</div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-cake-candles ini_cta_ico"></i>
      <h2>Comienza a organizar cumpleaños inolvidables hoy</h2>
      <p>Regístrate en segundos y descubre lo fácil que es hacer felices a tus seres queridos.</p>
      <div class="ini_cta_chips">
        <a href="/login" class="ini_btn_p"><i class="fas fa-arrow-right-to-bracket"></i> Registrarme Gratis</a>
      </div>
    </div>
  </section>

</div>`,x=()=>{let e=0,r=u(`.ini_role`),i=setInterval(()=>{r.removeClass(`active`),r.eq(e=(e+1)%r.length).addClass(`active`)},2800);n(`#in_stats`,()=>{u(`.ini_stat_n`).each(function(){let e=u(this),t=+e.data(`target`),n=e.data(`sufijo`)||``,r=0,i=setInterval(()=>{r+=t/50,r>=t?(e.text(t+n),clearInterval(i)):e.text(Math.floor(r))},28)})}),n(`.ini_cat_card`,null,{anim:`wi_fadeUp`,stagger:80}),n(`.ini_about_card`,null,{anim:`wi_fadeUp`,stagger:140});let a=new Date(new Date().getTime()+7200*60*1e3),o=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,`0`)}-${String(a.getDate()).padStart(2,`0`)}`;u(`#widget_input_fecha`).val(o);let s=()=>{let e=u(`#widget_input_fecha`).val();if(!e)return;let t=e.split(`-`),n=new Date(t[0],t[1]-1,t[2]),r=new Date;n<r&&n.setFullYear(r.getFullYear()+ +(n.getMonth()<r.getMonth()||n.getMonth()===r.getMonth()&&n.getDate()<r.getDate()));let i=n.getTime()-r.getTime();if(i<=0){u(`#wd_dias`).text(0),u(`#wd_horas`).text(0),u(`#wd_mins`).text(0),u(`#wd_segs`).text(0);return}let a=Math.floor(i/(1e3*60*60*24)),o=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(i%(1e3*60*60)/(1e3*60)),c=Math.floor(i%(1e3*60)/1e3);u(`#wd_dias`).text(a),u(`#wd_horas`).text(o),u(`#wd_mins`).text(s),u(`#wd_segs`).text(c)};u(`#widget_input_nombre`).on(`input`,function(){let e=u(this).val().trim()||`Alguien especial`;u(`#widget_nombre`).html(`🎂 ¡${e}! 🥳`)}),u(`#widget_input_fecha`).on(`change`,()=>{s()}),s(),y=setInterval(s,1e3),window._inicio_timers=[i,y],console.log(`🚀 ${t} v11 · Inicio CumpleWii OK`)},S=()=>{window._inicio_timers&&window._inicio_timers.forEach(e=>clearInterval(e)),clearInterval(y)},C=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),w=function(e){return`/cumplewii/`+e},T={},E=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=w(t,n),t in T)return;T[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:C,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},D={usuario:`/smile`,editor:`/editor`,gestor:`/gestor`,admin:`/admin`},O=[{href:`/acerca`,ico:`fa-circle-info`,txt:`Acerca`}],k={todos:{nvleft:[{href:`/`,ico:`fa-house`,txt:`Bienvenido`},{href:`/cumples`,ico:`fa-cake-candles`,txt:`Cumples`},{href:`/meses`,ico:`fa-calendar-days`,txt:`Meses`},...O],nvright:[{isBtn:!0,cls:`bt_auth registrar`,ico:`fa-user-plus`,txt:`Registrar`},{isBtn:!0,cls:`bt_auth login`,ico:`fa-sign-in-alt`,txt:`Login`}]},usuario:{nvleft:[{href:`/smile`,ico:`fa-house`,txt:`Dashboard`},{href:`/cumples`,ico:`fa-cake-candles`,txt:`Cumples`},{href:`/meses`,ico:`fa-calendar-days`,txt:`Meses`},{href:`/musica`,ico:`fa-headphones`,txt:`Música`},{href:`/word`,ico:`fa-file-word`,txt:`Tareas`},...O],nvright:[{href:`/descubre`,ico:`fa-compass`,txt:`Descubre`},{isPerfil:!0},{isSalir:!0}]},editor:{nvleft:[{href:`/editor`,ico:`fa-house`,txt:`Dashboard`},{href:`/blog`,ico:`fa-newspaper`,txt:`Blog`},{href:`/cumples`,ico:`fa-cake-candles`,txt:`Cumples`},{href:`/meses`,ico:`fa-calendar-days`,txt:`Meses`},{href:`/musica`,ico:`fa-headphones`,txt:`Música`},{href:`/notas`,ico:`fa-book-open`,txt:`Notas`},...O],nvright:[{href:`/nuevo`,ico:`fa-plus-circle`,txt:`Crear Post`},{href:`/chat`,ico:`fa-comments`,txt:`Chat Grupal`},{isPerfil:!0},{isSalir:!0}]},gestor:{nvleft:[{href:`/gestor`,ico:`fa-house`,txt:`Dashboard`},{href:`/cumples`,ico:`fa-cake-candles`,txt:`Cumples`},{href:`/meses`,ico:`fa-calendar-days`,txt:`Meses`},{href:`/musica`,ico:`fa-headphones`,txt:`Música`},...O],nvright:[{href:`/precios`,ico:`fa-tags`,txt:`Precios`},{href:`/chat`,ico:`fa-comments`,txt:`Chat Grupal`},{isPerfil:!0},{isSalir:!0}]},admin:{nvleft:[{href:`/admin`,ico:`fa-globe`,txt:`Plataforma`},{href:`/usuarios`,ico:`fa-users`,txt:`Usuarios`},{href:`/cumples`,ico:`fa-cake-candles`,txt:`Cumples`},{href:`/meses`,ico:`fa-calendar-days`,txt:`Meses`},{href:`/musica`,ico:`fa-headphones`,txt:`Música`},{href:`/chat`,ico:`fa-comments`,txt:`Chat Grupal`},...O],nvright:[{href:`/word`,ico:`fa-rocket`,txt:`Planificar`},{href:`/nuevo`,ico:`fa-plus`,txt:`Post`},{href:`/notas`,ico:`fa-comments`,txt:`Book`},{isPerfil:!0},{isSalir:!0}]},verificar:{nvleft:[],nvright:[]}},A=[{path:`/inicio`,area:`todos/`},{path:`/login`,area:`todos/`},{path:`/emojis`,area:`todos/`},{path:`/registrado`,area:`editor/`},{path:`/cumples`,area:`todos/`},{path:`/meses`,area:`todos/`},{path:`/blog`,area:`editor/blog/`},{path:`/post`,area:`editor/blog/`},{path:`/chatwil`,area:`todos/chatwil/`},{path:`/acerca`,area:`todos/acerca/`},{path:`/descubre`,area:`todos/acerca/`},{path:`/terminos`,area:`todos/acerca/`},{path:`/cookies`,area:`todos/acerca/`},{path:`/privacidad`,area:`todos/acerca/`},{path:`/feedback`,area:`todos/acerca/`},{path:`/contacto`,area:`todos/acerca/`},{path:`/smile`,area:`usuario/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/notas`,area:`usuario/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/perfil`,area:`usuario/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/mensajes`,area:`usuario/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/word`,area:`usuario/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/win`,area:`usuario/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/musica`,area:`usuario/`,roles:[`usuario`,`editor`,`gestor`,`admin`]},{path:`/chat`,area:`editor/`,roles:[`editor`,`gestor`,`admin`]},{path:`/editor`,area:`editor/`,roles:[`editor`,`gestor`,`admin`]},{path:`/nuevo`,area:`editor/blog/`,roles:[`editor`,`gestor`,`admin`]},{path:`/precios`,area:`todos/`,roles:[`gestor`,`admin`]},{path:`/gestor`,area:`gestor/`,roles:[`gestor`,`admin`]},{path:`/admin`,area:`admin/`,roles:[`admin`]},{path:`/usuarios`,area:`admin/`,roles:[`admin`]},{path:`/verificar`,area:`admin/verificar/`,roles:[`admin`]}],j=Object.assign({"./admin/admin.js":()=>E(()=>import(`./admin-aznPbjqx.js`),__vite__mapDeps([0])),"./admin/usuarios.js":()=>E(()=>import(`./usuarios-DEgO-7cc.js`),__vite__mapDeps([1])),"./admin/verificar/verificar.js":()=>E(()=>import(`./verificar-BCszXuM0.js`),__vite__mapDeps([2])),"./editor/blog/blog.js":()=>E(()=>import(`./blog-B9bUjKRi.js`),__vite__mapDeps([3])),"./editor/blog/nuevo.js":()=>E(()=>import(`./nuevo-CB1YwqLh.js`),__vite__mapDeps([4])),"./editor/blog/post.js":()=>E(()=>import(`./post-glbo0K8F.js`),__vite__mapDeps([5])),"./editor/blog/woo.js":()=>E(()=>import(`./woo-BLWhR3ZP.js`),[]),"./editor/chat.js":()=>E(()=>import(`./chat-DiBGpXTx.js`),__vite__mapDeps([6])),"./editor/editor.js":()=>E(()=>import(`./editor-B3SsGrSD.js`),__vite__mapDeps([7])),"./editor/registrado.js":()=>E(()=>import(`./registrado-CDBa5_wB.js`),__vite__mapDeps([8])),"./gestor/gestor.js":()=>E(()=>import(`./gestor-Do2iFb4I.js`),__vite__mapDeps([9])),"./todos/404.js":()=>E(()=>import(`./404-W7Ms1myi.js`),[]),"./todos/acerca/acerca.js":()=>E(()=>import(`./acerca-Cmu3ZLpR.js`),__vite__mapDeps([10])),"./todos/acerca/contacto.js":()=>E(()=>import(`./contacto-6mDWPV-W.js`),__vite__mapDeps([10,11])),"./todos/acerca/cookies.js":()=>E(()=>import(`./cookies-CaOAXmBf.js`),__vite__mapDeps([10,12])),"./todos/acerca/descubre.js":()=>E(()=>import(`./descubre-C0ko_Q_p.js`),__vite__mapDeps([13])),"./todos/acerca/feedback.js":()=>E(()=>import(`./feedback-C0vl1gTB.js`),__vite__mapDeps([10,12])),"./todos/acerca/privacidad.js":()=>E(()=>import(`./privacidad-CqK1D2zg.js`),__vite__mapDeps([10,12])),"./todos/acerca/terminos.js":()=>E(()=>import(`./terminos-BUVD3B6o.js`),__vite__mapDeps([10,12])),"./todos/chatwil/chatwil.js":()=>E(()=>import(`./chatwil-CYk5LMUQ.js`),__vite__mapDeps([14])),"./todos/chatwil/config.js":()=>E(()=>import(`./config-DIOWftW4.js`),[]),"./todos/chatwil/contexto.js":()=>E(()=>import(`./contexto--FYQPdwT.js`),[]),"./todos/chatwil/datawii.js":()=>E(()=>import(`./datawii-YtswncZK.js`),[]),"./todos/chatwil/waa.js":()=>E(()=>import(`./waa-BmCk9ETO.js`),[]),"./todos/cumples.js":()=>E(()=>import(`./cumples-BDYtcOKV.js`),__vite__mapDeps([15])),"./todos/emojis.js":()=>E(()=>import(`./emojis-0gnUtFBQ.js`),__vite__mapDeps([16])),"./todos/login.js":()=>E(()=>import(`./login-mvm8OCqX.js`),__vite__mapDeps([17])),"./todos/meses.js":()=>E(()=>import(`./meses-DRf6Q5Qi.js`),__vite__mapDeps([18])),"./todos/precios.js":()=>E(()=>import(`./precios-BhQvaJvw.js`),__vite__mapDeps([19])),"./todos/widevpro.js":()=>E(()=>import(`./widevpro-Cj2BDFPO.js`),__vite__mapDeps([20])),"./usuario/mensajes.js":()=>E(()=>import(`./mensajes-Bg-X-yjP.js`),__vite__mapDeps([21])),"./usuario/musica.js":()=>E(()=>import(`./musica-Cfh0ZVPy.js`),__vite__mapDeps([22])),"./usuario/notas.js":()=>E(()=>import(`./notas-DqSL-DYz.js`),__vite__mapDeps([23])),"./usuario/perfil.js":()=>E(()=>import(`./perfil-BKLtMnVt.js`),__vite__mapDeps([24])),"./usuario/smile.js":()=>E(()=>import(`./smile-DrbKIBUL.js`),__vite__mapDeps([15,25])),"./usuario/win.js":()=>E(()=>import(`./win-CWDBOVo_.js`),__vite__mapDeps([26])),"./usuario/word.js":()=>E(()=>import(`./word-CfSCaQ_x.js`),__vite__mapDeps([27]))}),M=(e,t)=>j[`./${e}${t}.js`],N=new class{constructor(){this.rutas={},this.cache={"/inicio":d},this.modActual=null,this.cargand=!1,this.HOME=`inicio`,this.main=`#wimain`,this.pathActual=null,this.isFirstLoad=!0}register(e,t){this.rutas[e]=t}inicio(){return Promise.resolve(d)}registerAll(e){let t={},n={};A.forEach(({path:e,area:r,roles:i=null,mod:a})=>{if(e===`/inicio`){t[e]=()=>this.inicio();return}let o=a??e.split(`/`).pop(),s=M(r,o);if(!s){console.warn(`[ruta] no encontrado: ${r}${o}.js`);return}i===null?t[e]=s:(n[e]??=[]).push({roles:i,imp:s})});let r=()=>Promise.resolve({render:()=>``,init:()=>setTimeout(()=>this.navigate(`/login`),0)});new Set([...Object.keys(t),...Object.keys(n)]).forEach(i=>{let a=t[i],o=n[i]||[],s=()=>{let t=e?.()||null;return o.find(e=>e.roles.includes(t))};if(!o.length)return this.register(i,a);if(!a)return this.register(i,()=>{let e=s();return e?e.imp():r()});this.register(i,()=>{let e=s();return e?e.imp():a()})})}async prefetch(e){let t=a.limpiar(e)===`/`?`/${this.HOME}`:a.limpiar(e);if(!(this.cache[t]||!this.rutas[t]))try{this.cache[t]=await this.rutas[t](),console.log(`⚡ Listo ${t.replace(`/`,``)}`)}catch{console.warn(`[ruta] prefetch falló:`,t)}}async navigate(e,t=!0){if(this.cargand)return;this.cargand=!0;let n=a.limpiar(e)===`/`?`/${this.HOME}`:a.limpiar(e);if([`/admin`,`/usuarios`].includes(n)){let{getls:e}=await E(async()=>{let{getls:e}=await import(`./widev-BKJDWmod.js`).then(e=>e.W);return{getls:e}},[]),t=e(`wiSmile`),n=e=>(this.cargand=!1,this.navigate(e,!0)),r=!t||t.rol!==`admin`?`/`:t.estado===`activo`?sessionStorage.getItem(`vault_unlocked`)?null:`/verificar`:`/registrado`;if(r)return n(r)}try{this.modActual?.cleanup?.();let e=this.rutas[n]?null:n.slice(1),r=e?M(`editor/blog/`,`post`):this.rutas[n]??M(`todos/`,`404`),o=this.cache[n]??await r();e||(this.cache[n]=o);let[s]=await Promise.all([o.render(e)]);document.body.classList.remove(`is-public-profile`),this.marcarNav(n),window.dispatchEvent(new CustomEvent(`winavigate`,{detail:{norm:n}})),this.isFirstLoad&&u(this.main).children().length>0&&!window.__WIREADY__&&n===`/${this.HOME}`?this.isFirstLoad=!1:await i(this.main,s),this.isFirstLoad=!1,window.scrollTo(0,0),o.init?.(e),t&&a.poner(n===`/${this.HOME}`?`/`:n,document.title),this.pathActual=n,this.modActual=o}catch(e){if(e instanceof TypeError&&e.message.includes(`Failed to fetch`))return location.reload();c(`Error en la ruta`),console.error(`[ruta] navigate:`,e)}finally{this.cargand=!1}}marcarNav(e){let t=e.slice(1)||this.HOME;u(`.nv_item`).removeClass(`active`),u(`.nv_item[data-page="${t}"]`).addClass(`active`)}init(){this.marcarNav(a.actual===`/`?`/${this.HOME}`:a.limpiar(a.actual)),u(document).on(`click`,`.nv_item`,e=>{e.preventDefault();let t=u(e.currentTarget).data(`page`);this.navigate(t===this.HOME?`/`:`/${t}`)}).on(`mouseenter touchstart`,`.nv_item[data-page]`,e=>{let t=u(e.currentTarget).data(`page`);this.prefetch(t===this.HOME?`/`:`/${t}`)}),window.addEventListener(`popstate`,e=>{let t=e.state?.ruta||a.actual;(a.limpiar(t)===`/`?`/${this.HOME}`:a.limpiar(t))!==this.pathActual&&this.navigate(t,!1)}),this.navigate(a.actual,!1)}};N.registerAll(()=>s(`wiSmile`)?.rol),N.register(`/`,(e=!1)=>{let t=s(`wiSmile`);return t&&!e&&setTimeout(()=>N.navigate({usuario:`/smile`,editor:`/nuevo`,gestor:`/gestor`,admin:`/admin`}[t.rol]||`/smile`),0),N.inicio()}),N.init(),E(()=>import(`./header-DCdozVE4.js`),[]),E(()=>import(`./footer-CcBjxLob.js`),[]),r({css:[`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap`,`https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap`,`https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap`]});export{E as i,D as n,N as r,k as t};