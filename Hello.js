function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here:
    let fibonacciList = [0]

    if (n === 1) {
        return fibonacciList;
    }

    fibonacciList.push(1);

    if (n === 2) {
        return fibonacciList;
    }

    let count = 2;
    while (count < n) {
        fibonacciList.push(fibonacciList[count - 2] + fibonacciList[count - 1]);
        count++;
    }

    return fibonacciList;

    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(3))
