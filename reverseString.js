function reverse(str){
    let arr= str.split("");
    console.log(arr);
    let reversedArray = arr.reverse();
    console.log(reversedArray);
    let reversedString = reversedArray.join('');
    console.log(reversedString);
    return reversedString;
}
reverse("hajsdjsaasj");


// // const result = reverse("palindrome");
// function reverseString(str) {
//     // Step 1: Convert string to array
//     let strArray = str.split('');
    
//     // Step 2: Reverse the array
//     let reversedArray = strArray.reverse();
    
//     // Step 3: Join the array back into a string
//     let reversedString = reversedArray.join('');
    
//     // Step 4: Return the reversed string
//     return reversedString;
// }
// console.log(reverseString("hajsdjsaasj"));
// ;