import React from 'react'
import Main from './Main'
import Row from './Row'
import requests from './Requests'
const Home = () => {
  return (
    <>
        <Main/>
        <Row rowId ="1" title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row rowId ="2" title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowId ="3" title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowId ="4" title='Horror' fetchURL={requests.requestHorror}/>
        <Row rowId ="5" title='Top Rated' fetchURL={requests.requestTopRated}/>

    </>
  )
}

export default Home