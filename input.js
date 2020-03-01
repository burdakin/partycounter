function inputMoney1() {
    let personOne = document.getElementById("count1").value;
    return personOne;
}

function inputMoney2() {
    let personTwo = document.getElementById("count2").value;
    return personTwo;
}

function inputMoney3() {
    let personThree = document.getElementById("count3").value;
    return personThree;
}

function summa() {
    let one = parseInt(inputMoney1());
    let two = parseInt(inputMoney2());
    let three = parseInt(inputMoney3());
    let sum = one + two + three;
    return sum;
}

function average() {
let sum = summa();
let avg = sum/3;
return avg;

}

function count() {
    let sum = summa();
    var avg = average();
    document.getElementById("sum").innerHTML = `Общая сумма потраченных денег = ${sum} рублей`;
    document.getElementById("avg").innerHTML = `Средний чек на человека - ${avg.toFixed(2)} рублей`;
}

function diff1 () {
    let diff = average() - inputMoney1();
    if (diff < 0) {
        document.getElementById("res1").innerHTML = `Первый гость должен ${Math.abs(diff.toFixed(2))} рублей`;
    } else if (diff === 0) {
        document.getElementById("res1").innerHTML = `Первый гость ничего не должен`;
    } else {
        document.getElementById("res1").innerHTML = `Первому гостю должны ${Math.abs(diff.toFixed(2))} рублей`;
    }
}

function diff2 () {
    let diff = average() - inputMoney2();
    if (diff < 0) {
        document.getElementById("res2").innerHTML = `Второй гость должен ${Math.abs(diff.toFixed(2))} рублей`;
    } else if (diff === 0) {
        document.getElementById("res2").innerHTML = `Второй гость ничего не должен`;
    } else {
        document.getElementById("res2").innerHTML = `Второму гостю должны - ${Math.abs(diff.toFixed(2))} рублей`;
    }
}

function diff3 () {
    let diff = average() - inputMoney3();
    if (diff < 0) {
        document.getElementById("res3").innerHTML = `Первый гость должен ${Math.abs(diff.toFixed(2))} рублей`;
    } else if (diff === 0) {
        document.getElementById("res3").innerHTML = `Третий гость ничего не должен`;
    } else {
        document.getElementById("res3").innerHTML = `Третьему гостю должны ${Math.abs(diff.toFixed(2))} рублей`;
    }
}

function everythig() {
    diff1();
    diff2();
    diff3();
}

