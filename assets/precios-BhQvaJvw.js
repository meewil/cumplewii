import{t as e}from"./wii-DFanSMW3.js";import{H as t}from"./widev-BKJDWmod.js";var n=[{id:`free`,color:`#8B9BB4`,name:`Free`,desc:`Todo lo básico para registrar y recordar.`,price:`0`,btn:`Comenzar Gratis`,btnType:`outline`,features:[{t:`Cumples base`,v:!0},{t:`Avisos por defecto`,v:!0},{t:`Tema Oro`,v:!0},{t:`Temas premium`,v:!1},{t:`Soporte prioritario`,v:!1}]},{id:`pro`,color:`#0EBEFF`,name:`Pro`,desc:`Más capacidad y personalización.`,price:`4.99`,btn:`Elegir Pro`,btnType:`outline`,destacado:!0,features:[{t:`Más cumples`,v:!0},{t:`Temas premium`,v:!0},{t:`Soporte prioritario`,v:!0},{t:`Multi-dispositivo`,v:!1},{t:`Soporte VIP`,v:!1}]},{id:`vip`,color:`#7000FF`,name:`Vip`,desc:`El máximo nivel para celebrar mejor.`,price:`9.99`,btn:`Elegir VIP`,btnType:`solid`,features:[{t:`Multi-dispositivo`,v:!0},{t:`Funciones futuras`,v:!0},{t:`Soporte VIP`,v:!0},{t:`Temas premium`,v:!0},{t:`Más cumples`,v:!0}]}],r=()=>`
<div class="pr_wrap">
  <div class="pr_hero pr_anim" style="--d:0s">
    <div class="pr_badge"><i class="fas fa-tag"></i> Planes Claros y Sin Complicaciones</div>
    <h1 class="pr_title">Elige el plan ideal <span class="pr_grad">para celebrar</span></h1>
    <p class="pr_desc">Empieza gratis y sube cuando quieras más capacidad, temas premium y funciones avanzadas.</p>
  </div>
  
  <div class="pr_grid">
    ${n.map((e,t)=>`
      <div class="pr_card wi_fadeUp ${e.destacado?`destacado`:``}" style="--cc:${e.color}; --d:${t*.15}s">
        ${e.destacado?`<div class="pr_popular"><i class="fas fa-star"></i> Más Elegido</div>`:``}
        
        <div class="pr_head">
          <div class="pr_name"><i class="fas fa-circle" style="font-size: .4em;"></i> ${e.name}</div>
          <div class="pr_desc_card">${e.desc}</div>
          <div class="pr_price_wrap">
            ${e.customPrice?`
              <div class="pr_price" style="font-size:2.8rem">${e.price}</div>
            `:`
              <div class="pr_price_sim">$</div>
              <div class="pr_price">${e.price}</div>
              <div class="pr_price_per">USD / mes</div>
            `}
          </div>
        </div>
        
        <ul class="pr_features">
          ${e.features.map(e=>`
            <li class="pr_feat ${e.v?``:`no`}">
              <i class="fas ${e.v?`fa-check`:`fa-xmark`}"></i>
              <span>${e.t}</span>
            </li>
          `).join(``)}
        </ul>
        
        <a href="/login" class="pr_btn pr_btn_${e.btnType} nv_item" data-page="login">${e.btn}</a>
      </div>
    `).join(``)}
  </div>

  <!-- SECCIÓN COMPROMISO / VENTAS -->
  <div class="pr_trust_sec">
    <div class="pr_trust_head pr_anim" style="--d:0.2s">
      <h2>¿Por qué confiar en <span>${e}</span>?</h2>
      <p>Sincroniza tus fechas más importantes con total seguridad y estabilidad. Diseñado especialmente para ayudarte a recordar y celebrar de la mejor manera.</p>
    </div>
    <div class="pr_trust_grid">
      <div class="pr_trust_card pr_anim" style="--d:0.3s">
        <i class="fas fa-bolt"></i>
        <h3>Recordatorios al instante</h3>
        <p>Sincronización inmediata para que nunca te olvides de felicitar a tus seres queridos.</p>
      </div>
      <div class="pr_trust_card pr_anim" style="--d:0.4s">
        <i class="fas fa-headset"></i>
        <h3>Soporte Amigable</h3>
        <p>Ayuda dedicada para que disfrutes de tu agenda de cumpleaños en todos tus dispositivos sin complicaciones.</p>
      </div>
      <div class="pr_trust_card pr_anim" style="--d:0.5s">
        <i class="fas fa-shield-halved"></i>
        <h3>Privacidad y Seguridad</h3>
        <p>Tus datos personales y de contacto se guardan de forma encriptada y privada para mayor tranquilidad.</p>
      </div>
    </div>
  </div>

</div>
`,i=()=>{t(`.pr_card, .pr_anim`,null,{anim:`pr_anim`,stagger:80}),console.log(`💳 ${e} v11 · Precios OK`)},a=()=>{console.log(`🧹 Precios limpiado`)};export{a as cleanup,i as init,r as render};