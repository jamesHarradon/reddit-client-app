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

    const selectImage = (img) => {
        if (!img.includes('http') || !img) {
            return randomImage(imgArr);
        } else {
            return img;
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
                <img id='post-image' src={selectImage(post.data.thumbnail)} alt='post thumbnail'></img>
                <h3 className='post-title'>{reduceText(post.data.title)}</h3>
            </div>
            
            
            <ul className='post-bottom'>
                <div className='post-bottom-left'>
                    <li className='post-rating'><img id='arrow' src={arrow} alt='arrow'></img></li>
                    <li>{post.data.score}</li> 
                </div>

                <div className='post-bottom-right'>
                    <li><Link to='/comments'><img src={bubble} alt='bubble'
                    onClick={()=> dispatch(loadComments(`https://www.reddit.com/${post.data.subreddit_name_prefixed}/comments/${post.data.id}.json`))}></img></Link></li>
                    <li>{post.data.num_comments}</li>
                </div>
                
            </ul>
        </div>
    )
}