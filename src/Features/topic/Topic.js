
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
import { useHistory } from "react-router";



export default function Topic({ topic }) {
   
    let imgArr = [redOne, redTwo, redThree, redFour, redFive, redSix, redSeven, redEight];

    const history = useHistory();

    const onClickHandler = (subreddit) => {
        history.push(`/topicPage/${subreddit}`)
        
    }

    return (
        
            <div key={topic.data.id} className='topics' onClick={() => onClickHandler(topic.data.display_name)}>
                <h3 className='topics-title'>
                    <li>{topic.data.title}</li> 
                </h3>
                <div className='topics-description'>
                    <img id='topic-image' src={topic.data.icon_img  || randomImage(imgArr)} alt='topic icon'></img>
                    <p>{reduceText(topic.data.public_description)}</p>
                </div>
                <ul className='topics-bottom'>
                    <li>{topic.data.subscribers} Subscribers</li>
                </ul>
            </div>
        
    )
}