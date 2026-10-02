// 1. Global variable
let genderType = "female";

// 2. Function
function printGender() {
  // 3. function-scoped variable
  let color = "brown"; 

  // 4. if condition
  if (genderType.startsWith("female")) {
    // 5. Inside if-block
    var age = 30; // var = function-scoped, NOT block-scoped
    let color = "pink"; // let = block-scoped, new variable only for this block
    
    console.log("Inside if-block, color is:", color); // pink
  }

  // 6. Outside if-block but inside function
  console.log("Inside function, outside if-block, color is:", color); // brown
  console.log("Inside function, outside if-block, age is:", age); // 30 - accessible because var is function-scoped
}

// 7. Call function and print global variable
printGender();
console.log("Global genderType is:", genderType); // female

// 8. Change global variable to "male" and observe
console.log("\n--- After changing global to 'male' ---");
genderType = "male";
printGender(); 
// Now if-block will not run, so age will give error, and only brown will print
console.log("Global genderType is:", genderType);