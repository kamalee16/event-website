//sort
let strong=[40,10,20,5,30]
let ascending=strong.sort((a,b)=>a-b)
console.log(ascending)
//ascending=[5,10,20,30,40]
//for descending (a,b)=>b-a

//reduce
console.log(res)
ressorted=strong.splice(2,1,100)
console.log(ressorted)
//splice(index,number of element to remove from that index,the number to add instead)
//output:res1=40,10,100,5,30

//reduce(accumulator,current element)
let number=[10,20,30,40]
let resreduces=number.reduce((total,num)=>{
  return total+num;
},20);//20 initial value of total
console.log(resreduces);
//with initial value the total=initial value, num=first element
let res=number.reduce((total,num)=>{
  return total+num;
});
//without initial value the total=first element, num=second element

//some
let number=[10,20,15,15];
let ressome=number.some((n)=>{return n>20});
console.log(ressome);
// it return true is any satisfy the condition

//every
let number=[10,20,15,15];
let ress=number.some((n)=>{return n<30});
console.log(ress);
//return true if every element satisfy the condition

spread with Array
const first=[1,2,3,4]
const sec=[5,6,7,8]

const combin=[...first,...second];
