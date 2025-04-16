function syncF () {
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve("sync done!"), 1000);
    // })

    setTimeout(() => {
        console.log('sync done');
    }, 1000);
}

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("async done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

syncF()
f();

let x1 = 1
let x2 = 2

setTimeout(() => {
    console.log('2')
}, 10);

console.log(x1)
console.log(x2)