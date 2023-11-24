import './Card.css';
import { useState } from "react";
import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


function Card({ id, image, description, price, title, removeTour }) {
    const notify = () => {
        toast.success('Liked successfully')
    }
    const notify1 = () => {
        toast.warning('Like removed')
    }
    let checkClick = true;

    return (

        <span className="Course">
            <div className="merge">
                <img src={image} className="image"></img>
                <Checkbox icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name="checkedH" className='like'
                    style={{ backgroundColor: 'white', color: "red" }}
                    onClick={() => {
                        if (checkClick) {
                            notify();
                            checkClick = false;
                        } else {
                            notify1();
                        }
                    }
                    } />
            </div>
            <h4 className="title">{title}</h4>

            <div className="text">{description.substring(0, 100) + '...'}</div>
        </span>

    );
}

export default Card;