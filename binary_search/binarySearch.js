

 function binarySearch(list, item){
   const size = list.length-1
   let [start, end] = [0, size]
   let res = null
   let step = 0 

   while(start<=end){

     step+=1
     let guess
     let middle = Math.floor((start+end)/2)

     guess = arr[middle]
     
     if(guess===item){
       res ={
         position:middle,
         step
       }
       break
     }
     if(guess>item){
       end = middle -1
     }else{
       start = middle+1
     }
     
                      
   }

   return res 
 }

const arr = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(arr,2)) // { position: 1, step: 2 }
console.log(binarySearch(arr,8)) // { position: 7, step: 3 } 
console.log(binarySearch(arr,25)) // null
