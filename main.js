
console.log("Nivel 1: Hasta 1 cifra");
console.log("Nivel 2: Hasta 2 cifras");
console.log("Nivel 3: Hasta 3 cifras");
console.log("Nivel 4: Hasta 4 cifras");

function jugarDeNuevo(){
    let jugarOtraVez = prompt ("Deseas jugar de nuevo? Si-No");
    if (jugarOtraVez.toLowerCase() === "no"){
        alert("Gracias por jugar! Nos vemos la próxima!");
        return;
    }else if (jugarOtraVez.toLowerCase() === "si"){
        ingresarNivel();
    }else{
        alert("Opción inválida. Por favor, ingresa Si o No.");  
        jugarDeNuevo(); 
    }
}
function ultimoIntento() {
    let intentos = 0;
    while (intentos < 3) {
      let mensaje;
      if (intentos === 0) {
        mensaje = "Intenta con otro número";
      } else if(intentos===1){
        mensaje = "Incorrecto: Prueba otra vez";
      }else {
        mensaje = "Incorrecto: Ultimo intento."
      }
      let intento = Number(prompt(mensaje));
      intentos++;
      console.log(intentos);
      if (intento === numeroSecreto) {
        alert("¡CORRECTO! Adivinaste el número!");
        jugarDeNuevo();
        return; 
      }
    }
    alert("Agotaste tus intentos! El número era " + numeroSecreto);
    jugarDeNuevo();
  }
  
// ------------------------------------------------------
// function ultimoIntento() {
//     let intentos = 0;
//     while (intentos < 3) {
//       let intento = Number(prompt("Incorrecto: Ingresa otro intento"));
//       intentos++;
//       console.log(intentos);
//       if (intento === numeroSecreto) {
//         alert("¡CORRECTO! Adivinaste el número!");
//         jugarDeNuevo();
//         return; // Se sale de la función después de un intento exitoso
//       }
//     }
//     alert("Agotaste tus intentos. El número era " + numeroSecreto);
//     jugarDeNuevo();
//   }
// -----------------------------------  
// function ultimoIntento(){
//     let intentos = 0;
//     while(intentos <3){
//         let intento = Number (prompt("Ingresa un número"));
//         intentos++;
//         console.log (intentos);
//         if(intento === numeroSecreto){
//             alert ("CORRECTO! Adivinaste el número!");
//         }else{
//             alert("Agotaste tus intentos. El número era " + numeroSecreto);
//         }
//     }    
//         jugarDeNuevo();
// }

function pista2(){
        numero = Number(prompt("Ingresa otro número"));
        if (numeroSecreto !== numero){
            alert ("Incorrecto! No es el número. Te doy otra pista ");
            if (numeroSecreto < numero){
                alert ("Pista 2: El número es menor al que ingresaste.");
            }else {
                alert ("Pista 2: El número es mayor al que ingresaste.");
            }
        } else{
            alert ("CORRECTO! Adivinaste el número!");
            return;
        }  
    ultimoIntento();
}   

function ingresarNumero(){
        numero = Number(prompt("Comenzemos! Ingresa un número"));
        if (numeroSecreto !== numero){
            alert ("Incorrecto! No es el número. Te doy una pista");
            if(numeroSecreto % 2 === 0){
                alert("Pista 1: El número es par.");
            }else if (numeroSecreto % 2 !== 0){
                alert("Pista 1: El número es impar.");
            }
        } else{
            alert ("CORRECTO! Adivinaste el número!");
            return;
        }  
    pista2(); 
}

let numeroSecreto;
function ingresarNivel(){
    let nivel = Number (prompt("Bienvenidos al juego de adivinar el Número! Ingrese el N° del nivel que quiera jugar (1-4)."));
    if (nivel >= 1 && nivel <= 4) {
        if (nivel === 1){
            numeroSecreto = Math.floor (Math.random()*10);
            console.log(numeroSecreto);
            ingresarNumero();
        } else if (nivel === 2){
            numeroSecreto = Math.floor (Math.random()*100);
            console.log(numeroSecreto);
            ingresarNumero();
        } else if (nivel === 3){
            numeroSecreto = Math.floor (Math.random()*1000);
            console.log(numeroSecreto);
            ingresarNumero();
        } else {        
            numeroSecreto = Math.floor (Math.random()*10000);
            console.log(numeroSecreto);
            ingresarNumero();
        }
    }else {
        alert("Nivel inválido. Por favor, ingresa un número de nivel válido (1-4).");
        ingresarNivel();
    }
}
//Ejecución
ingresarNivel();

