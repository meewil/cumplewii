import{A as e,B as t,E as n,b as r,i}from"./widev-Czq8ue36.js";import{n as a}from"./vendor-Dkcx8wGc.js";import{n as o}from"./index-U_klNYw1.js";import{A as s,T as c,d as l}from"./firebase-BY5GISzq.js";import{n as u,t as d}from"./firebase-BOoMX3kr.js";var f=()=>r(`wiSmile`)||{},p=()=>{let t=f();if(!t.email)return location.replace(`/`),``;let n=t.nombre||``,r=t.apellidos||``,i=t.usuario||``,a=t.email||``,o=t.rol||`smile`,s=t.plan||`free`,c=t.estado||`activo`;(t.tema||`Por defecto`).split(`|`)[0],t.uid;let l=t.avatar||``,u=t.fechaNacimiento||``,d=t.pais||``,p=t.genero||``,m=t.gustos||``,h=t.bio||``,g=t.creacion||t.creado,_=g?e(null).get(g,`local`):`Desconocido`,v=`https://ui-avatars.com/api/?name=`+encodeURIComponent(n+` `+r)+`&background=random&color=fff`;return`
  <div class="prf_wrap">

    <div class="prf_hero">
      <div class="prf_av_wrap">
        <img src="${l||v}" alt="${n}" class="prf_av" onerror="this.src='./smile.avif'">
        <div class="prf_av_ring"></div>
      </div>
      <div class="prf_hero_info">
        <h1 class="prf_fullname">${n} ${r}</h1>
        <p class="prf_username"><i class="fas fa-at"></i> ${i}</p>
        <span class="prf_rol_chip"><i class="fas fa-crown"></i> Plan ${s.toUpperCase()}</span>
      </div>
    </div>

    <div class="prf_grid">

      <div class="prf_card">
        <h2 class="prf_card_tit"><i class="fas fa-user-edit"></i> Editar perfil</h2>
        
        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>Nombres</label>
            <input id="prf_nombre" value="${n}" placeholder="Tus nombres">
          </div>
          <div class="prf_form_grp">
            <label>Apellidos</label>
            <input id="prf_apellidos" value="${r}" placeholder="Tus apellidos">
          </div>
        </div>
        
        <label>Enlace del Avatar (URL)</label>
        <input id="prf_avatar" value="${l}" placeholder="https://tu-foto.com/imagen.jpg">
        
        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>Fecha de Nacimiento</label>
            <input type="date" id="prf_nacimiento" value="${u}">
          </div>
          <div class="prf_form_grp">
            <label>Género</label>
            <select id="prf_genero">
              <option value="" disabled ${p?``:`selected`}>Selecciona tu género</option>
              <option value="Masculino" ${p===`Masculino`?`selected`:``}>Masculino</option>
              <option value="Femenino" ${p===`Femenino`?`selected`:``}>Femenino</option>
              <option value="Otro" ${p===`Otro`?`selected`:``}>Otro</option>
              <option value="Prefiero no decirlo" ${p===`Prefiero no decirlo`?`selected`:``}>Prefiero no decirlo</option>
            </select>
          </div>
        </div>

        <div class="prf_form_2col">
          <div class="prf_form_grp">
            <label>País</label>
            <input id="prf_pais" value="${d}" placeholder="Ej. Perú, México, España...">
          </div>
          <div class="prf_form_grp">
            <label>Gustos o intereses</label>
            <input id="prf_gustos" value="${m}" placeholder="Ej. Fútbol, leer, viajar...">
          </div>
        </div>
        
        <label>Biografía</label>
        <textarea id="prf_bio" rows="3" placeholder="Cuéntanos un poco sobre ti...">${h}</textarea>

        <button id="prf_guardar" class="prf_btn"><i class="fas fa-save"></i> Guardar cambios</button>
      </div>

      <div class="prf_col_right">
        <div class="prf_card">
          <h2 class="prf_card_tit"><i class="fas fa-lock"></i> Actualizar contraseña</h2>
          <label>Nueva contraseña</label>
          <input type="password" id="prf_pass" placeholder="Ingresa tu nueva contraseña">
          <label>Confirmar contraseña</label>
          <input type="password" id="prf_pass_conf" placeholder="Confirma tu nueva contraseña">
          <button id="prf_guardar_pass" class="prf_btn"><i class="fas fa-key"></i> Actualizar contraseña</button>
        </div>

        <div class="prf_card">
          <h2 class="prf_card_tit"><i class="fas fa-info-circle"></i> Datos de cuenta</h2>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-envelope"></i> Email</span>
            <span class="prf_val em">${a}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-crown"></i> Plan</span>
            <span class="prf_val" style="color:var(--mco); text-transform:uppercase;">${s}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-signal"></i> Estado</span>
            <span class="prf_val" style="color:var(--success)">${c}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-calendar-alt"></i> Registro</span>
            <span class="prf_val">${_}</span>
          </div>
          <div class="prf_row">
            <span class="prf_lbl"><i class="fas fa-user-tag"></i> Rol</span>
            <span class="prf_val" style="text-transform:capitalize;">${o}</span>
          </div>
        </div>
      </div>

    </div>
  </div>`},m=()=>{if(!f().email)return o.navigate(`/`);a(document).on(`click.prf`,`#prf_guardar`,async function(){let e=f(),r={nombre:a(`#prf_nombre`).val().trim(),apellidos:a(`#prf_apellidos`).val().trim(),avatar:a(`#prf_avatar`).val().trim(),fechaNacimiento:a(`#prf_nacimiento`).val(),pais:a(`#prf_pais`).val().trim(),genero:a(`#prf_genero`).val()||``,gustos:a(`#prf_gustos`).val().trim(),bio:a(`#prf_bio`).val().trim()};if(!r.nombre)return t(document.getElementById(`prf_nombre`),`Ingresa tu nombre`,`error`);a(this).prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Guardando...`);try{await c(s(u,`smiles`,e.usuario),r),n(`wiSmile`,{...e,...r},24),a(`.prf_fullname`).text(`${r.nombre} ${r.apellidos}`),r.avatar?a(`.prf_av`).attr(`src`,r.avatar):a(`.prf_av`).attr(`src`,`https://ui-avatars.com/api/?name=`+encodeURIComponent(r.nombre+` `+r.apellidos)+`&background=random&color=fff`),i(`Perfil actualizado ✅`,`success`)}catch(e){console.error(e),i(`Error al guardar`,`error`)}finally{a(this).prop(`disabled`,!1).html(`<i class="fas fa-save"></i> Guardar cambios`)}}).on(`click.prf`,`#prf_guardar_pass`,async function(){let e=a(`#prf_pass`).val(),n=a(`#prf_pass_conf`).val(),r=a(this);if(!e||e.length<6)return t(document.getElementById(`prf_pass`),`Mínimo 6 caracteres`,`error`);if(e!==n)return t(document.getElementById(`prf_pass_conf`),`Las contraseñas no coinciden`,`error`);if(!d.currentUser)return i(`Sesión expirada. Por favor recarga`,`error`);r.prop(`disabled`,!0).html(`<i class="fas fa-spinner fa-spin"></i> Actualizando...`);try{await l(d.currentUser,e),a(`#prf_pass`).val(``),a(`#prf_pass_conf`).val(``),i(`Contraseña actualizada correctamente ✅`,`success`)}catch(e){console.error(e),e.code===`auth/requires-recent-login`?i(`Por seguridad, cierra sesión y vuelve a ingresar para cambiar la contraseña.`,`error`):i(`Error al actualizar contraseña`,`error`)}finally{r.prop(`disabled`,!1).html(`<i class="fas fa-key"></i> Actualizar contraseña`)}})},h=()=>a(document).off(`.prf`);export{h as cleanup,m as init,p as render};