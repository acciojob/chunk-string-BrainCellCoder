function stringChop(str, size) {
  // If the input string is null, return an empty array
  if (str === null || size <= 0) {
    return [];
  }

  const result = [];
  let index = 0;

  // Iterate over the string and create chunks of the given size
  while (index < str.length) {
    result.push(str.slice(index, index + size));
    index += size;
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
