import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectTrending, loadTrending } from "./trendingSlice";
import Post from "../post/Post";
import hot from '../../images/hot.png';

export default function Trending() {

    const trendingData = useSelector(selectTrending);
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

