// Arrow Function

// a) Print odd numbers in an array

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOddNumbers = (arr) => {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    oddNumbers.forEach(num => console.log(num));
};

printOddNumbers(numbersArray);




// b) Convert all the strings to title caps in a string array

let stringArray = ["guvi", "full stack developer", "guvi geeks"];

let convertToTitleCase = (arr) => {
    return arr.map(str =>
        str.replace(/\b\w/g, match => match.toUpperCase())
    );
};

let titleCaseArray = convertToTitleCase(stringArray);

console.log(titleCaseArray);





// c) Sum of all numbers in an array

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr => arr.reduce((acc, current) => acc + current, 0);

let result = sum(numbersArr);

console.log(result);




// d) Return all the prime numbers in an array

let Arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let getPrimeNumbers = arr => arr.filter(num => isPrime(num));

let primeNumbers = getPrimeNumbers(Arrays);

console.log(primeNumbers);





// e) Return all the palindromes in an array

let stringsArray = ["level", "cabin", "malayalam", "teddy", "refer", "racecar"];

let isPalindrome = str => {
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanStr === cleanStr.split("").reverse().join("");
};

let getPalindromes = arr => arr.filter(str => isPalindrome(str));

let palindromeStrings = getPalindromes(stringsArray);

console.log(palindromeStrings);









