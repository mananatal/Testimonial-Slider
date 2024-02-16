import { useState } from "react";
import Card  from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function Testimonials({reviews})
{
    const [index,setIndex]=useState(0);

    function handleLeftSlide()
    {
        if(index<=0)
        {
            setIndex(reviews.length-1);
        }
        else
        {
            setIndex(index-1);
        }
        
    }

    function handleRightSlide()
    {
        if(index>=reviews.length-1)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index+1);
        }
    }

    function handleSurprise()
    {
        let rndIndex=Math.floor(Math.random()*reviews.length);
        setIndex(rndIndex);
    }

    return (
        <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review={reviews[index]} />

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
                <button className="cursor-pointer hover:text-violet-500" onClick={handleLeftSlide}>
                    <FiChevronLeft />
                </button>

                <button className="cursor-pointer hover:text-violet-500" onClick={handleRightSlide}>
                    <FiChevronRight />
                </button>
            </div>

            <div className="mt-6">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg" onClick={handleSurprise}>
                    Surprise Me
                </button>
            </div>
        </div>
    );
}