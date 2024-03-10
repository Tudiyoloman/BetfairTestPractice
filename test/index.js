const fs = require('fs');

function top3RatedMoviesByCategory(category, filePath) {
 fs.readFile(filePath, 'utf8', (err, data) => {
   if (err) {
     console.error('Error reading file:', err);
     return;
   }

   const movies = JSON.parse(data);

   // Filter movies by category
   const filteredMovies = movies.filter(movie => movie.category === category);

   // Sort movies by rating in descending order
   filteredMovies.sort((a, b) => b.rating - a.rating);

   // Select the top 3 rated movies
   const top3Movies = filteredMovies.slice(0, 3);

   // Print the top 3 movies
   if (top3Movies.length > 0) {
     console.log("Top 3 Rated Movies in", category + ":")
     top3Movies.forEach(movie => console.log("-", movie.title))
   } else {
     console.log("No movies found in category:", category)
   }
 });
}

const category = "Crime"
const filePath = "BetfairTestPractice/test/movies.json"
top3RatedMoviesByCategory(category,filePath)

