//IIFE - (Immediately Invoked Function Expression)

// a) Print odd numbers in an array 

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(numbersArray);



// b) 

let stringArray = ["guvi", "full stack developer", "guvi geeks"];

(function(arr) {
    let titleCaseArray = arr.map(function(str) {
        return str.replace(/\b\w/g, function(match) {
            return match.toUpperCase();
        });
    });

    console.log(titleCaseArray);
})(stringArray);




// c) Sum of all numbers in an array 

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    let sum = arr.reduce(function(acc, current) {
        return acc + current;
    }, 0);

    console.log(sum);
})(numbersArr);




// d) Return all the prime numbers in an array

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
    let isPrime = function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    let primeNumbers = arr.filter(function(num) {
        return isPrime(num);
    });

    console.log(primeNumbers);
})(numbersArray);




// e) Return all the palindromes in an array

let stringsArray = ["level", "cabin", "malayalam", "teddy", "refer", "racecar"];

(function(arr) {
    let isPalindrome = function(str) {
        let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return cleanStr === cleanStr.split("").reverse().join("");
    };

    let palindromeStrings = arr.filter(function(str) {
        return isPalindrome(str);
    });

    console.log(palindromeStrings);
})(stringsArray);




// f) Return median of two sorted arrays of the same size.

let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];

(function(arr1, arr2) {
    let combinedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let length = combinedArray.length;

    if (length % 2 === 0) {
        
        let median = (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2;
        console.log(median);
    } else {
        
        let median = combinedArray[Math.floor(length / 2)];
        console.log(median);
    }
})(array1, array2);





// g) Remove duplicates from an array

let arrayWithDuplicates = [11, 22, 33, 22, 44, 55, 66, 44, 77, 88, 99, 55, 87];

(function(arr) {
    let uniqueArray = arr.filter(function(value, index, self) {
        
        return self.indexOf(value) === index;
    });

    console.log(uniqueArray);
})(arrayWithDuplicates);





// h) Rotate an array by k times

let myArray = [548, 754, 465, 324, 512, 486];

(function(arr, k) {
    for (let i = 0; i < k; i++) {
        
        arr.unshift(arr.pop());
    }
    console.log(arr);
})(myArray, 2);
