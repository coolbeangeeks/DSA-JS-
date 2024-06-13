let fib=[];
let first =0;
let second=1;
let third=first+second;
fib.push(first,second);
let n=7;
let i=fib.length;
while(i<n){
    fib[i]=fib[i-1]+fib[i-2];
    i++;



}
console.log(fib);