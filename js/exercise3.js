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