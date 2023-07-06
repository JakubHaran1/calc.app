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
let resultArr = [];
let result = 0;


// FUNCTIONS
const actionFunction = () => {
    view_value = Number(view_value);
    numbersArray.push(view_value);
    view_value = "";
}

const resultFunction = () => {
    view.textContent = result;
    resultArr.push(result);
    console.log(numbersArray);
}

// BTN ACTIONS
calcBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (numbersArray.length == 0 && action_type === "-") {
            view_value = "-"

        }
        view_value += btn.innerHTML.trim();
        view.textContent = view_value;
        view_wrapper.scrollLeft = view_wrapper.offsetWidth;
    })
})


// ADD
calcPlus.addEventListener("click", function () {
    actionFunction();
    action_type = "+";
})

// SUBSTRACTION
calcMinus.addEventListener("click", function () {
    action_type = "-";
    if (view_value != "") {
        actionFunction()
    }
})

// MULTIPLICATION
calcMultiplication.addEventListener("click", function () {
    actionFunction();
    action_type = "*";
})

// EQUAL
calcEqual.addEventListener("click", function () {
    view_value = Number(view_value);
    numbersArray.push(view_value);

    if (action_type === "+") {
        if (action == 0 && numbersArray.length == 2) {
            result = numbersArray[0] + numbersArray[1];
            resultFunction()
            action = 1;
        }
    } else if (action_type === "-") {
        if (action == 0 && numbersArray.length == 2) {
            result = numbersArray[0] - numbersArray[1];
            resultFunction()
            action = 1;
        }
    } else if (action_type === "*") {
        if (action == 0 && numbersArray.length == 2) {
            result = numbersArray[0] * numbersArray[1];
            resultFunction()
            action = 1;
        }
    }
})












// main function
const main = () => {
    themeBtnFunction();
};

main()