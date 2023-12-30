// Anonymous function

// a) Print odd numbers in an array

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArr.forEach(function(number) {
    if (number % 2 !== 0) {
        console.log(number);
    }
});






// b) Convert all the strings to title caps in a string array

let stringArray = ["guvi", "full stack developer", "guvi geeks"];
function toTitleCase(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = toTitleCase(stringArray[i]);
}

console.log(stringArray);





// c) Sum of all numbers in an array

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbersArray.reduce(function(acc, current) {
    return acc + current;
}, 0);

console.log(sum);

            



// d) Return all the prime numbers in an array

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let isPrime = function (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let primeNumbers = numbersArr.filter(function (num) {
    return isPrime(num);
});

console.log(primeNumbers);





// e) Return all the palindromes in an array

let stringsArray = ["level", "cabin", "malayalam", "teddy", "refer", "racecar"];

let isPalindrome = function (str) {
   
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    return cleanStr === cleanStr.split("").reverse().join("");
};

let palindromeStrings = stringsArray.filter(function (str) {
    return isPalindrome(str);
});

console.log(palindromeStrings);






// f) Return median of two sorted arrays of the same size

let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];

let findMedian = function(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    let length = mergedArray.length;
    
    if (length % 2 === 0) {
        return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
};

let median = findMedian(array1, array2);

console.log(median);




// g) Remove duplicates from an array

let arrayWithDuplicates = [11, 22, 33, 22, 44, 55, 66, 44, 77, 88, 99, 55, 87];

let removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
    
        return self.indexOf(value) === index;
    });
};

let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log(arrayWithoutDuplicates);





// h) Rotate an array by k times

let myArray = [100, 500, 457, 789, 425];

let rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        
        arr.unshift(arr.pop());
    }
    return arr;
};

let rotatedArray = rotateArray(myArray, 3);

console.log(rotatedArray);



