# Exercise 1

## Question 1

Given an array of strings, convert each string into:
* uppercase if first letter is capital
* lowercase if first letter is small

```javascript

var arr = ['This', 'is', 'My', 'first', 'piece', 'OF', 'javaScript'];

// your code

console.log(arr); // it should be now: ["THIS", "is", "MY", "first", "piece", "OF", "javascript"]

```

## Question 2

Given an array of sentences, capitalize first letter of every word and lowercase every other letter of each sentence.

```javascript

var arr = ['heLlO woRlD', 'i like JavaScript', 'my name Is kHaN'];
// your magic

```
`sen1` should now be `['heLlO woRlD', 'I Like Javascript', 'My Name Is Khan']`


## Question 3

Given a string, count the number of vowels (`'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'`) occurred in it.

```javascript

var str = 'Hello Ahmed!';
var numberOfVowels = 0;
// your منتر

```
`numberOfVowels` should be `4`. How? There are four vowels in this string: `'e'`, `'o'`, `'A'` and `'e'`

## Question 4

Given a string, push the ASCII code of each alphabet (`A` to `Z` or `a` to `z`) to an array. Disregard the character which is not an alphabet.

```javascript

var str = 'He said: Javascript is a mess!';
var myArr = [];

// your code

```

The variable `myArr` should be: 
`[72, 101, 115, 97, 105, 100, 74, 97, 118, 97, 115, 99, 114, 105, 112, 116, 105, 115, 97, 109, 101, 115, 115]`

## Question 5

We need to verify that we got the correct output in the previous question. Since we are programmers, we have a way! 

Given the previous variable `myArr`, convert each number into its corresponding ASCII character. For e.g: `65` should be converted to `'A'`.

```javascript

var myArr = [72, 101, 115, 97, 105, 100, 74, 97, 118, 97, 115, 99, 114, 105, 112, 116, 105, 115, 97, 109, 101, 115, 115];

// your solution

```

The variable `myArr` should now be equal to:
`['H', 'e', 's', 'a', 'i', 'd', 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', 'i', 's', 'a', 'm', 'e', 's', 's']`

## Question 6

We are building an email system for Saylani Mass Training. We need to generate a list of emails from a given list of students' names.

An email will not contain any capital alphabets.

A name consists of a First Name and Last Name separated by a space. You have to convert it to an email like this:

`Muhammad Ali` -> `muhammad.ali@saylani.org`

`ahsan Bashir` -> `ahsan.bashir@saylani.org`

If the length of First Name is greater than `8`, just use the initial letter of First Name. For example: 

`Azarafrooz Hameed` -> `a.hameed@saylani.org`

Write a program that accepts a single parameter which is an array of students' names, and outputs an array of emails.

```javascript

var names = ['Muhammad Ali', 'ahsan Bashir', 'Azarafrooz Hameed'];
var emails = [];
// your program
 
```

`emails` should be now: 

`['muhammad.ali@saylani.org', 'ahsan.bashir@saylani.org', 'a.hameed@saylani.org']`

Bonus Question: Disallow any special characters and produce `'Invalid Email'` instead of an email.






