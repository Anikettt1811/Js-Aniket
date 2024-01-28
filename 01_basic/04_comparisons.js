// ye sab to basic comparisons h ....malum hi h boolean value hi return krega(either true ya false)

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


// een sbme thoda dikkat aa skta h kyuki datatypes alag h comparisons ke liye .... ho skta h nummber me convert krke comparison kre ...number number me comparison h to koi dikkat ni hota ya string string hota h to ...alag datatypes me BT h

console.log("2" > 1);
console.log("02" > 1);




/* sbse jyda BT wla yhi h ....ho skta h esme aage bhi confused ho esme actually hota ye h ki sbko malum javascript thoda inconsistent language h thik h....yaha js me equality check (==) aur comparisons (>,<,<=,>=) pura alag tarah se kaam krta h ekdum differently ........comparisons converts null to a number, treating it as 0.....that's why in the 23rd line 
 null >=0 is true and in 21st line null>0 is false. */

console.log(null > 0);          //output-false
console.log(null == 0);         //output-false
console.log(null >= 0);         //output-true




// een teeno ka output false aayega

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===      ye hogya strictly check ....esme ye number ko to check krta hi h sath me datatype ko bhi check krta h

console.log("2" === 2);      //output-false
console.log("2" === "2");    //output-true