/*Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты.
 Скрипт должен обработать полученный номер и показать на странице последние 4 цифры 
 а остальные цифры карты должны заменены на *.
    
 **Пример: "Номер вашей карты: **********1245"***/

let cardNum;
cardNum = prompt("Введите номер вашей карты");

lastNums = cardNum.slice(-4);
console.log(lastNums);
firstNums = cardNum.slice(0, -4);
let changedNums = firstNums.replace(firstNums, "********");
let result = changedNums + lastNums;
alert("Номер вашей карты: " + result);
console.log(changedNums);
