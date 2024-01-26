// Step 4: Use the reduce method to calculate the sum of the ages
const sumOfAges = mappedAndIncremented.reduce((sum, person) => sum + person.age, 0);

// Step 5: Calculate the average age
const averageAge = sumOfAges / mappedAndIncremented.length;

console.log("Sorted by Age:", sortedByAge);
console.log("Filtered by Age (<= 50):", filteredByAge);
console.log("Mapped and Incremented:", mappedAndIncremented);
console.log("Sum of Ages:", sumOfAges);
console.log("Average Age:", averageAge);