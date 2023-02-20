import React ,{useState} from 'react'
import'./Login.css';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://localhost:4000/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
export default function Login({setToken}){


  const[password,setPassword]=useState("");
  const[username,setUserName]=useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }



   
  return(
    <div className='Login-Wrapper'>
      <h1>Please log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type='text' onChange={e=>setUserName(e.target.value)}/>
         </label>
         <label>
          <p>Password</p>
          <input type='password'onChange={e=>setPassword(e.target.value)}/>
         </label>
         <div>
          <button type="submit">Submit</button>
         </div>



      </form>
    </div>
  )
}
Login.propTypes={
  setToken:PropTypes.func.isRequired
}









// import React, { useState } from 'react'
// import { Link,useNavigate } from 'react-router-dom';
// import './Login.css'
// import Form from "react-bootstrap/Form";
// import { Button } from 'bootstrap';
// //import Footer from '../component/footer'
// export default function Login() {
  
//   const [credentials, setcredentials] = useState({ email: "", password: "" ,username:""})
// let navigate=useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
//     const response = await fetch("http://localhost:5000/api/CreateUser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })
//     });
//     const json = await response.json()
//     console.log(json);

//     if (!json.success) {
//       alert("Enter valid cerdentials");
//     }
//     if (json.success) {
//       localStorage.setItem("authToken",json.authToken);
//       console.log(localStorage.getItem("aurhToken"))
//     navigate("/")

//     }
   
//   }
//   const onChange = (event) => {
//     setcredentials({ ...credentials, [event.target.name]: event.target.value })
//   }
//   return (
//     <>
//     <section >
//       <div className='center'>
//         <h1>Login</h1>
//         <div className='container'>
//         <Form  onSubmit={handleSubmit}>
//           <Form.Group controlId='formUsername'>
//             <Form.Label>Username</Form.Label>
//             <Form.Control type='text' placeholder='entrer votre name' value={credentials.username} onChange={onChange}/>

//           </Form.Group>
//           <Form.Group controlId='formPassword'>
//             <Form.Label>Password</Form.Label>
//             <Form.Control type='Password' placeholder='entrer votre password ' value={credentials.password} onChange={onChange}/>

//           </Form.Group>
//           <Button variant="primary" type="submit"> submit</Button>

//         {/* <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">UserName</label>
//             <input type="text" className="form-control" name="username"  id="exampleInputPassword1" value={credentials.password} onChange={onChange}   />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label"  >Email address</label>
//             <input type="email" className="form-control" name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email}  onChange={onChange} />
            
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" name="password"  id="exampleInputPassword1" value={credentials.password} onChange={onChange}   />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">confirm password</label>
//             <input type="password" className="form-control" name="password"  id="exampleInputPassword1" value={credentials.password} onChange={onChange}   />
//           </div>



//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//         */}
//         </Form>
//       </div>
//       </div>
//       </section>
      
      
//     </>
  
//   )
// }