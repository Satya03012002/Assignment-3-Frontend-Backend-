import React, {useEffect, useState} from 'react'
import axios from "axios"
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';

function Card(props) {



    const [check, setcheck] = useState(true); 
    const [trash, settrash] = useState(true);

    const handleClick = () => {
        if(check){
            setcheck(false);
        }else{
            setcheck(true); 
        }
    
      
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
          <MDBCardBody> 
          <MDBBtn color='light' rippleColor='dark' style={{marginRight:"50px"}} onClick={handleClick}>{ check ? <MDBIcon style={{color: "red"}} far icon="heart" />:<MDBIcon style={{color: "red"}} fas icon="heart" /> }</MDBBtn>
          <MDBBtn color='light' rippleColor='dark' style={{marginRight:"50px"}}><MDBIcon far icon="edit" /></MDBBtn>
          <MDBBtn color='light' rippleColor='dark' style={{marginRight:"50px"}} onClick={handleDelete}><MDBIcon fas icon="trash" /></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </div>
  )
}

export default Card