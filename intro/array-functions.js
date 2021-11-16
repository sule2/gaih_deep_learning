const user = ["Ayşe","Mehmet","Murat"];
const users = [{name: "Fatma",age: 12},
{name: "Aliye" ,age: 27},
{name: "Kruvasan" ,age: 0}];
/*

some
every
include
*/
// push
/* user.push("Ali");
console.log(users); */

//map -> same with for loop
/* users.map((item) => {
    console.log(item.name);
}); */

//find
/* const findIt = users.find((item) => item.age > 20 && item.name === 'Aliye');
console.log(findIt); */

//filter
/* const filtered = users.filter(({name,age}) => age < 15 && name === 'Fatma');
console.log(filtered); */

//some -> returns true/false
/* const some = users.some((item) => item.age === 11);
console.log(some); */

//every -> returns true/false if the condition is met for every item
/* const every = users.every(item => item.age > 10);
console.log(every);
 */
//includes -> returns true/false
const meyveler = ['elma','armut','muz'];
const isIncluded = meyveler.includes('muz');
console.log(isIncluded);
