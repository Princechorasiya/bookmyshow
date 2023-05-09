import React from 'react';
import DefaultLayoutHoc from '../layouts/Default.layout';
import PosterComponent from './../components/Poster/PosterComponent';
import PlayFilters from '../components/playFilters/PlayFilters';
//poster 

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in Phagwara</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent
                isPlay={true}
                src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllcyUyMHBvc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent
                isPlay={true}
                src="https://media.istockphoto.com/id/1271634341/photo/teamwork-of-business-concept-group-of-businessperson-human-resources.jpg?b=1&s=170667a&w=0&k=20&c=4UPs-BQAusngpEqy_l12r85TVABVQbA_BvOUs8kUBNo="
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent
                isPlay={true}
                src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllcyUyMHBvc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent
                isPlay={true}
                src="https://media.istockphoto.com/id/1271634341/photo/teamwork-of-business-concept-group-of-businessperson-human-resources.jpg?b=1&s=170667a&w=0&k=20&c=4UPs-BQAusngpEqy_l12r85TVABVQbA_BvOUs8kUBNo="
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent
                isPlay={true}
                src="https://images.unsplash.com/photo-1659651466161-3fe1d2e3b98d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllcyUyMHBvc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <PosterComponent
                isPlay={true}
                src="https://media.istockphoto.com/id/1454115317/photo/the-view-outside.jpg?b=1&s=170667a&w=0&k=20&c=1eE5O-ZsfCHpru3-jGXefrOC2yKikS6gJGrjy3rPeug="
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Kannada", "Hindi", "Telgu"]}
            />
          </div>
        </div>
      </div>
    </>

  );
}


export default DefaultLayoutHoc(PlayPage);