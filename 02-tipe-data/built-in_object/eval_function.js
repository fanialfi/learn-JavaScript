// built-in object: eval()
// penggunaan function eval() memungkinkan dapat terjadinya cross-site scripting (XSS)
const result = eval("10+10");

console.log(`tipe data : ${typeof result}
value : ${result}`); // tipe data : number, value : 20
