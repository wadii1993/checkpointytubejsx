import React from 'react'
const MainVideo ={
    vidUrl : "https://www.youtube.com/embed/phWxA89Dy94",
    title:"Learn Flexbox CSS in 8 minutes",
    hashtag:"#react #javascript #css"
}

const Video = () => {
  return (
    <div  >
        <iframe title='youtube' src={MainVideo.vidUrl} width={'942px'} height={'530px'}/>
        <h6 className="hash6">{MainVideo.hashtag}</h6>
        <h3 style={{color : 'black',fontFamily:'arial', fontSize:'18px', textAlign:"left" }}>{MainVideo.title}</h3>
        
    </div>
  )
}

export default Video;