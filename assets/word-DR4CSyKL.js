import{t as e}from"./wii-DFanSMW3.js";import{B as t,E as n,O as r,_ as i,b as a,j as o,k as s,o as c,s as l,z as u}from"./widev-Czq8ue36.js";import{n as d}from"./vendor-Dkcx8wGc.js";import{r as f}from"./index-U_klNYw1.js";var p=`word_docs`,m=()=>`wd`+Date.now(),h=[{id:`ej1`,titulo:`Documento de Ejemplo`,contenido:`<p>Este es un documento de ejemplo. <b>Prueba a editar el texto</b> y usar las herramientas de la barra superior para darle estilo.</p>`,pin:!0,creado:Date.now(),actualizado:Date.now(),synced:!1}],g={get:()=>{let e=localStorage.getItem(p);return e===null&&!s.user?[...h]:a(p)||(e?.startsWith(`[`)?JSON.parse(e):[])},set:e=>n(p,e,8760)},_=()=>`
<div class="wd_wrap">
  <!-- RIBBON -->
  <header class="wd_ribbon">
    <div class="wd_tools">
      <button id="wd_btn_menu" class="wd_btn_tool" style="color:var(--mco);" ${t(`Archivos`)}><i class="fas fa-bars"></i></button>
      <div class="wd_tool_sep"></div>
      
      <div class="wd_tool_group">
        <select id="wd_f_fam" class="wd_font_sel" ${t(`Fuente`,void 0,`bottom`)}>
          <option value="'Segoe UI', system-ui" selected>Segoe UI</option>
          <option value="'Poppins', sans-serif">Poppins</option>
          <option value="'Outfit', sans-serif">Outfit</option>
          <option value="'Rubik', sans-serif">Rubik</option>
          <option value="Arial, sans-serif">Arial</option>
          <option value="'Times New Roman', serif">Times New Roman</option>
          <option value="'Courier New', monospace">Courier New</option>
          <option value="Georgia, serif">Georgia</option>
        </select>
        <div class="wd_tool_sep"></div>
        <input type="text" id="wd_f_sz" class="wd_font_size" value="16" maxlength="2" ${t(`Tamaño (Enter para aplicar)`,void 0,`bottom`)} autocomplete="off">
      </div>
      
      <div class="wd_tool_group">
        <button class="wd_btn_tool" data-cmd="bold" ${t(`Negrita`,void 0,`bottom`)}><i class="fas fa-bold"></i></button>
        <button class="wd_btn_tool" data-cmd="italic" ${t(`Cursiva`,void 0,`bottom`)}><i class="fas fa-italic"></i></button>
        <button class="wd_btn_tool" data-cmd="underline" ${t(`Subrayado`,void 0,`bottom`)}><i class="fas fa-underline"></i></button>
        <button class="wd_btn_tool" data-cmd="strikeThrough" ${t(`Tachado`,void 0,`bottom`)}><i class="fas fa-strikethrough"></i></button>
      </div>

      <div class="wd_tool_group">
        <button class="wd_btn_tool" data-cmd="justifyLeft" ${t(`Alinear Izquierda`,void 0,`bottom`)}><i class="fas fa-align-left"></i></button>
        <button class="wd_btn_tool" data-cmd="justifyCenter" ${t(`Centrar`,void 0,`bottom`)}><i class="fas fa-align-center"></i></button>
        <button class="wd_btn_tool" data-cmd="justifyRight" ${t(`Alinear Derecha`,void 0,`bottom`)}><i class="fas fa-align-right"></i></button>
        <button class="wd_btn_tool" data-cmd="justifyFull" ${t(`Justificar`,void 0,`bottom`)}><i class="fas fa-align-justify"></i></button>
      </div>
      
      <div class="wd_tool_group">
        <button class="wd_btn_tool" data-cmd="insertUnorderedList" ${t(`Viñetas`,void 0,`bottom`)}><i class="fas fa-list-ul"></i></button>
        <button class="wd_btn_tool" data-cmd="insertOrderedList" ${t(`Numeración`,void 0,`bottom`)}><i class="fas fa-list-ol"></i></button>
        <div class="wd_tool_sep"></div>
        <select id="wd_l_ht" class="wd_font_sel" style="width:60px;" ${t(`Interlineado`,void 0,`bottom`)}>
           <option value="1">1.0</option>
           <option value="1.15">1.15</option>
           <option value="1.5">1.5</option>
           <option value="2">2.0</option>
        </select>
      </div>
      
      <div class="wd_tool_group">
        <div ${t(`Color Texto`,void 0,`bottom`)} style="display:flex; align-items:center; padding: 0 0.5vh; height: 4vh;">
           <i class="fas fa-font" style="color:var(--tx2); margin-right: 0.5vh; font-size:12px;"></i>
           <input type="color" id="wd_c_txt" value="#222222" style="width:2.5vh;height:2.5vh;border:none;background:none;cursor:pointer;padding:0;">
        </div>
        <div class="wd_tool_sep"></div>
        <div ${t(`Color Resaltado`,void 0,`bottom`)} style="display:flex; align-items:center; padding: 0 0.5vh; height: 4vh;">
           <i class="fas fa-highlighter" style="color:var(--tx2); margin-right: 0.5vh; font-size:12px;"></i>
           <input type="color" id="wd_c_bg" value="#ffff00" style="width:2.5vh;height:2.5vh;border:none;background:none;cursor:pointer;padding:0;">
        </div>
      </div>

      <!-- Metadata Group (Integrated in Ribbon) -->
      <div class="wd_tool_sep wd_meta_sep_main" style="display:none"></div>
      <div id="wd_meta" class="wd_tool_group wd_meta_group" style="display:none; padding: 0 1.5vh; gap: 2vh; border: none; background: transparent;">
        <span class="wd_meta_item" id="wd_meta_rel" ${t(`Actividad reciente`)}><i class="fas fa-clock"></i> <span>—</span></span>
        <span class="wd_meta_item" id="wd_meta_cre" ${t(`Fecha de creación`)}><i class="fas fa-calendar-plus"></i> <span>—</span></span>
        <span class="wd_meta_item" id="wd_meta_upd" ${t(`Última edición`)}><i class="fas fa-pen-nib"></i> <span>—</span></span>
      </div>
    </div>
  </header>

  <!-- WORKSPACE -->
  <div class="wd_workspace">
    <!-- SIDEBAR -->
    <aside id="wd_sidebar" class="wd_sidebar">
      <div class="wd_sb_actions_panel">
        <input type="text" id="wd_in_tit" class="wd_doc_title_sb" placeholder="Título del documento..." autocomplete="off">
        <div style="display:flex; gap:1vh; margin-top:1.5vh;">
          <button id="wd_btn_save" class="wd_btn_main" style="flex:1; justify-content:center;"><i class="fas fa-save"></i> Guardar</button>
          <button id="wd_btn_del" class="wd_btn_sec wd_btn_del_doc" ${t(`Eliminar`,void 0,`error`)}><i class="fas fa-trash-can"></i></button>
        </div>
      </div>
      <div class="wd_sb_head">
        <h3 id="wd_saludo">Archivos</h3>
        <div style="display:flex; gap: 5px;">
          <button id="wd_btn_refresh" class="wd_sb_btn" style="display:none" ${t(`Actualizar`)}><i class="fas fa-rotate-right"></i></button>
          <button id="wd_btn_new" class="wd_sb_btn" ${t(`Nuevo Documento`)}><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div id="wd_sb_list" class="wd_sb_list">
        <div class="wd_skeleton"></div><div class="wd_skeleton"></div>
      </div>
    </aside>
    
    <!-- CANVAS -->
    <main class="wd_canvas">
      <div class="wd_page">
        <div id="wd_editor" class="wd_editor" contenteditable="true" data-placeholder="Escriba aquí contenido pro..." spellcheck="false"></div>
      </div>
    </main>
  </div>
</div>`,v=async()=>{let{db:e}=await f(async()=>{let{db:e}=await import(`./firebase-BOoMX3kr.js`).then(e=>e.r);return{db:e}},[]);return{db:e,...await f(()=>import(`./firebase-BY5GISzq.js`).then(e=>e.p),[])}},y=async e=>{let t=s.user;if(t?.email)try{let{db:n,doc:r,setDoc:i,serverTimestamp:a}=await v();await i(r(n,`word`,e.id),{id:e.id,usuario:t.usuario||t.email,email:t.email,titulo:String(e.titulo||``),contenido:String(e.contenido||``),pin:!!e.pin,creado:a(),actualizado:a()})}catch(e){console.error(`[word] guardarNube:`,e)}},b=async e=>{let t=s.user;if(t?.email)try{let{db:n,doc:r,setDoc:i,serverTimestamp:a}=await v();await i(r(n,`word`,e.id),{id:e.id,usuario:t.usuario||t.email,email:t.email,titulo:String(e.titulo||``),contenido:String(e.contenido||``),pin:!!e.pin,actualizado:a()},{merge:!0})}catch(e){console.error(`[word] actualizarNube:`,e)}},x=async e=>{if(s.user?.email)try{let{db:t,doc:n,deleteDoc:r}=await v();await r(n(t,`word`,e))}catch{}},S=async()=>{let e=s.user;if(!e?.email)return null;try{let{db:t,collection:n,getDocs:r,query:i,where:a}=await v();return(await r(i(n(t,`word`),a(`email`,`==`,e.email)))).docs.map(e=>{let t=e.data();return{id:e.id,titulo:t.titulo||``,contenido:t.contenido||``,pin:!!t.pin,creado:t.creado?.toMillis?.()||Date.now(),actualizado:t.actualizado?.toMillis?.()||Date.now(),synced:!0}})}catch{return null}},C=e=>{let t=document.createElement(`div`);return t.innerHTML=e||``,t.textContent||t.innerText||``},w=(e,n)=>{let r=C(e.contenido),i=r.length>50?r.substring(0,50)+`...`:r||`Sin contenido...`,a=e.id===n?`active`:``,o=e.titulo||`Documento sin título`;return`
    <div class="wd_doc_item ${a}${e.pin?` wd_pinned`:``}" data-id="${e.id}">
      <div class="wd_doc_head">
        <h4>${o}</h4>
        <div class="wd_doc_acts">
          <button class="wd_act_pin${e.pin?` active`:``}" data-id="${e.id}" ${t(e.pin?`Desanclar`:`Fijar`,void 0,`right`)}><i class="fas fa-thumbtack"></i></button>
          <i class="fas ${e.synced?`fa-cloud wd_cloud_ok`:`fa-cloud-arrow-up wd_cloud_pen`}" ${t(e.synced?`En nube`:`Local`,void 0,`right`)}></i>
        </div>
      </div>
      <p>${i}</p>
    </div>`},T=null,E=null,D=async()=>{let t=g.get(),n=null,a=null;s.user&&d(`#wd_saludo`).text(`${l()}${s.user.nombre||s.user.usuario}`);let f=e=>{if(!s.user||!e){d(`#wd_meta, .wd_meta_sep_main`).hide();return}d(`#wd_meta, .wd_meta_sep_main`).css(`display`,`flex`),d(`#wd_meta_rel span`).text(u(e.actualizado||e.creado)),d(`#wd_meta_cre span`).text(i(e.creado)),d(`#wd_meta_upd span`).text(i(e.actualizado))},h=e=>{clearInterval(E),!(!s.user||!e)&&(E=setInterval(()=>{d(`#wd_meta_rel span`).text(u(e.actualizado||e.creado))},6e4))},_=()=>d(`#wd_sb_list`).html(`<div class="wd_skeleton"></div>`.repeat(3)),v=()=>[...t].sort((e,t)=>e.pin&&!t.pin?-1:!e.pin&&t.pin?1:(t.actualizado||0)-(e.actualizado||0)),D=async()=>{let e=v();await o(`#wd_sb_list`,e.length?e.map(e=>w(e,n?.id)).join(``):`<div class="wd_empty">No tienes documentos. Crea uno nuevo.</div>`,80)},O=e=>{n=e,d(`#wd_in_tit`).val(e.titulo||``),d(`#wd_editor`).html(e.contenido||``),D(),f(e),h(e)},k=()=>{t=t.filter(e=>!e.id.startsWith(`ej`));let e={id:m(),titulo:``,contenido:``,pin:!1,creado:Date.now(),actualizado:Date.now(),synced:!1};t.unshift(e),g.set(t),O(e),setTimeout(()=>{d(`#wd_editor`).focus(),document.execCommand(`fontName`,!1,`'Segoe UI', system-ui`)},50)},A=()=>{if(!n)return;n.titulo=d(`#wd_in_tit`).val().trim(),n.contenido=d(`#wd_editor`).html(),n.actualizado=Date.now(),g.set(t);let e=d(`#wd_sb_list .wd_doc_item[data-id="${n.id}"]`);if(e.length){e.find(`h4`).text(n.titulo||`Documento sin título`);let t=C(n.contenido);e.find(`p`).text(t.length>50?t.substring(0,50)+`...`:t||`Sin contenido...`),e.find(`.fa-cloud.wd_cloud_ok`).removeClass(`fa-cloud wd_cloud_ok`).addClass(`fa-cloud-arrow-up wd_cloud_pen`).attr(`data-witip`,`Local (Cambios sin guardar)`)}},j=()=>{d(`.wd_btn_tool[data-cmd]`).each(function(){try{d(this).toggleClass(`active`,document.queryCommandState(d(this).data(`cmd`)))}catch{}});try{let e=window.getSelection();if(!e.anchorNode)return;let t=e.anchorNode.nodeType===3?e.anchorNode.parentNode:e.anchorNode;if(d(t).closest(`.wd_editor`).length){let e=window.getComputedStyle(t);if(e.fontSize&&d(`#wd_f_sz`).val(parseInt(e.fontSize)),e.fontFamily){let t=e.fontFamily.split(`,`)[0].replace(/['"]/g,``);d(`#wd_f_fam option`).filter(function(){return d(this).text()===t||d(this).val().includes(t)}).prop(`selected`,!0)}let n=d(t).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);n.length&&n[0].style.lineHeight&&d(`#wd_l_ht`).val(n[0].style.lineHeight)}}catch{}};d(document).on(`click`,`#wd_btn_menu`,()=>d(`#wd_sidebar`).toggleClass(`closed`)).on(`click`,`#wd_btn_new`,k).on(`click`,`#wd_btn_refresh`,async function(){let e=d(this).find(`i`);if(e.hasClass(`wd_spin`))return;e.addClass(`wd_spin`);let n=await S();n&&(t=n,g.set(t),t.length?O(v()[0]):k(),c(`Sincronizado ✓`,`success`)),e.removeClass(`wd_spin`)}).on(`click`,`.wd_doc_item`,function(e){if(d(e.target).closest(`.wd_doc_acts`).length)return;let r=t.find(e=>e.id===d(this).data(`id`));r&&r.id!==n?.id&&O(r)}).on(`click`,`.wd_btn_del_doc`,function(){!n||!confirm(`¿Eliminar este documento permanentemente?`)||(t=t.filter(e=>e.id!==n.id),g.set(t),s.user&&n.synced&&x(n.id),c(`Documento eliminado`,`success`),t.length?O(v()[0]):k())}).on(`click`,`#wd_btn_save`,function(){if(!n)return;A();let e=n.titulo||C(n.contenido).trim().length>0;if(s.user&&e){let e=d(this).find(`i`).removeClass(`fa-save`).addClass(`fa-spinner wd_spin`);(n.synced?b(n):y(n)).then(()=>{n.synced=!0,n.actualizado=Date.now(),g.set(t),d(`#wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-cloud-arrow-up`).removeClass(`fa-cloud-arrow-up wd_cloud_pen`).addClass(`fa-cloud wd_cloud_ok`).attr(`data-witip`,`En nube`),f(n),e.removeClass(`fa-spinner wd_spin`).addClass(`fa-save`),c(`¡Guardado con éxito! ☁️`,`success`)}).catch(()=>{e.removeClass(`fa-spinner wd_spin`).addClass(`fa-save`),c(`Error al guardar en la nube`,`error`)})}else s.user&&!e?c(`Agrega un título o contenido primero`,`warning`):c(`Guardado localmente ✓`,`success`)}).on(`click`,`.wd_act_pin`,function(e){e.stopPropagation();let n=d(this).data(`id`),r=t.find(e=>e.id===n);r&&(r.pin=!r.pin,g.set(t),D(),s.user&&r.synced&&b(r))}).on(`input`,`#wd_editor`,()=>{j(),A()}).on(`input`,`#wd_in_tit`,A).on(`mouseup keyup`,`#wd_editor`,function(){j();let e=window.getSelection();e.rangeCount>0&&(a=e.getRangeAt(0))}).on(`click`,`.wd_btn_tool[data-cmd]`,function(e){e.preventDefault(),document.execCommand(d(this).data(`cmd`),!1,null),j(),d(`#wd_editor`).focus()}).on(`change`,`#wd_f_fam`,function(){if(a){let e=window.getSelection();e.removeAllRanges(),e.addRange(a)}document.execCommand(`styleWithCSS`,!1,!0),document.execCommand(`fontName`,!1,d(this).val()),d(`#wd_editor`).focus().trigger(`input`)}).on(`keydown`,`#wd_f_sz`,function(e){if(e.key!==`Enter`)return;e.preventDefault();let t=Math.max(8,Math.min(100,parseInt(d(this).val())||16));if(d(this).val(t),a){let e=window.getSelection();e.removeAllRanges(),e.addRange(a)}document.execCommand(`styleWithCSS`,!1,!0),document.execCommand(`fontSize`,!1,`7`),d(`.wd_editor font[size="7"], .wd_editor span[style*="xxx-large"]`).removeAttr(`size`).css(`font-size`,t+`px`),d(`#wd_editor`).focus().trigger(`input`)}).on(`change`,`#wd_l_ht`,function(){if(a){let e=window.getSelection();e.removeAllRanges(),e.addRange(a)}let e=window.getSelection();if(e.rangeCount){let t=e.getRangeAt(0).commonAncestorContainer,n=t.nodeType===3?t.parentNode:t,r=d(n).hasClass(`wd_editor`)?d(n).children().filter(function(){return e.containsNode(this,!0)}):d(n).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);!r.length&&d(n).hasClass(`wd_editor`)&&(r=d(n)),r.css(`line-height`,d(this).val())}d(`#wd_editor`).focus().trigger(`input`)}).on(`input`,`#wd_c_txt`,function(){document.execCommand(`foreColor`,!1,d(this).val()),d(`#wd_editor`).focus()}).on(`input`,`#wd_c_bg`,function(){document.execCommand(`hiliteColor`,!1,d(this).val()),d(`#wd_editor`).focus()}),r([`.wd_ribbon`,`.wd_sidebar`,`.wd_page`],50),t.length?O(v()[0]):k(),T=s.on(async e=>{d(`#wd_btn_refresh`).toggle(!!e),e?(d(`#wd_saludo`).text(`${l()}${e.nombre||e.usuario}`),t.length===0&&_(),t=await S()||[],g.set(t),t.length?O(v()[0]):k()):(d(`#wd_saludo`).text(`Archivos`),localStorage.removeItem(p),t=g.get(),t.length?O(v()[0]):k())}),console.log(`📝 ${e} v11 · Word OK`)},O=()=>{d(document).off(`click input mouseup keyup change keydown`,`#wd_btn_menu, #wd_btn_new, #wd_btn_refresh, .wd_doc_item, .wd_btn_del_doc, #wd_btn_save, .wd_act_pin, #wd_editor, #wd_in_tit, .wd_btn_tool, #wd_f_fam, #wd_f_sz, #wd_l_ht, #wd_c_txt, #wd_c_bg`),clearInterval(E),T?.()};export{O as cleanup,D as init,_ as render};