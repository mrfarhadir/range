# Ranger

lightweight library for creating arrays of numbers 
### Installation:
```
npm install ranger --save
```

#### Methods:
- **`init`**
> create array with simple string

**Examples:**
```javascript
const  R  =  require('./dist/ranger.js').default.init
  
// without step (default is 1)
let  arr  =  R("10:20")
console.log(arr)
// [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
  
// with step
arr  =  R("0:20:5")
console.log(arr)
// [ 0, 5, 10, 15, 20 ]
  
// count down
arr  =  R("48:36")
console.log(arr)
// [ 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36 ]
  
// count down with step
arr  =  R("10:-10:5")
console.log(arr)
// [ 10, 5, 0, -5, -10 ]
  
// float numbers
arr  =  R("0:5:0.75")
console.log(arr)
// [ 0, 0.75, 1.5, 2.25, 3, 3.75, 4.5 ]
```


any question ?
[Ask It :)](http://mrfarhad.ir/#!/contact)

made with :heart: for you