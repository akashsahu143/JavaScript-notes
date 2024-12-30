const number =[1,-2,-3,4,5,-6];

let sum = 0;

for(let i =0;i<number.length;i++){
    if(number[i]>0){
        sum+=number[i];
    }
}
console.log(sum);