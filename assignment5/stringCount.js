function StringEquation(N, str) {
    //write code here
    let lowerCount=0;
    let upperCount=0;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    for(let ele of str){
       for(let i=0; i<lowerCase.length; i++){
           if(ele===lowerCase[i]){
               lowerCount++
           }else if(ele===upperCase[i]){
               upperCount++;
           }
       }
    }
    console.log((5*lowerCount)+(3*upperCount))
}
let str = "AmanZ"
let N = str.length;
StringEquation(N, str)
  


