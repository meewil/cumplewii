import{E as e,T as t,b as n,o as r,t as i}from"./widev-Czq8ue36.js";import{n as a}from"./vendor-Dkcx8wGc.js";import"./index-U_klNYw1.js";import{A as o,N as s,T as c,h as l,k as u,m as d,v as f}from"./firebase-BY5GISzq.js";import{n as p}from"./firebase-BOoMX3kr.js";var m=[],h={},g={},_=0,v=`.prec`,y=`toursSmile`,b=()=>`
  <div class="prec_wrap">

    <!-- ══ HEADER ══ -->
    <div class="prec_header" id="prec_header">
      <div class="prec_header_inner">
        <div class="prec_header_text">
          <h1 class="prec_title">
            <i class="fas fa-tags"></i>
            Gestión de Precios
          </h1>
          <p class="prec_subtitle">Edita tours, precios, puntos y comisiones del reto</p>
        </div>
        <div class="prec_header_actions">
          <button class="prec_btn_new" id="prec_btn_new">
            <i class="fas fa-plus"></i> Nuevo Tour
          </button>
          <button class="prec_refresh_btn" id="prec_refresh" title="Actualizar lista">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="prec_stats_bar" id="prec_stats">
        <div class="prec_stat_chip prec_stat_total">
          <span class="prec_stat_num" id="prec_stat_total">—</span>
          <span class="prec_stat_label">Total</span>
        </div>
        <div class="prec_stat_chip prec_stat_activos">
          <span class="prec_stat_num" id="prec_stat_activos">—</span>
          <span class="prec_stat_label">Activos</span>
        </div>
        <div class="prec_stat_chip prec_stat_inactivos">
          <span class="prec_stat_num" id="prec_stat_inactivos">—</span>
          <span class="prec_stat_label">Inactivos</span>
        </div>
      </div>
    </div>

    <!-- ══ TABLE CARD ══ -->
    <div class="prec_table_card">
      <div class="prec_table_title_bar">
        <i class="fas fa-table-list"></i>
        <span>Lista de Tours</span>
      </div>
      <div class="prec_table_scroll">
        <table class="prec_table" id="prec_table">
          <thead>
            <tr>
              <th class="prec_th">#</th>
              <th class="prec_th">Tour</th>
              <th class="prec_th">Precio (S/)</th>
              <th class="prec_th">Puntos</th>
              <th class="prec_th">Comisión (%)</th>
              <th class="prec_th">Estado</th>
              <th class="prec_th prec_th_actions">Acciones</th>
            </tr>
          </thead>
          <tbody id="prec_tbody">
            ${x(6)}
          </tbody>
        </table>
      </div>
    </div>

  </div>
`;function x(e){return Array.from({length:e},()=>`
    <tr class="prec_row_skeleton">
      <td><div class="smw_sk_el" style="width:32px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:120px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:64px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:56px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:56px;height:22px;border-radius:6px"></div></td>
      <td><div class="smw_sk_el" style="width:44px;height:22px;border-radius:999px"></div></td>
      <td><div class="smw_sk_el" style="width:80px;height:30px;border-radius:8px"></div></td>
    </tr>
  `).join(``)}function S(e,t=!1){let n=e.id,r=e.activo!==!1;return`
    <tr class="${t?`prec_row prec_row_new prec_row_dirty`:`prec_row`}" data-id="${n}" data-new="${t?`1`:`0`}">
      <td class="prec_td prec_td_num">
        <input
          class="prec_td_input prec_in_num"
          type="number"
          min="0"
          value="${e.num??``}"
          data-id="${n}"
          data-field="num"
          title="Orden de visualización"
        />
      </td>
      <td class="prec_td prec_td_tour">
        <input
          class="prec_td_input prec_in_tour"
          type="text"
          value="${C(e.tour??``)}"
          data-id="${n}"
          data-field="tour"
          placeholder="Nombre del tour"
        />
      </td>
      <td class="prec_td">
        <div class="prec_price_wrap">
          <span class="prec_currency">S/</span>
          <input
            class="prec_td_input prec_in_price"
            type="number"
            min="0"
            step="0.01"
            value="${e.precio??``}"
            data-id="${n}"
            data-field="precio"
            placeholder="0.00"
          />
        </div>
      </td>
      <td class="prec_td">
        <input
          class="prec_td_input prec_in_pts"
          type="number"
          min="0"
          value="${e.puntos??``}"
          data-id="${n}"
          data-field="puntos"
          placeholder="0"
        />
      </td>
      <td class="prec_td">
        <div class="prec_pct_wrap">
          <input
            class="prec_td_input prec_in_com"
            type="number"
            min="0"
            max="100"
            step="0.1"
            value="${e.comision??``}"
            data-id="${n}"
            data-field="comision"
            placeholder="0"
          />
          <span class="prec_pct_sign">%</span>
        </div>
      </td>
      <td class="prec_td prec_td_toggle">
        <label class="prec_toggle" title="${r?`Activo`:`Inactivo`}">
          <input
            type="checkbox"
            class="prec_toggle_activo"
            data-id="${n}"
            data-field="activo"
            ${r?`checked`:``}
          />
          <span class="prec_toggle_slider"></span>
        </label>
      </td>
      <td class="prec_td prec_td_actions">
        <div class="prec_actions_wrap">
          ${t?`
            <button class="prec_btn_save prec_btn_save_active" data-id="${n}" title="Guardar nuevo tour">
              <i class="fas fa-plus-circle"></i> Crear
            </button>
            <button class="prec_btn_cancel_new" data-id="${n}" title="Cancelar">
              <i class="fas fa-times"></i>
            </button>
          `:`
            <button class="prec_btn_save" data-id="${n}" title="Guardar cambios" disabled>
              <i class="fas fa-save"></i> Guardar
            </button>
            <button class="prec_btn_delete" data-id="${n}" title="Eliminar tour">
              <i class="fas fa-trash"></i>
            </button>
          `}
        </div>
      </td>
    </tr>
  `}function C(e){return String(e).replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function w(){let e=m.length,t=m.filter(e=>e.activo!==!1).length,n=e-t;a(`#prec_stat_total`).text(e),a(`#prec_stat_activos`).text(t),a(`#prec_stat_inactivos`).text(n)}function T(){if(w(),!m.length){a(`#prec_tbody`).html(`
      <tr>
        <td colspan="7">
          <div class="prec_empty">
            <i class="fas fa-map-marked-alt"></i>
            <p>No hay tours registrados.<br>Haz clic en <strong>+ Nuevo Tour</strong> para agregar uno.</p>
          </div>
        </td>
      </tr>
    `);return}let e=[...m].sort((e,t)=>(e.num??999)-(t.num??999));a(`#prec_tbody`).html(e.map(e=>S(e,!1)).join(``))}function E(e,t,n){h[e]||(h[e]={}),h[e][t]=n;let r=a(`tr[data-id="${e}"]`);r.addClass(`prec_row_dirty`),r.find(`.prec_btn_save[data-id="${e}"]`).prop(`disabled`,!1).addClass(`prec_btn_save_active`)}function D(e){delete h[e];let t=a(`tr[data-id="${e}"]`);t.removeClass(`prec_row_dirty`),t.find(`.prec_btn_save[data-id="${e}"]`).prop(`disabled`,!0).removeClass(`prec_btn_save_active`)}function O(e,t){let n=a(`tr[data-id="${e}"]`),r=t===`ok`?`prec_row_flash_ok`:`prec_row_flash_err`;n.addClass(r),setTimeout(()=>n.removeClass(r),900)}async function k(e){if(g[e])return;let n=h[e];if(!(!n||!Object.keys(n).length)){g[e]=!0,a(`tr[data-id="${e}"] .prec_btn_save`).prop(`disabled`,!0).html(`<i class="fas fa-circle-notch fa-spin"></i>`);try{await c(o(p,`listatours`,e),{...n,updatedAt:s()});let i=m.findIndex(t=>t.id===e);i!==-1&&Object.assign(m[i],n),t(y),D(e),O(e,`ok`),r(`Tour guardado ✅`,`success`)}catch(t){console.error(`[PRECIOS] saveRow error:`,t),O(e,`err`),r(`Error al guardar el tour`,`error`)}finally{g[e]=!1;let t=a(`tr[data-id="${e}"] .prec_btn_save`);h[e]?t.prop(`disabled`,!1).addClass(`prec_btn_save_active`).html(`<i class="fas fa-save"></i> Guardar`):t.prop(`disabled`,!0).removeClass(`prec_btn_save_active`).html(`<i class="fas fa-save"></i> Guardar`)}}}async function A(e){if(g[e])return;let n=h[e]||{},o=n.tour?.trim()||``;if(!o){r(`El nombre del tour es obligatorio`,`warning`),a(`tr[data-id="${e}"] .prec_in_tour`).trigger(`focus`);return}g[e]=!0;let c=a(`tr[data-id="${e}"] .prec_btn_save`);c.prop(`disabled`,!0).html(`<i class="fas fa-circle-notch fa-spin"></i> Creando…`);try{let a={tour:o,num:Number(n.num)||0,precio:Number(n.precio)||0,puntos:Number(n.puntos)||0,comision:Number(n.comision)||0,activo:n.activo!==!1,createdAt:s(),updatedAt:s()},c=await d(u(p,`listatours`),a),l={id:c.id,...a};m.push(l),t(y),delete h[e],delete g[e],T(),setTimeout(()=>O(c.id,`ok`),50),r(`Tour "${i(o)}" creado ✅`,`success`),w()}catch(t){console.error(`[PRECIOS] createTour error:`,t),g[e]=!1,c.prop(`disabled`,!1).html(`<i class="fas fa-plus-circle"></i> Crear`),r(`Error al crear el tour`,`error`)}}async function j(e){let n=m.find(t=>t.id===e),s=n?i(n.tour||`este tour`):`este tour`;if(!window.confirm(`¿Eliminar "${s}" permanentemente?\n\nEsta acción no se puede deshacer.`))return;let c=a(`tr[data-id="${e}"]`);c.css({opacity:.5,pointerEvents:`none`});try{await l(o(p,`listatours`,e)),m=m.filter(t=>t.id!==e),delete h[e],t(y),c.addClass(`prec_row_removing`),setTimeout(()=>{T()},350),r(`Tour "${s}" eliminado`,`warning`)}catch(e){console.error(`[PRECIOS] deleteTour error:`,e),c.css({opacity:``,pointerEvents:``}),r(`Error al eliminar el tour`,`error`)}}function M(){if(a(`.prec_row_new`).length){a(`tr.prec_row_new .prec_in_tour`).first().trigger(`focus`),r(`Ya hay un tour nuevo pendiente de guardar`,`info`);return}_++;let e=`__new_${_}`,t={id:e,num:m.length+1,tour:``,precio:0,puntos:0,comision:0,activo:!0};h[e]={num:t.num,precio:0,puntos:0,comision:0,activo:!0};let n=S(t,!0);a(`#prec_tbody`).prepend(n),a(`tr[data-id="${e}"] .prec_in_tour`).trigger(`focus`)}async function N(t=!1){if(!t){let e=n(y);if(e){m=e,T();return}}a(`#prec_tbody`).html(x(6)),a(`#prec_header`).addClass(`smw_loading`);try{m=(await f(u(p,`listatours`))).docs.map(e=>({id:e.id,...e.data()})),e(y,m,60),T()}catch(e){console.error(`[PRECIOS] loadTours error:`,e),a(`#prec_tbody`).html(`
      <tr>
        <td colspan="7">
          <div class="prec_empty prec_empty_error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Error al cargar los tours. Intenta de nuevo.</p>
          </div>
        </td>
      </tr>
    `),r(`Error al cargar los tours`,`error`)}finally{a(`#prec_header`).removeClass(`smw_loading`)}}var P=async()=>{a(`.prec_wrap`).addClass(`visible`),window.__WIREADY__=!0,m=[],h={},g={},_=0,N(!1),a(document).on(`input${v}`,`.prec_td_input`,function(){let e=a(this).data(`id`),t=a(this).data(`field`),n=a(this).val();[`num`,`precio`,`puntos`,`comision`].includes(t)&&(n=n===``?``:Number(n)),E(e,t,n)}),a(document).on(`change${v}`,`.prec_toggle_activo`,function(){let e=a(this).data(`id`),t=a(this).data(`field`),n=a(this).is(`:checked`),r=a(`tr[data-id="${e}"]`),i=r.data(`new`)===1||r.data(`new`)===`1`;E(e,t,n),i||k(e)}),a(document).on(`click${v}`,`.prec_btn_save`,function(){let e=a(this).data(`id`),t=a(`tr[data-id="${e}"]`);t.data(`new`)===1||t.data(`new`)===`1`?A(e):k(e)}),a(document).on(`click${v}`,`.prec_btn_cancel_new`,function(){let e=a(this).data(`id`);delete h[e],delete g[e],a(`tr[data-id="${e}"]`).remove()}),a(document).on(`click${v}`,`.prec_btn_delete`,function(){j(a(this).data(`id`))}),a(document).on(`click${v}`,`#prec_btn_new`,()=>{M()}),a(document).on(`click${v}`,`#prec_refresh`,async function(){let e=a(this);e.hasClass(`prec_spinning`)||(e.addClass(`prec_spinning`),h={},g={},await N(!0),e.removeClass(`prec_spinning`),r(`Lista actualizada`,`success`))}),a(document).on(`keydown${v}`,`.prec_td_input`,function(e){if(e.key!==`Enter`)return;let t=a(this).data(`id`),n=a(`tr[data-id="${t}"]`);n.data(`new`)===1||n.data(`new`)===`1`?A(t):h[t]&&k(t)}),a(document).on(`keydown${v}`,`.prec_row_new .prec_td_input`,function(e){if(e.key!==`Escape`)return;let t=a(this).data(`id`);delete h[t],delete g[t],a(`tr[data-id="${t}"]`).remove()})},F=()=>{a(document).off(v),m=[],h={},g={}};export{F as cleanup,P as init,b as render};