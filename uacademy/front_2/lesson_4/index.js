
// const myMap = new Map()

// myMap.set({}, 2)
// myMap.set('name', 'yusuf')

// console.log(myMap.get('name'));
// console.log(myMap.get({}));
// console.log(myMap.has('name'));

// myMap.forEach((value, key, arr) => {
//     console.log(value, key, arr);
// })


const myArray = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
const myMap = new Map(myArray);
console.log(myMap); // Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

try {
    // Code that may throw an error
    const result = someUndefinedVariable + 10;
    console.log(result); // This line won't be executed
  } catch (error) {
    // Handling a specific type of error
    if (error instanceof ReferenceError) {
      console.log("ReferenceError occurred:", error.message);
    }
  }


  const routes = [
    {
      name: "Dashboard",
      route: "/dashboard",
      id: 'dashboard',
      children: [{
        name: "Statistics",
        route: "/dashboard/statistics",
        id: 'dashboard'
      }]
    },
    {
      name: "Organization",
      route: "/organization",
      id: "organization",
      children: [{
        name: "Restaurants",
        route: "/organization/restaurants",
        id: "organization"
      },
      {
        name: "Employees",
        route: "/organization/eployees",
        id: "organization"
      },
      {
        name: "Guests",
        route: "/organization/guests",
        id: "organization"
      }]
    },
    {
      name: "Reports",
      route: "/reports",
      id: "reports",
      children: [{
        name: "Reports create",
        route: "/reports/create",
        id: "reports"
      },
      {
        name: "Reports update",
        route: "/reports/update",
        id: "reports"
      }]
    }
  ]