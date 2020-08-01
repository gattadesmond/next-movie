import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import useSWR from "swr";
import axios from 'axios';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../../lib/config";

import HeroImage from "../blocks/HeroImage/HeroImage";
import SearchBar from "../blocks/SearchBar/SearchBar";
import FourColGrid from "../blocks/FourColGrid/FourColGrid";
import MovieThumb from "../blocks/MovieThumb/MovieThumb";
import LoadMoreBtn from "../blocks/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../blocks/Spinner/Spinner";


// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const fetcher = query => request('https://api.graph.cool/simple/v1/movies', query)

// const fetcher = url => axios.get(url).then(res => res.data)

// function fetchItems(endpoint) {
//   //React SWR hook
//   const { data, error } = useSWR(endpoint, fetcher);
//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }

function Home() {
  //Declare a new state variable
  const [movies, setMovies] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  //Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    setLoading(true);
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    
    fetchItems(endpoint);
    
  });

  return (
    <div className="rmdb-home">
      <HeroImage />
      <SearchBar />
      <FourColGrid />
      <Spinner />
      <LoadMoreBtn />
    </div>
  );
} 

export default Home;
