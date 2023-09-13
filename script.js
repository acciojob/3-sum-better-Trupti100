function threeSum(arr, target) {
    // Sort the input array in ascending order.
    arr.sort((a, b) => a - b);
    
    // Initialize variables to store the closest sum and the minimum difference.
    let closestSum;
    let minDiff = Infinity;
    
    // Loop through the array.
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        
        while (left < right) {
            // Calculate the current sum.
            const sum = arr[i] + arr[left] + arr[right];
            
            // Calculate the difference between the current sum and the target.
            const diff = Math.abs(sum - target);
            
            // If the current difference is smaller than the minimum difference so far,
            // update the closestSum and minDiff variables.
            if (diff < minDiff) {
                closestSum = sum;
                minDiff = diff;
            }
            
            // Adjust the left and right pointers based on the current sum.
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return closestSum;
}

// Example usage:
const arr = [-1, 2, 1, -4];
const target = 1;
const closest = threeSumClosest(arr, target);
console.log(closest); // Output should be 2
