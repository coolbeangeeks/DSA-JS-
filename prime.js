
function prime(n){
    for(let i=2;i<=n-1;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;

}
let n=9;
console.log(prime(n))
