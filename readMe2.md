if..else

the if statement executes a statement if a sepcified condition is truthy

if the condition is falsy
another statement can be executed 

function testNum(a) {
    let result;
    if(a> 0) {
        result = 'positive';
    } else {
        result = 'NOT positive';
    }
    return result;
}

console.log(testNum(-5));
//expected output: "NOT positive"

we have a number that is an integer, a whole number 

whole numbers are a set of numbers that include all positive numbers along with 0, whereas integers are numbers that include positive numbers and negative numbers along with 0

an integer is colloquially defined as a number that can be written wiuthout a fractional component.
-2048 is an integer
squareroot numbers are notm, neither is 5+1/2

we have an integer, since it is a number without fractions, it is a negative number, it is less than 0 as it is negative,
our if statements executes if e specified condition is truthy

our condition was that if a>0 then wwe would return result as positive 

we reutrn result and our conditions say what the result must be depending on the size of a


if

anmd else not positiveee


function params

arguments parenthessiss 


ghave a const that we use for the link 

const.innerhtmlll html javascript linkk 


API AWAIT FETCH ::: if we alter the url to be wrong this message appears:: 

 Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://jsonpaceholder.typicode.com/posts. (Reason: CORS request did not succeed). Status code: (null).

 also this:: 

  Uncaught (in promise) ReferenceError: detailContainer is not defined
    getPostsFromApi http://127.0.0.1:5500/js/scriptTrash.js:19
    async* http://127.0.0.1:5500/js/scriptTrash.js:27
------this is because it now needs our container to show the message after our url went wrong 