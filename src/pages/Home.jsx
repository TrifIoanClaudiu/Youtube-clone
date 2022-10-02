import React from 'react'
import axios from "axios"
import styled from 'styled-components'
import Card from '../components/Card'
import {initialRoute} from "../utils/route"
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const fetchVideos = async () => {
        const res = await axios.get(initialRoute +"videos/random");
        setVideos(res.data);
    }

    fetchVideos();
  }, [])
  return (
    <Container>
        {videos.map((video) => {
          return <Card />
        })}
    </Container>
  )
}

export default Home