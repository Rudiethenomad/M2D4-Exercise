/* EXERCISE 1
  Given the object below, write a piece of code for programmatically removing the last skill from the skills array inside the me object.
 */
/*
const me = {
  name: "Joh",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.skills.pop();
console.log(me)
*/


/* EXERCISE 2
Write a piece of code to create an array of only ODD numbers from 1 to 100
 */
/*
const arr = []
for (let n = 1; n <= 100; n++)
{
  if (n % 2 !== 0)
  {
    arr.push (n);
  }
}
console.log(arr)
*/
//even though we have never covered the Math funcition I think #3 should be Math.random

/* EXERCISE 3
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 100 inclusive
 */
/*
const arr1 = []
for (let n = 1; n <= 10; n++)
{
  const ran = Math.floor (Math.random() * 101 + 1);
  arr1.push(ran);
}
console.log(arr1);

*/
/* EXERCISE 4
  Write a piece of code for getting only even numerical values from an array . 
 */
/*
const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,17,18,21,25,22,29,30];

const even = [];
  for (let i = 0; i < arr2.length; i++)
  {
    if (arr2[i] % 2 === 0) 
    {
      even.push(arr2[i]);
    }
  }
  console.log(even);
*/
/* EXERCISE 5
Write a piece of code to sum up the numbers in an array
 */
/*
const arr3 = [45,56,34,99,190,1000,1,-71];
let total = 0;
for (let i = 0; i < arr3.length; i++)
{
  total = total + arr3[i];

}
console.log (total);
*/
/* EXERCISE 6
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
/*
const arr4 = [1,2,3,4,5,6,7,8];

for (let i = 0; i < arr4.length; i++)
{
  if (typeof arr4[i] === "number")
  {
    arr4[i] = arr4[i] +1;
  }
}
console.log (arr4);
*/



/* EXERCISE 7 (EXTRA)
 Write a piece of code for deleting only even entries from an array.
*/
/*
const arr5 =[1,2,3,4,5,6,7,8,9];
const odd = []
for (let i = 0; i < arr5.length; i++)
{
  if (arr5[i] %2 === 0)
  //if (arr5[i] %2 !== 0) 
  {
    arr5.splice(i--, 1);
    //odd.push(arr5[i]);
  }
}
console.log(arr5);
//console.log(odd);

function removeEvens(numbers) {
    return numbers.filter(n => n % 2 !== 0);
}


const oddNumbers = removeEvens([1, 2, 3, 4, 5,6,7,8,9]);
console.log(oddNumbers);
*/


/* EXERCISE 8
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 10 inclusive WITHOUT duplicates
 */

/*
const arr6 = [];

while (arr6.length < 10) {
  const rand = Math.floor(Math.random() * 10 + 1);
  if (!arr6.includes(rand)) {
    arr6.push(rand);
  }
}

console.log(arr6);

*/




/* EXERCISE 9
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/



/*
const str = 'Beer, Buds and fresh POW POW, on the runs in the Mountains living the life Peace out Brother ;).  Answer:';

console.log(`${str} ${str.length *4}`);

*/



/* EXERCISE 10
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* EXERCISE 11
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 12
    Write a piece of code to  find the oldest movie in the provided movies array.
*/

/* EXERCISE 13
    Write a piece of code to get the number of movies contained in the provided movies array.
*/

/* EXERCISE 14
    Write a piece of code to create an array with just the titles of the movies contained in the provided movies array.
*/

/* EXERCISE 15
   Write a piece of code to get only the movies produced in this millennium from the provided movies array.
*/

/* EXERCISE 16
   Write a piece of code to get  the movie with the  id given below from the provided movies array.
*/
const id = "tt0355702";

/* EXERCISE 17
     Write a piece of code to get  the  the sum of all the years in which the movies in the provided movies array have been produced.
*/

/* EXERCISE 18
   Write a piece of code to get  all the movies in the provided movies array which contain the string value (provided below) in the title.
*/
