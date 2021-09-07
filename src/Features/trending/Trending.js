

const Trending = () => {

    const trendingData = [];

    // function to work out how long ago a post was posted.
    const postedWhen = (num) => {
    
        const diff = Date.now() - (num * 1000);
        const secs = Math.round(diff / 1000);
        const mins = Math.round(secs / 60);
        const hours = Math.round(mins / 60);
        const days = Math.round(hours / 24);
        
        if ( secs < 3600) {
            return `${mins} ago`
        } else if (secs < 86400) {
            return `${hours} ago`
        } else {
            return `${days} ago`
        }
    }

return (
    <div class='trending-container'>
        {trendingData.map((post) =>            
            (
                <div class='trending-post'>
                    <div class='trending-rating'>
                        <img>{/*up arrow image here*/}</img>
                        <p>{post.data.score}</p>
                        <img>{/*down arrow image here*/}</img>
                    </div>
                    <ul class='trending-top'>
                        <li>{post.data.subreddit_name_prefixed}</li>
                        <li>{post.data.author}</li>
                        <li>{postedWhen(post.data.created)}</li>
                    </ul>
                    <h3 class='trending-title'>{post.data.title}</h3>
                    <ul class='trending-bottom'>
                        <li>{/*comment logo here*/}</li>
                        <li>{post.data.num_comments}</li>
                    </ul>
                </div>

            )
        )}



    </div>
)





}