/*String Methods Exercise
Given a string of arbitrary length with any ascii characters. Write a function to determine whether
the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not
correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

*/



export let showString;

const evaluating=(str)=>{
let minus;
minus= str.toLowerCase();
console.log(minus.includes('english'));
}

console.log(evaluating('abcdenglish'));
console.log(evaluating('sjdasdaenglish'));
console.log(evaluating('sjdasdaenglsadgish'));
console.log(evaluating('englishabckasjdsa'));
console.log(evaluating('eNgLiShhabckasjdsa'));
console.log(evaluating('ENGLIShhabckasjdsa'));
console.log(evaluating('ENGLISHhabckasjdsa'));