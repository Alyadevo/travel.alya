import React ,{useState} from "react"
import { Link } from "react-router-dom"
function Signup() {
    const [credentials, setcredentials] = useState({name:"", email: "", password: "",location:"" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
        const response = await fetch("http://localhost:5000/api/CreateUser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
      }
    return (
      <>
      <div className='container'>
        <form  onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label"  >name</label>
            <input type="text" className="form-control" name="name"  value={credentials.name} onChange={onChange}  />
            
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"  >Email address</label>
            <input type="email" className="form-control" name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email}  onChange={onChange} />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password"  id="exampleInputPassword1" value={credentials.password} onChange={onChange}   />
          </div>
          <div className="mb-3">
            <label htmlFor="adress" className="form-label">Adress</label>
            <input type="text" className="form-control" name="adress"  id="exampleInputPassword1" value={credentials.location} onChange={onChange}   />
          </div>


          <button type="submit" className="m-3 btn btn-success">Submit</button>
       <Link to='/Login' className="m-3 btn btn-success">Alredy user</Link>
        </form>
      </div>
    
      </>
    )
    }
export default Signup