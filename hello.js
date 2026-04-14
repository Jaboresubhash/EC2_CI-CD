// // // // // // // // // console.log("hello world");
// // // // // // // // // x=3;
// // // // // // // // // function ns (num) {
// // // // // // // // //     result=num*num ;
// // // // // // // // //     return ns
// // // // // // // // // }
// // // // // // // // // console.log(result);

// var x=1;
// a ();
// b ();
// console.log(x);

 
// function a() {
//     var x=10;
//     console.log(x);
    
// }
// function b() {
//     var x=100;
//     console.log(x);
    
// }

// console.log(a);

// // // // // // // // // let a=10;
// // // // // // // // // {
// // // // // // // // //     //compound statement
// // // // // // // // //      var a=10;
// // // // // // // // //      let b =20;
// // // // // // // // //      const c=30;
// // // // // // // // // }
// // // // // // // //   /////set timeout
// // // // // // // // //    function a(){
// // // // // // // // //     // var x=2;
// // // // // // // // //     for (let i=1;i<=6;i++){
// // // // // // // // //         function close(x){
// // // // // // // // //     setTimeout(function()  {
// // // // // // // // //         console.log(x);
        
// // // // // // // // //     }, i * 2000);
// // // // // // // // // }
// // // // // // // // // close(x);
// // // // // // // // // }
// // // // // // // // //     console.log('hello subhash abcdefghijklmnopqrstuvwxyz ');
    
// // // // // // // // //    }
// // // // // // // // //    a()


// // // // // // // // // what is callback function in javascript
  
// // // // // // // // //      
// // // // // // // // // a();
// // // // // // // // // =============================
// // // // // // // // const radius =[3,1,2,9];
// // // // // // // // // const calArea=function(radius){
// // // // // // // // //     const output=[];
// // // // // // // // //     for (let i=0; i<radius.length;i++){
// // // // // // // // //         output.push(Math.PI * radius[i] * radius[i]);
// // // // // // // // //     }
// // // // // // // // //     return output;
// // // // // // // // // }
// // // // // // // // // console.log(calArea(radius));

// // // // // // // // const area =function(radius){
// // // // // // // //     return Math.PI * radius *radius;
// // // // // // // // }

// // // // // // // // const calcute=function(radius,logic){
// // // // // // // //     const output=[];
// // // // // // // //     for(let i=0; i<radius.length;i++){
// // // // // // // //         output.push(logic(radius[i]));
// // // // // // // //     }
// // // // // // // //     return output;
// // // // // // // // }
// // // // // // // // console.log(calcute(radius,area));
// // // // // // // //=====================================
// // // // // // // //map(), filter();reduce();


// // // // // // // // const arr =[3,2,1,4]; 
// // // // // // // //  Map();/===============
// // // // // // // // // function double(x){
// // // // // // // // //     return x *2;
// // // // // // // // // }
// // // // // // // // // const output=arr.map(double)
// // // // // // // // //  function tri(x){
// // // // // // // // //     return x.toString(2);
// // // // // // // // //  }
// // // // // // // // //  const output=arr.map(tri);
// // // // // // // // const output =arr.map((a)=>a.toString(2));

// // // // // // // // console.log(output);

// // // // // // // // filter()============
// // // // // // // // const arr =[3,2,1,4];
// // // // // // // // function onAdd(z){
// // // // // // // //     return z%2
// // // // // // // // }
// // // // // // // // const output=arr.filter(onAdd);

// // // // // // // // const output=arr.filter ((z)=>z%2)
// // // // // // // // const output1=arr.filter ((z)=>z<2)
// // // // // // // // const output2=arr.filter ((z)=>z>2)

// // // // // // // // console.log(output);
// // // // // // // // console.log(output1);

// // // // // // // // console.log(output2);

// // // // // // // // reduce()===============
// // // // // // // // const arr =[3,2,1,4,5,6];

// // // // // // // // function sumAll(arr){
// // // // // // // //    let max =0;
// // // // // // // //    for(let i=0;i>arr.length;i++){
// // // // // // // //     sum=suma+arr[i];
// // // // // // // //    }
// // // // // // // //    return sum;
// // // // // // // // }
// // // // // // // // console.log(sumAll(arr));

// // // // // // // const user=[
// // // // // // //     {fname:"subbu", lname:"jabore", age:"25"},
// // // // // // //     {fname:"ramya", lname:"s", age:"25"},
// // // // // // //     {fname:"elen", lname:"mask", age:"50"},
// // // // // // //     {fname:"robert", lname:"hod", age:"75"},
// // // // // // // ]
// // // // // // // // const output =user.map((x)=> x.fname +" "+x.lname)
// // // // // // // // console.log(output);

// // // // // // // const output =user.reduce(function (acc , curr){
// // // // // // //     if (acc[curr.age]){
// // // // // // //         acc[curr.age]= ++acc[curr.age];
// // // // // // //     }
// // // // // // //     else{
// // // // // // //         acc[curr.age]=1;
// // // // // // //     }
// // // // // // //     return acc;
// // // // // // // },{});
// // // // // // // console.log(output);


// // // // // // // ================================= 21/1/2025

// // // // // // // Promises  

// // // // // // // 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) |
// // // // // // //  2.) Inversion of control 2. Inversion of control is overcome by using promise.
// // // // // // //  2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
// // // // // // //  2.2) A promise has 3 states: pending | fulfilled | rejected. 
// // // // // // // 2.3) As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
// // // // // // //  2.4) A promise resolves only once and it is immutable. 
// // // // // // // 2.5) Using .then() we can control when we call the cb(callback) function.
// // // // // // //  3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// // // // // // //  4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

// // // // // // // Creating a promise
// // // // // // const cart = ["book","pen","pencil"]

// // // // // // const promise=createorder(cart);//orderId

// // // // // // promise.then(function(orderId){
// // // // // //     console.log(orderId);
    
// // // // // // })
// // // // // // .catch(function(err){
// // // // // //     console.log(err.message);
    
// // // // // // })

// // // // // // //producer
// // // // // // function createorder(cart){
// // // // // //     const pr=new Promise (function (resolves,rejected){
// // // // // //         //creatorder
// // // // // //         //validateCart
// // // // // //         //orderID
// // // // // //         if (!validateCart(cart)) {
// // // // // //             const err=new Error("cart is not valid");
// // // // // //             rejected(err)
// // // // // //         }
// // // // // //         //logic for createOrder
// // // // // //         const orderId="1123456456";
// // // // // //         if(orderId){
// // // // // //             setTimeout(function (){
// // // // // //                 resolves(orderId)
// // // // // //             },5000);
// // // // // //         }
        
// // // // // //     })
// // // // // //     return pr;
// // // // // // }
// // // // // // function validateCart(cart){
// // // // // //     return false;
// // // // // // }


// // // // // // ====================22/1/25
// // // // // // 1. Promise can be created using a new Promise() constructor function.
// // // // // // 2. This constructor function takes a callback function as argument. 
// // // // // // 3. The callback function has 2 arguments named 'resolve' and 'reject'. Resolve and reject are the keywords provided by JS.
// // // // // // 4. We can only resolve or reject a promise. Nothing else can be done.
// // // // // // 5. An error can also be created using new Error('error message').
// // // // // // 6. There is also .catch() which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
// // // // // // 7. .catch only handles error of .then() that are present above it. If there is any .then() below it, catch will not handle any error for that, also that ,then will get executed no matter what.
// // // // // // 8. It can be useful in a way if we want to catch error for a particular portion of a chain.
// // // // // // 9. We can have multiple catch based on requirement and then a general catch at the end.
// // // // // // 10. Always remember to return a value in the promise chain for the next .then to use .
// // // // // // 11. If it returns a value => It will be  used as an argument in next function. If it is a promise then the next .then in the promise chain is attached to the promise returned by the current callback function.

// // // // // Homework:


// // // // // const cart = ['shoes', 'pants', 'kurta'];

// // // // // createOrder(cart)
// // // // //   .then(function(orderId) {
// // // // //     console.log(orderId);
// // // // //     return orderId;
// // // // //   })
// // // // //   .then(function(orderID) {
// // // // //     return proceedToPayment(orderID)
// // // // //   })
// // // // //   .then(function({ message, amt }) {
// // // // //     console.log(message, 'of amount:', amt);
// // // // //     return showOrderSummary(message, amt);
// // // // //   })
// // // // //   .then(function({ message, amt }) {
// // // // //     console.log('Your wallet has beed debited by:', amt);
// // // // //   })
// // // // //   .catch(function(err) {
// // // // //     console.log(err.message);
// // // // //   })
// // // // //   .then(function() {
// // // // //     console.log('No matter what happens, I will get executed');
// // // // //   });



// // // // // function createOrder(cart) {
// // // // //   const pr = new Promise(function(resolve, reject) {
// // // // //     // create order
// // // // //     // Validate Cart
// // // // //     // orderId
// // // // //     if (!validateCart(cart)) {
// // // // //       const err = new Error('Cart is not valid!');
// // // // //       reject(err);
// // // // //     }
// // // // //     // logic for createOrder
// // // // //     const orderId = '12345';
// // // // //     if (orderId) {
// // // // //       setTimeout(function() {
// // // // //         resolve(orderId);
// // // // //       }, 5000)
// // // // //     }
// // // // //   });

// // // // //   return pr;
// // // // // }

// // // // // function proceedToPayment(orderID) {
// // // // //   // Logic for handling payment.
// // // // //   // This function returns a promise
// // // // //   return new Promise(function(resolve, reject) {
// // // // //     // logic
// // // // //     resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
// // // // //   })
// // // // // }

// // // // // function showOrderSummary(paymentInfo, amt) {
// // // // //   return new Promise(function(resolve, reject) {
// // // // //     // console.log(amt);
// // // // //     if (amt >= 2000) {
// // // // //       resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
// // // // //     } else {
// // // // //       reject(new Error('Please buy more for discount'));
// // // // //     }
// // // // //   })
// // // // // }

// // // // // function validateCart(cart) {
// // // // //   // code to validate cart.
// // // // //   return true;
// // // // //   // return false;
// // // // // }
// // // // // ============================================

// // // // //  Async/await------------

// // // // const p1 =new Promise ((resolve,reject)=>{
// // // //  setTimeout(() => {
// // // //     resolve ("Prosese will resolved")
// // // //     console.log("Hello subhash");
    
// // // //  }, 3000);
// // // // })

// // // // const p2 =new Promise ((resolve,reject)=>{
// // // //     setTimeout(() => {
// // // //        resolve ("Prosese will resolved sucessful")
// // // //     //    console.log("Hello subhash");
       
// // // //     }, 6000);
// // // //    })

// // // //    async function  dev() {
// // // //     console.log("Hii subhash");
// // // //      const val=await p1
// // // //      console.log("Good boy subhash");
// // // //      console.log(val);

// // // //      const val2 = await p2;
// // // //      console.log("subbu");
// // // //      console.log(val2);
     
     
     
// // // //    }
// // // //    dev();


// // // // ==================  fetch api

// // // const API=" https://api.github.com/users"

// // // async function dev() {

// // //     try {
// // //         const data=await fetch(API)
// // //         const user= await data.json()
// // //         console.log(user);
// // //     } catch (error) {
// // //         console.log(err);
        
// // //     }
  
 
// // // }
// // // dev()
// // // ===============================23/01/2025
// // // promise API

// // const p1 =new Promise ((resolve ,reject)=>{
// //     // setTimeout(() => {
// //     //     resolve("p1 is fullfill")
// //     // }, 3000);
// //     setTimeout(() => {
// //         reject("p3 is fail")
// //     }, 2000);
// // })
// // const p2 =new Promise ((resolve ,reject)=>{
// //     // setTimeout(() => {
// //     //     resolve("p2 is fullfill")
// //     // }, 7000);
// //     setTimeout(() => {
// //         reject("p3 is fail")
// //     }, 2000);
// // })
// // const p3 =new Promise ((resolve ,reject)=>{
// //     // setTimeout(() => {
// //     //     resolve("p3 is fullfill")
// //     // }, 2000);
// //     setTimeout(() => {
// //         reject("p3 is fail")
// //     }, 2000);
// // })
// // // ========Promise.all===========
// // // Promise.all([p1,p2,p3])
// // // .then((res)=>{
// // // console.log(res);

// // // })
// // // .catch((err)=>{
// // //     console.error(err);
    
// // // })
// // // ========Promise.allsettled===========

// // // Promise.allSettled([p1,p2,p3])
// // // .then((res)=>{
// // // console.log(res);

// // // })
// // // .catch((err)=>{
// // //     console.error(err);
    
// // // })
// // // ========Promise.race===========

// // // Promise.race([p1,p2,p3])
// // // .then((res)=>{
// // // console.log(res);

// // // })
// // // .catch((err)=>{
// // //     console.error(err);
    
// // // })
// // // ========Promise.any===========

// // Promise.any([p1,p2,p3])
// // .then((res)=>{
// // console.log(res);

// // })
// // .catch((err)=>{
// //     console.error(err);
// //     console.log(err.errors);
    
// // })


// // ====================================================
// // this keyword-------------------

// // 1 this in globe space 
// // console.log(this);

// // // 2 this inside a function 

// // function x(){
// //     console.log(this);   
// // }
// // x()

// // 3 this in strict mode -(this substitution)
// // =>if the value this keyword is undefine or null
// // => this keyword will be replaced with global only in non
// // 4 this value depends in how this is called(window)
// // 5 this inside a objects method


// // 6 call apply  bind methode(sharing methode)
// // 7 this inside arrow function 
// // 8 this inside nested arrow function
// // 9 this inside DOM

// const str = "small";

// function isPalindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return reversed === str;
// }

// console.log(`Is "${str}" a palindrome?`, isPalindrome(str));

