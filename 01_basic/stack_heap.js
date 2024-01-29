// javascript engine have two places to store data - >> Heap  >> Stack 

// all the primitve type data is stored in stack
// >> stack me actually original data change ni hota h...copy change hota h 

let myName="Aniket"

let anotherName=myName

anotherName="Rishu"

console.log(anotherName);
console.log(myName);


// all the reference type data is stored in heap
// >> heap me original data khud change ho jata h

let userOne={
    name:"Aniket",
    email:"ani@gmail.com",
}

let userTwo= userOne

userTwo.email = "aniket@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


