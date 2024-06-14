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
