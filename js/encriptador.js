function encriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    const texto = document.querySelector("#texto").value;
    var texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        var out = ""
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a' && texto[i] > 'Z') || (texto[i] > 'z') || (texto[i] < 'A')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if(texto[i] == 'a'){
                out += traduccion["a"] ;
            }
            else if(texto[i] == 'e'){
                out += traduccion["e"];
            }
            else if(texto[i] == 'i'){
                out += traduccion["i"]; 
            }
            else if(texto[i] == 'o'){
                out += traduccion["o"]; 
            }
            else if(texto[i] == 'u'){
                out += traduccion["u"]; 
            }
            else if(texto[i] == 'b'){
                out += traduccion["b"] ;
            }
            else if(texto[i] == 'c'){
                out += traduccion["c"];
            }
            else if(texto[i] == 'd'){
                out += traduccion["d"]; 
            }
            else if(texto[i] == 'O'){
                out += traduccion["O"]; 
            }
            else if(texto[i] == 'f'){
                out += traduccion["f"] ;
            }
            else if(texto[i] == 'g'){
                out += traduccion["g"];
            }
            else if(texto[i] == 'h'){
                out += traduccion["h"]; 
            }
            else if(texto[i] == 'j'){
                out += traduccion["j"]; 
            }
            else if(texto[i] == 'k'){
                out += traduccion["k"] ;
            }
            else if(texto[i] == 'l'){
                out += traduccion["l"];
            }
            else if(texto[i] == 'm'){
                out += traduccion["m"]; 
            }
            else if(texto[i] == 'p'){
                out += traduccion["p"]; 
            }
            else if(texto[i] == 'q'){
                out += traduccion["q"]; 
            }
            else if(texto[i] == 'r'){
                out += traduccion["r"] ;
            }
            else if(texto[i] == 's'){
                out += traduccion["s"];
            }
            else if(texto[i] == 't'){
                out += traduccion["t"]; 
            }
            else if(texto[i] == 'v'){
                out += traduccion["v"]; 
            }
            else if(texto[i] == 'w'){
                out += traduccion["w"] ;
            }
            else if(texto[i] == 'x'){
                out += traduccion["x"];
            }
            else if(texto[i] == 'y'){
                out += traduccion["y"]; 
            }
            else if(texto[i] == 'z'){
                out += traduccion["z"]; 
            }
            else if(texto[i] == 'A'){
                out += traduccion["A"] ;
            }
            else if(texto[i] == 'B'){
                out += traduccion["B"];
            }
            else if(texto[i] == 'C'){
                out += traduccion["C"]; 
            }
            else if(texto[i] == 'D'){
                out += traduccion["D"]; 
            }
            else if(texto[i] == 'E'){
                out += traduccion["E"]; 
            }
            else if(texto[i] == 'F'){
                out += traduccion["F"] ;
            }
            else if(texto[i] == 'G'){
                out += traduccion["G"];
            }
            else if(texto[i] == 'H'){
                out += traduccion["H"]; 
            }
            else if(texto[i] == 'I'){
                out += traduccion["I"]; 
            }
            else if(texto[i] == 'J'){
                out += traduccion["J"]; 
            }
            else if(texto[i] == 'K'){
                out += traduccion["K"] ;
            }
            else if(texto[i] == 'L'){
                out += traduccion["L"];
            }
            else if(texto[i] == 'M'){
                out += traduccion["M"]; 
            }
            else if(texto[i] == 'P'){
                out += traduccion["P"]; 
            }
            else if(texto[i] == 'Q'){
                out += traduccion["Q"]; 
            }
            else if(texto[i] == 'R'){
                out += traduccion["R"] ;
            }
            else if(texto[i] == 'S'){
                out += traduccion["S"];
            }
            else if(texto[i] == 'T'){
                out += traduccion["T"]; 
            }
            else if(texto[i] == 'U'){
                out += traduccion["U"]; 
            }
            else if(texto[i] == 'V'){
                out += traduccion["V"]; 
            }
            else if(texto[i] == 'W'){
                out += traduccion["W"] ;
            }
            else if(texto[i] == 'X'){
                out += traduccion["X"];
            }
            else if(texto[i] == 'Y'){
                out += traduccion["Y"]; 
            }
            else if(texto[i] == 'Z'){
                out += traduccion["Z"]; 
            }
            else{
                out += texto[i];
            }
        }

        texto_out.innerHTML = out;
    }

    return;

}

function desencriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var texto = document.querySelector("#texto").value;
    var texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a' && texto[i] > 'Z') || (texto[i] > 'z') || (texto[i] < 'A')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
        texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
        texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
        texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
        texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
        texto = texto.replace(new RegExp(traduccion["A"], "g"), "a");
        texto = texto.replace(new RegExp(traduccion["E"], "g"), "e");
        texto = texto.replace(new RegExp(traduccion["I"], "g"), "i");
        texto = texto.replace(new RegExp(traduccion["O"], "g"), "o");
        texto = texto.replace(new RegExp(traduccion["U"], "g"), "u");
        texto = texto.replace(new RegExp(traduccion["b"], "g"), "b");
        texto = texto.replace(new RegExp(traduccion["c"], "g"), "c");
        texto = texto.replace(new RegExp(traduccion["d"], "g"), "d");
        texto = texto.replace(new RegExp(traduccion["f"], "g"), "f");
        texto = texto.replace(new RegExp(traduccion["g"], "g"), "g");
        texto = texto.replace(new RegExp(traduccion["h"], "g"), "h");
        texto = texto.replace(new RegExp(traduccion["j"], "g"), "j");
        texto = texto.replace(new RegExp(traduccion["k"], "g"), "k");
        texto = texto.replace(new RegExp(traduccion["l"], "g"), "l");
        texto = texto.replace(new RegExp(traduccion["m"], "g"), "m");
        texto = texto.replace(new RegExp(traduccion["n"], "g"), "n");
        texto = texto.replace(new RegExp(traduccion["p"], "g"), "p");
        texto = texto.replace(new RegExp(traduccion["q"], "g"), "q");
        texto = texto.replace(new RegExp(traduccion["r"], "g"), "r");
        texto = texto.replace(new RegExp(traduccion["s"], "g"), "s");
        texto = texto.replace(new RegExp(traduccion["t"], "g"), "t");
        texto = texto.replace(new RegExp(traduccion["v"], "g"), "v");
        texto = texto.replace(new RegExp(traduccion["w"], "g"), "w");
        texto = texto.replace(new RegExp(traduccion["x"], "g"), "x");
        texto = texto.replace(new RegExp(traduccion["y"], "g"), "y");
        texto = texto.replace(new RegExp(traduccion["z"], "g"), "z");
        texto = texto.replace(new RegExp(traduccion["B"], "g"), "B");
        texto = texto.replace(new RegExp(traduccion["C"], "g"), "C");
        texto = texto.replace(new RegExp(traduccion["D"], "g"), "D");
        texto = texto.replace(new RegExp(traduccion["F"], "g"), "F");
        texto = texto.replace(new RegExp(traduccion["G"], "g"), "G");
        texto = texto.replace(new RegExp(traduccion["H"], "g"), "H");
        texto = texto.replace(new RegExp(traduccion["J"], "g"), "J");
        texto = texto.replace(new RegExp(traduccion["K"], "g"), "K");
        texto = texto.replace(new RegExp(traduccion["L"], "g"), "L");
        texto = texto.replace(new RegExp(traduccion["M"], "g"), "M");
        texto = texto.replace(new RegExp(traduccion["N"], "g"), "N");
        texto = texto.replace(new RegExp(traduccion["P"], "g"), "P");
        texto = texto.replace(new RegExp(traduccion["Q"], "g"), "Q");
        texto = texto.replace(new RegExp(traduccion["R"], "g"), "R");
        texto = texto.replace(new RegExp(traduccion["S"], "g"), "S");
        texto = texto.replace(new RegExp(traduccion["T"], "g"), "T");
        texto = texto.replace(new RegExp(traduccion["V"], "g"), "V");
        texto = texto.replace(new RegExp(traduccion["W"], "g"), "W");
        texto = texto.replace(new RegExp(traduccion["Y"], "g"), "Y");
        texto = texto.replace(new RegExp(traduccion["Z"], "g"), "Z");
        console.log(texto);
        texto_out.innerHTML = texto;
    }
    return;
}

function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const botonCopiar = document.getElementById('copy');
const botonLimpiar = document.getElementById('limpiar');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat","A":"AI","E":"ENTER","I":"IMES","O":"OBER","U":"UFAT",
"b": "bit", "B": "BIT", "c": "coma", "C": "COMA", "d": "dado","D":"DADO","f":"fulbo","F":"FULBO","g":"gibili","G":"GIBILI",  
"h": "hola", "H": "HOLA", "j": "jajaja", "J": "JAJAJA", "k": "kiwi","K":"KIWI","l":"lola","L":"LOLA","m":"mirajane","M":"MIRAJANE",
"n": "natsu", "N": "NATSU", "p": "palo", "P": "PALO", "q": "qui","Q":"QUI","r":"rias","R":"RIAS","s":"sopa","S":"SOPA",  
"t": "topo", "T": "TOPO", "v": "vanadio", "V": "VANADIO", "w": "wtf","W":"WTF","x":"Y","X":"X","y":"Z","Y":"z","z":"hf","Z":"yr"};

enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
botonCopiar.addEventListener( 'click', function() {clipboard();} );





// Función de limpiar
botonLimpiar.addEventListener('click', () => {
    var textarea = document.querySelector("#texto");
    var textareaout = document.querySelector("#texto_out");
    textarea.innerHTML = "";
    textareaout.innerHTML = ""; 
});