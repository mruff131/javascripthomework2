console.log('----------------------------------------------')
console.log('Two Codewar Problems Below:')
console.log('----------------------------------------------')

/*
Create a function that accepts a string and a single character,
 and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

*/


function strCount(str, letter){
    let occur = 0
    index = str.indexOf(letter)
    while (index !== -1){
        occur++
        index = str.indexOf(letter, index+1)
    }
    return occur
}

console.log(strCount("Helloooo", 'o'));

// function strCount(str, letter){  
//     return str.split(letter).length-1
//   }


/*
Create a function that takes an integer as an argument and returns
"Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  
    if (number % 2 == 0){
      return 'Even'
    } else {
      return 'Odd'
    }
  }
  console.log(evenOrOdd(5))