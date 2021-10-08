// - Write a function that finds all positive numbers in the integer array that have their opposites in it as well.
    
//     Eg:  [-9, 4, -10, 15, 19, -8, -2, 3, 3, 9, -15, 10, -20]
    
//     Output : [-15, 15], [-10, 10], [-9, 9]
function positivePairs(arr){
    let newarr = [];
    let len = arr.length;
    for (let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            if (arr[i] == -Math.abs(arr[j]) || -Math.abs(arr[i]) == arr[j]){
                newarr.push(arr[i],arr[j]);
            }
        }
    }
    
}

console.log(positivePairs([-9, 4, -10, 15, 19, -8, -2, 3, 3, 9, -15, 10, -20]))

// Time complexity is n*n => n^2