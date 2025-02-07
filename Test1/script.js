//Summe von jeder 5. Zahl von -4 inkl bis 100
let sum1 = 0
for (let index = -4; index <= 100 ; index+=5) {
    sum1 = sum1 + index
}


//array, jede gerade zahl zusammenzählen
let array = [4,7,1,2,8,0,123,5636,23]
let sum2 = 0

for (let i = 0; i < array.length; i++){
    if(array[i]%2==0) {
        sum2+=array[i]
    }
}
console.log(sum2)


//Ist n gerade, so nimm als nächstes n/2 
//Ist n ungerade, so nimm als nächstes 3n+1
n = 7342
let ömer=0
while(n!=1){
    if (n%2==0) {
        n/=2
    }
    else{
        n=3*n+1
    }
    ömer+=1
    console.log(n)
}
console.log(ömer)
