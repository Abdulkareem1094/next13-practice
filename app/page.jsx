import Movie from "./Movie"

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()
  
  return (
    <main>
      <input className="w-60 h-10 my-6 px-3 border-2 outline-none rounded-2xl" type="search" name="search" id="" />
      <div className="grid grid-cols-fluid gap-10">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}
