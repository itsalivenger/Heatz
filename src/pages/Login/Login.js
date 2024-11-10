const checkDiv = document.getElementsByClassName('check-div')[0];
var checked = false;

checkDiv.onclick = function() {
    if (!checked) {
        checkDiv.style.border = '1px solid rgb(0, 228, 137)';
        checkDiv.style.backgroundColor = 'rgb(0, 228, 137)';
        checked = true;
    }
    else {
        checkDiv.style.border = '1px solid rgb(0, 98, 59)';
        checkDiv.style.backgroundColor = 'rgb(32, 32, 32)';
        checked = false;
    }
}