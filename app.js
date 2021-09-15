var dob = document.querySelector("#input-date");
var luckyNumber = document.querySelector("#input-lucky-number");
var checkButton = document.querySelector("#button-check");
var messageDisplay = document.querySelector("#message");

checkButton.addEventListener("click", () => {
    if (dob.value && luckyNumber.value) {
        compareDateAndNumber(calculateSum(dob.value), Number(luckyNumber.value));
    } else {
        showMessage("Enter values in both fields to continue");
    }
});


function calculateSum (birthdate) {
    birthdate = birthdate.replaceAll("-", "");
    birthdate = Number(birthdate);

    var sum = 0;
    while (birthdate > 0) {
        sum += (birthdate % 10);
        birthdate = Math.trunc(birthdate / 10);
    }

    return sum;
}

function compareDateAndNumber (birthdateSum, number) {
    if (birthdateSum % number === 0) {
        showMessage("Wohoo!! Your Birthday is Lucky!!!");
    } else {
        showMessage("Ooops! " +number+ " is not very lucky.");
    }
}

function showMessage (text) {
    messageDisplay.innerText = text;
}