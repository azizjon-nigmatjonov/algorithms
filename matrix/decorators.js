function doSomething(name) {
  console.log("Hello, " + name);
}

function loggingDecorator(wrapped) {
  return function () {
    console.log("Starting");
    const result = wrapped.apply(this, arguments);
    console.log("Finished");
    return result;
  };
}

const wrapped = loggingDecorator(doSomething);
wrapped('muhammad')


const greeting = (name) => {
  console.log('Helloo', name)
}

const decorator = (secondFunc) => {
  return function () {
    console.log('starting my function')
    const result = secondFunc.apply(this, arguments)
    console.log('finish my function')
    return result
  }
}

const funcstions = decorator(greeting)
funcstions('Javohir')