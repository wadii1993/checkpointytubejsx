import React from 'react'

const videos = [{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},
{id:Math.random(),vid:"https://www.youtube.com/embed/Z4dTp3HiESs", title:"react introductio et chap1 et 2 et 3"},];

const VideoList = () => {
  return (
    <div>
        {
            videos.map(elm=> (
            <div style={{display:"flex", margin:"10px"}} key={elm.id}>
                <iframe width={"200px"} height={"auto"} src={elm.vid}></iframe>
                <h6>{elm.title}</h6>
            </div>))
        }
    </div>
  )
}

export default VideoList