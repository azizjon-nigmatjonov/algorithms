// const addTwoNumbers = function(l1, l2) {
//     while(l1 || l2) {
//         let val1 = 0
//         let val2 = 0
//         if (l1) {
//             console.log('1', l1.next)
//             val1 = l1
//             l1 = l1.next;
//         }
//         if (l2) {
//             val2 = l2;
//             l2 = l2.next;
//         }
//         let sum = val1 + val2
//         console.log(`${val1} + ${val2} = ${sum}`)
//     }
// }


// const lengthOfLongestSubstring = function(s) {
//     let currentStr = []
//     let longestStringLength = 0;
//     for (let i = 0; i < s.length; i++) {
//         const currentCharacterPosition = currentStr.indexOf(s[i])
//         if (currentCharacterPosition !== -1) {
//             // Chop the array off after the occurence of the character
//             currentStr.splice(0, currentCharacterPosition + 1);
//         }
//         currentStr.push(s[i]);

//         // Store the current string length if bigger than the existing record
//         longestStringLength = Math.max(
//             longestStringLength,
//             currentStr.length
//         );
//     }
//     return longestStringLength
// }

// const findStr = lengthOfLongestSubstring('abb')
// console.log(findStr)


// function arrayDiff(a, b) {
//     let currentArray = []
//     for (let i = 0; i < a.length; i++) {
//         let isBEqua = false
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] == b[j]) isBEqua = true
//         }
//         if (!isBEqua) currentArray.push(a[i])
//     }
//     return currentArray
// }

// console.log(arrayDiff([1,2,2,2,3], [2]))

const generaeRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

console.log(generaeRandomColor())