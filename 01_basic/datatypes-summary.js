/* data ko tarike se categorize kiya gya h on the basis of ki data ko kaise store krte hai ya data ko kaise fetch krte hai 

>> Primitive datatype- ye humesha call be value hota h 
    7 Types -Number,String,Boolean,Null,Undefined,Symbol,BigInt */


    const score = 100           //datatype-Number
    const scoreValue = 100.3   //datatype-Number

    const isLoggedIn = false   //dataype-boolean
    const outsideTemp = null  // dataype-object
    let userEmail;            //datatype-undefined

    //symbol jo datatype h  na wo unique bnane me help krta h mtlb ki uske storage me jo data store rhega wo kisi aur me nahi hona chahiye

    const id = Symbol(123)             //datatype-Symbol
    const anotherId = Symbol(123)

    console.log(id === anotherId);      //Output-false (same h jbki tbhi    false aaya kyuki symbol use kiya gya h)

    const bigNumber = 34565435766292827929n //datatype-BigInt

    console.log(typeof bigNumber);
    




/* >> Non primitive or Reference Type- call by reference hota h
      3 Types-Array,Objects,Functions*/


    const hero=["ironman","captain america","hulk"]     //Datatype-object array

    const myObj={
        name:"ANiket",
        age:29,                             //Datatype-Object
        city:"Bksc"
    }

    const myFunction= function(){
        console.log("hello duniya");        //Datatype- Object Function
    }

     console.log(typeof(hero));

