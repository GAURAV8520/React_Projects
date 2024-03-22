import React from "react";

function UserCard(props) {
  console.log(props.data.picture.large);

  return (
    <div className="flex items-center justify-center w-full h-96">
      <div className="inline-block h-auto w-auto bg-lime-300 p-10 rounded mt-40">
        <div className="flex items-center justify-center m-5">
        <img className="rounded-full w-44 h-44 p-5 m-5"  src={props.data.picture.large} alt="User"/>
        </div>
       

        <h1>
          Name : {props.data.name.title} {props.data.name.first} {props.data.name.last}{" "}
        </h1>
        <p>Phone No: {props.data.phone}</p>
        <p>City :{props.data.location.city}</p>

        
      </div>


      
    </div>
    
  );
}

export default UserCard;
