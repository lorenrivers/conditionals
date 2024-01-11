// The UK ratings are U, PG, 12, 15, and 18.

let age = 5;
let movieRating = "PG";

if (age > 17) {
  console.log("You can watch any movie!");
} else if (age > 14) {
  console.log("You can watch U, PG, 12 and 15 rated movies");
} else if (age > 11) {
  console.log("You can watch U, PG and 12 rated movies");
} else if (age > 4) {
  console.log("You can watch U and PG rated movies with parental permission");
} else if (age < 4) {
  console.log("You can watch U rated movies with parental permission");
}
