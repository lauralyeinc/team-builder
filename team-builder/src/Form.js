import React, { useState } from "react"; 


function Form(props) {
  const [MembersInfo, setMembersInfo] = useState({name: "", email: "", role: "" }); 

const handleChange = event => {
  setMembersInfo({ ...MembersInfo, [event.target.name]: event.target.value });
}; 


const handleSubmit = event => {
  event.preventDefault();
  props.addMember(MembersInfo); 
  setMembersInfo({name: "", email: "", role:"" })
}


  return (
    <div className="form-area">

      <form onSubmit={handleSubmit}>
        <label htmlFor="name:"> 
          Name:  
        <input 
        id="name"
        name="name"
        type="text"
        value={MembersInfo.name}
        onChange={handleChange} />
        </label> 

        <label htmlFor="email"> 
          Email:  
        <input
        id="email"
        name="email" 
        type="text"
        value={MembersInfo.email}
        onChange={handleChange} />
        </label> 

        <label htmlFor="role"> 
          Role:  
        <input
        id="role"
        name="role"
        type="text"
        value={MembersInfo.role}
        onChange={handleChange} /> 
        </label> 
        <button type="submit"> Add Team Member! </button>
      </form>
      </div>
  )
}; 

export default Form; 