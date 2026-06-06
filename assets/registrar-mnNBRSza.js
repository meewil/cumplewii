import{E as e,L as t,T as n,b as r,k as i,o as a}from"./widev-Czq8ue36.js";import{n as o}from"./vendor-Dkcx8wGc.js";import{n as s}from"./index-U_klNYw1.js";import{A as c,C as l,N as u,k as d,v as f}from"./firebase-BY5GISzq.js";import{n as p}from"./firebase-BOoMX3kr.js";import{cargarTours as m,getMesActual as h,invalidateRankingCaches as g,obtenerRankingMes as _}from"./zsmile-CA_7WcPo.js";var v=[],y=null,b=null,x=!1,S=()=>`
  <div class="smw_reg_container">
    <div class="smw_reg_card" id="smwRegCard">
      
      <!-- COLUMNA IZQUIERDA: FORMULARIO DE REGISTRO (70%) -->
      <div class="smw_reg_col_left">
        <h1 class="smw_reg_title" id="smwRegCardTitle">
          <i class="fas fa-cart-plus"></i> Registrar Nueva Venta
        </h1>

        <form id="formularioVenta" class="smw_form">
          <div class="smw_form_grid">
            
            <!-- Fila 1: Tipo de Tour (3 cols) + Registro En (1 col) -->
            <div class="smw_form_field w_3">
              <label><i class="fas fa-route"></i> Tipo de Tour *</label>
              <div class="smw_tour_selector" id="tourSelector">
                <div class="smw_tour_display" id="tourDisplay" tabindex="0">
                  <span class="smw_tour_text">
                    <i class="fas fa-search-location" style="color:var(--mco)"></i> 
                    <span id="tourSelectedLabel">Seleccionar tour...</span>
                  </span>
                  <i class="fas fa-chevron-down smw_arrow"></i>
                </div>
                <div class="smw_tour_dropdown" id="tourDropdown">
                  <div class="smw_tour_search">
                    <i class="fas fa-search"></i>
                    <input type="text" id="smwTourSearch" placeholder="Buscar tour por nombre o precio..." autocomplete="off">
                  </div>
                  <div class="smw_tour_table_container">
                    <table class="smw_tour_table">
                      <tbody id="tourTableBody">
                        ${R(4)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <input type="hidden" id="tipoTour" required>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hotel"></i> Registro en:</label>
              <select id="registroEn" class="smw_select">
                <option value="hawka">Hawka</option>
                <option value="hclaudia">HClaudia</option>
              </select>
            </div>

            <!-- Fila 2: Cliente (2 cols) + N° Habitación (1 col) + Hora (1 col) -->
            <div class="smw_form_field w_2">
              <label><i class="fas fa-user"></i> Nombre del Cliente *</label>
              <input type="text" id="nombreCliente" class="smw_input" required placeholder="Nombre de cliente / calle / grupo">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-bed"></i> Habitación</label>
              <input type="text" id="numeroHabitacion" class="smw_input" placeholder="Ej: 205">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-clock"></i> Hora de salida *</label>
              <input type="text" id="horaSalida" class="smw_input" placeholder="Ej: 5PM" required>
            </div>

            <!-- Fila 3: Tipo Doc (1 col) + N° Doc (1 col) + Método Pago (1 col) + PAX (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-id-card"></i> Documento</label>
              <select id="tipoDocumento" class="smw_select">
                <option value="dni">DNI</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedula">Cédula</option>
                <option value="ce">CE</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hashtag"></i> N° Documento</label>
              <input type="text" id="numeroDocumento" class="smw_input" placeholder="Ej: 78964523">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-credit-card"></i> Pago *</label>
              <select id="metodoPago" class="smw_select" required>
                <option value="">Seleccionar...</option>
                <option value="Tarjeta">Tarjeta</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Yape">Yape</option>
                <option value="Plin">Plin</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-users"></i> PAX *</label>
              <input type="number" id="cantidadPax" class="smw_input" required min="1" value="1">
            </div>

            <!-- Fila 4: Imp. Indiv. (1 col) + Total (1 col) + Operador (1 col) + Pago Oper. (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-dollar-sign"></i> Individual (S/)</label>
              <input type="number" id="precioUnitario" class="smw_input" step="0.01" placeholder="0.00">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-calculator"></i> Total (S/)</label>
              <input type="number" id="importeTotal" class="smw_input" step="0.01" placeholder="0.00" disabled>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-user-shield"></i> Operador *</label>
              <input type="text" id="Operador" class="smw_input" placeholder="Ejm: Pili..." required>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-hand-holding-usd"></i> Pago Oper. *</label>
              <input type="number" id="PagoOperador" class="smw_input" step="0.01" placeholder="0.00" required>
            </div>

            <!-- Fila 5: Estado Pago (1 col) + Ganancia (1 col) + Fecha (1 col) + Comentarios (1 col) -->
            <div class="smw_form_field w_1">
              <label><i class="fas fa-money-check-alt"></i> Estado Pago *</label>
              <select id="estadoPago" class="smw_select" required>
                <option value="pagado">Pagado (Nosotros)</option>
                <option value="cobrar">Yo pasé (->)</option>
                <option value="pagado2">Nos pasaron (<-)</option>
                <option value="cobrado">Arreglado (<->)</option>
              </select>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-handshake"></i> Ganancia (S/)</label>
              <input type="number" id="ganancia" class="smw_input" step="0.01" placeholder="0.00" disabled>
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fas fa-calendar-day"></i> Fecha *</label>
              <input type="date" id="fechaTour" class="smw_input" required value="${new Date().toISOString().split(`T`)[0]}">
            </div>

            <div class="smw_form_field w_1">
              <label><i class="fa-solid fa-comment-dots"></i> Notas (Opcional)</label>
              <input type="text" id="Comentario" class="smw_input" placeholder="Anotaciones extra...">
            </div>

            <!-- Fila 6: Opciones de Puntos / Excepciones (4 cols - Ancho Completo) -->
            <div class="smw_options_section">
              <h3 class="smw_options_title"><i class="fas fa-star-half-alt"></i> Opciones de Puntos / Excepciones</h3>
              <div class="smw_check_grid">
                
                <label class="smw_check_label active" id="lblMiVenta">
                  <input type="checkbox" id="vtMiVenta" checked>
                  <i class="fas fa-check-circle smw_check_icon"></i>
                  <span>Mi venta</span>
                </label>

                <label class="smw_check_label" id="lblJulio">
                  <input type="checkbox" id="vtJulio">
                  <i class="far fa-circle smw_check_icon"></i>
                  <span>Venta de Julio</span>
                </label>

                <label class="smw_check_label" id="lblSonia">
                  <input type="checkbox" id="vtSonia">
                  <i class="far fa-circle smw_check_icon"></i>
                  <span>Venta de Sonia</span>
                </label>

                <label class="smw_check_label" id="lblExterna">
                  <input type="checkbox" id="vtExterna">
                  <i class="far fa-circle smw_check_icon"></i>
                  <span>Venta Externa</span>
                </label>

              </div>
            </div>

          </div>

          <!-- Acciones del Formulario (Guardar Venta junto a Puntos) -->
          <div class="smw_form_actions">
            <div class="smw_actions_right" id="smwActionsRight">
              <div class="smw_points_preview">
                <span>Puntos a ganar: <strong id="vistaPreviaLaPuntos">0</strong></span>
                <i class="fas fa-star"></i>
              </div>

              <button type="submit" class="smw_btn smw_btn_save" id="btnSaveVenta">
                <i class="fas fa-save"></i> Guardar Venta
              </button>
            </div>
          </div>

        </form>
      </div>

      <!-- COLUMNA DERECHA: SIDEBAR (30%) (Ranking en Vivo + Mis Ventas de Hoy) -->
      <div class="smw_reg_col_right">
        
        <!-- Panel Superior: Ranking en Vivo (Top 3-4 Guías) -->
        <div class="smw_sidebar_section" style="flex: 0 0 42%; display: flex; flex-direction: column; overflow: hidden;">
          <div class="smw_sidebar_header">
            <h2><i class="fas fa-trophy" style="color:#FFDA34"></i> Ranking en Vivo</h2>
            <span class="smw_month_badge" id="lblMesActual">...</span>
          </div>
          
          <div class="smw_mini_ranking_list" id="miniRankingList">
            ${z(3)}
          </div>
        </div>

        <div style="border-top: 1px dashed var(--brd); margin: 1.5vh 0; flex-shrink: 0;"></div>

        <!-- Panel Inferior: Mis Ventas de Hoy & Objetivos en Tiempo Real -->
        <div class="smw_sidebar_section" style="flex: 1 1 58%; display: flex; flex-direction: column; overflow: hidden;">
          <div class="smw_sidebar_header">
            <h2><i class="fas fa-bullseye" style="color:var(--mco)"></i> Mis Ventas de Hoy</h2>
            <span class="smw_user_points_badge" id="lblMisPuntosMes">0 pts</span>
          </div>

          <div class="smw_my_today_sales_list" id="myTodaySalesList">
            <div class="smw_mini_empty">
              <i class="fas fa-circle-notch fa-spin"></i>
              <span>Cargando mis ventas...</span>
            </div>
          </div>
        </div>

        <div class="smw_sidebar_links">
          <a href="/historial" class="smw_sidebar_btn nv_item" data-page="historial">
            <i class="fas fa-clipboard-list"></i> Ver Historial de Ventas
          </a>
        </div>
      </div>

    </div>
  </div>
`,C=async()=>{let e=i.user;if(!e)return setTimeout(()=>s.navigate(`/login`),100);let t=o(`#smwRegCard`);t.addClass(`smw_loading`),o(`#tourDisplay`).addClass(`smw_loading_select`);let n=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`],[a,c]=h().split(`-`);o(`#lblMesActual`).text(`${n[parseInt(c)-1]} ${a}`);let l=r(`toursSmile`);l?.length>0&&(v=l.map(e=>({nt:e.num||Math.random(),tour:e.tour,price:parseFloat(e.precio)||0,pts:parseInt(e.puntos)||0,com:parseFloat(e.comision)||5})),T(v)),m().then(t=>{v=t,T(v),L(e,!0),V(!0),F()}).catch(e=>console.error(`Error al cargar tours:`,e)).finally(()=>{t.removeClass(`smw_loading`),o(`#tourDisplay`).removeClass(`smw_loading_select`)}),E().catch(e=>console.error(e)),O(e.usuario).catch(e=>console.error(e)),A(),L(e),V(),F();for(let e of[100,300,600,1e3,1800,3e3])setTimeout(F,e)},w=()=>{o(document).off(`.registrar`),y=null,v=[],b=null,x=!1};function T(e){if(!e.length){o(`#tourTableBody`).html(`<tr><td colspan="4" style="text-align:center;color:var(--tx3);padding:2vh;">Sin resultados para la búsqueda</td></tr>`);return}let t=e.map((e,t)=>`
    <tr class="tour-row" data-index="${v.indexOf(e)}">
      <td class="smw_tour_num">${t+1}</td>
      <td>${e.tour}</td>
      <td class="smw_tour_price">S/ ${e.price.toFixed(2)}</td>
      <td class="smw_tour_pts">${e.pts} pts</td>
    </tr>
  `).join(``);o(`#tourTableBody`).html(t)}async function E(){try{let e=h();r(`empleadosPuntos_${e}`)||o(`#miniRankingList`).html(z(3));let t=await _(e);if(!t||!t.length){o(`#miniRankingList`).html(`
        <div class="smw_mini_empty">
          <i class="fas fa-star" style="color:var(--brd)"></i>
          <span>No hay ventas este mes.<br>¡Sé el primero en registrar!</span>
        </div>
      `);return}let n=t.slice(0,4).map((e,t)=>{let n=t+1,r=n<=3?`pos_${n}`:``,i=n===1?`<i class="fas fa-crown"></i>`:n,a=`${(e.nombre||`?`)[0]}${(e.nombre?.split(` `)[1]||``)[0]||``}`.toUpperCase();return`
        <div class="smw_mini_rank_item ${r}" style="animation-delay: ${t*.08}s">
          <div class="smw_mini_rank_badge">${i}</div>
          <div class="smw_mini_rank_avatar">
            ${e.imagen?`<img src="${e.imagen}" alt="${e.nombre}">`:`<span>${a}</span>`}
          </div>
          <div class="smw_mini_rank_info">
            <span class="smw_mini_rank_name">${e.nombre}</span>
            <span class="smw_mini_rank_sales">${e.totalVentas} tour${e.totalVentas===1?``:`s`}</span>
          </div>
          <div class="smw_mini_rank_pts">${e.totalPuntos} <span>pts</span></div>
        </div>
      `}).join(``);o(`#miniRankingList`).html(n)}catch(e){console.error(`Error al pintar mini ranking:`,e),o(`#miniRankingList`).html(`
      <div class="smw_mini_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar el ranking</span>
      </div>
    `)}}async function D(t,n){try{let i=r(`svVentas`);if(i&&i.vendedor===t&&i.mes===n)return console.log(`⚡ [Smart Cache] Mis ventas recuperadas usando la clave svVentas.`),i.ventas;let a=`ventasSmile_${t}_${n}`,o=r(a);if(o)return o;let[s,c]=n.split(`-`).map(Number),l=await f(d(p,`registrosdb`)),u=[];return l.docs.forEach(e=>{let n=e.data();if(n.vendedor!==t)return;let r=n.fechaTour,i,a;if(typeof r==`string`)[i,a]=r.split(`-`).map(Number);else if(r?.toDate){let e=r.toDate();i=e.getFullYear(),a=e.getMonth()+1}else return;i===s&&a===c&&u.push({idVenta:n.idVenta||e.id,...n})}),u.sort((e,t)=>{let n=e.fechaRegistro?.seconds?e.fechaRegistro.seconds*1e3:e.fechaRegistro?.toDate?e.fechaRegistro.toDate().getTime():Date.now();return(t.fechaRegistro?.seconds?t.fechaRegistro.seconds*1e3:t.fechaRegistro?.toDate?t.fechaRegistro.toDate().getTime():Date.now())-n}),e(a,u,10),e(`svVentas`,{vendedor:t,mes:n,ventas:u},10),u}catch(e){return console.error(`Error al obtener mis ventas del mes:`,e),[]}}async function O(e){try{let t=await D(e,h()),n=t.reduce((e,t)=>e+(parseInt(t.puntos)||0),0);o(`#lblMisPuntosMes`).text(`${n} pts`);let r=new Date,i=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,`0`)}-${String(r.getDate()).padStart(2,`0`)}`,a=t.filter(e=>{let t=e.fechaTour;return t&&t.toDate&&(t=t.toDate().toISOString().split(`T`)[0]),t===i});if(!a.length){o(`#myTodaySalesList`).html(`
        <div class="smw_mini_empty">
          <i class="fas fa-calendar-day" style="color:var(--brd)"></i>
          <span>No has registrado ventas hoy.<br>Tus ventas del día aparecerán aquí.</span>
        </div>
      `);return}let s=a.map((e,t)=>{let n=parseInt(e.cantidadPax)||1,r=parseInt(e.puntos)||0;return`
        <div class="smw_today_sale_card" style="animation-delay: ${t*.06}s">
          <div class="smw_today_sale_icon">
            <i class="fas fa-route"></i>
          </div>
          <div class="smw_today_sale_info">
            <span class="smw_today_sale_client">${e.nombreCliente}</span>
            <span class="smw_today_sale_tour">${e.tipoTour}</span>
            <div class="smw_today_sale_meta">
              <span class="smw_today_sale_pax"><i class="fas fa-users"></i> ${n} pax</span>
              <span class="smw_today_sale_pts"><i class="fas fa-star"></i> ${r} pts</span>
            </div>
          </div>
          <div class="smw_today_sale_edit_btn btn-edit-today-sale" data-id="${e.idVenta}" title="Editar en tiempo real">
            <i class="fas fa-edit"></i>
          </div>
        </div>
      `}).join(``);o(`#myTodaySalesList`).html(s)}catch(e){console.error(`Error al pintar mis datos en el sidebar:`,e),o(`#myTodaySalesList`).html(`
      <div class="smw_mini_empty">
        <i class="fas fa-exclamation-triangle" style="color:var(--error)"></i>
        <span>Error al cargar tus datos</span>
      </div>
    `)}}function k(){Object.entries({vtMiVenta:`#lblMiVenta`,vtJulio:`#lblJulio`,vtSonia:`#lblSonia`,vtExterna:`#lblExterna`}).forEach(([e,t])=>{let n=o(`#${e}`).prop(`checked`),r=o(t);r.toggleClass(`active`,n);let i=r.find(`.smw_check_icon`);n?i.removeClass(`fa-circle far`).addClass(`fa-check-circle fas`):i.removeClass(`fa-check-circle fas`).addClass(`fa-circle far`)})}function A(){o(document).on(`input.registrar change.registrar focus.registrar blur.registrar keyup.registrar click.registrar`,`#formularioVenta input, #formularioVenta select`,function(){F(),B()}).on(`mouseenter.registrar focusin.registrar click.registrar change.registrar`,`#formularioVenta`,function(){F()}).on(`click.registrar`,`#tourDisplay`,function(e){e.stopPropagation();let t=o(`#tourDropdown`),n=t.hasClass(`active`);o(`.smw_tour_dropdown`).removeClass(`active`),o(`.smw_tour_display`).removeClass(`active`),n||(t.addClass(`active`),o(this).addClass(`active`),setTimeout(()=>o(`#smwTourSearch`).focus(),100))}).on(`click.registrar`,function(e){o(e.target).closest(`.smw_tour_selector`).length||o(`#tourDropdown, #tourDisplay`).removeClass(`active`)}).on(`input.registrar`,`#smwTourSearch`,function(){let e=o(this).val().toLowerCase();T(e?v.filter(t=>t.tour.toLowerCase().includes(e)||t.price.toString().includes(e)):v)}).on(`click.registrar`,`.tour-row`,function(e){e.stopPropagation();let t=o(this).data(`index`);y=v[t],y&&(o(`#tourSelectedLabel`).text(y.tour),o(`#tipoTour`).val(y.tour),o(`#tourDisplay`).removeClass(`faltaValor`).addClass(`okValor`),o(`#precioUnitario`).val(y.price).removeClass(`faltaValor`).addClass(`okValor`),o(`#tourDropdown, #tourDisplay`).removeClass(`active`),o(`.tour-row`).removeClass(`selected`),o(this).addClass(`selected`),P(`#precioUnitario`),j(),M(),N(),F(),B())}).on(`input.registrar`,`#cantidadPax, #precioUnitario`,()=>{j(),M(),N()}).on(`change.registrar`,`#estadoPago`,M).on(`input.registrar`,`#importeTotal, #PagoOperador`,M).on(`change.registrar`,`#vtMiVenta, #vtJulio, #vtSonia, #vtExterna`,function(){let e=o(this).attr(`id`),t=o(this).prop(`checked`),n=[`vtMiVenta`,`vtJulio`,`vtSonia`,`vtExterna`];t?n.forEach(t=>{t!==e&&o(`#${t}`).prop(`checked`,!1)}):n.some(e=>o(`#${e}`).prop(`checked`))||o(`#vtMiVenta`).prop(`checked`,!0),k(),N(),B()}).on(`click.registrar`,`.btn-edit-today-sale`,async function(e){e.preventDefault(),e.stopPropagation();let t=o(this).data(`id`),n=i.user;if(!n)return;let r=h(),s=(await D(n.usuario,r)).find(e=>e.idVenta===t);s?(window.editarVenta={venta:s,soloVista:!1},L(n),o(`html, body`).animate({scrollTop:o(`#formularioVenta`).offset().top-20},500),a(`Venta cargada para modificación en tiempo real`,`info`)):a(`No se encontró la venta seleccionada`,`error`)}).on(`submit.registrar`,`#formularioVenta`,async function(e){e.preventDefault();let r=o(`#btnSaveVenta`);if(r.prop(`disabled`))return;if(!y){a(`Selecciona un tour del catálogo`,`error`),o(`#tourDisplay`).addClass(`faltaValor`).focus();return}let d=[[`#nombreCliente`,`Cliente`],[`#horaSalida`,`Hora`],[`#fechaTour`,`Fecha`],[`#Operador`,`Operador`],[`#metodoPago`,`Pago`]].filter(([e])=>!o(e).val()?.trim());if(d.length){d.forEach(([e])=>o(e).addClass(`faltaValor`)),a(`Completa los campos obligatorios: ${d.map(([,e])=>e).join(`, `)}`,`error`);return}let f=i.user,m=f.usuario||f.nombre||`Desconocido`,_=f.email||``,v=parseInt(o(`#cantidadPax`).val())||1,b=o(`#vtJulio, #vtSonia, #vtExterna`).is(`:checked`),x=r.attr(`data-edit-id`)||`venta_${Date.now()}`,S={idVenta:x,tipoTour:y.tour,registroEn:o(`#registroEn`).val(),nombreCliente:o(`#nombreCliente`).val().trim(),numeroHabitacion:o(`#numeroHabitacion`).val().trim(),tipoDocumento:o(`#tipoDocumento`).val(),numeroDocumento:o(`#numeroDocumento`).val().trim(),cantidadPax:v,precioUnitario:parseFloat(o(`#precioUnitario`).val())||0,metodoPago:o(`#metodoPago`).val(),importeTotal:parseFloat(o(`#importeTotal`).val())||0,ganancia:parseFloat(o(`#ganancia`).val())||0,horaSalida:o(`#horaSalida`).val().trim(),Operador:o(`#Operador`).val().trim(),PagoOperador:parseFloat(o(`#PagoOperador`).val())||0,Comentario:o(`#Comentario`).val().trim(),fechaTour:o(`#fechaTour`).val(),estadoPago:o(`#estadoPago`).val(),vendedor:m,puntos:b?0:y.pts*v,email:_,qventa:1,fechaRegistro:u(),esVentaJulio:!!o(`#vtJulio`).prop(`checked`),esVentaSonia:!!o(`#vtSonia`).prop(`checked`),esVentaExterna:!!o(`#vtExterna`).prop(`checked`)};t(r,!0,r.attr(`data-edit-id`)?`Actualizando...`:`Guardando...`);try{await l(c(p,`registrosdb`,x),S),g(m,h()),n(`svVentas`),a(r.attr(`data-edit-id`)?`¡Venta actualizada con éxito! 🏆`:`¡Venta registrada con éxito! 🚀`,`success`),I(),await E(),await O(m),setTimeout(()=>{s.navigate(`/historial`)},1200)}catch(e){console.error(`Error al guardar venta:`,e),a(`Error al intentar guardar la venta.`,`error`)}finally{t(r,!1)}})}function j(){let e=parseInt(o(`#cantidadPax`).val())||1,t=(parseFloat(o(`#precioUnitario`).val())||0)*e;o(`#importeTotal`).val(t.toFixed(2)),P(`#importeTotal`)}function M(){let e=o(`#estadoPago`).val(),t=parseFloat(o(`#importeTotal`).val())||0,n=parseFloat(o(`#PagoOperador`).val())||0,r=e===`pagado`||e===`pagado2`,i=o(`#PagoOperador`);if(r)i.prop(`disabled`,!0).val(`0`).attr(`placeholder`,`Servicio propio`),o(`#ganancia`).val(t.toFixed(2));else{i.prop(`disabled`,!1).attr(`placeholder`,`S/ 0.00`);let e=t-n;o(`#ganancia`).val(e.toFixed(2))}P(`#ganancia`)}function N(){let e=parseInt(o(`#cantidadPax`).val())||1,t=y?.pts||0,n=o(`#vtJulio, #vtSonia, #vtExterna`).is(`:checked`)?0:t*e;o(`#vistaPreviaLaPuntos`).text(n),P(`#vistaPreviaLaPuntos`)}function P(e){o(e).addClass(`field-updated`),setTimeout(()=>o(e).removeClass(`field-updated`),600)}function F(){o(`#formularioVenta input, #formularioVenta select`).each(function(){let e=o(this);if(e.attr(`type`)===`hidden`||e.attr(`type`)===`checkbox`||e.attr(`type`)===`submit`)return;let t=e.val()?.toString().trim();e.prop(`required`)?e.toggleClass(`okValor`,!!t).toggleClass(`faltaValor`,!t):e.toggleClass(`okValor`,!!t)}),o(`#tipoTour`).val()?o(`#tourDisplay`).removeClass(`faltaValor`).addClass(`okValor`):o(`#tourDisplay`).removeClass(`okValor faltaValor`)}function I(){x=!0,y=null,b=null;let e=o(`#formularioVenta`);if(!e.length){x=!1;return}e[0].reset(),n(`registroVentaDraft`),o(`#formularioVenta input, #formularioVenta select, #tourDisplay`).prop(`disabled`,!1).removeClass(`okValor faltaValor`),o(`#smwRegCard`).removeClass(`view-only edit-mode`),o(`#vtMiVenta`).prop(`checked`,!0),o(`#vtJulio, #vtSonia, #vtExterna`).prop(`checked`,!1),k(),o(`#btnSaveVenta`).prop(`disabled`,!1).html(`<i class="fas fa-save"></i> Guardar Venta`).removeAttr(`data-edit-id`),o(`.btn-custom-action`).remove(),o(`#cantidadPax`).val(1),o(`#fechaTour`).val(new Date().toISOString().split(`T`)[0]),o(`#vistaPreviaLaPuntos`).text(`0`),o(`#tourSelectedLabel`).text(`Seleccionar tour...`),o(`.tour-row`).removeClass(`selected`),o(`#importeTotal, #ganancia`).prop(`disabled`,!0),o(`#smwRegCardTitle`).html(`<i class="fas fa-cart-plus"></i> Registrar Nueva Venta`),F(),x=!1}function L(e,t=!1){let i=b;if(i||(i=window.editarVenta||r(`editarVentaTemp`),i&&(b=i,window.editarVenta=null,n(`editarVentaTemp`))),!i)return;let{venta:s,soloVista:c}=i;if(s)if(t||(I(),b=i),y=v.find(e=>e.tour===s.tipoTour),y?(o(`#tourSelectedLabel`).text(y.tour),o(`#tipoTour`).val(y.tour),o(`#tourDisplay`).removeClass(`faltaValor`).addClass(`okValor`),o(`.tour-row`).removeClass(`selected`),o(`.tour-row[data-index="${v.indexOf(y)}"]`).addClass(`selected`)):(o(`#tourSelectedLabel`).text(s.tipoTour||`Tour personalizado`),o(`#tipoTour`).val(s.tipoTour||``),o(`#tourDisplay`).removeClass(`okValor faltaValor`)),t)j(),M(),N(),F();else{if(Object.entries(s).forEach(([e,t])=>{let n=o(`#${e}`);n.length&&e!==`fechaTour`&&e!==`esVentaJulio`&&e!==`esVentaSonia`&&e!==`esVentaExterna`&&n.val(t||``)}),s.fechaTour){let e=``;s.fechaTour?.toDate?e=s.fechaTour.toDate().toISOString().split(`T`)[0]:typeof s.fechaTour==`string`&&(e=s.fechaTour.split(`T`)[0]),o(`#fechaTour`).val(e)}let e=s.esVentaJulio||s.esVentaSonia||s.esVentaExterna;o(`#vtMiVenta`).prop(`checked`,!e),o(`#vtJulio`).prop(`checked`,s.esVentaJulio||!1),o(`#vtSonia`).prop(`checked`,s.esVentaSonia||!1),o(`#vtExterna`).prop(`checked`,s.esVentaExterna||!1),k(),j(),M(),N(),c?(o(`#formularioVenta input, #formularioVenta select`).prop(`disabled`,!0),o(`#tourDisplay`).css(`pointer-events`,`none`),o(`#smwRegCard`).addClass(`view-only`),o(`#smwRegCardTitle`).html(`<i class="fas fa-eye"></i> Detalle de Venta (Solo Vista)`),o(`#btnSaveVenta`).prop(`disabled`,!0).html(`<i class="fas fa-lock"></i> Venta Protegida`),o(`.btn-clear-view`).length||o(`#smwActionsRight`).append(`
          <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-clear-view">
            <i class="fas fa-arrow-left"></i> Volver al Registro
          </button>
        `),o(document).on(`click.registrar`,`.btn-clear-view`,function(){I(),a(`Formulario restaurado a modo registro.`,`info`)})):(o(`#formularioVenta input, #formularioVenta select`).prop(`disabled`,!1),o(`#importeTotal, #ganancia`).prop(`disabled`,!0),o(`#tourDisplay`).css(`pointer-events`,`auto`),o(`#smwRegCard`).addClass(`edit-mode`),o(`#smwRegCardTitle`).html(`<i class="fas fa-edit"></i> Modificar Registro de Venta`),o(`#btnSaveVenta`).prop(`disabled`,!1).html(`<i class="fas fa-save"></i> Guardar Cambios`).attr(`data-edit-id`,s.idVenta||s.id),o(`.btn-cancel-edit`).length||o(`#smwActionsRight`).append(`
          <button type="button" class="smw_btn smw_btn_cancel btn-custom-action btn-cancel-edit">
            <i class="fas fa-times"></i> Cancelar Edición
          </button>
        `),o(document).on(`click.registrar`,`.btn-cancel-edit`,function(){I(),a(`Edición cancelada.`,`info`)})),F()}}function R(e=4){return Array(e).fill(0).map(()=>`
    <tr style="pointer-events: none;">
      <td class="smw_tour_num"><div class="smw_sk_el" style="width: 16px; height: 16px; border-radius: 4px;"></div></td>
      <td><div class="smw_sk_el" style="width: 140px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_price"><div class="smw_sk_el" style="width: 50px; height: 14px; border-radius: 4px;"></div></td>
      <td class="smw_tour_pts"><div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div></td>
    </tr>
  `).join(``)}function z(e=3){return Array(e).fill(0).map((e,t)=>`
    <div class="smw_mini_rank_item smw_sk_mini_row" style="pointer-events: none; animation-delay: ${t*.05}s">
      <div class="smw_sk_el" style="width: 2.2vh; height: 2.2vh; border-radius: 50%; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_avatar smw_sk_el smw_sk_circle" style="border-radius: 50%; width: 4.5vh; height: 4.5vh; background: none; margin-right: 1.5vh;"></div>
      <div class="smw_mini_rank_info" style="flex: 1;">
        <div class="smw_sk_el" style="width: 80px; height: 12px; margin-bottom: 0.6vh; border-radius: 4px;"></div>
        <div class="smw_sk_el" style="width: 50px; height: 9px; border-radius: 4px;"></div>
      </div>
      <div class="smw_sk_el" style="width: 40px; height: 14px; border-radius: 4px;"></div>
    </div>
  `).join(``)}function B(){if(x||o(`#smwRegCard`).hasClass(`edit-mode`)||o(`#smwRegCard`).hasClass(`view-only`))return;let t=o(`#nombreCliente`).val()?.trim()||``,r=o(`#tipoTour`).val()||``;if(!t&&!r){n(`registroVentaDraft`);return}e(`registroVentaDraft`,{tipoTour:r,registroEn:o(`#registroEn`).val()||`hawka`,nombreCliente:t,numeroHabitacion:o(`#numeroHabitacion`).val()?.trim()||``,horaSalida:o(`#horaSalida`).val()?.trim()||``,tipoDocumento:o(`#tipoDocumento`).val()||`dni`,numeroDocumento:o(`#numeroDocumento`).val()?.trim()||``,metodoPago:o(`#metodoPago`).val()||``,cantidadPax:o(`#cantidadPax`).val()||`1`,precioUnitario:o(`#precioUnitario`).val()||``,Operador:o(`#Operador`).val()?.trim()||``,PagoOperador:o(`#PagoOperador`).val()||``,estadoPago:o(`#estadoPago`).val()||`pagado`,Comentario:o(`#Comentario`).val()?.trim()||``,fechaTour:o(`#fechaTour`).val()||``,esVentaJulio:o(`#vtJulio`).prop(`checked`)||!1,esVentaSonia:o(`#vtSonia`).prop(`checked`)||!1,esVentaExterna:o(`#vtExterna`).prop(`checked`)||!1},24)}function V(e=!1){if(o(`#smwRegCard`).hasClass(`edit-mode`)||o(`#smwRegCard`).hasClass(`view-only`))return;let t=r(`registroVentaDraft`);if(t){if(!e){Object.entries(t).forEach(([e,t])=>{let n=o(`#${e}`);n.length&&e!==`fechaTour`&&e!==`esVentaJulio`&&e!==`esVentaSonia`&&e!==`esVentaExterna`&&n.val(t||``)}),t.fechaTour&&o(`#fechaTour`).val(t.fechaTour);let e=t.esVentaJulio||t.esVentaSonia||t.esVentaExterna;o(`#vtMiVenta`).prop(`checked`,!e),o(`#vtJulio`).prop(`checked`,t.esVentaJulio||!1),o(`#vtSonia`).prop(`checked`,t.esVentaSonia||!1),o(`#vtExterna`).prop(`checked`,t.esVentaExterna||!1),k()}t.tipoTour&&(y=v.find(e=>e.tour===t.tipoTour),y&&(o(`#tourSelectedLabel`).text(y.tour),o(`#tipoTour`).val(y.tour),o(`#tourDisplay`).removeClass(`faltaValor`).addClass(`okValor`),o(`.tour-row`).removeClass(`selected`),o(`.tour-row[data-index="${v.indexOf(y)}"]`).addClass(`selected`))),j(),M(),N(),F()}}export{w as cleanup,C as init,S as render};