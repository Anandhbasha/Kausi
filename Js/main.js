// // // // variable
// // // // hoisting
// // // // var let const
// // // // console.log(a)
// // // // var a = 10
// // // // type->var
// // // //a ->variable name
// // // // = -> assignment operator ->right side irukka value left side la irukka variable assign pannum
// // // // 10-> value

// // // // var b =20

// // // // a=b
// // // // a=50
// // // // console.log(a)
// // // // var a = 10
// // // // var a =60
// // // // // print -> sep  cout>>"Hello\n" end
// // // // console.log("The a value is:"+a);
// // // // sep =" "

// // // // let
// // // //  let x = 50
// // // //  x=60
// // // //  console.log(x);


// // // //const 

// // // // const a = 10
// // // // a=20
// // // // console.log(a);


// // // // scope of variable
// // // // global scope
// // // // const x =10

// // // // {
// // // //     console.log(x);
    
// // // // }
 


// // // // local scope
// // // // {
// // // //     const x =10   
// // // // }
// // // // // // console.log(x);
 
// // // // {
// // // //     const x =20
// // // //     console.log(x);
// // // // }

// // // // operators
// // // // Arithmetic
// // //     // +,-,*,/,%,++,--
// // // // let a = 10
// // // // let b =5

// // // // console.log(a+b); //15
// // // // console.log(a-b);   //5
// // // // console.log(a*b); //50
// // // // console.log(a/b); //2
// // // // console.log(a%b); //0
// // // // console.log(a++); //10
// // // // console.log(++a);
// // // // //12
// // // // console.log(a--); //11
// // // // console.log(a);


// // // let a = 10
// // // let b =5
// // // // comaprison operator
// // //     // >,<.<=,>=,!=,==,===

// // // // console.log(a>b);
// // // // console.log(a<b);
// // // // console.log(a<=10);
// // // // console.log(a>=10);
// // // // console.log(a!=10);
// // // // console.log(a=='10');
// // // // console.log(a==='10');

// // // // logical
// // //     // && || 
// // // let age = 17
// // // let state = "TN"

// // // // console.log(age>=18 && state=="TN");
// // // // console.log(age>=18 || state=="KL");

// // // // let age = 15
// // // city = "SA"

// // // // console.log(!(age>=18) && state=="TN" || city=="SA");


// // // // // assigmnent
// // // //     // =,+=,-+,*+,/=,%=
// // // // let c =30

// // // // c+=5
// // // // console.log(c);





// // // // // ternary
// // // // let temp = 31
// // // // // condtion?expectedoutput:erroredouput
// // // // console.log(temp>=32?"switch on the Ac":"Switch on the fan");



// // // // Datatypes
// // // // premitive
// // // // number
// // // // boolean
// // // todayClass = true
// // // console.log(typeof(todayClass));

// // // // String
// // // userName = "arun"
// // // console.log(typeof(userName));

// // // // undefined
// // // let e =undefined
// // // console.log(typeof(e));

// // // // null
// // // let p = null
// // // console.log(typeof(p));

// // // // nan
// // // let t = 50
// // // console.log(t*userName);

// // // // non premitive
// // // // array
// // // let arr = [10,undefined,null,true,10.5]
// // // console.log(arr);

// // // // object
// // // person = {
// // //     userName:"anandh",
// // //     age:32,
// // //     address:"salem",
// // //     isALive:true
// // // }
// // // console.log(person);


// // // console.log((10+5)*2+(5-1)/2+50+(10%3));
// // // 15*2+4/2+50+1
// // //30+2+50+1
// // //83

// // // array
// // // let arr = [20,40,60,80]
// // // // console.log(arr[0]);
// // // // console.log(arr[1]);
// // // // console.log(arr[2]);
// // // // console.log(arr[3]);

// // // let arr2d = [[10,20,30],[50,70,80]]
// // // console.log(arr2d[1][0]);

// // // arr2d[0][2] = 100

// // // console.log(arr2d);

// // // // object
// // // data = {
// // //     prodName:"kitkat",
// // //     prodPrice:"50rs",
// // //     prodDesc:"lorem",
// // //     incredients:{
// // //         choca:"ghgghj",
// // //         sugar:"150gr",
// // //         flaour:{
// // //             oneflaour:"DarkCholate",
// // //             twofalour:"rdesreg"
// // //         }
// // //     }
// // // }

// // // console.log("The Product name is:"+data.prodName+"\nand the Price amount of the Product is"+data.prodPrice);

// // // console.log(data.incredients.flaour.onefalaour);


// // // const products = [
// // //     {
// // //     prodName:"kitkat",
// // //     prodPrice:"50rs",
// // //     prodDesc:"lorem",
// // //     incredients:{
// // //         choca:"ghgghj",
// // //         sugar:"150gr",
// // //         flaour:{
// // //             oneflaour:"DarkCholate",
// // //             twofalour:"rdesreg"
// // //         }
// // //     }
// // // },
// // // {
// // //     prodName:"Dairy Milk",
// // //     prodPrice:"50rs",
// // //     prodDesc:"lorem",
// // //     incredients:{
// // //         choca:"ghgghj",
// // //         sugar:"150gr",
// // //         flaour:{
// // //             oneflaour:"Fruit&nuts",
// // //             twofalour:"rdesreg"
// // //         }
// // //     }
// // // },
// // // {
// // //     prodName:"kitkat",
// // //     prodPrice:["50rs","100rs","80rs"],
// // //     prodDesc:"lorem",
// // //     incredients:{
// // //         choca:"ghgghj",
// // //         sugar:"150gr",
// // //         flaour:{
// // //             oneflaour:"DarkCholate",
// // //             twofalour:"rdesreg"
// // //         }
// // //     }
// // // }

// // // ]


// // // console.log(products[2].prodPrice[0]);



// // // conditional Statements
// // // if
// // let speed = 80
// // // if(speed>60){
// // //     console.log("Bike is running on High Speed");    
// // // }
// // // if else
// // //     if(speed>60){
// // //     console.log("Bike is running on High Speed");    
// // // }else{
// // //     console.log("Bike is running on Economy");
    
// // // }
// // // else if
// // //     if(speed>60){
// // //     console.log("Bike is running on High Speed");    
// // // }
// // // else if(speed<20){
// // //     console.log("Bike is running on low Speed");
// // // }else{
// // //     console.log("Bike is running on Economy");
    
// // // }
// // // let key = true
// // // let start = false

// // // if(key==true){
// // //     if(start==true){
// // //         console.log("Bike can move");        
// // //     }else{
// // //         console.log("Bike not yet Started");     
// // //     }
// // // }else{
// // //     console.log("Bike key is off");        

// // // }
// // // switch
// // let d = new Date()
// // day = d.getDay()

// // switch(day){
// //     case 0:
// //         console.log("Today is sunday")
// //         break
// //     case 1:
// //         console.log("Today is monday")
// //         break
// //     case 2:
// //         console.log("Today is tuesday")
// //         break
// //     case 3:
// //         console.log("Today is Wednesday")
// //         break
// //     case 4:
// //         console.log("Today is Thursday")
// //         break
// //     case 5:
// //         console.log("Today is Friday")
// //         break
// //     default:
// //         console.log("today is Saturday");
        
// // }



// //looping
// // while
// // let a =1
// // // console.log(a++);
// // // console.log(a++);
// // // console.log(a++);
// // // console.log(a++);
// // // console.log(a++);
// // // while(a<=10){
// // //     console.log(a + "* 5 =" +(a*5));
// // //     // 1*5 =5
// // //     a++
// // }
// // do while
// // let x =1
// // do{
// //     console.log("Do while");  
// //     x++  
// // }while(x<=5)
// // // for
// // for(let x=0;x<=5;x++){
// //     console.log("For loop");
    
// // }

// // let arr = [10,20,30,40]
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);

// // arrlength = 4
// // 0123

// // for(let x=0;x<arr.length;x++){
// //     console.log(arr[x]);
    
// // }


// // for(let x=arr.length-1;x>=0;x--){
// //     console.log(arr[x]);
    
// // }
// // K
// // ka
// // kau
// // kaus
// // kausi

// // let name =""
// // for(let x=0;x<arr.length;x++){
// //     name +=arr[x]
// //     console.log(name);
    
// // }

// // [80,88,544,66]

// // *
// // **
// // ***
// // ****
// // *****

// //      *
// //     ***
// //    *****
// //  ********


// // types of foo loop
// // in
// // for(let x in arr){
// //     console.log(arr[x]);    
// // }
// // of
// // for(let x of arr){
// //     console.log(x);    
// // }
// // each
// // let arr = "kausi"
// let arr = [10,20,30,40]
// // arr.forEach((item)=>console.log(item))
// // map
// // arr.map((item)=>console.log(item*2))
// // // filter
// // let three = arr.filter((a)=>a%3===0)
// // console.log(three);
// // // reduce
// // let total = arr.reduce((acc,sum)=>acc+sum) //0,10 =>10+20 = 30+30 = 60+40
// // console.log(total);
// // array methods

// let arr  = [10,20,80,60,70]
// // push

// arr[5] = 22000
// arr.push(1000)
// console.log(arr);

// // pop
// arr.pop()
// console.log(arr);

// // shift
// arr.shift()
// console.log(arr);

// // unshift
// arr.unshift(124)
// console.log(arr);

// // sort
// // arr = [20,10,15,18]
// // arr.sort()
// // console.log(arr);

// // slice
// console.log(arr.slice(0,4));

// // splice
// arr.splice(4,2,7000)
// console.log(arr);

// // find
// let guess = arr.find((item)=>item===7001)
// console.log(guess);

// // indexof
// console.log(arr.indexOf(7001));

// // includes
// console.log(arr.includes(124));

// // set
// let newSet = new Set()

// newSet.add("apple")
// newSet.add("Orange")
// newSet.add("Kiwi")
// newSet.add("Kiwi")
// console.log(newSet);

// // split
// let names = "This is Js Program"
// let newArr = names.split(" ")
// console.log(newArr);

// //join
// let lastarr = newArr.join("-")
// console.log(lastarr);

// //reverse
// let arr1 = [51,50,77,22,10]
// let rev = arr1.reverse((a,b)=>a-b)
// console.log(rev);

// // toLowerCase
// console.log(names.toUpperCase());
// // toUpperCase
// console.log(names.toLowerCase());


// function
//funtion -> keyword
// add -> funtion name 
// ()-> paremeter getting area
// {
// } ->block
// function add(){
//     let a = 10
//     let b= 20
//     console.log(a+b);    
// }


// add()

// function greet(name){
//     console.log("Hello",name);    
// }
// greet("kausi")
// greet("Arun")
// greet("Ajay")


// function greet(name){
//     return name;    
// }
// console.log("Hello",greet("kausi"));

// console.log("Hello",greet("Arun"));

// console.log("Hello",greet("Ajay"));


// function total (t,e,m,s,ss){
//     return t+e+m+s,ss
// }
// console.log(total(60,70,80,88,99));

// console.log(total(60,70,78,85,92));


// // // arrow
// const newfun = (a,b)=>{
//     return a*b
// }

// // console.log(newfun(10,20,30));


// // anonymous
// const ana = function(){
//     console.log(newfun(10,20,30));
// }
// ana()



// const avg = (totalmarks)=>{
//     return totalmarks/5
// }

// const total = function(t,e,m,s,ss){
//     sum = t+e+m+s+ss
//     console.log(avg(sum));
    
// }

// total(60,70,80,88,99)


// // IIFI
//  const iffi = (function(){
//     console.log("Hello");
    
//  })

//  iffi()


// 5*4*3*2*1 = 120


// Destructure
// let arr = [10,20,30,40]
// // let val1 = arr[0]
// // let val2 = arr[1]
// // rest operator
// // console.log(val1);
// // console.log(val2);
// const[val,val1,...val2] = arr
// console.log(val);
// console.log(val1);
// console.log(val2);

// const person = {
//     name:"arun",
//     city:"CBE",
//     age:20
// }

// const{name,age} = person
// console.log(name,age);


// spred operator
// let arr = ["apple","banana","kiwi"]
// let price = [100,30,150]

// let prod = [...arr,...price]
// console.log(prod);


// // console.log("The value is"+10);
// // console.log("The value is",10);


// // template literals
// let a =10
// console.log(`The value is ${a}`);
// // setTimeout
// setTimeout(()=>{
//     console.log("hello");
    
// },5000)
// setInterval
// setInterval(()=>{
//     console.log("hello");
// },5000)
// let avalible = 5
// for(let x =0;x<10;x++){
//     if(x==5){
//         break
//     }
//     console.log("Remaining Tickets",avalible-1);
//     avalible--
    
// }


// promise
// let a =10
// let a =20
// console.log("Hello");

const ticketBooking = new Promise((resolved,reject)=>{
    let booked = false
    if(booked){
        resolved("Ticket Booked Succesfully")
    }else{
        reject("Unable to book the Ticket")
    }

})

ticketBooking.then((result)=>console.log(result)).catch((err)=>console.log(err))


console.log("Succesfully Working");
