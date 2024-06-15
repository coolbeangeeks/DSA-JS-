let a=[1,2,3,4,5];
let pos=2;
for(let i=pos;i<a.length-1;i++){
    a[i]=a[i+1];
}
a.length=a.length-1;
console.log(a);