import{t as e}from"./wii-DFanSMW3.js";import{A as t,B as n,E as r,M as i,O as a,V as o,_ as s,b as c,o as l,s as u}from"./widev-BKJDWmod.js";import{n as d}from"./vendor-Dkcx8wGc.js";import{i as f}from"./index-DzBLy80i.js";var p=`word_docs`,m=()=>`wd`+Date.now(),h=[{id:`ej1`,titulo:`Documento de Ejemplo`,contenido:`<p>Este es un documento de ejemplo. <b>Prueba a editar el texto</b> y usar las herramientas de la barra superior para darle estilo.</p>`,pin:!0,creado:Date.now(),actualizado:Date.now(),synced:!1}],g={get:()=>{let e=localStorage.getItem(p);return e===null&&!t.user?[...h]:c(p)||(e?.startsWith(`[`)?JSON.parse(e):[])},set:e=>r(p,e,8760)},_=()=>`
<div class="wd_wrap">
  <!-- RIBBON -->
  <header class="wd_ribbon">
    <div class="wd_tools">
      <button id="wd_btn_menu" class="wd_btn_tool" style="color:var(--mco);" ${o(`Archivos`)}><i class="fas fa-bars"></i></button>
      <div class="wd_tool_sep"></div>
      
      <div class="wd_tool_group">
        <select id="wd_f_fam" class="wd_font_sel" ${o(`Fuente`,void 0,`bottom`)}>
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
        <input type="text" id="wd_f_sz" class="wd_font_size" value="16" maxlength="2" ${o(`Tamaño (Enter para aplicar)`,void 0,`bottom`)} autocomplete="off">
      </div>
      
      <div class="wd_tool_group">
        <button class="wd_btn_tool" data-cmd="bold" ${o(`Negrita`,void 0,`bottom`)}><i class="fas fa-bold"></i></button>
        <button class="wd_btn_tool" data-cmd="italic" ${o(`Cursiva`,void 0,`bottom`)}><i class="fas fa-italic"></i></button>
        <button class="wd_btn_tool" data-cmd="underline" ${o(`Subrayado`,void 0,`bottom`)}><i class="fas fa-underline"></i></button>
        <button class="wd_btn_tool" data-cmd="strikeThrough" ${o(`Tachado`,void 0,`bottom`)}><i class="fas fa-strikethrough"></i></button>
      </div>

      <div class="wd_tool_group">
        <button class="wd_btn_tool" data-cmd="justifyLeft" ${o(`Alinear Izquierda`,void 0,`bottom`)}><i class="fas fa-align-left"></i></button>
        <button class="wd_btn_tool" data-cmd="justifyCenter" ${o(`Centrar`,void 0,`bottom`)}><i class="fas fa-align-center"></i></button>
        <button class="wd_btn_tool" data-cmd="justifyRight" ${o(`Alinear Derecha`,void 0,`bottom`)}><i class="fas fa-align-right"></i></button>
        <button class="wd_btn_tool" data-cmd="justifyFull" ${o(`Justificar`,void 0,`bottom`)}><i class="fas fa-align-justify"></i></button>
      </div>
      
      <div class="wd_tool_group">
        <button class="wd_btn_tool" data-cmd="insertUnorderedList" ${o(`Viñetas`,void 0,`bottom`)}><i class="fas fa-list-ul"></i></button>
        <button class="wd_btn_tool" data-cmd="insertOrderedList" ${o(`Numeración`,void 0,`bottom`)}><i class="fas fa-list-ol"></i></button>
        <div class="wd_tool_sep"></div>
        <select id="wd_l_ht" class="wd_font_sel" style="width:60px;" ${o(`Interlineado`,void 0,`bottom`)}>
           <option value="1">1.0</option>
           <option value="1.15">1.15</option>
           <option value="1.5">1.5</option>
           <option value="2">2.0</option>
        </select>
      </div>
      
      <div class="wd_tool_group">
        <div ${o(`Color Texto`,void 0,`bottom`)} style="display:flex; align-items:center; padding: 0 0.5vh; height: 4vh;">
           <i class="fas fa-font" style="color:var(--tx2); margin-right: 0.5vh; font-size:12px;"></i>
           <input type="color" id="wd_c_txt" value="#222222" style="width:2.5vh;height:2.5vh;border:none;background:none;cursor:pointer;padding:0;">
        </div>
        <div class="wd_tool_sep"></div>
        <div ${o(`Color Resaltado`,void 0,`bottom`)} style="display:flex; align-items:center; padding: 0 0.5vh; height: 4vh;">
           <i class="fas fa-highlighter" style="color:var(--tx2); margin-right: 0.5vh; font-size:12px;"></i>
           <input type="color" id="wd_c_bg" value="#ffff00" style="width:2.5vh;height:2.5vh;border:none;background:none;cursor:pointer;padding:0;">
        </div>
      </div>

      <!-- Metadata Group (Integrated in Ribbon) -->
      <div class="wd_tool_sep wd_meta_sep_main" style="display:none"></div>
      <div id="wd_meta" class="wd_tool_group wd_meta_group" style="display:none; padding: 0 1.5vh; gap: 2vh; border: none; background: transparent;">
        <span class="wd_meta_item" id="wd_meta_rel" ${o(`Actividad reciente`)}><i class="fas fa-clock"></i> <span>—</span></span>
        <span class="wd_meta_item" id="wd_meta_cre" ${o(`Fecha de creación`)}><i class="fas fa-calendar-plus"></i> <span>—</span></span>
        <span class="wd_meta_item" id="wd_meta_upd" ${o(`Última edición`)}><i class="fas fa-pen-nib"></i> <span>—</span></span>
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
          <button id="wd_btn_del" class="wd_btn_sec wd_btn_del_doc" ${o(`Eliminar`,void 0,`error`)}><i class="fas fa-trash-can"></i></button>
        </div>
      </div>
      <div class="wd_sb_head">
        <h3 id="wd_saludo">Archivos</h3>
        <div style="display:flex; gap: 5px;">
          <button id="wd_btn_refresh" class="wd_sb_btn" style="display:none" ${o(`Actualizar`)}><i class="fas fa-rotate-right"></i></button>
          <button id="wd_btn_new" class="wd_sb_btn" ${o(`Nuevo Documento`)}><i class="fas fa-plus"></i></button>
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
</div>`,v=async()=>{let{db:e}=await f(async()=>{let{db:e}=await import(`./firebase-CHrAjG0U.js`).then(e=>e.r);return{db:e}},[]);return{db:e,...await f(()=>import(`./firebase-C5pCnWkN.js`).then(e=>e.t),[])}},y=async e=>{let n=t.user;if(n?.email)try{let{db:t,doc:r,setDoc:i,serverTimestamp:a}=await v();await i(r(t,`word`,e.id),{id:e.id,usuario:n.usuario||n.email,email:n.email,titulo:String(e.titulo||``),contenido:String(e.contenido||``),pin:!!e.pin,creado:a(),actualizado:a()})}catch(e){console.error(`[word] guardarNube:`,e)}},b=async e=>{let n=t.user;if(n?.email)try{let{db:t,doc:r,setDoc:i,serverTimestamp:a}=await v();await i(r(t,`word`,e.id),{id:e.id,usuario:n.usuario||n.email,email:n.email,titulo:String(e.titulo||``),contenido:String(e.contenido||``),pin:!!e.pin,actualizado:a()},{merge:!0})}catch(e){console.error(`[word] actualizarNube:`,e)}},x=async e=>{if(t.user?.email)try{let{db:t,doc:n,deleteDoc:r}=await v();await r(n(t,`word`,e))}catch{}},S=async()=>{let e=t.user;if(!e?.email)return null;try{let{db:t,collection:n,getDocs:r,query:i,where:a}=await v();return(await r(i(n(t,`word`),a(`email`,`==`,e.email)))).docs.map(e=>{let t=e.data();return{id:e.id,titulo:t.titulo||``,contenido:t.contenido||``,pin:!!t.pin,creado:t.creado?.toMillis?.()||Date.now(),actualizado:t.actualizado?.toMillis?.()||Date.now(),synced:!0}})}catch{return null}},C=e=>{let t=document.createElement(`div`);return t.innerHTML=e||``,t.textContent||t.innerText||``},w=(e,t)=>{let n=C(e.contenido),r=n.length>50?n.substring(0,50)+`...`:n||`Sin contenido...`,i=e.id===t?`active`:``,a=e.titulo||`Documento sin título`;return`
    <div class="wd_doc_item ${i}${e.pin?` wd_pinned`:``}" data-id="${e.id}">
      <div class="wd_doc_head">
        <h4>${a}</h4>
        <div class="wd_doc_acts">
          <button class="wd_act_pin${e.pin?` active`:``}" data-id="${e.id}" ${o(e.pin?`Desanclar`:`Fijar`,void 0,`right`)}><i class="fas fa-thumbtack"></i></button>
          <i class="fas ${e.synced?`fa-cloud wd_cloud_ok`:`fa-cloud-arrow-up wd_cloud_pen`}" ${o(e.synced?`En nube`:`Local`,void 0,`right`)}></i>
        </div>
      </div>
      <p>${r}</p>
    </div>`},T=null,E=null,D=async()=>{let r=g.get(),o=null,c=null;t.user&&d(`#wd_saludo`).text(`${u()}${t.user.nombre||t.user.usuario}`);let f=e=>{if(!t.user||!e){d(`#wd_meta, .wd_meta_sep_main`).hide();return}d(`#wd_meta, .wd_meta_sep_main`).css(`display`,`flex`),d(`#wd_meta_rel span`).text(n(e.actualizado||e.creado)),d(`#wd_meta_cre span`).text(s(e.creado)),d(`#wd_meta_upd span`).text(s(e.actualizado))},h=e=>{clearInterval(E),!(!t.user||!e)&&(E=setInterval(()=>{d(`#wd_meta_rel span`).text(n(e.actualizado||e.creado))},6e4))},_=()=>d(`#wd_sb_list`).html(`<div class="wd_skeleton"></div>`.repeat(3)),v=()=>[...r].sort((e,t)=>e.pin&&!t.pin?-1:!e.pin&&t.pin?1:(t.actualizado||0)-(e.actualizado||0)),D=async()=>{let e=v();await i(`#wd_sb_list`,e.length?e.map(e=>w(e,o?.id)).join(``):`<div class="wd_empty">No tienes documentos. Crea uno nuevo.</div>`,80)},O=e=>{o=e,d(`#wd_in_tit`).val(e.titulo||``),d(`#wd_editor`).html(e.contenido||``),D(),f(e),h(e)},k=()=>{r=r.filter(e=>!e.id.startsWith(`ej`));let e={id:m(),titulo:``,contenido:``,pin:!1,creado:Date.now(),actualizado:Date.now(),synced:!1};r.unshift(e),g.set(r),O(e),setTimeout(()=>{d(`#wd_editor`).focus(),document.execCommand(`fontName`,!1,`'Segoe UI', system-ui`)},50)},A=()=>{if(!o)return;o.titulo=d(`#wd_in_tit`).val().trim(),o.contenido=d(`#wd_editor`).html(),o.actualizado=Date.now(),g.set(r);let e=d(`#wd_sb_list .wd_doc_item[data-id="${o.id}"]`);if(e.length){e.find(`h4`).text(o.titulo||`Documento sin título`);let t=C(o.contenido);e.find(`p`).text(t.length>50?t.substring(0,50)+`...`:t||`Sin contenido...`),e.find(`.fa-cloud.wd_cloud_ok`).removeClass(`fa-cloud wd_cloud_ok`).addClass(`fa-cloud-arrow-up wd_cloud_pen`).attr(`data-witip`,`Local (Cambios sin guardar)`)}},j=()=>{d(`.wd_btn_tool[data-cmd]`).each(function(){try{d(this).toggleClass(`active`,document.queryCommandState(d(this).data(`cmd`)))}catch{}});try{let e=window.getSelection();if(!e.anchorNode)return;let t=e.anchorNode.nodeType===3?e.anchorNode.parentNode:e.anchorNode;if(d(t).closest(`.wd_editor`).length){let e=window.getComputedStyle(t);if(e.fontSize&&d(`#wd_f_sz`).val(parseInt(e.fontSize)),e.fontFamily){let t=e.fontFamily.split(`,`)[0].replace(/['"]/g,``);d(`#wd_f_fam option`).filter(function(){return d(this).text()===t||d(this).val().includes(t)}).prop(`selected`,!0)}let n=d(t).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);n.length&&n[0].style.lineHeight&&d(`#wd_l_ht`).val(n[0].style.lineHeight)}}catch{}};d(document).on(`click`,`#wd_btn_menu`,()=>d(`#wd_sidebar`).toggleClass(`closed`)).on(`click`,`#wd_btn_new`,k).on(`click`,`#wd_btn_refresh`,async function(){let e=d(this).find(`i`);if(e.hasClass(`wd_spin`))return;e.addClass(`wd_spin`);let t=await S();t&&(r=t,g.set(r),r.length?O(v()[0]):k(),l(`Sincronizado ✓`,`success`)),e.removeClass(`wd_spin`)}).on(`click`,`.wd_doc_item`,function(e){if(d(e.target).closest(`.wd_doc_acts`).length)return;let t=r.find(e=>e.id===d(this).data(`id`));t&&t.id!==o?.id&&O(t)}).on(`click`,`.wd_btn_del_doc`,function(){!o||!confirm(`¿Eliminar este documento permanentemente?`)||(r=r.filter(e=>e.id!==o.id),g.set(r),t.user&&o.synced&&x(o.id),l(`Documento eliminado`,`success`),r.length?O(v()[0]):k())}).on(`click`,`#wd_btn_save`,function(){if(!o)return;A();let e=o.titulo||C(o.contenido).trim().length>0;if(t.user&&e){let e=d(this).find(`i`).removeClass(`fa-save`).addClass(`fa-spinner wd_spin`);(o.synced?b(o):y(o)).then(()=>{o.synced=!0,o.actualizado=Date.now(),g.set(r),d(`#wd_sb_list .wd_doc_item[data-id="${o.id}"] .fa-cloud-arrow-up`).removeClass(`fa-cloud-arrow-up wd_cloud_pen`).addClass(`fa-cloud wd_cloud_ok`).attr(`data-witip`,`En nube`),f(o),e.removeClass(`fa-spinner wd_spin`).addClass(`fa-save`),l(`¡Guardado con éxito! ☁️`,`success`)}).catch(()=>{e.removeClass(`fa-spinner wd_spin`).addClass(`fa-save`),l(`Error al guardar en la nube`,`error`)})}else t.user&&!e?l(`Agrega un título o contenido primero`,`warning`):l(`Guardado localmente ✓`,`success`)}).on(`click`,`.wd_act_pin`,function(e){e.stopPropagation();let n=d(this).data(`id`),i=r.find(e=>e.id===n);i&&(i.pin=!i.pin,g.set(r),D(),t.user&&i.synced&&b(i))}).on(`input`,`#wd_editor`,()=>{j(),A()}).on(`input`,`#wd_in_tit`,A).on(`mouseup keyup`,`#wd_editor`,function(){j();let e=window.getSelection();e.rangeCount>0&&(c=e.getRangeAt(0))}).on(`click`,`.wd_btn_tool[data-cmd]`,function(e){e.preventDefault(),document.execCommand(d(this).data(`cmd`),!1,null),j(),d(`#wd_editor`).focus()}).on(`change`,`#wd_f_fam`,function(){if(c){let e=window.getSelection();e.removeAllRanges(),e.addRange(c)}document.execCommand(`styleWithCSS`,!1,!0),document.execCommand(`fontName`,!1,d(this).val()),d(`#wd_editor`).focus().trigger(`input`)}).on(`keydown`,`#wd_f_sz`,function(e){if(e.key!==`Enter`)return;e.preventDefault();let t=Math.max(8,Math.min(100,parseInt(d(this).val())||16));if(d(this).val(t),c){let e=window.getSelection();e.removeAllRanges(),e.addRange(c)}document.execCommand(`styleWithCSS`,!1,!0),document.execCommand(`fontSize`,!1,`7`),d(`.wd_editor font[size="7"], .wd_editor span[style*="xxx-large"]`).removeAttr(`size`).css(`font-size`,t+`px`),d(`#wd_editor`).focus().trigger(`input`)}).on(`change`,`#wd_l_ht`,function(){if(c){let e=window.getSelection();e.removeAllRanges(),e.addRange(c)}let e=window.getSelection();if(e.rangeCount){let t=e.getRangeAt(0).commonAncestorContainer,n=t.nodeType===3?t.parentNode:t,r=d(n).hasClass(`wd_editor`)?d(n).children().filter(function(){return e.containsNode(this,!0)}):d(n).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);!r.length&&d(n).hasClass(`wd_editor`)&&(r=d(n)),r.css(`line-height`,d(this).val())}d(`#wd_editor`).focus().trigger(`input`)}).on(`input`,`#wd_c_txt`,function(){document.execCommand(`foreColor`,!1,d(this).val()),d(`#wd_editor`).focus()}).on(`input`,`#wd_c_bg`,function(){document.execCommand(`hiliteColor`,!1,d(this).val()),d(`#wd_editor`).focus()}),a([`.wd_ribbon`,`.wd_sidebar`,`.wd_page`],50),r.length?O(v()[0]):k(),T=t.on(async e=>{d(`#wd_btn_refresh`).toggle(!!e),e?(d(`#wd_saludo`).text(`${u()}${e.nombre||e.usuario}`),r.length===0&&_(),r=await S()||[],g.set(r),r.length?O(v()[0]):k()):(d(`#wd_saludo`).text(`Archivos`),localStorage.removeItem(p),r=g.get(),r.length?O(v()[0]):k())}),console.log(`📝 ${e} v11 · Word OK`)},O=()=>{d(document).off(`click input mouseup keyup change keydown`,`#wd_btn_menu, #wd_btn_new, #wd_btn_refresh, .wd_doc_item, .wd_btn_del_doc, #wd_btn_save, .wd_act_pin, #wd_editor, #wd_in_tit, .wd_btn_tool, #wd_f_fam, #wd_f_sz, #wd_l_ht, #wd_c_txt, #wd_c_bg`),clearInterval(E),T?.()};export{O as cleanup,D as init,_ as render};