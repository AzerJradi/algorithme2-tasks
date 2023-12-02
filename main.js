// task 1

// Function to calculate the dot product of two vectors
function dot_product(v1, v2) {
    if (v1.length !== v2.length) {
    throw new Error("Vectors must have the same length");
    }
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
    }
    return result;
}
    // Function to determine if two vectors are orthogonal
function areOrthogonal(v1, v2) {
    const dotProduct = dot_product(v1, v2);
    return dotProduct === 0;
}
    // Example usage with n pairs of vectors
    const n = 3; // Change this value as needed
    const vectors = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]; // Add more vectors as needed
for (let i = 0; i < n; i++) {
    const v1 = vectors[i];
    const v2 = vectors[i + 1]; 
    // You might want to adjust how you select vectors for pairs
    try {
    const orthogonal = areOrthogonal(v1, v2);
    console.log(`Vectors ${v1} and ${v2} are orthogonal: ${orthogonal}`);
    } catch (error) {
    console.error(`Error: ${error.message}`);
    }
}


// task 2 
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      // Pick the current element to be inserted
const currentElement = arr[i];
let j = i - 1;
      // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead of their current position
while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
}
      // Insert the currentElement into the sorted sequence
arr[j + 1] = currentElement;
    }
}
  // Example usage:
const arrayToSort = [12, 11, 13, 5, 6];
insertionSort(arrayToSort);
console.log("Sorted array:", arrayToSort);