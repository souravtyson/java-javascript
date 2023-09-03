/*
Write a JavaScript function called findMissingNumber that takes in an array of consecutive numbers from 1 to N with one number missing, and returns the missing number.

For example, if the input array is [1, 2, 4, 5, 6], the function should return 3, as it's the missing number in the sequence.
*/


function findMissingNumber(nums) {
  let left = 0;
  let right = nums.length - 1

  while(left <= right){
      let mid = Math.floor((left + right) / 2)

      if(nums[mid] === mid + 1){
          left = mid + 1
      } else{
          right = mid - 1
      }
  }
  
  return left + 1

}

const arr = [1,2,4,5,6]
console.log(findMissingNumber(arr))