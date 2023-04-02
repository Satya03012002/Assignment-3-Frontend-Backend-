import React, {useEffect, useState} from 'react'
import axios from "axios"
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';
import Popupform from './Popupform';

function Card(props) {



    const [check, setcheck] = useState(true); 
    const [edit, setedit] = useState(false);


    const handleClick = () => {
        if(check){
            setcheck(false);
        }else{
            setcheck(true); 
        }
    
      
    }
    const handleEdit = () => {
        // if(check){
        //     setedit(false);
        // }else{
        //     setedit(true); 
        // }
        setedit(true); 
    
      
    }
    const handleClose = () => {
        // if(check){
        //     setedit(false);
        // }else{
        //     setedit(true); 
        // }
        setedit(false); 
    
      
    }


    const handleDelete = () => {
        props.onDelete(props.email);
      };
    
    // const navigate = useNavigate();
    // const handleDelete = async()=>{
    //     const data = await deletedata();
    //     await navigate("/");
    //     await navigate("/blogs")
    //     console.log(data);
  
    //   }




  return (
    <div>
        <MDBCol>
        <MDBCard>
          <MDBCardImage
            src=  {`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
            alt='...'
            position='top'
          />
             {/* <MailOutlineIcon/> */}
          <MDBCardBody>
            <MDBCardTitle>{props.username}</MDBCardTitle>
         
            <MDBCardText>
            <MDBIcon far icon="envelope" /> {props.email}
            </MDBCardText>
            <MDBCardText>
            <MDBIcon fas icon="phone" /> {props.phone}
            </MDBCardText>
            <MDBCardText>
            <MDBIcon fas icon="globe" />  {props.website}
            </MDBCardText>
          </MDBCardBody>
          <MDBRow>
          <MDBCol><MDBBtn color='light' rippleColor='dark'  onClick={handleClick}>{ check ? <MDBIcon style={{color: "red"}} far icon="heart" />:<MDBIcon style={{color: "red"}} fas icon="heart" /> }</MDBBtn></MDBCol>
          <MDBCol><MDBBtn color='light' rippleColor='dark' ><MDBIcon far icon="edit" onClick={handleEdit}/><Popupform trigger = {edit} onClose= {handleClose}/></MDBBtn></MDBCol>
          <MDBCol><MDBBtn color='light' rippleColor='dark'  onClick={handleDelete}><MDBIcon fas icon="trash" /></MDBBtn></MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>

    </div>
  )
}

export default Card