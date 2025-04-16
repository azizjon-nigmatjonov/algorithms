function greeting(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  console.log("Please enter your name.");
  const name = 'samandar'
  callback(name);
}

processUserInput(greeting);
