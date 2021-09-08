import Posts from './Features/posts/Posts';
import Trending from './Features/trending/Trending';
import { Topics } from './Features/topics/Topics';
import './App.css';


function App() {
  return (
    <div className="App">
      <Topics />
      <Posts />
      <Trending />
    </div>
  );
}

export default App;
