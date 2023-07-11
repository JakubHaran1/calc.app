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
const calcDel = document.querySelector(".calc.del");

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
let check_value;

// FUNCTIONS
const actionFunction = () => {
    view_value = Number(view_value);
    numbersArray.push(view_value);
    view_value = "";
    actionArr.push(action_type);

}

const resultFunction = () => {
    view.textContent = result;
    resultArr.push(result);
    actionArr.shift();
}

const EqualFunctions = (actions) => {
    view_value = Number(view_value);
    numbersArray.push(view_value);
    actions.forEach(action_type => {
        if (action_type === "+") {
            if (action == 0) {
                if (numbersArray.length == 2) {
                    result = numbersArray[0] + numbersArray[1];

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

    })
}
const delFunction = () => {
    let view_valueCopy = view_value.slice(0, -1);
    let lastResult = String(resultArr[resultArr.length - 1]).slice(0, -1)

    if (action == 0) {
        view_value = view_valueCopy
        view.textContent = view_value;
    } else {
        if (check_value == 0) {
            result = Number(lastResult);
            view.textContent = result;
            resultArr.push(result);
            console.log(resultArr);
        } else {
            view_value = view_valueCopy
            view.textContent = view_value;
        }
    }
}

const resetFunction = () => {
    view_value = "";
    view.textContent = 0;
    numbersArray = [];
    action = 0;
    action_type;
    actionArr = [];
    resultArr = [];
    result = 0;
}
// BTN ACTIONS

// CALC BTN
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
        EqualFunctions(actionArr)
    }
    actionFunction();
    console.log(numbersArray)

});

// SUBSTRACTION
calcMinus.addEventListener("click", function () {
    action_type = "-";
    if (actionArr.length >= 1) {
        EqualFunctions(actionArr)
    }
    if (view_value != "") {
        actionFunction();
    };
});

// MULTIPLICATION
calcMultiplication.addEventListener("click", function () {
    action_type = "*";
    if (actionArr.length >= 1) {
        EqualFunctions(actionArr)
    }
    actionFunction();
});

// DIVISION
calcDivision.addEventListener("click", function () {
    action_type = "/";
    if (actionArr.length >= 1) {
        EqualFunctions(actionArr)
    }
    actionFunction();
});

// EQUAL
calcEqual.addEventListener("click", function () {
    EqualFunctions(actionArr)
    actionArr = []
});


calcReset.addEventListener("click", function () {
    resetFunction()

})
calcDel.addEventListener("click", function () {
    delFunction()

})



// gdy action 0 to bez znaczenia 
// tworze zmienna check_value - 0 jak liczba , po naciśnieciu przycisku akcji na 1 i jest result - to gdy action1
// viev_value rozsmarowuje i usuwam ostatnia wartośc 
// liczba powinna się dodac do tablicy sama - w innych przyciskach 














// main function
const main = () => {
    themeBtnFunction();
};

main()