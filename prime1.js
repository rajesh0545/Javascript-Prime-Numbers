
// function Prime(x){
//     for(i=2;i<x;i++){
//         for(j=2;j<i;j++){
//             if(i%j==0){
//                 break;
//             }
//             else{
//                 console.log(i);
//             }
//         }
//     }
//   }
//   Prime (100)



let isPrime = true;
var x=[];

console.log("Prime numbers from 1 to 100 are: ");

for(let i=10; i <= 100; i++){
  for(let j=2; j < i; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    
    x.push(i);
  }
  isPrime = true;                                                      
  
}
console.log(x)


// let isprime=true;
// for(i=5; i<=11; i++){
//   for(j=2;j<i; j++){
//     if(i % j==0){
//       isprime=false;
//       break;
//     }
//     }
     
//     if(isprime){
//       console.log(i);
  
//   }
//   isprime=true;
// }



