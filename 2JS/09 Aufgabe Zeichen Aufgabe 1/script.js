/*
Write a program that prints the numbers from 1 to 222 
except for multiples of 5 where you have to print "Foo" and for the multiples of 7 where you have to print "Bar". 
For numbers which are multiples of both 5 and 7 print "FooBar".
*/
for(i=1;i<=222;i++){
    if(i%5==0 && i%7==0){
        console.log("FooBar")
    }
    else if(i%5==0){
        console.log("Foo")
    }
    else if(i%7==0){
        console.log("Bar")
    }
    else{
        console.log(i)
    }
}