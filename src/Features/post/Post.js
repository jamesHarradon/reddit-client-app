import { useDispatch } from 'react-redux';
import arrow from '../../images/arrow.png';
import bubble from '../../images/bubble.png';
import { postedWhen } from "../../util/postedWhenFunc";
import { Link } from "react-router-dom";
import { loadComments } from "../comments/commentsSlice";
import { reduceText } from "../../util/reduceText";
import { randomImage } from '../../util/defaultIcon';

import redOne from '../../images/red-one.png';
import redTwo from '../../images/red-two.png';
import redThree from '../../images/red-three.png';
import redFour from '../../images/red-four.png';
import redFive from '../../images/red-five.png';
import redSix from '../../images/red-six.png';
import redSeven from '../../images/red-seven.png';
import redEight from '../../images/red-eight.png';

export default function Post({ post }) {

    const dispatch = useDispatch();
    

    let imgArr = [redOne, redTwo, redThree, redFour, redFive, redSix, redSeven, redEight];


    const imageOrVideo = (source) => {
        if (source.secure_media) {
            return <video controls='controls' id='post-video' width='320' height='240' autoPlay='true' loop='true' type='video/mp4' src={post.data.secure_media.reddit_video.fallback_url}></video>;
        } else if (source.url_overridden_by_dest && source.url_overridden_by_dest.includes('.jpg') ) {
            return <img id='post-image' alt='preview' height='auto' width='50%' src={source.url_overridden_by_dest}></img> 
        } else if (source.thumbnail) {
            return <img id='post-image' alt='preview' height='auto' width='auto' src={source.thumbnail}></img> 
        } else {
            return <img id='post-image' alt='preview' height='200' width='200' src={randomImage(imgArr)}></img> 
        }
    }

     

    return (
        <div key={post.data.id} className='post'>
            
            <ul className='post-about'>
                <li>{post.data.subreddit_name_prefixed}</li>
                <li>{post.data.author}</li>
                <li>{postedWhen(post.data.created)}</li>
            </ul>
            
            <div className='post-main'>
                {imageOrVideo(post.data)}
                
                <h3 className='post-title'>{reduceText(post.data.title)}</h3>
            </div>
            
            
            <div className='post-bottom'>
                <ul className='post-bottom-left'>
                    <li className='post-rating'><img id='arrow' src={arrow} alt='arrow'></img></li>
                    <li>{post.data.score}</li> 
                </ul>

                <ul className='post-bottom-right'>
                    <li><Link to='/comments'><img src={bubble} alt='bubble'
                    onClick={()=> dispatch(loadComments(`https://www.reddit.com/${post.data.subreddit_name_prefixed}/comments/${post.data.id}.json`))}></img></Link></li>
                    <li>{post.data.num_comments}</li>
                </ul>
                
            </div>
        </div>
    )
}