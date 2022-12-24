//console.log('asdsa')

/*console.log("asdsa");
console.log("asdsa");
*/


// console.log('hi')

// let my_name = "ritik"
// my_name= 'ayush'
// // console.log(my_name);

// console.log(my_name);
// console.log('my_name')


// const name =()=>{
   
//     {
//         let a = 10; 
//         //   console.log(a);
//     }
//       console.log(a)
// }
// name()

// let a = '1';
// let b= typeof(a);
// console.log(b);

// let a = null;
// console.log(a);


// for(let i=0;i<10;i++){
//     console.log(i);
// }

// for(let i=100;i>=0;i--){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// const arr = [1,2,8,4,5];
// for(let element of arr){
//     console.log(element);
// }
// for(let element in arr){
//     console.log(element);
// }

// const obj = {
//     key1: "value",
//     key2 : "value2",
//     key3 :'value3'
// }
// console.log(obj);


// for(let element in obj){
//     console.log(obj[element],element);
// }

// const arr = [1,2,4,5,7]
// console.log(arr[3])
// const arr = Object.entries(obj);
// console.log(arr);

// const numbers = [1,2,3,4,5,6];

// numbers.forEach((element,ind,numbers)=>{
//     console.log(element,ind);
// })

// const newarr= [];
// numbers.forEach((element,ind)=>{
//     const sq=ele.ment*element;
//     newarr[ind]=sq;
// })
// console.log(newarr)

// const sqarr = numbers.map(e => e * e); 

// console.log(sqarr);

// const marks = [
//     {
//         name : "himanshu sahu",
//         marks: 41

//     },
//       {
//         name : "Aditya",
//         marks: 43

//     },
//     {
//         name : "saumya bisht",
//         marks: 44

//     },
    
//     {
//         name : "nitin kumar",
//         marks: 42

//     }
    

// ];

// console.log(marks)
// const filteredarr = marks.filter((e,i,)=>{
//    if(e.marks>=42){
//     // console.log(e.marks)
//     return true;
//    }
//    else false;
// })

// console.log(filteredarr);


const products = [
  {
    product: "noodles",
    price: 150,
  },
  {
    product: "momos",
    price: "",
  },
  {
    product: "french fries",
    price: 120,
  },
  {
    product: "fried rice",
    price: "",
  },
  {
    product: "pizza",
    price: 250,
  },
  {
    product: "burger",
    price: 50,
  },
];

const filterarr = products.filter((e)=>{
    if(e.price){
        return true
    }
    // else false;
})
console.log(filterarr);
 
const newarr= filterarr.map((e)=>{
    return e.product
})
console.log(newarr)
// if(!e.price)
// if(e.price===0)



// const filterof = products.filter((e) => {
//   if (e.price > 0) return true;
// });
// console.log(filterof);