import{B as e,L as t,b as n,o as r}from"./widev-Czq8ue36.js";import{n as i}from"./vendor-Dkcx8wGc.js";import{A as a,E as o,N as s,S as c,h as l,k as u,m as d,v as f}from"./firebase-BY5GISzq.js";import{n as p,t as m}from"./firebase-BOoMX3kr.js";var h=`wiAudios`,g=`wiImg`,_=()=>n(`wiSmile`)?.email||m.currentUser?.email||``,v=async e=>{let t=_();return t?(await f(c(u(p,e),o(`email`,`==`,t)))).docs.map(e=>({id:e.id,...e.data()})).sort((e,t)=>(t.creado?.seconds||0)-(e.creado?.seconds||0)):[]},y=async(e,t,n)=>{let r=_();return r?(await d(u(p,e),{email:r,titulo:t,src:n,creado:s(),actualizado:s()})).id:null},b=async(e,t)=>{await l(a(p,e,t))},x=()=>v(h),S=()=>v(g),C=(t,n)=>`
<div class="ag_item" data-id="${t.id}" data-col="${n}">
  <div class="ag_item_info">
    <span class="ag_item_titulo">${t.titulo}</span>
    <span class="ag_item_src" title="${t.src}">${t.src.length>50?t.src.substring(0,50)+`...`:t.src}</span>
  </div>
  <div class="ag_item_accs">
    <button class="ag_copiar" ${e(`Copiar URL`)}><i class="fas fa-copy"></i></button>
    <button class="ag_eliminar" ${e(`Eliminar`)}><i class="fas fa-trash"></i></button>
  </div>
</div>`,w=(e,t)=>e.length?e.map(e=>C(e,t)).join(``):`<p class="ag_vacio"><i class="fas fa-inbox"></i> Sin elementos guardados</p>`,T=()=>`
<div class="agregar">
  <h2 class="ag_titulo"><i class="fas fa-folder-plus"></i> Mis Recursos</h2>

  <div class="ag_grid">
    <div class="ag_sec">
      <h3 class="ag_stit"><i class="fas fa-music"></i> Audios</h3>
      <div class="ag_form">
        <div class="ag_row">
          <div class="ag_inp"><i class="fas fa-tag"></i><input id="agAudTit" maxlength="40" placeholder="Título"></div>
          <div class="ag_inp ag_inp_url"><i class="fas fa-link"></i><input id="agAudSrc" maxlength="300" placeholder="URL del audio (.mp3)"></div>
          <button class="ag_btn" id="agAudBtn"><i class="fas fa-plus"></i> Agregar</button>
        </div>
      </div>
      <div class="ag_lista" id="agAudList"><p class="ag_vacio"><i class="fas fa-spinner fa-spin"></i> Cargando...</p></div>
    </div>

    <div class="ag_sec">
      <h3 class="ag_stit"><i class="fas fa-image"></i> Imágenes</h3>
      <div class="ag_form">
        <div class="ag_row">
          <div class="ag_inp"><i class="fas fa-tag"></i><input id="agImgTit" maxlength="40" placeholder="Título"></div>
          <div class="ag_inp ag_inp_url"><i class="fas fa-link"></i><input id="agImgSrc" maxlength="300" placeholder="URL de la imagen"></div>
          <button class="ag_btn" id="agImgBtn"><i class="fas fa-plus"></i> Agregar</button>
        </div>
      </div>
      <div class="ag_lista" id="agImgList"><p class="ag_vacio"><i class="fas fa-spinner fa-spin"></i> Cargando...</p></div>
    </div>
  </div>
</div>`,E=async()=>{if(!_())return r(`Inicia sesión para gestionar recursos`,`warning`);let e=async()=>{let e=await v(h);i(`#agAudList`).html(w(e,h))},n=async()=>{let e=await v(g);i(`#agImgList`).html(w(e,g))};await Promise.all([e(),n()]),i(document).on(`click.ag`,`#agAudBtn`,async function(){let n=i(`#agAudTit`).val().trim(),a=i(`#agAudSrc`).val().trim();if(!n||!a)return r(`Completa título y URL`,`warning`);t(this,!0);try{await y(h,n,a),i(`#agAudTit, #agAudSrc`).val(``),await e(),r(`Audio guardado 🎵`,`success`)}catch(e){console.error(e),r(`Error al guardar`,`error`)}finally{t(this,!1)}}),i(document).on(`click.ag`,`#agImgBtn`,async function(){let e=i(`#agImgTit`).val().trim(),a=i(`#agImgSrc`).val().trim();if(!e||!a)return r(`Completa título y URL`,`warning`);t(this,!0);try{await y(g,e,a),i(`#agImgTit, #agImgSrc`).val(``),await n(),r(`Imagen guardada 🖼️`,`success`)}catch(e){console.error(e),r(`Error al guardar`,`error`)}finally{t(this,!1)}}),i(document).on(`click.ag`,`.ag_copiar`,function(){let e=i(this).closest(`.ag_item`).find(`.ag_item_src`).attr(`title`);navigator.clipboard.writeText(e),r(`URL copiada`,`success`)}),i(document).on(`click.ag`,`.ag_eliminar`,async function(){let e=i(this).closest(`.ag_item`),t=e.data(`id`),n=e.data(`col`);e.css(`opacity`,`.4`);try{await b(n,t),e.slideUp(200,()=>e.remove()),r(`Eliminado`,`info`)}catch(t){console.error(t),e.css(`opacity`,`1`),r(`Error`,`error`)}})},D=()=>{i(document).off(`.ag`)};export{D as cleanup,E as init,x as misAudios,S as misImagenes,T as render};