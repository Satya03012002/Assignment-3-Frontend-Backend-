import React, {useEffect, useState} from 'react'
import axios from "axios"

import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,MDBCol} from 'mdb-react-ui-kit';

function New() {

    const[boxdata, setboxdata] = useState([])
    
    const getImageUrl = async()=>{
       
            try{
            
    
              const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
              
              const data = await res.data;
              console.log(data)

              setboxdata(data.map((obj) => ([ ...obj ])))
              if(data){
                 console.log(boxdata)
              }
          
            }catch(err){
              alert(err)
            }


    }

    useEffect(() => {
        // const subscribe = () => {
        //     getImageUrl();


        // }
        // return subscribe();

        getImageUrl();

    }, []);

  return (
    <div >
    
    {/* {boxdata.map((image)=>{
        return<><Card style={{ width: '18rem' }} key={Math.random()}>  <Card.Body >{image.title}</Card.Body>  </Card> <br></br></>
    })} */}

{/* 
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    
    {boxdata.map((image)=>{
        return<>  <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
     </>
    })}

   
    </MDBRow>  */}
    </div>
  )
}

export default New
