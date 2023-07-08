"use strict";
// THEME
import {
    themeBtnFunction
} from "./scripts/theme-switch.js";

// DOM ELEMENTS
const mainHeader = document.querySelector(".main-header")
const view_wrapper = document.querySelector(".view")
const view = document.querySelector(".view-value");

const calcBtnWrapper = document.querySelector(".calc-buttons");
const calcBtns = document.querySelectorAll(".number");
const calcReset = document.querySelector(".calc.reset");

const calcEqual = document.querySelector(".calc.equal");
const calcPlus = document.querySelector(".calc.plus");
const calcMinus = document.querySelector(".calc.minus");
const calcDivision = document.querySelector(".calc.division");
const calcMultiplication = document.querySelector(".calc.multiplication");

// LOGICAL VALUE
let view_value = "";
let numbersArray = [];
let action = 0;
let action_type;
let actionArr = [];
let resultArr = [];
let result = 0;


// FUNCTIONS
const actionFunction = () => {
    view_value = Number(view_value);
    numbersArray.push(view_value);
    view_value = "";
    actionArr.push(action_type);
    console.log(actionArr)
}

const resultFunction = () => {
    view.textContent = result;
    resultArr.push(result);

}

const EqualFunctions = () => {
    view_value = Number(view_value);
    numbersArray.push(view_value);

    if (action_type === "+") {
        if (action == 0) {
            if (numbersArray.length == 2) {
                result = numbersArray[0] + numbersArray[1];
                console.log(result)
                resultFunction();
                action = 1;
            };
        } else if (action == 1) {
            if (numbersArray.length >= 3) {
                result = numbersArray[numbersArray.length - 1] + resultArr[resultArr.length - 1];
                resultFunction();

            };
        }
    } else if (action_type === "-") {
        if (action == 0) {
            if (numbersArray.length == 2) {
                result = numbersArray[0] - numbersArray[1];
                resultFunction();
                action = 1;

            };
        } else if (action == 1) {
            if (numbersArray.length >= 3) {
                result = resultArr[resultArr.length - 1] - numbersArray[numbersArray.length - 1];
                resultFunction();
            };
        }

    } else if (action_type === "*") {
        if (action == 0) {
            if (numbersArray.length == 2) {
                result = numbersArray[0] * numbersArray[1];
                resultFunction();
                action = 1;
            };
        } else if (action == 1) {
            if (numbersArray.length >= 3) {
                result = resultArr[resultArr.length - 1] * numbersArray[numbersArray.length - 1];
                resultFunction();
            }
        }
    } else if (action_type === "/") {
        if (action == 0) {
            if (numbersArray[0] == 0 || numbersArray[1] == 0) {
                view.textContent = "Nie dziel przez 0!";
                //remove once function

            } else if (numbersArray.length == 2) {
                result = numbersArray[0] / numbersArray[1];
                resultFunction();
                action = 1;
            };
        } else if (action == 1) {
            if (resultArr[resultArr.length - 1] == 0 || numbersArray[numbersArray.length - 1] == 0) {
                view.textContent = "Nie dziel przez 0!";
                //remove once function

            } else if (numbersArray.length >= 3) {
                result = resultArr[resultArr.length - 1] / numbersArray[numbersArray.length - 1];
                resultFunction();

            };
        }
    };
}
// BTN ACTIONS
calcBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (numbersArray.length == 0 && action_type === "-") {
            view_value = "-";

        }
        view_value += btn.innerHTML.trim();
        view.textContent = view_value;
        view_wrapper.scrollLeft = view_wrapper.offsetWidth;
    });
});


// ADD
calcPlus.addEventListener("click", function () {
    action_type = "+";
    if (actionArr.length >= 1) {
        console.log(numbersArray);
        EqualFunctions()
        console.log(resultArr)
    }
    actionFunction();
});

// SUBSTRACTION
calcMinus.addEventListener("click", function () {
    action_type = "-";
    if (view_value != "") {
        actionFunction();
    };
});

// MULTIPLICATION
calcMultiplication.addEventListener("click", function () {
    action_type = "*";
    actionFunction();

});

// DIVISION
calcDivision.addEventListener("click", function () {

    actionFunction();
});

// EQUAL
calcEqual.addEventListener("click", function () {
    actionArr = []
    EqualFunctions()

});












// main function
const main = () => {
    themeBtnFunction();
};

main()