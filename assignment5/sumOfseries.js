function sumOfseries(x, n) {
    let sum = 0;
    let power = 1;
    for (let i = 0; i <= n; i++){
        sum = sum + power;
        power = power * x;
    }
    return sum;
}
console.log(sumOfseries(2,3))

