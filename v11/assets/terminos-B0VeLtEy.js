import{n as e}from"./vendor-BBPjS4yS.js";import{t}from"./wii-DRdy2sPR.js";import{O as n}from"./widev-0VNtC2h-.js";import"./acerca-DW_YE2bA.js";import"./cookies-Dacdkmwu.js";var r=[{ico:`fa-users`,color:`#0EBEFF`,num:`01`,tit:`Uso de la app`,body:`<p>CumpleWii es una app para guardar cumpleaños, organizar fechas, recibir recordatorios, escuchar música de celebración y consultar ideas útiles. Debe usarse con información real, respeto y sin spam.</p>`},{ico:`fa-shield-halved`,color:`#29C72E`,num:`02`,tit:`Cuenta y sincronización`,body:`<p>Puedes iniciar sesión con Google o email. Sincronizamos tu perfil, cumpleaños, favoritos y ajustes con Firebase para que la app sea rápida y consistente.</p>`},{ico:`fa-globe`,color:`#FF5C69`,num:`03`,tit:`Planes free, pro y vip`,body:`<p>El plan free está disponible como base. Pro y vip quedan preparados para más capacidad, temas premium y funciones avanzadas. Los límites pueden actualizarse con aviso razonable.</p>`},{ico:`fa-gavel`,color:`#7000FF`,num:`04`,tit:`Derechos y propiedad intelectual`,body:`<p>CumpleWii es un proyecto desarrollado por Wilder Taype. El diseño, código y funcionalidades pertenecen al proyecto; tus datos personales y contenido guardado siguen siendo tuyos.</p>`},{ico:`fa-triangle-exclamation`,color:`#FFDA34`,num:`05`,tit:`Limitación de responsabilidad`,body:`<p>CumpleWii ayuda a recordar fechas, pero debes revisar que la información ingresada sea correcta. Los recordatorios pueden depender de permisos, batería, conexión y configuración del dispositivo.</p>`},{ico:`fa-arrows-rotate`,color:`#0EBEFF`,num:`06`,tit:`Cambios en los términos`,body:`<p>Podemos actualizar funciones, texto legal y detalles del servicio con el tiempo. El uso continuado de CumpleWii después de esos cambios implica aceptación de la versión vigente.</p>`}],i=()=>`
<main id="wimain">
<div class="ac_wrap tm_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero tm_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_badge"><i class="fas fa-file-contract"></i> Condiciones de Uso</div>
      <h1 class="ac_hero_tit">Términos y<br><span class="ac_grad">Condiciones</span></h1>
      <p class="ac_hero_sub">
        Reglas claras para usar <strong>${t}</strong>, cuidar tus datos y mantener una experiencia amable para recordar cumpleaños.
      </p>
      <div class="tm_hero_chips">
        <span class="tm_chip"><i class="fas fa-heart"></i> Respeto</span>
        <span class="tm_chip"><i class="fas fa-shield-halved"></i> Transparencia</span>
        <span class="tm_chip"><i class="fas fa-gavel"></i> Claridad</span>
      </div>
      <div class="tm_last_upd">
        <i class="fas fa-calendar-check"></i>
        Última actualización: ${n()} · Versión v10
      </div>
    </div>
  </section>

  <!-- ══ ÍNDICE RÁPIDO ══ -->
  <div class="tm_index_band">
    ${r.map((e,t)=>`
      <a href="#tm_sec_${t}" class="tm_index_item">
        <i class="fas ${e.ico}" style="color:${e.color}"></i>
        <span>${e.tit}</span>
      </a>`).join(``)}
  </div>

  <!-- ══ SECCIONES ══ -->
  <section class="ac_sec tm_secciones">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-list-check"></i> Acuerdo de Uso</div>
      <h2 class="ac_sec_tit">Reglamento <span class="ac_grad">General</span></h2>
      <p class="ac_sec_sub">Lee con atención. El uso de CumpleWii requiere la aceptación de estas condiciones.</p>
    </div>
    <div class="tm_secs_grid">
      ${r.map((e,t)=>`
        <div class="tm_sec_card wi_fadeUp" id="tm_sec_${t}">
          <div class="tm_sec_header">
            <div class="tm_sec_ico" style="--tc:${e.color}">
              <i class="fas ${e.ico}"></i>
            </div>
            <div>
              <span class="tm_sec_num" style="color:${e.color}">${e.num}</span>
              <h2 class="tm_sec_tit">${e.tit}</h2>
            </div>
          </div>
          <div class="tm_sec_body">${e.body}</div>
        </div>`).join(``)}
    </div>
  </section>

</div></main>
`,a=null,o=()=>{let n=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&e(t.target).addClass(`visible`)})},{threshold:.1});a=n,e(`.wi_fadeUp`).each(function(){n.observe(this)}),e(document).on(`click.terminos`,`.tm_nav`,function(t){t.preventDefault();let{rutas:n}=window._wiRutas??{};n?.navigate?.(e(this).attr(`href`))}),e(document).on(`click.terminos`,`.tm_index_item`,function(t){t.preventDefault();let n=document.querySelector(e(this).attr(`href`));n&&window.scrollTo({top:n.getBoundingClientRect().top+scrollY-90,behavior:`smooth`})}),window.wiInitTips&&window.wiInitTips(),console.log(`📜 ${t} Términos cargados`),window.__WIREADY__=!0},s=()=>{a?.disconnect?.(),a=null,e(document).off(`.terminos`)};export{s as cleanup,o as init,i as render};