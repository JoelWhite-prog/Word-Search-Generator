/*
Author: Joel White
Date: 9/7/2020
Description:
Adds inputted word from text box into multiple select(word bank).
*/


function addWord(){
    var userInput = document.getElementById("newWord");
    var wordBank = document.getElementById("wordBank");
    var newOption = document.createElement("option");
    newOption.setAttribute("value",userInput.value);
    newOption.innerHTML = userInput.value;
    wordBank.appendChild(newOption);
    userInput.value = "";
}

function addWordKeyHandler(e){
    if(e.which==13){//Enter key
        addWord();
    }
}