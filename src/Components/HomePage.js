import React from 'react'
import List from './List'
import '../HomePage.css'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';


const HomePage = () => {

    return (
        <div>
            <div className="top">
                <Slide />
            </div>

            <div className="container">
                <h3>その他の研究</h3>
                <List />
                
            </div>
        </div>
    )
}

export default HomePage