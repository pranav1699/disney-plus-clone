import Head from 'next/head'
import Brands from '../components/Brands'
import Header from '../components/Header'
import MoviesCollection from '../components/MoviesCollection'
import ShowsCollection from '../components/ShowsCollection'
import Slider from '../components/Slider'

export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}){


  return (
    <div className="">
      <Head>
        <title>Disney +</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative min-h-screen ">
        <Slider />
        <Brands />
        <MoviesCollection results={popularMovies} title="Popular Movies"/>
        <ShowsCollection results={popularShows} title="Popular Shows"/>
        <MoviesCollection results={top_ratedMovies} title="Top Rated Movies"  />
        <ShowsCollection results={top_ratedShows} title="Top rated Shows"    />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const [popularMoviesRes, popularShowsRes, top_ratedMoviesRes, top_ratedShowsRes] = await Promise.all([
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_key}&language=en-US&page=1`),
    fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_key}&language=en-US&page=1`),
    fetch(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_key}&language=en-US&page=1`),
    fetch(`
    https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_key}&language=en-US&page=1`),
  ]);
  const [popularMovies,popularShows,top_ratedMovies,top_ratedShows]=
  await Promise.all([
    popularMoviesRes.json(),
    popularShowsRes.json(),
    top_ratedMoviesRes.json(),
    top_ratedShowsRes.json(),
  ]);
  return {
    props:{
      popularMovies:popularMovies.results,
      popularShows:popularShows.results,
      top_ratedMovies:top_ratedMovies.results,
      top_ratedShows:top_ratedShows.results,
    },
  };
}