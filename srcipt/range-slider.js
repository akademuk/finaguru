const valueMoney = document.getElementById("valueMoney");
const innerMoney = document.getElementById("innerMoney");
const valueDate = document.getElementById("valueDate");
const innerDate = document.getElementById("innerDate");
let sum = document.getElementById("resultPercent");
let sum2 = document.getElementById("resultSum");
let resultCalc = document.getElementById("resultCalc");
const valuePercent = 0.0001;

function rangeMoney(){
    rangePercent = (valueMoney.value / valueMoney.max)*100;
    valueMoney.style.background = `linear-gradient(to right, #03B047 ${rangePercent}%, #DDDDDD ${rangePercent}%)`;
    innerMoney.textContent = valueMoney.value;

    sum2.textContent = valueMoney.value + " грн.";

    rangeDate = (valueDate.value / valueDate.max)*100;
    valueDate.style.background = `linear-gradient(to right, #03B047 ${rangeDate}%, #DDDDDD ${rangeDate}%)`;
    innerDate.textContent = valueDate.value;

    letDate = (Number(valueDate.value) * Number(valuePercent));
    valPer = (Number(valueMoney.value) * Number(letDate));
    let summ = (Number(valueMoney.value) + Number(valPer))
    let res = (summ - Number(valueMoney.value))
    sum.textContent = Math.ceil(res) + " грн.";
    
    resultCalc.textContent = (Number(valueMoney.value) + Math.ceil(res)) + " грн.";

    let sumDate = document.getElementById("resultDate");
    var days = valueDate.value;
    
    var newDate = new Date(Date.now()+days*24*60*60*1000)
    sumDate.textContent = newDate.toLocaleDateString('de-DE');

}
rangeMoney();
