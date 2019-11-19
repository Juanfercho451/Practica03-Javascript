var foto =['1','2','3','4','5','6','7','8','9','10']
var aleatorio = []
var posicion = 0
function init() {
    posicion=0
    iniciar()
    movi()
    tiempo()
}
function tiempo(){
        if(posicion==0){
            document.getElementById("siguiente").disabled=false;
            document.getElementById("anterior").disabled=true;            
        
        }else if(posicion==4){
            document.getElementById("siguiente").disabled=true;
            document.getElementById("anterior").disabled=false;

        }else{
            document.getElementById("siguiente").disabled=false;
            document.getElementById("anterior").disabled=false;
        }
    }       
function anterior() { 
    posicion--
    tiempo()
    movi()
}
function siguiente(){
    posicion++
    tiempo()
    movi()  
}
function iniciar(){
    posicion=0
    tiempo()
        for (var i=0; i<5; i++){
            var alea =Math.round(Math.random() * 9)
                while(aleatorio.includes(foto[alea])) {
                    var alea = Math.round(Math.random() * 9)
                }
                aleatorio[i]= foto[alea]
        }
        movi()
}
function movi() {
    var url= 'images/'+ aleatorio[posicion] + '.jpeg'
    document.getElementById('fot').src =url
}
