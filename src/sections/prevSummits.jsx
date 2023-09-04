import React from "react";
import PreSumCard from "../components/prevSumCard";
import VideoCard from "../components/videoCard";
import Idea from '../assets/img/idea.gif'
import { prevSummits } from "../data";
import Summit from '../assets/img/Summit.jpg';

function prevSummut() {
  return (
    <div className="relative font-darker-grotesque w-10/12 xs:w-11/12 py-10 space-y-10 min-h-[80vh]  flex flex-col ">
      <img src={Idea} className="absolute w-32 right-[-2vw] top-32 lg:top-14 -z-10" />
      <h1 className="font-bold md:font-[500] text-5xl text-[#0597F2] text-center md:text-[60px]">
        Explore Our Previous Summits
      </h1>
      <div className="lg:w-full flex flex-col lg:flex-row items-center w-full border-t-4 border-b-4 border-[#4656E1]">
        {prevSummits.map((summit, index) => (
          <PreSumCard summit={summit} key={index} />
        ))}
      </div>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col items-center gap-3 sm:justify-items-center">
        <VideoCard videoID={"fPmUPSigxrg"} />
        <VideoCard videoID={"k1wGLf7s5tA"} />
        <VideoCard videoID={"UqKGvZuhsCU"} />
        
        
      </div>
      <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col items-center gap-3 sm:justify-items-center">
        <VideoCard videoID={"jzyTX9SRTpk"} />
        <VideoCard videoID={"XrPAxDk_dM4"} />
        <img src={ Summit } alt="summit-image" className="w-full sm:[w-250px] xl:w-[350px] h-[250px] bg-gray-300 rounded-[20px]" />
      </div>
    </div>
  );
}
export default prevSummut;