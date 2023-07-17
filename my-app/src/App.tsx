import { useEffect, useState } from 'react';

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<object[]>([]);
  const getMoives = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`)).json();
      setMovies(json.data.movies);
      setLoading(false);
  };
  useEffect(() => {
    getMoives();
  }, []);
  return (
    <div>
      {loading ? <h1>loading....</h1> : null}
      <div>
        {movies.map((movie: any) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt=''/>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g: any) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
