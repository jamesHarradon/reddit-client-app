import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectTrending, loadTrending } from "./trendingSlice";
import Post from "../post/Post";
import hot from '../../images/hot.png';

export default function Trending() {

    const trendingData = useSelector(selectTrending);
    const isLoading = useSelector(selectIsLoading);
    const hasFailed = useSelector(selectHasFailed);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadTrending())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

return (
    <div className='trending-container'>
    <img id='hot' src={hot} alt='hot text'></img>
        <div className='trending-flex-container'> 
        {trendingData.map((post) => <Post post={post} /> )}
        </div>
    </div>
)


}


{/* <div key={post.data.id} className='trending-post'>
                    <ul className='trending-rating'>
                        <li><img id='arrow' src={arrow} alt='arrow'></img></li>
                        <li>{post.data.score}</li> 
                    </ul>
                    <ul className='trending-about'>
                        <li>{post.data.subreddit_name_prefixed}</li>
                        <li>{post.data.author}</li>
                        <li>{postedWhen(post.data.created)}</li>
                    </ul>
                    <img id='hot-thumbnail' src={selectImage(post.data.thumbnail)} alt='hot thumbnail'></img>
                    <h3 className='trending-title'>{post.data.title}</h3>
                    <ul className='trending-bottom'>
                        <li><Link to='/comments'><img src={bubble} alt='bubble'
                        onClick={()=> dispatch(loadComments(`https://www.reddit.com/${post.data.subreddit_name_prefixed}/comments/${post.data.id}.json`))}></img></Link></li>
                        <li>{post.data.num_comments}</li>
                    </ul>
                </div> */}