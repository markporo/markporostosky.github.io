function thankyou(message) {
    alert(message);

}

function logthosemixes(whodoneit) {
    console.log(whodoneit);
}

function checkName() {
    var name = document.getElementById("firstnameid");
    var result = isNan(name);

    if (result = false) {
        alert("The name is incorrect");
    } else {
        alert("Thank you for giving us a real name!");
    }

}