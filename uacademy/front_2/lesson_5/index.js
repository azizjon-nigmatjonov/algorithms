

try {
    // Code that may throw an error
    const result = someUndefinedVariable + 10;
    console.log(result); // This line won't be executed
  } catch (error) {
    // Handling a specific type of error
    console.log(error);
    if (error instanceof ReferenceError) {
      console.log("ReferenceError occurred:", error.message);
    }
  }
