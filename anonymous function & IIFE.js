// 1.Do the below programs in anonymous function & IIFE

// a. Print odd numbers in an array

//Anonymous Function

let array=[1,2,3,4,5,6,7,8,9,];
let array = function(){
     
  for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
            console.log(array[i]);
      } 
    }
  }(array);

 // Output : [1,3,5,7,9]


//IIFE Function

(function (arr) {
    for (let i in arr) {
      if (arr[i] % 2 === 1) {
        console.log(arr[i]);
      }
    }
  })([1, 2, 3, 4, 5, 6, 7, 8]);

  // Output : [1,3,5,7,9]



  //b. Convert all the strings to title caps in a string array

//Anonymous :
let str = function () {
  let arr = "hello there how are you"
  let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  console.log(titlecase)
}
str()

//OUTPUT: My Name is Alfina

//IIFE : 

(function (str) {
str = str.toLowerCase().split(' ');
for (var i = 0; i < str.length; i++){
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
console.log(str.join(' '));
})("my name is alfina")

//OUTPUT: Hello There How Are You


//c.Sum of all numbers in an array


//Anonymous :

let func = function () {
    
  let ar = [1, 2, 3, 4, 5]
  let sum = ar.reduce(function(a, b){
      return a + b;
  });
  console.log(sum);
}
func()


//OUTPUT: 15


//IIFE :

(function () {
  let sum = [1, 2, 3, 4].reduce(add, 5);
  function add(accumulator, a) {
    return accumulator + a;
  }
  console.log(sum);
})()

//OUTPUT: 15


//d.Return all the prime numbers in an array

//Anonymous:
let n=34;
let l=function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
l(n);

//IIFE:
let n=34;
(function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
})(n);
  



//e. Return all the palindromes in an array

//Anonymous :

let isPalindrome = function () {
  var myArray = ['alfina', 'racecar', 'honda', 'madam '];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
}
isPalindrome()

//IIFE :

( function () {
  var myArray = ['alfina', 'racecar', 'america', 'madam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
})()

//OUTPUT: racecar madam


//f.Return median of two sorted arrays of same size.

//Anonymous :
let median = function(nums1, nums2) {
  let s1= nums1.length
  let s2= nums2.length
  let index = s1+s2
  if(s1==0){
      if(s2%2==1){
          return nums2[Math.floor(index/2)]
      }else{
          return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
      }
  }
  for(let i=0 ; i<index/2+1;i++){
          nums1.push(nums2[i])
      }
  nums1.sort((a,b)=>a-b)
  console.log(nums1)
  if(index%2==1){
      return nums1[Math.floor(index/2)]
  }else{
      return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
  }
  
}
let arr1 = [1, 12, 15, 26, 38,24];
let arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));
//OUTPUT: 20.5



//IIFE :
(function(nums1, nums2) {
  let s1= nums1.length
  let s2= nums2.length
  let index = s1+s2
  if(s1==0){
      if(s2%2==1){
          return nums2[Math.floor(index/2)]
      }else{
          return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
      }
  }
  for(let i=0 ; i<index/2+1;i++){
          nums1.push(nums2[i])
      }
  nums1.sort((a,b)=>a-b)
  console.log(nums1)
  if(index%2==1){
      return nums1[Math.floor(index/2)]
  }else{
      return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
  }
  
});

 




//g. Remove duplicates from an 

//Anonymous :

let findDuplicates = function () {
  
  const yourArray = [1, 1, 2, 3, 4, 5, 5]
  let duplicates = []
  const tempArray = [...yourArray].sort() 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i])
    }
  }
  console.log(duplicates) 
}
findDuplicates()


//OUTPUT: [1, 5]



//IIFE :


var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
   return(dup);
 })
 (array);



//h.Rotate an array by k times

//Anonymous :


let rotateArray =function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
rotateArray([1,2,3,4,5],2)


//OUTPUT:  [4, 5, 1, 2, 3]


//IIFE :

(function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
})([1,2,3,4,5],2)

//OUTPUT:  [4, 5, 1, 2, 3]

