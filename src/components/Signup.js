import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="App">
        <form>
            <h2>Signup</h2>
            <div>
                <label>First Name</label>
                <input></input>
            </div>
            <div>
                <label>Last Name</label>
                <input></input>
            </div>
            <div>
                <label>Age</label>
                <input></input>
            </div>
            <div>
                <label>E-mail</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <label>Profile pic</label>
                <input></input>
            </div>
            <div>
                <label>Mobile.No</label>
                <input></input>
            </div>
            <div>
                <label>Address</label>
                <input></input>
            </div>
            <div>
               <button type="button" >Signup</button>
            </div>
        </form>
        <br></br>
        <br></br>
        <Link to ="/">Login</Link>
    </div>
  )
}

export default Signup