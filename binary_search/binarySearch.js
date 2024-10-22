

 function binarySearch(list, item){
   const size = list.length-1
   let [start, end] = [0, size]
   let res = null
   let time = 0 

   while(start<=end){
     time+=1
     let guess
     let middle = Math.floor((start+end)/2)

     guess = arr[middle]
     
     if(guess===item){
       res ={
         position:middle,
         time
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
console.log(binarySearch(arr,2)) // { position: 1, time: 2 }
console.log(binarySearch(arr,8)) // { position: 7, time: 3 } 
console.log(binarySearch(arr,25)) // null
