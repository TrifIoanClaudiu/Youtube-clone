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

const Home = ({type}) => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const fetchVideos = async () => {
        const res = await axios.get(initialRoute + `videos/${type}`);
        setVideos(res.data);
    }

    fetchVideos();
  }, [type])
  return (
    <Container>
      {videos.map((video) => {
        return <Card key={video._id} video ={video} />;
      })}
    </Container>
  );
}

export default Home