function isPrimeNumber(x) {
    for (var i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}


function PrintPrimeNumbers() {
    var x = 1;
    var result = "";
    while (x <= 100) {
        if (isPrimeNumber(x)) {
            result = result + x + " ";
        }
        x++;
    }
    alert(result);
}