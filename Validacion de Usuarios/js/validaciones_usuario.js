function valida(f) {
  var ok = true;
  var msg = "Debes escribir algo en los campos:\n";
  if (f.elements["cedula"].value == "") {
    document.getElementById("cedula").style.border = '1px red solid';
    msg += "- Cedula\n";
    ok = false;
  }
  if (f.elements["nombres"].value == "") {
    document.getElementById("nombres").style.border = '1px red solid';
    msg += "- Nombres\n";
    ok = false;
  }
  if (f.elements["apellidos"].value == "") {
    document.getElementById("apellidos").style.border = '1px red solid';
    msg += "- Apellidos\n";
    ok = false;
  }
  if (f.elements["direccion"].value == "") {
    document.getElementById("direccion").style.border = '1px red solid';
    msg += "- Direccion\n";
    ok = false;
  }
  if (f.elements["telefono"].value == "") {
    document.getElementById("telefono").style.border = '1px red solid';
    msg += "- Telefono\n";
    ok = false;
  }
  if (f.elements["fechaNacimiento"].value == "") {
    document.getElementById("fechaNacimiento").style.border = '1px red solid';
    msg += "- Fecha de nacimiento\n";
    ok = false;
  }
  if (f.elements["correo"].value == "") {
    document.getElementById("correo").style.border = '1px red solid';
    msg += "- Correo Electronico\n";
    ok = false;
  }
  if (f.elements["contrasena"].value == "") {
    document.getElementById("contrasena").style.border = '1px red solid';
    msg += "- Contrasena\n";
    ok = false;
  }
  if (ok == false)
    alert(msg);
  return ok;
}
function validarCedula() {
  var cedula;
  cedula = document.getElementById("cedula").value.trim();
  var total = 0;
  var longitud = cedula.length;
  var longcheck = longitud - 1;
  var ok = true;
  var msg = "Debes escribir una cedula correcta:\n";
  var input = document.getElementById("cedula");
  input.addEventListener('input', function () {
    if (this.value.length > 10)
      this.value = this.value.slice(0, 10);
  })
  if (!/^([0-9])*$/.test(cedula)) {
    document.getElementById("salidaCedula").innerHTML = ("Ingrese solo numeros");
    document.getElementById("cedula").style.border = '3px red solid';
    document.getElementById("cedula").value = "";

  }
  if (cedula !== "" && longitud === 10) {
    for (i = 0; i < longcheck; i++) {
      if (i % 2 === 0) {
        var aux = cedula.charAt(i) * 2;
        if (aux > 9) aux -= 9;
        total += aux;
      } else {
        total += parseInt(cedula.charAt(i)); // parseInt o concatenará en lugar de sumar
      }
    }
    total = total % 10 ? 10 - total % 10 : 0;

    if (cedula.charAt(longitud - 1) == total) {
      document.getElementById("salidaCedula").innerHTML = ("Cedula Válida");
      document.getElementById("cedula").style.border = '3px green solid';

    } else {
      document.getElementById("cedula").style.border = '3px red solid';
      document.getElementById("salidaCedula").innerHTML = ("EL numero de cedula " + cedula + " es incorrecta");
    }
  }

}
function validarNombre() {
  var nombres;
  nombres = document.getElementById("nombres").value.trim();
  var input = document.getElementById("nombres");
  if (document.getElementById("nombres").value.length <= 2) {
    document.getElementById("nombres").style.border = '3px red solid';

    document.getElementById("salidaNombres").innerHTML = ("Ingrese un nombre valido");
  } else {
    document.getElementById("nombres").style.border = '3px green solid';
    document.getElementById("salidaNombres").innerHTML = ("Nombre valido");

  }
  input.addEventListener('input', function () {
    if (this.value.length > 40)
      this.value = this.value.slice(0, 40);
  })

  if (!/^[A-Za-z _][A-Za-z _]*$/.test(nombres)) {
    document.getElementById("nombres").style.border = '3px red solid';
    document.getElementById("salidaNombres").innerHTML = ("Ingrese solo letras");
    document.getElementById("nombres").value = "";
  }
}
function validarApellido() {
  var apellidos;
  apellidos = document.getElementById("apellidos").value.trim();
  var input = document.getElementById('apellidos');
  if (document.getElementById("apellidos").value.length <= 2) {
    document.getElementById("apellidos").style.border = '3px red solid';
    document.getElementById("salidaApellidos").innerHTML = ("Ingrese un Apellido valido");
  } else {
    document.getElementById("apellidos").style.border = '3px green solid';
    document.getElementById("salidaApellidos").innerHTML = ("Apellido valido");
  }
  input.addEventListener('input', function () {
    if (this.value.length > 40)
      this.value = this.value.slice(0, 40);
  })
  if (!/^[A-Za-z _][A-Za-z _]*$/.test(apellidos)) {
    document.getElementById("salidaApellidos").innerHTML = ("Ingrese solo letras");
    document.getElementById("apellidos").value = "";
  }
}    document.getElementById("apellidos").style.border = '3px red solid';

function validarDireccion() {
  var direccion;
  direccion = document.getElementById("direccion").value.trim();
  var input = document.getElementById('direccion');
  if (document.getElementById("direccion").value.length <= 10) {
    document.getElementById("salidaDireccion").innerHTML = ("Ingrese una Direccion valida");
  } else {
    document.getElementById("salidaDireccion").innerHTML = ("Direccion valida");

  }
  input.addEventListener('input', function () {
    if (this.value.length > 40)
      this.value = this.value.slice(0, 40);
  })
}
function validarTelefono() {
  var telefono;
  telefono = document.getElementById("telefono").value.trim();
  if (!/^([0-9])*$/.test(telefono)) {
    document.getElementById("telefono").style.border = '3px red solid';
    document.getElementById("salidaTelefono").innerHTML = ("Ingrese solo numeros");
    document.getElementById("telefono").value = "";
  }
  var input = document.getElementById("telefono");
  input.addEventListener('input', function () {
    if (this.value.length > 10)
    
      this.value = this.value.slice(0, 10);
  })
  if (document.getElementById("telefono").value.length == 10) {
    document.getElementById("telefono").style.border = '3px GREEN solid';
    document.getElementById("salidaTelefono").innerHTML = ("Telefono correcto");
  } 
}
function validarFecha() {
  var fecha = document.getElementById("fechaNacimiento").value;
  var input = document.getElementById("fechaNacimiento");
  input.addEventListener('input', function () {
    if (this.value.length > 10)
      this.value = this.value.slice(0, 10);
    error = true;
  })
  if (!/^\d{2}\/\d{2}\/\d{2,4}$/.test(fecha))
    error = true;
  var fecha = fecha.split("/");
  var day = parseInt(fecha[0]);
  var month = parseInt(fecha[1]);
  var year = parseInt(fecha[2]);
  error = (isNaN(day) || isNaN(month) || isNaN(year));
  var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 1 || month > 2)
    if (day > ListofDays[month - 1] || day < 0 || ListofDays[month - 1] === undefined)
      error = true;
  if (month === 2) {
    var lyear = ((!(year % 4) && year % 100) || !(year % 400));
    if (lyear === false && day >= 29)
      error = true;
    if (lyear === true && day > 29)
      error = true;
  }
  if (error === true) {
    document.getElementById("salidafechaNacimiento").innerHTML = 
    ("FECHA INVALIDA: *formato: dd/mm/aaaa (dia/mes/año).\n");
    document.getElementById("fechaNacimiento").style.border = '3px red solid';
    return false;
  }
  else
    document.getElementById("salidafechaNacimiento").innerHTML = ("Fecha Válida\n");
    document.getElementById("fechaNacimiento").style.border = '3px green solid';
  return true;
}
function validarCorreo() {
  var correo = document.getElementById("correo").value.trim();
  expr = /^([a-zA-Z0-9_\.\-])+\@([est.ups.edu.ec])+([ups.edu.ec])$/;
  if (!expr.test(correo)) {
    document.getElementById("salidaCorreo").innerHTML = ("La dirección de correo " + 
    correo + " es incorrecta.");
    document.getElementById("correo").style.border = '3px RED solid';
  } else {
    document.getElementById("salidaCorreo").innerHTML = ("La dirección de correo " + 
    correo + " es correcta");
    document.getElementById("correo").style.border = '3px GREEN solid';
  }
}

function validarClave() {
  var contrasenna = document.getElementById("contrasena").value.trim();
  if (contrasenna.length >= 8) {
    var mayuscula = false;
    var minuscula = false;
    var numero = false;
    var caracter_raro = false;
    for (var i = 0; i < contrasenna.length; i++) {
      if (contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90) {
        mayuscula = true;
      }
      else if (contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122) {
        minuscula = true;
      }
      else if (contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57) {
        numero = true;
      }
      else {
        caracter_raro = true;
      }
    }
    if (mayuscula == true && minuscula == true && caracter_raro == true && numero == true) {
      document.getElementById("salidaContrasena").innerHTML = ("La contrasena es correcta");
      document.getElementById("contrasena").style.border = '3px GREEN solid';
      return true;
    } else {
      document.getElementById("contrasena").style.border = '3px RED solid';
      document.getElementById("salidaContrasena").innerHTML = ("La contrasena INCORRECTA EJM. jUAN123//");
    }
  }
  return false;
}


