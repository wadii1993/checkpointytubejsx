import React from 'react'
const feedback = [ {id : Math.random(),name:"Flen Fouleni",comment : "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"},
{id : Math.random(),name:"Flen Fouleni",comment : "hhhhhhhhhhhhhh"},
{id : Math.random(),name:"Flen Fouleni",comment : "hhhhhhhhhhhhhh"},
{id : Math.random(),name:"Flen Fouleni",comment : "hhhhhhhhhhhhhh"},{id : Math.random(),name:"ali",comment : "hhhhhhhhhhhhhh"}
,{id : Math.random(),name:"Flen Fouleni",comment : "hhhhhhhhhhhhhh"},
{id : Math.random(),name:"alFlen Foulenii",comment : "hhhhhhhhhhhhhh"},
{id : Math.random(),name:"Flen Fouleni",comment : "hhhhhhhhhhhhhh"},
{id : Math.random(),name:"Flen Fouleni",comment : "hhhhhhhhhhhhhh"},{id : Math.random(),name:"ali",comment : "hhhhhhhhhhhhhh"},
{id : Math.random(),name:"Flen Fouleni",comment : "hhhhhhhhhhhhhh"}];

const Comment = () => {
  return (
    <div>
        <input type="text" name="" id="" style={{width:"942px",height:"60px" , marginTop:"10px" , marginBottom:"10px"}} placeholder='Add a Comment'></input>
        {
            feedback.map((el)=>(
            <div key={el.id}>
                <div style={{ display : "flex"}}>
                <img style={{borderRadius:"100%"}} width={"80px"} height={"50px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wkTPwUomJS3UgxWkRpVOTNCVfQ46PEdhCQ&usqp=CAU' alt='profil'></img>
                <h4>{el.name}</h4>
                </div>
                <br></br>
                <p>{ el.comment}</p>
                <hr></hr>
            </div>))
        }
    </div>
  )
}

export default Comment