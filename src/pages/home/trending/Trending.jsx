import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import {SwitchTabs} from '../../../components/switchTabs/SwitchTabs'
import {Carousel} from '../../../components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch';
import '../style.scss';

export const Trending = () => {

  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) =>{
    setEndPoint(tab === "day" ? "day" :"week");
  }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />       
    </div>
  )
}
