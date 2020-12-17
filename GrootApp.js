var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var output = document.querySelector("#output")

var serverURL = "	https://api.funtranslations.com/translate/groot.json"
function errorHandler(error){
        console.log("error occured", error);
        alert("something wrong with server! try again after some time")
    
}

function getTransURL(input){
    return serverURL + "?text=" + input
}

function clickHandler(){
    // output.innerText = "abcd " + txtInput.value;
    var inputText= txtInput.value;

    fetch(getTransURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText; // output
       })    .catch(errorHandler)
};



btnTranslate.addEventListener("click", clickHandler)

// txtInput.addEventListener("input",)