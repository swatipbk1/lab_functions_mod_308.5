// Step 3: Map the array to change the “occupation” key to “job” and increment every age by 1
const mappedAndIncremented = filteredByAge.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: Number(person.age) + 1
  }));
  