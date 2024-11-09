let coding =['js','pyhton','java','c','cpp']
// coding.forEach(function(a){
//     console.log(a);
// })
// coding.forEach((a)=>{
//     console.log(a);
// })
// function printcoding(a){
//     console.log(a);
// }
// coding.forEach(printcoding)
let myCoding =[{
    language:"java",
    fileName:"java",
},
{
    language:"python",
    fileName:"py",
},
{
    language:"java script",
    fileName:"js",
}
]
myCoding.forEach((a)=>{
    console.log(a.fileName);
})