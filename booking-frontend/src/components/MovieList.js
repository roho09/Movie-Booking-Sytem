// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetch IMDb Top 250 page
        const response = await axios.get('https://www.imdb.com/chart/top');
        const html = response.data;

        // Load HTML into Cheerio
        const $ = cheerio.load(html);

        // Extract movie data
        const moviesData = [];
        $('.lister-list tr').each((index, element) => {
          const title = $(element).find('.titleColumn a').text().trim();
          const year = $(element).find('.titleColumn span.secondaryInfo').text().replace('(', '').replace(')', '').trim();
          const rating = $(element).find('.imdbRating strong').text().trim();

          moviesData.push({
            title,
            year,
            rating,
          });
        });

        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>IMDb Top 250 Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.title} ({movie.year})</h3>
            <p>IMDb Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
