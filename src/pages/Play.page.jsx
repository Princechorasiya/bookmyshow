import React from 'react';
import DefaultLayoutHoc from '../layouts/Default.layout';
import PosterComponent from './../components/Poster/PosterComponent';
import PlayFilters from '../components/playFilters/PlayFilters';
//poster 

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className='text-2xl font-bold mb-4'>Plays in Phagwara</h2>

          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent isPlay={true} title="So rude of me"
              subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins "/>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent isPlay={true} title="So rude of me"
              subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins "/>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent isPlay={true} title="So rude of me"
              subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins "/>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent isPlay={true} title="So rude of me"
              subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins "/>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent isPlay={true} title="So rude of me"
              subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins "/>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent isPlay={true} title="So rude of me"
              subtitle="Comedy Shows | English,Kannada | 18yrs+ | 2hr 30mins "/>
            </div>


          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>

          <div className="">
            <PlayFilters title ="Date" tags ={["Today","Tomorrow","This Weekend"]}/>
          </div>
          <div className="">
            <PlayFilters title ="Language" tags ={["English","Kannada","Hindi","Telgu"]}/>
          </div>
        </div>
      </div>
    </>
  )
}


export default DefaultLayoutHoc(PlayPage);