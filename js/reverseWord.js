export let exerciseReverseWord;

const reversingWords=(str)=>{
    let moveWord;
    moveWord= str.split(' ');
    let changeOrder;
    changeOrder= moveWord.reverse();
    let makingString;
    makingString= changeOrder.toString()
   return makingString
}
console.log(reversingWords('hey Lucas'));