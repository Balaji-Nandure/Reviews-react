/** @format */

import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setindex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (num) => {
        if (num > people.length - 1) {
            return 0;
        }
        if (num < 0) {
            return people.length - 1;
        }
        return num;
    };

    const nextPerson = () => {
        setindex((index) => {
            let newIndex = index + 1;

            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setindex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight></FaQuoteRight>
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='btn-container'>
                <button onClick={prevPerson} className='prev-btn'>
                    <FaChevronLeft></FaChevronLeft>
                </button>
                <button onClick={nextPerson} className='next-btn'>
                    <FaChevronRight></FaChevronRight>
                </button>
            </div>
            <button className='random-btn'>Suprise me</button>
        </article>
    );
};

export default Review;
