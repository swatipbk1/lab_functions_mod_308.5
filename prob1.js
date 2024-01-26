let marks=[10,10,10];
let sum=0;
let avg=0;
for(let val of marks) {
    sum=sum+ val;
} 
avg=sum/marks.length;
console.log(`Average marks of the class is ${avg}`);