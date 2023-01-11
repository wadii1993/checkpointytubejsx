import React from 'react'
import { Button } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillDislike, AiFillLike} from 'react-icons/ai'
import {RiShareForwardFill} from 'react-icons/ri'
import {FiDownload} from 'react-icons/fi'
import ParagAccordion from '../paragAccordion/ParagAccordion'

const descriptionelements ={
    imgUrl : "https://yt3.ggpht.com/rn6FdUja6V224On4xyuSgcUrQyTPAHaUBA3MQmLr-ChvxSGeCmdGTvkZvJXjvgO-uZc1cxqS=s48-c-k-c0x00ffffff-no-rj",
    chanel_title:"Slaying The Dragon",
    nb_abones:"9k abonneés"
}
const Description = () => {
  return (
    <div>
    <div style={{display :"flex"}}>
        <div style={{ width :"310px", display:"flex" , flexDirection:"row" , justifyContent:"space-between"}} >
            <div>
                <img src={descriptionelements.imgUrl} height='40' width='auto' style={{borderRadius: '100%'}}></img>
            </div>
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , marginLeft:"-20px"}}>
            <h5>{descriptionelements.chanel_title}</h5>
            <h6>{descriptionelements.nb_abones}</h6> 
            </div>
            <Button style={{width:"120px",height:"40px" , borderRadius:"25px"}} variant="secondary">S'Abonner</Button>
        </div>
        <div style={{display:"flex",flexDirection:"row", marginLeft:"120px"}}>
            <div>
            <Button style={{width:"80px",height:"40px" , borderRadius:"25px"}} variant="secondary"><AiFillLike/>15.5k</Button>
            <Button style={{width:"80px",height:"40px" , borderRadius:"25px"}} variant="secondary"><AiFillDislike/> </Button>
            </div>
            <div>
            <Button style={{width:"120px",height:"40px" , borderRadius:"25px"}} variant="secondary"><RiShareForwardFill/>partager</Button>
            <Button style={{width:"130px",height:"40px" , borderRadius:"25px"}} variant="secondary"><FiDownload/>telecharger</Button>
            <Button style={{width:"80px",height:"40px" , borderRadius:"25px"}} variant="secondary"><BsThreeDots/></Button>
            </div>
        </div>
    </div>
    <ParagAccordion/>
    </div>
  )
}

export default Description