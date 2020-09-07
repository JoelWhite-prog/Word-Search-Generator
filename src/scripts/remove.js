/*
Author: Joel White
Date: 9/7/2020
Description:
Removes all selected words from multiple select(word bank).
*/

function removeWord(e){
    var wordBank = document.getElementById("wordBank");
    var selected = wordBank.selectedOptions;
    while(selected.length>0){
        wordBank.removeChild(selected[0]);
    }
}