import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectHasFailed, selectIsLoading, selectTrending, loadTrending } from "./trendingSlice";
import arrow from '../../images/arrow.png';
import bubble from '../../images/bubble.png';
import { postedWhen } from '../../util/postedWhenFunc'



export default function Trending() {

    const trendingData = useSelector(selectTrending);
    const isLoading = useSelector(selectIsLoading);
    const hasFailed = useSelector(selectHasFailed);
    const dispatch = useDispatch();

    // function to work out how long ago a post was posted.
    
    useEffect(() => {
        dispatch(loadTrending())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

return (
    <div className='trending-container'>
    <h1>Trending</h1>
        <div className='trending-flex-container'> 
        {trendingData.map((post) =>            
            (
                <div key={post.data.id} className='trending-post'>
                    <ul className='trending-rating'>
                        <li><img id='arrow' src={arrow} alt='arrow'></img></li>
                        <li>{post.data.score}</li> 
                    </ul>
                    <ul className='trending-about'>
                        <li>{post.data.subreddit_name_prefixed}</li>
                        <li>{post.data.author}</li>
                        <li>{postedWhen(post.data.created)}</li>
                    </ul>
                    <h3 className='trending-title'>{post.data.title}</h3>
                    <ul className='trending-bottom'>
                        <li><img src={bubble} alt='bubble'></img></li>
                        <li>{post.data.num_comments}</li>
                    </ul>
                </div>

            )
        )}
        </div>



    </div>
)


}