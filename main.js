var hablando = window.webkitSpeechRecognition;

var hablando2 = new hablando();

function start() {
    document.getElementById("textbox").innerHTML = "";
    hablando2.start();
}

hablando2.onresult = function (resultados) {
    console.log(resultados);
    var contenido = resultados.results[0][0].transcript;
    console.log(contenido);
    document.getElementById("textbox").innerHTML = contenido;

    if(contenido == "Toma mi selfie quesito") {
        reproducirVoz();
    }
}

function reproducirVoz() {
    var voz = window.speechSynthesis;
    Fraseleida = "tomando selfie...di Queso";
    
    var diciendo = new SpeechSynthesisUtterance(Fraseleida);
    voz.speak(diciendo);
    Webcam.attach(camera);

    setTimeout(function(){
        tomarFoto();
        guardar();
    },3000);
}

Webcam.set({
    width: 360,
    height:250,
    image_format:'png',
    png_quality:90
});

camara = document.getElementById("camera");

function tomarFoto(){
    Webcam.snap(function(fotoqueso){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+fotoqueso+'">';
    });
}

function guardar(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}