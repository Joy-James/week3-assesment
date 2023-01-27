//1.Will the below two functions output the same results? Explain your answer.
/*The two functions will NOT output the same result. 
The  difference is that the first function uses a lowercase "r" in the word "return" and the second function uses an uppercase "R". 
In JavaScript, the language is case-sensitive, AND the keyword "return" is  case-sensitive, 
so it will  NOT work the same way in both lowercase and uppercase.*/
function foo1() {

    return {bar: "hello"};
    
    }
    console.log("foo1 returns:");
    console.log(foo1());
    foo1();


    /*function foo2() {
    
    Return {bar: "hello"};
    
    }
    console.log(foo2());
    foo2();*/

    //2.Write a simple function that returns a Boolean indicating whether a string is a palindrome

    function isPalindrome(str) {
        str = str.replace(/\W/g, '').toLowerCase();
        return (str == str.split('').reverse().join(''));
      }
 console.log(isPalindrome("MADAM"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("alaula"));  // logs 'true'



//3.Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers.
      
let input = prompt("Enter numbers separated by commas:");

 let numbers = input.split(",");  // split the input string into an array of numbers

let  sum = 0;

// use a for loop to iterate through the numbers array
for (let  i = 0; i < numbers.length; i++) {
  sum += parseInt(numbers[i]);  // add each number to the sum
}

console.log("The sum of the numbers is: " + sum);


//4.Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children
function Traverse(p_element,p_callback) {
    p_callback(p_element);
    let list = p_element.children;
    for (let  i = 0; i < list.length; i++) {
        Traverse(list[i],p_callback); 
    }
 }
 console.log(Traverse());
Traverse();
