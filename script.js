function stringChop(str, chunkLength) {
    // Initialize an empty array to store the chunks
    const chunks = [];

    // Iterate through the string in steps of chunkLength
    for (let i = 0; i < str.length; i += chunkLength) {
        // Extract a chunk of length chunkLength from the string
        const chunk = str.slice(i, i + chunkLength);
        
        // Push the chunk to the array of chunks
        chunks.push(chunk);
    }

    // Return the array of chunks
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
