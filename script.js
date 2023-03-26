// DOM ELEMENTS

const CalculatorWrapper = document.querySelector(".calculator-wrapper")
const mainHeader = document.querySelector(".main-header")

// theme wrapper
const themeWrapper = document.querySelector(".theme-wrapper");
const themeHeader = document.querySelector(".theme-header");
const themeOptions = document.querySelectorAll(".theme-options")
const circleWrapper = document.querySelector(".button");
const circleBtn = document.querySelector(".circle");

const view = document.querySelector(".view-value");


const calcBtnWrapper = document.querySelector(".calc-buttons");
const calcBtns = document.querySelectorAll(".calc");
const calcReset = document.querySelector(".calc.reset");

const calcEqual = document.querySelector(".calc.equal");
const calcPlus = document.querySelector(".calc.plus");
const calcMinus = document.querySelector(".calc.minus");
const calcDivision = document.querySelector(".calc.division");
const calcMultiplication = document.querySelector(".calc.multiplication");

// logical variables
// Theme
let position = 1;

// BtnEvent
let calcElements = [];
let value;
let numbers = [];
let number;
let action = 0;
let actionArr = [];
let delAction = 0;
let result = 0;
let lastResult;
let resultArr = [];

// FUNCTIONS
// switch theme
const themeBtnFunction = () => {
    // switch maker 
    const switcher = (option, theme) => {
        const switching = (theme) => {
            CalculatorWrapper.classList.add(theme);
            mainHeader.classList.add(theme);
            themeHeader.classList.add(theme);
            view.classList.add(theme);
            circleWrapper.classList.add(theme);
            circleBtn.classList.add(theme);
            calcBtnWrapper.classList.add(theme);
            calcReset.classList.add(theme);


            calcEqual.classList.add(theme);
            for (let i = 0; i < themeOptions.length; i++) {
                themeOptions[i].classList.add(theme);
                calcBtns[i].classList.add(theme);
            }
            for (let i = 0; i < calcBtns.length; i++) {
                calcBtns[i].classList.add(theme);
            }
        };
        const removing = (theme) => {
            CalculatorWrapper.classList.remove(theme);
            mainHeader.classList.remove(theme);
            themeHeader.classList.remove(theme);
            view.classList.remove(theme);
            circleWrapper.classList.remove(theme);
            circleBtn.classList.remove(theme);
            calcBtnWrapper.classList.remove(theme);
            calcReset.classList.remove(theme);

            calcEqual.classList.remove(theme);
            for (let i = 0; i < themeOptions.length; i++) {
                themeOptions[i].classList.remove(theme);
                calcBtns[i].classList.remove(theme);
            }
            for (let i = 0; i < calcBtns.length; i++) {
                calcBtns[i].classList.remove(theme);
            }
        };
        if (option == "s") {
            switching(theme);
        } else {
            removing(theme);
        }
    };
    // switching mechanism
    const switchTheme = () => {
        position++;

        switch (position) {
            case 1:
                switcher("r", "third-theme");
                switcher("s", "first-theme");
                circleBtn.classList.remove("third-option");
                circleBtn.classList.add("first-option");
                break;
            case 2:
                switcher("r", "first-theme");
                switcher("s", "second-theme");
                circleBtn.classList.remove("first-option");
                circleBtn.classList.add("second-option");
                break;
            case 3:
                switcher("r", "second-theme");
                switcher("s", "third-theme");
                circleBtn.classList.remove("second-option");
                circleBtn.classList.add("third-option");
                position = 0;
                break;
        }
    };
    // restart mechanim
    themeWrapper.addEventListener("click", function () {
        if (position < 3) {
            switchTheme()
        } else {
            switchTheme()
        }
    });
};


// calc events
const calcBtnEvent = () => {


    const value_funtion = (e) => {
        calcElements.push((e.target.textContent.trim()))
        value_txt = calcElements.join("");
        value = (Number(value_txt));

    }
    const viewValue = (value) => {
        view.textContent = value;
    }
    const clearValue = (value) => {

        calcElements = [];
        value = 0;
        result = 0;
        value_txt = ""
        viewValue(value);
    }

    const roundResult = () => {

        resultArr.push(result)
        viewValue(result)


    }

    const equalFunction = () => {
        for (let i = 0; i < actionArr.length; i++) {
            const action = actionArr[i];
            if (resultArr.length == 0) {

                if (actionArr[i] == 1) {

                    if (numbers.length <= 2) {
                        numbers.push(value);
                    }
                    result = numbers[0] + numbers[1]
                    roundResult();
                } else if (actionArr[i] == 2) {

                    if (numbers.length <= 2) {
                        numbers.push(value);
                    }
                    result = numbers[0] - numbers[1];
                    roundResult();
                } else if (actionArr[i] == 3) {

                    if (numbers.length <= 2) {
                        numbers.push(value);
                    }

                    result = numbers[0] * numbers[1];
                    roundResult();
                } else if (actionArr[i] == 4) {
                    if (numbers.length <= 2) {
                        numbers.push(value);
                    }
                    result = numbers[0] / numbers[1];
                    roundResult();
                }
            }
        }
        if (actionArr.length > 1) {
            action = actionArr.slice(-1);
            switch (action[0]) {
                case 1:

                    result = resultArr[resultArr.length - 1]
                    result += value;
                    roundResult();
                    break;
                case 2:

                    result = resultArr[resultArr.length - 1]
                    result -= value;
                    roundResult();
                    break;
                case 3:
                    result = resultArr[resultArr.length - 1]
                    result *= value;
                    roundResult();
                    break;
                case 4:
                    result = resultArr[resultArr.length - 1];
                    result /= value;
                    roundResult();
                    break;
            }
        }
    }





    for (let i = 0; i < calcBtns.length; i++) {
        calcBtns[i].addEventListener("click", function (e) {
            target_box = e.target;
            if (e.target != calcReset && e.target != calcEqual && e.target != calcPlus && e.target != calcMinus && e.target != calcDivision && e.target != calcMultiplication) {
                value_funtion(e);
                viewValue(value);
                value_txt = ""

            } else if (e.target == calcPlus) {
                action = 1;
                actionArr.push(action)
                numbers.push(value);
                clearValue(value)



            } else if (e.target == calcMinus) {
                action = 2;
                actionArr.push(action)

                clearValue(value);
                if (numbers.length <= 2) {
                    numbers.push(value);
                }
            } else if (e.target == calcMultiplication) {
                action = 3;
                actionArr.push(action)
                numbers.push(value);
                clearValue(value)

            } else if (e.target == calcDivision) {
                action = 4;
                actionArr.push(action)
                numbers.push(value);
                clearValue(value)

            } else if (e.target == calcReset) {
                calcElements = [];
                value = 0
                numbers = [];
                number = 0
                action = 0;
                actionArr = [];
                delAction = 0;
                result = 0;
                lastResult = 0
                resultArr = [];

                view.textContent = 0
            } else if (e.target == calcEqual) {
                equalFunction()
            }
        })

    }

}





// main function
const main = () => {
    themeBtnFunction();
    calcBtnEvent()
};

main()