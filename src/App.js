import logo from './logo.svg';
import './App.css';
import { Users } from './card';
import {Fragment} from "react"

let user1={
name : "Amit" ,
image :"https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" ,
designation : "Graphic Designer" ,
description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design"
}
 let user2 = {
	name : "Ruhi" ,
	image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
	description : "Perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups.",
	designation : "Singer"
}

let descstyle={
  fontSize:"12px",
  padding:"3px",
  marginLeft:"5px"
}
 let imagestyle={
            borderRadius: "50px",
            marginLeft: "20px",
            marginTop: "20px",
            borderWidth: "2px",
            width:"100px",
           height:"100px"
          }
 let image={
            borderRadius: "60px",
            marginLeft: "20px",
            marginTop: "20px",
            border: "5px solid white",
            width:"100px",
           height:"100px",
          }
  let heading={
  
            fontFamily: "Arial, Helvetica, sans-serif",
            marginLeft: "15px",
          
  }
  let title={
   marginLeft: "15px"
  }
  let containerstyle={

          backgroundColor: "#fc97f7",
          height: "400px",
          width: "100%",
          paddingTop: "20px",
          display:"flex"
  }
  function App() {
  return (
    <Fragment>
      <div style={containerstyle}>
        <Users
          heading={heading}
          title={title}
          name={user1.name}
          image={user1.image}
          styleimage={image}
          designation={user1.designation}
          description={user1.description}
          descstyle={descstyle}
        />
     
        <Users
          heading={heading}
          title={title}
          name={user2.name}
          image={user2.image}
          styleimage={image}
          designation={user2.designation}
          description={user2.description}
          descstyle={descstyle}
        />
      </div>
    </Fragment>
  );
}

export default App;

	
