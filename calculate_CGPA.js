var arr=[95,89,99,86,96];
var total=0;

for(var i=0;i<arr.length;i++){
    if(arr[i]>=91){
        total+=10;
    }
    if(arr[i]>=81 && arr[i]<=90){
        total+=9;
    }
    if(arr[i]>=71 && arr[i]<=80){
        total+=8;
    }
    if(arr[i]>=61 && arr[i]<=70){
        total+=7;
    }
    if(arr[i]>=51 && arr[i]<=60){
        total+=6;
    }
    if(arr[i]>=41 && arr[i]<=50){
        total+=5;
    }
    if(arr[i]>=33 && arr[i]<=40){
        total+=4;
    }
    if(arr[i]>=21 && arr[i]<=32){
        total+=0;
    }
    if(arr[i]>=00 && arr[i]<=20){
        total+=0;
    }
}


console.log(total);
console.log(total/arr.length);
