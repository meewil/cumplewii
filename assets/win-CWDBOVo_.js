import{R as e,V as t,b as n,o as r}from"./widev-BKJDWmod.js";import{n as i}from"./vendor-Dkcx8wGc.js";import"./index-DzBLy80i.js";import{_ as a,b as o,g as s,h as c,m as l,o as u,r as d,s as f,u as p}from"./firebase-C5pCnWkN.js";import{n as m}from"./firebase-CHrAjG0U.js";var h=[],g=null,_=``,v=!0,y=!1,b=null,x=`wiWin`,S=`wi_win_cache`,C=()=>n(`wiSmile`)||{},w=e=>localStorage.setItem(S,JSON.stringify(e)),T=()=>JSON.parse(localStorage.getItem(S)||`[]`),E=()=>h.sort((e,t)=>!!t.pin-+!!e.pin||(t.fechaActualizado?.seconds||0)-(e.fechaActualizado?.seconds||0)),D=()=>({seconds:Math.floor(Date.now()/1e3)}),O=async(e,t=!1)=>{if(y=!e?.email,y){v=!1,k();return}t||i(`.es_btn_refresh`).addClass(`syncing`);try{h=(await u(p(s(m,x),l(`email`,`==`,e.email),f(100)))).docs.map(e=>({_fsId:e.id,...e.data()})),E(),w(h),v=!1,k()}catch{v=!1,t||L()}finally{i(`.es_btn_refresh`).removeClass(`syncing`)}},k=()=>{g||=h.find(e=>e.pin)||h[0]||null,L()},A=async(t=!1)=>{if(!g)return;let n=C(),s=i(`#btnS2`),l=i(`.es_in_title_h`).val().trim()||`Untitled`,u=i(`.es_editor`).html();g.titulo=l,g.contenido=u,g._dirty&&(g.fechaActualizado=D());let d=h.filter(e=>e._dirty);if(!d.length){t&&r(`Sin cambios por guardar`,`info`,800);return}if(w(h),t&&e(s,!0,`Guardando`),y){d.forEach(e=>e._dirty=!1),w(h),F(),t&&setTimeout(()=>{e(s,!1,`Guardado`),setTimeout(()=>s.html(`<i class="fas fa-save"></i> <span id="iconSync">Guardar</span>`),1500)},600);return}try{let i=c(m);for(let e of d){let t={id:e.id,titulo:e.titulo||`Untitled`,contenido:e.contenido||``,email:n.email,usuario:n.usuario||`Public`,fecha:e.fecha||o(),fechaActualizado:o(),pin:!!e.pin};i.set(a(m,x,e._fsId),t),e._dirty=!1}await i.commit(),w(h),F(),t&&(r(`Sincronización Exitosa ✨`,`success`,800),e(s,!1,`Guardado`))}catch(n){t&&(console.error(`Save Error:`,n),r(`Error al guardar`,`error`),e(s,!1,`Reintentar`))}finally{t&&setTimeout(()=>{i(`#btnS2`).length&&i(`#btnS2`).html(`<i class="fas fa-save"></i> <span>Guardar</span>`)},2e3)}},j=async()=>{let e=C(),t=`win${Date.now()}`,n=D(),r={_fsId:t,id:t,titulo:``,contenido:``,pin:!1,email:e.email||`guest`,usuario:e.usuario||`Public`,fecha:n,fechaActualizado:n,_dirty:!0};h.unshift(r),g=r,w(h),L(),i(`.es_in_title_h`).focus(),i(`.es_container`).removeClass(`menu-open`)},M=async(t,n=null)=>{if(confirm(`¿Eliminar?`)){n&&e(i(n),!0,`...`);try{h=h.filter(e=>e._fsId!==t),g?._fsId===t&&(g=h[0]||null),w(h),y||await d(a(m,x,t)),L()}catch{n&&e(i(n),!1,`<i class="fas fa-trash-alt"></i>`),r(`Error al eliminar`,`error`)}}},N=async e=>{let t=h.find(t=>t._fsId===e);t&&(t.pin=!t.pin,t._dirty=!0,t.fechaActualizado=D(),E(),w(h),L())},P=()=>{i(`.es_tool_btn[data-cmd]`).each(function(){let e=i(this).data(`cmd`);try{document.queryCommandState(e)?i(this).addClass(`active`):i(this).removeClass(`active`)}catch{}});try{let e=window.getSelection().anchorNode;if(e){let t=e.nodeType===3?e.parentNode:e;if(i(t).closest(`.es_editor`).length){let e=window.getComputedStyle(t);if(e.fontSize&&i(`#winFontSize`).val(parseInt(e.fontSize)),e.fontFamily){let t=e.fontFamily.split(`,`)[0].replace(/['"]/g,``);i(`#winFontFamily option`).each(function(){(i(this).text()===t||i(this).val().includes(t))&&i(`#winFontFamily`).val(i(this).val())})}let n=i(t).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);if(n.length){let t=n[0].style.lineHeight;t&&i(`#winLineHeight`).val(t),n[0].style.marginBottom===`0px`||e.marginBottom===`0px`?i(`#btnNoMargin`).addClass(`active`):i(`#btnNoMargin`).removeClass(`active`)}}}}catch{}},F=()=>{let e=h.filter(e=>(e.titulo||``).toLowerCase().includes(_.toLowerCase()));i(`.es_list_items_final`).html(e.map(e=>{let n=e.titulo||`Untitled`,r=i(`<div>`).html(e.contenido||``).text().trim()||`Sin contenido...`,a=r.length>30?r.substring(0,30)+`...`:r,o=!e._dirty,s=new Date((e.fechaActualizado?.seconds||Date.now()/1e3)*1e3).toLocaleDateString(`es-ES`,{day:`2-digit`,month:`short`});return`
        <div class="es_item_final ${g?._fsId===e._fsId?`active`:``}" data-id="${e._fsId}">
            <div class="it_r1">
                <strong class="it_title">${e.pin?`<i class="fas fa-thumbtack pin_ico"></i> `:``}${n}</strong>
                <div class="it_icons">
                    <span class="it_status" ${t(o?`Guardado`:`Pendiente`)}>
                        ${o?`<i class="fas fa-cloud"></i>`:`<i class="fas fa-sync-alt fa-spin" style="color:var(--warning)"></i>`}
                    </span>
                    <i class="fas fa-thumbtack it_action btnPin" data-id="${e._fsId}" style="${e.pin?`color:var(--mco)`:``}" ${t(e.pin?`Desanclar`:`Anclar`)}></i>
                    <i class="fas fa-trash-alt it_action btnDel" data-id="${e._fsId}" ${t(`Borrar`)}></i>
                </div>
            </div>
            <div class="it_r2">
                <span class="it_snippet">${a}</span>
                <span class="it_date">${s}</span>
            </div>
        </div>`}).join(``)||`<div class="txc" style="margin-top:20px; opacity:0.4; font-size:12px;">No hay documentos</div>`)},I=()=>{let e=i(`.es_left`);if(e.length){if(v&&!h.length)return e.html(`<div class="es_skeleton"> <div class="sk_line" style="width:40%"></div> <div class="sk_line"></div> </div>`);if(!g)return e.html(`<div style="margin:auto; text-align:center;"><button class="es_btn_new_final" id="btnS1" style="width:280px">+ Nuevo Win</button></div>`);e.html(`
        <div class="es_page">
            <div class="es_page_header">
                <div class="es_header_left">
                    <input type="text" class="es_in_title_h" placeholder="Escribir el título..." value="${g.titulo||``}" spellcheck="false">
                </div>
                <div class="es_header_right">
                    <button class="es_btn_pro save" id="btnS2"><i class="fas fa-save" id="iconSync"></i> <span>Guardar</span></button>
                    <button class="es_btn_pro del" id="btnD2" ${t(`Eliminar permanentemente`)}><i class="fas fa-trash-alt"></i> <span>Eliminar</span></button>
                    <button class="es_btn_menu" id="toggleMenu" ${t(`Historial`)}><i class="fas fa-history"></i></button>
                </div>
            </div>
            <div class="es_page_content">
                <div class="es_editor" contenteditable="true" data-placeholder="Escriba aquí contenido pro..." spellcheck="false">${g.contenido||``}</div>
            </div>
            <div class="es_page_footer">
                <div class="es_footer_group">
                    ${[`bold`,`italic`,`underline`,`strikeThrough`].map(e=>`
                    <button class="es_tool_btn" data-cmd="${e}" ${t(e)}><i class="fas fa-${e===`bold`?`bold`:e===`italic`?`italic`:e===`underline`?`underline`:`strikethrough`}"></i></button>
                    `).join(``)}
                </div>
                <div class="es_footer_sep"></div>
                <div class="es_footer_group">
                    ${[`justifyLeft`,`justifyCenter`,`justifyRight`,`justifyFull`].map(e=>`
                    <button class="es_tool_btn" data-cmd="${e}" ${t(e)}><i class="fas fa-align-${e===`justifyLeft`?`left`:e===`justifyCenter`?`center`:e===`justifyRight`?`right`:`justify`}"></i></button>
                    `).join(``)}
                </div>
                <div class="es_footer_sep"></div>
                <div class="es_footer_group">
                    <button class="es_tool_btn" data-cmd="insertUnorderedList" ${t(`Lista`)}><i class="fas fa-list-ul"></i></button>
                    <button class="es_tool_btn" data-cmd="insertOrderedList" ${t(`Numerada`)}><i class="fas fa-list-ol"></i></button>
                </div>
                <div class="es_footer_sep"></div>
                <div class="es_footer_group">
                    <input type="text" id="winFontSize" class="es_font_text" value="16" maxlength="2" title="Tamaño de fuente" autocomplete="off">
                </div>
                <div class="es_footer_sep"></div>
                <div class="es_footer_group">
                    <select id="winFontFamily" class="es_font_sel" title="Familia de fuente">
                        <option value="inherit">Sistema</option>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="'Poppins', sans-serif">Poppins</option>
                        <option value="'Rubik', sans-serif">Rubik</option>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="'Courier New', monospace">Courier</option>
                        <option value="'Times New Roman', serif">Times</option>
                    </select>
                </div>
                <div class="es_footer_sep"></div>
                <div class="es_footer_group">
                    <select id="winLineHeight" class="es_font_sel" title="Interlineado" style="width: 58px; padding: 0 0.5vh;">
                        <option value="1">1.0</option>
                        <option value="1.15">1.15</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2.0</option>
                    </select>
                    <button class="es_tool_btn" id="btnNoMargin" title="Eliminar espacio de párrafos"><i class="fas fa-compress-alt"></i></button>
                </div>
            </div>
        </div>`)}},L=()=>{i(`.es_container`).length||i(`#wimain`).html(R()),I(),F()},R=()=>`<div class="es_container">
        <div class="es_overlay"></div>
        <div class="es_left"></div>
        <div class="es_right">
            <div class="es_sidebar_final">
                <div class="es_sidebar_actions">
                    <button class="es_btn_new_final" id="btnN1">+ Nuevo Win</button>
                    <button class="es_btn_refresh" id="btnSync" ${t(`Sync Firestore`)}><i class="fas fa-sync-alt"></i></button>
                </div>
                <input type="text" class="es_search_final" placeholder="Buscar documentos...">
                <div class="es_list_items_final"></div>
                <div style="margin-top:auto; font-size:10px; opacity:0.5; display:flex; align-items:center; gap:5px;">
                    <div class="wn_dot_final"></div> ${y?`Offline - Local Mode`:`Online - wiWin Cloud`}
                </div>
            </div>
        </div>
    </div>`,z=async()=>{B();let e=C();y=!e.email,h=T(),h.length?(v=!1,k()):(L(),O(e,!0)),i(document).on(`click.es`,`.es_tool_btn[data-cmd]`,function(){document.execCommand(i(this).data(`cmd`)),i(`.es_editor`).focus(),P()}).on(`input.es`,`.es_editor, .es_in_title_h`,function(){if(g){g.titulo=i(`.es_in_title_h`).val().trim(),g.contenido=i(`.es_editor`).html(),g._dirty=!0,g.fechaActualizado=D(),w(h);let e=i(`.es_item_final[data-id="${g._fsId}"]`);if(e.length)if(e.find(`.it_status`).html(`<i class="fas fa-sync-alt fa-spin" style="color:var(--warning)"></i>`),i(this).hasClass(`es_in_title_h`))e.find(`.it_title`).html((g.pin?`<i class="fas fa-thumbtack pin_ico"></i> `:``)+(g.titulo||`Untitled`));else{let t=i(`<div>`).html(g.contenido).text().trim()||`Sin contenido...`,n=t.length>30?t.substring(0,30)+`...`:t;e.find(`.it_snippet`).text(n)}let t=i(`.es_editor`)[0];if(t&&i(this).hasClass(`es_editor`)){let e=window.getSelection();if(e?.rangeCount){let n=e.getRangeAt(0).getBoundingClientRect(),r=t.closest(`.es_page_content`),i=r.getBoundingClientRect();n.bottom>i.bottom-40&&(r.scrollTop+=n.bottom-i.bottom+60)}}}}).on(`click.es`,`#btnS2`,()=>A(!0)).on(`click.es`,`#btnSync`,()=>O(C())).on(`click.es`,`#btnD2, .btnDel`,function(e){e.stopPropagation(),M(i(this).data(`id`)||g._fsId,this)}).on(`click.es`,`.btnPin`,function(e){e.stopPropagation(),N(i(this).data(`id`))}).on(`click.es`,`#btnN1, #btnS1`,j).on(`click.es`,`#toggleMenu, .es_overlay`,()=>i(`.es_container`).toggleClass(`menu-open`)).on(`click.es`,`.es_item_final`,async function(){let e=i(this).data(`id`);g?._fsId!==e&&(g=h.find(t=>t._fsId===e),L(),P(),i(`.es_container`).removeClass(`menu-open`))}).on(`input.es`,`.es_search_final`,function(){_=i(this).val(),F()}).on(`keyup.es mouseup.es click.es`,`.es_editor`,function(){P();let e=window.getSelection();e.rangeCount>0&&(b=e.getRangeAt(0))}).on(`keydown.es`,`.es_in_title_h`,function(e){e.key===`Tab`&&(e.preventDefault(),i(`.es_editor`).focus())}).on(`keydown.es`,`#winFontSize`,function(e){if(e.key===`Enter`){e.preventDefault();let t=Math.max(8,Math.min(72,parseInt(i(this).val())||16));if(i(this).val(t),b){let e=window.getSelection();e.removeAllRanges(),e.addRange(b)}document.execCommand(`styleWithCSS`,!1,!0),document.execCommand(`fontSize`,!1,`7`),i(`.es_editor font[size="7"], .es_editor span[style*="xxx-large"]`).removeAttr(`size`).css(`font-size`,t+`px`),i(`.es_editor`).focus().trigger(`input.es`),P()}}).on(`change.es`,`#winFontFamily`,function(){if(b){let e=window.getSelection();e.removeAllRanges(),e.addRange(b)}document.execCommand(`styleWithCSS`,!1,!0),document.execCommand(`fontName`,!1,i(this).val()),i(`.es_editor`).focus().trigger(`input.es`),P()}).on(`change.es`,`#winLineHeight`,function(){if(b){let e=window.getSelection();e.removeAllRanges(),e.addRange(b)}let e=window.getSelection();if(e.rangeCount){let t=e.getRangeAt(0).commonAncestorContainer,n=t.nodeType===3?t.parentNode:t,r=i(n).hasClass(`es_editor`)?i(n).children().filter(function(){return e.containsNode(this,!0)}):i(n).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);!r.length&&i(n).hasClass(`es_editor`)&&(r=i(n)),r.css(`line-height`,i(this).val())}i(`.es_editor`).focus().trigger(`input.es`),P()}).on(`click.es`,`#btnNoMargin`,function(){if(b){let e=window.getSelection();e.removeAllRanges(),e.addRange(b)}let e=window.getSelection();if(e.rangeCount){let t=e.getRangeAt(0).commonAncestorContainer,n=t.nodeType===3?t.parentNode:t,r=i(n).hasClass(`es_editor`)?i(n).children().filter(function(){return e.containsNode(this,!0)}):i(n).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);!r.length&&i(n).hasClass(`es_editor`)&&(r=i(n)),r.css(`margin-bottom`)===`0px`?r.css({"margin-top":``,"margin-bottom":``}):r.css({"margin-top":`0px`,"margin-bottom":`0px`,"padding-bottom":`0px`})}i(`.es_editor`).focus().trigger(`input.es`),P()})},B=()=>{i(document).off(`.es`),h=[],g=null,b=null};export{B as cleanup,z as init,R as render};