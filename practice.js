// let num=9;
// let isprime=true;

// if(num===1){
//   console.log('1 is a neither priem')
// }
// else if(num>1){
//   for(i=2; i<num;i++){
//     if(num%i==0){
//       isprime=false;
//       break;
//     }
//   }
//   if(isprime){
//     console.log('the number is prime number');
//   }
//                 else{
//                 console.log('the number is not a prime numeber');
//                 }
                
// }
// else{
//   console.log('the not a prime  number');
// // }


// let isprime=true;
// let x=[];
// for (i=2;i<=100;i++){
//     for(j=2;j<i;j++){
//         if(i % j==0){
//             isprime=false;
//             break;
//         }
//     }
//     if(isprime){
//          x.push(i);
//     }
//     isprime=true;
// }
// console.log(x);


// let x=5;
// let n1=0, n2=1, nextTerm;

// for (i=1;i<=x;i++){
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
//     console.log(n1);
// }



// let sum=0;
// let num=153;
// let x=num;

// while(num>0){
//     rem=num%10;
//     sum+=rem*rem*rem;
//     num=Math.floor(num/10);
// }
// if(sum==x){
//     console.log(`${x} is a Armstrong number`);
// }
// else{
//     console.log(`${x} is Not a Armstrong number`);
// }


// function Palindrome(num){

// let sum=0;
// let x=num;
// while(num>0){
//     let rem = num%10;
//     sum=sum*10+rem;
//     num=Math.floor (num/10);
// }
// if(sum==x){
//     console.log('Palindrome Number');
// }
// else{
//     console.log("Not palindrome number");

// }
// }
// Palindrome(124);


let x=10;

for (i=2;i<=x;i++){
    if(x%i==0){
        console.log(i);
    }
}
