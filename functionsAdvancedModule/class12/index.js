// recursive functions: functions that call itself


function count(counter, max=10) {
    console.log(counter)
    if (counter > max) return;
    counter++
    count(counter, max);
}

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);

}

function  fib(n)
{
    /* Declare an array to store Fibonacci numbers. */
    let f = new Array(n+2); // 1 extra to handle case, n = 0
    let i;
    /* 0th and 1st number of the series are 0 and 1*/
    f[0] = 0;
    f[1] = 1;
    for (i = 2; i <= n; i++)
    {
        /* Add the previous 2 numbers in the series
        and store it */
        f[i] = f[i-1] + f[i-2];
    }
    return f;
}

/*
Step 1: Set Variables a=0, b=1, c=0
Step 2: Print a,b
Step 3: c=a+b
Step 4: Print c
Step 5: set a=b,b=c
Step 6: Set A = B, B = C
Step 7: REPEAT steps 4 – 6, for n times
*/

function trying(n) {
    const fibonacciNumbers = [];

    if (n === 0) return 0;
    if (n === 1) return 1;
    return trying(n - 1) + trying(n - 2);
}

console.log(trying(10));