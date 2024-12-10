/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  str_arr  = str.split('');
  let count = 0;
  for(let i=0 ; i<str_arr.length ; i++){
    if(str_arr[i] == 'a' || str_arr[i] == 'e' || str_arr[i] == 'i' || str_arr[i] == 'o' || str_arr[i] == 'u'){
      count ++;
    }
  }
  return count;
}

module.exports = countVowels;