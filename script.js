function stringChop(str, size) {
   if (inputString === null) {
    return [];
  }

  // Initialize an empty array to store the chunks
  const result = [];

  // Loop through the input string and create chunks
  for (let i = 0; i < inputString.length; i += size) {
    const chunk = str.substr(i, chunkLength);
    result.push(chunk);
  }

  return result;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));