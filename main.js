var inputText=document.querySelector("#txt-input");
var outputText=document.querySelector("#output");
var buttonTrans=document.querySelector("#btn-translate");
var serverURL="https://api.funtranslations.com/translate/minion.json"
function errorHandler(error){
    alert("server down please try after some times")
}
function clickHandler(){
    var inputs= inputText.value;
    fetch(serverURL+"?"+"text="+inputs)
        .then(response => response.json())
        .then(json =>{
            var translatedText=json.contents.translated;
            outputText.innerText= translatedText;
        })
        .catch(errorHandler)
}
buttonTrans.addEventListener("click",clickHandler)
