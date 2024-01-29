const name="Aniket"
const count=20

console.log(name + count); // aise bhi concatenate kr skte h...par bad practice hai

console.log(`${name}${count}`);
console.log(`my name is ${name} and the count is ${count}`);//hmlog aise concatenate krenge ees tarike ko bolte h string interpolation jo backtick ()(`)ke andar likhte hai

const gameName=new String ("wagxani")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('x'));
console.log(gameName.substring(0,3));
console.log(gameName.slice(-999,3)); //esme negative number bhi de skte 
const newString="   aniket   "
const anotherString= new String("jod")
console.log(newString.trim());
console.log(newString.trimEnd());
console.log(gameName.replace('x','-'));
console.log(gameName.includes('wavegod'));
console.log(gameName.split('x'));
console.log(gameName.concat(anotherString));
console.log(gameName.match('g'));