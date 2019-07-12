// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
let counter = 3;
export { firstName, lastName, year };

export function incCounter() {
 return counter++;
}