import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight, FiDivideCircle } from 'react-icons/fi'

const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }

    }
    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }

    }

    function supriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className='w-[85vw] md:w-[700px]  bg-white flex-col justify-center items-center mt-10 p-10 transition-shadow duration-700 shadow-md rounded-md hover:shadow-xl '>
            <Card review={reviews[index]} />





            <div className='flex text-3xl mt-7 text-violet-400 font-bold gap-3 justify-center'>
                <button className='cursor-pointer hover:text-violet-500 ' onClick={leftShiftHandler}>
                    <FiChevronLeft />
                </button>
                <button className='cursor-pointer hover:text-violet-500 ' onClick={rightShiftHandler}>
                    <FiChevronRight />
                </button>
            </div>

            <div className='mt-6' >
                <button onClick={supriseHandler} className='bg-violet-400 py-2 font-bold text-white rounded-md px-10 text-lg hover:via-violet-500 transition-all duration-200 cursor-pointer'>Suprise Me</button>
            </div>



        </div>
    )
}

export default Testimonial