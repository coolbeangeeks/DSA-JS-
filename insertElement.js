let a=[1,2,3,4,5];
let b=6;
const pos=4;
let n=a.length;
let c=[];
for(let i=0;i<n+1;i++){
    if(i<pos){
        c[i]=a[i];
    }
    else if (i>pos){
        c[i]=a[i-1];
    }
    else{
        c[i]=b;
    }
}
console.log(c);

// without using extra array.
let e = [1, 2, 3, 4, 5];
let f = 6;
const posi = 4;
let no = a.length;
for (let i = no; i > posi; i--) {
    e[i] = e[i - 1];
}
e[pos] = f;
console.log(e);
