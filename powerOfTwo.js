function powerOfTwo(n){
    while(n!=1){
        if(n%2!==0) return false;
        n=n/2;
    }
    return true;
}
let n=24;
console.log(powerOfTwo(n));