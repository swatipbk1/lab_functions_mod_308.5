// Function to increment the age field of an object.
function incrementAge(obj) {
  obj.age = (obj.age || obj.age === 0) ? obj.age + 1 : 0;
  obj.updated_at = new Date();
}

// Function to make a copy of an object, increment the age field of the copy, and return the copy
function incrementAgeAndCopy(obj) {
  // Create a shallow copy of the object
  const copy = { ...obj };
  
  // Increment the age field of the copy
  copy.age = (copy.age || copy.age === 0) ? copy.age + 1 : 0;
  
  // Add or update the updated_at field
  copy.updated_at = new Date();

  return copy;
}

// Example usage:
const person = { id: "42", name: "Bruce", occupation: "Knight", age: 41 };
incrementAge(person);
console.log("Original Object after incrementing age:", person);

const copiedPerson = incrementAgeAndCopy(person);
console.log("Original Object:", person);
console.log("Copied Object with Incremented Age:", copiedPerson);