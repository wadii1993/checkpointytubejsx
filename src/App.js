
import './App.css';
import Comment from './comments/Comment';
import Description from './description/Description';
import Navbar from './navbar/Navbar';
import Video from './video/Video';
import VideoList from './videolList/VideoList';


function App() {
  return (
    <div className="App">
      <div><Navbar/></div>
      <div id="row1" style={{display:"flex"}}>
      <div id="col1">
      <Video/>
      <Description/>
      <Comment></Comment>
      
      </div>
      <VideoList></VideoList>
      </div>
    </div>
  );
}

export default App;
