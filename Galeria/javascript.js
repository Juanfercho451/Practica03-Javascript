// Inicio de la configuración de diapositivas.

	// Declaración de variables.
    var Fotos; // Lugar donde se almacenara la ruta de la imagen.
    var V_max; // Longitud máxima del vector "Fotos".
    var aux;   // Auxiliar para configuración.
    var aux_2; // Auxiliar para programación.

// Inicio de variables.
function rand(n){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * n + 1 ));
    }
    Fotos = new Array(); // Crea el vector para las fotos.
    aux_2 = 0; // Inicia la variable auxiliar de programación con valor 0.

// Rutas de imagenes.
    Fotos [0] = "images/1.jpeg" /* Aqui pones la ruta del enlace a la imagen */ /*PD: eta primera imagen se debe repetir en el HTML*/
    Fotos [1] = "images/2.jpeg" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [2] = "images/3.jpeg" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [3] = "images/4.jpeg" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [4] = "images/5.jpeg" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [5] = "images/6.jpeg" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [6] = "images/7.jpeg" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [7] = "images/8.jpeg" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [8] = "images/9.jpeg" /* Aqui pones la ruta del enlace a la imagen */
    Fotos [9] = "images/10.jpeg" /* Aqui pones la ruta del enlace a la imagen */

    /* Para añadir nuevas imagenes simplemente adicionas "Fotos[] = "ruta imagen" */

    V_max = Fotos.length; // Obtiene la longitud del vector.
    V_max = V_max-1; // Diminuye uno su valor dado que V_max coge un valor a más.

    function iniciar(){
        document.getElementById("boton_2").src = Fotos[rand(5)-1];
   }

// Fin de la configuración de diapositivas.

// Inicio de la programación de diapositivas.

// Pasar a la siguiente imagen.
    function siguiente () {
        
        if (aux_2 == V_max){
        
            aux_2 = 9;
            
        
        }

        else{

            aux_2 = aux_2+1;

        }

        document.images.Diapositiva.src = Fotos[aux_2];
    }

// Pasar a la siguiente imagen.
    function anterior () {
        
        if (aux_2 == 0){
        
            aux_2 = 0;
        
        }

        else{

            aux_2 = aux_2-1;

        }

        document.images.Diapositiva.src = Fotos[aux_2];
    }

// Fin de la programación de diapositivas.