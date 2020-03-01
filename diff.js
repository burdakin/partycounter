function diff1 () {
    let diff = avg - inputMoney1();
    if (diff < 0){
        document.getElementById("test").innerHTML = `Гость должен ${diff.toFixed(2)} рублей`;
    } else if (diff = 0) {
        document.getElementById("avg").innerHTML = `Гость ничего не должен`;
    } else {
        document.getElementById("avg").innerHTML = `Гостю должны - ${diff.toFixed(2)} рублей`;
    }
}