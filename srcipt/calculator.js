const innerMoney2 = document.getElementById("innerMoney2");
const valueMoney2 = document.getElementById("valueMoney2");
const innerDate2 = document.getElementById("innerDate2");
const valueDate2 = document.getElementById("valueDate2");
let sum22 = document.getElementById("resultSum2");
let sum21 = document.getElementById("resultPercent2");
let resultCalc2 = document.getElementById("resultCalc2");
const valuePercent2 = 0.0001;

function rangeMoney2() {
    rangePercent2 = (valueMoney2.value / valueMoney2.max)*100;
    valueMoney2.style.background = `linear-gradient(to right, #03B047 ${rangePercent2}%, #C6BAFB ${rangePercent2}%)`;
    innerMoney2.textContent = valueMoney2.value; 

    sum22.textContent = valueMoney2.value + " грн.";

    newDate2 = (valueDate2.value / valueDate2.max)*100;
    valueDate2.style.background = `linear-gradient(to right, #03B047 ${newDate2}%, #C6BAFB ${newDate2}%)`;
    innerDate2.textContent = valueDate2.value;

    letDate2 = (Number(valueDate2.value) * Number(valuePercent2));
    valPer2 = (Number(valueMoney2.value) * Number(letDate2));
    let summ2 = (Number(valueMoney2.value) + Number(valPer2))
    let res2 = (summ2 - Number(valueMoney2.value))
    sum21.textContent = Math.ceil(res2) + " грн.";

    resultCalc2.textContent = (Number(valueMoney2.value) + Math.ceil(res2)) + " грн.";

    let sumDate2 = document.getElementById("resultDate2");
    var days2 = valueDate2.value;
    
    var newDate2 = new Date(Date.now()+days2*24*60*60*1000)
    sumDate2.textContent = newDate2.toLocaleDateString('de-DE');
}