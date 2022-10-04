// function fib(n, memo = new Map()) {
//     if (n === 0) { return 0n }
//     else if (n === 1) { return 1n }
//     else if (memo.has(n)) { return memo.get(n) }
//     let a
//     if (n > 0) {
//         a = fib(n - 1, memo) + fib(n - 2, memo)
//         memo.set(n, a)
//     }
//     else {
//         a = fib(n + 2, memo) - fib(n + 1, memo)
//         memo.set(n, a)
//     }
//     return a
// }

// function fib(n, memo = {}) {
//     if (memo[n]) { return memo[n] }
//     else if (n === 0) { return 0n }
//     else if (n === 1) { return 1n }
//     if (n > 0) {
//         memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
//     }
//     else {
//         memo[n] = fib(n + 2, memo) - fib(n + 1, memo)
//     }
//     return memo[n]
// }


// function fib(n) {
//     n_p = Math.abs(n)
//     arr = Array(n_p + 1).fill(0n)
//     arr[1] = 1n
//     for (let i = 2; i <= n_p; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     if (n >= 0) {
//         return arr[n]
//     } else {
//         sign = Math.abs(n_p % 2) === 0 ? -1n : 1n
//         return sign * arr[n_p]
//     }
// }


// function fib(n) {
//     n_p = Math.abs(n)
//     let a = 0n
//     let b = 1n
//     let c = 1n

//     for (let i = 3; i <= n_p; i++) {
//         let tmp = [b, c]
//         a = b
//         b = c
//         c = tmp[0] + tmp[1]
//     }
//     if (n === 0) { return 0n }
//     else if (n >= 0) {
//         return c
//     } else {
//         sign = Math.abs(n_p % 2) === 0 ? -1n : 1n
//         return sign * c
//     }
// }

function fib(n) {
    if (n == 0 || n == 1) {
        return BigInt(n);
    } else if (n >= 2 && n % 2 == 0) {
        let k = n / 2;
        let fk = fib(k);
        return (2n * fib(k - 1) + fk) * fk;
    } else if (n >= 2) {
        let k = (n + 1) / 2;
        let fk1 = fib(k - 1);
        let fk2 = fib(k);
        return fk2 * fk2 + fk1 * fk1;
    } else {
        a = 0n;
        b = 1n;
        for (let i = 0; i > n; i--) {
            [a, b] = [b - a, a];
        }
        return a;
    }
}

now = Date.now()
// console.log(fib(84558))
fib(84558)
// fib(1217783)
console.log(Date.now() - now + " ms")

