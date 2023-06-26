import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import MovieList from "../components/MovieList";
const Home = () => {
  const [movies, setMovies] = useState();
  const dataFetch = async () => {
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.data);
      });
  };

  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <div className={styles}>
      <MovieList data={movies} />
    </div>
  );
};

export default Home;
