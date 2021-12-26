// Factorialize a Number
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Example Outputs:
// factorialize(0) should return 1.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.




function Factorialize(n){
    let num1 = 1;
    let newArray = [];

    if(n == 0){
        console.log(`0!=  Factorialize is : 1`);
        console.log('--------------------------------------------');
    }else{
        for (let i = 1 ; i <= n ; i++){
            num1 = i * num1;
            newArray.push(i + '*');
        }
        console.log(`${n}!= ${newArray.join(' ')} Factorialize is : ${num1}`);
        console.log('--------------------------------------------');
    }

    
}

Factorialize(0);
Factorialize(5);
Factorialize(10);
Factorialize(20);





