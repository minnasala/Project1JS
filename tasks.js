//tasks.js
//This file contains the functions that get the form in index.html to work as it should

//Hide extra field
var comment = document.getElementById(extraField);
extraField.style.display = none;

function showComment () {


    var extraField = document.getElementById(extraField);
    var checkBox = document.forms.tasks.comments.checked;

    //if checked, show field
    if (!checkBox) {
        extraField.style.display = "none";

    } else {
        extraField.style.display = "block";
    }

}
function addRow() {

    var table1 = document.getElementById(tasks1);
    var table2 = document.getElementById(tasks2);
    var table3 = document.getElementById(tasks3);

    var row1 = table1.insertRow(0);

    
    var task = document.forms.tasks.task.value;


    
}



}