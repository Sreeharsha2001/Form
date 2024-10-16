// import React, {Component} from 'react';
// import './App.css'

// export default class Forms extends Component {
//     state ={
//         userName:'',
//         email:'',
//         contact:'',
//         password:'',
//         error:{userName:'', email:'', contact:'',password:''},
//         registered:''
//     };


//     handleUserName=(event)=>{
//         this.setState({userName:event.target.value})
//     }

//     handleEmail=(event)=>{
//         this.setState({email:event.target.value})
//     }

//     handleContact=(event)=>{
//         this.setState({contact:event.target.value})
//     }

//     handlePassword=(event)=>{
//         this.setState({password:event.target.value})
//     }

//     handleSubmit=(event)=>{
//         event.preventDefault();
//         const error=this.validate();
//         if(Object.keys(error).length===0){
//             const newUser={userName: this.state.userName, email: this.state.email, contact:this.state.contact, password:this.state.password}
//             this.setState(prevState=>({registered:[...prevState.registered, newUser], userName:'', email:'',contact:'', password:''}))
//         }
//         else{
//             this.setState({error})
//         }
//     };

//     validate=()=>{
//         const {userName, email, contact, password}=this.state
//         const error={}
        

//         if(!/^[A-Z]/.test(userName) || userName.trim()==='' ){
//             error.userName='Invalid username format';
//         }

//         if(!/\S+@\S+\.\S+/.test(email) || !/^[a-z]/.test(email)){
//             error.email='Invalid email format';
//         }

//         if(!/^\d{10}$/.test(contact)){
//             error.contact='Invalid contact format'
//         }

//         if(password.length!==8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)){
//             error.password='Invalid password format'
//         }

//         this.setState({error});
//         return error;
//     };   

//     render(){
//         const {userName, email, contact, password, error, registered}=this.state;
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label className='Name'>Username: 
//                         <input type='text' value={this.state.userName} onChange={this.handleUserName}/>
//                         {error.userName && <span className='Error'>{error.userName}</span>}
//                     </label>
//                     <br/>
//                     <label className='Email'>
//                             Email:   
//                         <input type='email' value={this.state.email} onChange={this.handleEmail}/>
//         {error.email && <span className='Error'>{error.email}</span>}
//                     </label>
//                     <br/>
//                     <label className='Contact'>Contact:
//                         <input type='contact' value={this.state.contact} onChange={this.handleContact}/>
//         {error.contact && <span className='Error'>{error.contact}</span>}
//                     </label>
//                     <br/>
//                     <label className='Password'>Password:
//                         <input type='password' value={this.state.password} onChange={this.handlePassword}/>
//         {error.password && <span className='Error'>{error.password}</span>}
//                     </label>
//                     <br/>
//                     <button className='Submit' type='submit'>Submit</button>
//                 </form>
//                 {registered.length>0 && (<div>
//                     <h3 className='Regis'>Registrations</h3>
//                     {registered.map((user, index)=>
//                     (<div className='Data' key={index}>
//                         <p>Username:{user.userName}</p>
//                         <p>Email:{user.email}</p>
//                         <p>Contact:{user.contact}</p>
//                     </div>))}
//                 </div>)}
//             </div> 
//         )
//     }
// }

import React from 'react'
import {useState} from 'react'
import './App.css'

const Forms=()=>{
    const [userName, setUsername]=useState()
    const [email,setEmail]=useState()
    const [contact,setContact]=useState()
    const [password,setPassword]=useState()
    const error=useState({userName:'',email:'',contact:'',password:''})
    const registered=useState()

    const handleUserName=(e)=>{
        setUsername(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleContact=(e)=>{
        setContact(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const error= useValidate();
        if(Object.keys(error).length===0){
            const newUser={userName:state.userName, email:state.email, contact:state.contact, password:state.password}
            useState(prevState=>({registered:[...prevState.registered, newUser], userName:'', email:'',contact:'', password:''}))
        }
        else{
            useState(error)
        }
    };

    const useValidate=()=>{
        const {userName,email,contact,password}=useState()
        const error={}

        if(!/^[A-Z]/.test(userName) || userName.trim()===''){
            error.setUsername='Invalid username format'
        }
        if(!/\S+@\S+\.\S+/.test(email) || !/^[a-z]/.test(email)){
            error.setEmail='Invalid email format'
        }
            
        if(!/^\d{10}$/.test(contact)){
            error.setContact='Invalid contact format'
        }
            
        if(password.length!==8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)){
            error.setPassword='Invalid password format'
        }

        useState(error)
        return error
        
    }

    return(
        
            <form onSubmit={handleSubmit}>
                <label>UserName:
                    <input type='text' value='userName' onChange={handleUserName}/>
                    {error.userName && <span>{error.userName}</span>}
                </label>
                </br>
                <label>Email:
                    <input type='text' value='email' onChange={handleEmail}/>
                    {error.email && <span>{error.email}</span>}
                </label>
                </br>
                <label>Contact:
                    <input type='contact' value='contact' onChange={handleContact}/>
                    {error.contact && <span>{error.contact}</span>}
                </label>
                </br>
                <label>Password:
                    <input type='password' value='password' onChange={handlePassword}/>
                </label>
                </br>
            </form>
        
    )
}


// import React, { useState, useEffect } from 'react';
// import './App.css'; // Assuming a CSS file exists

// const Forms = () => {
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState({
//     userName: '',
//     email: '',
//     contact: '',
//     password: '',
//   });
//   const [registered, setRegistered] = useState([]);

//   const handleUserName = (event) => {
//     setUserName(event.target.value);
//   };

//   const handleEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleContact = (event) => {
//     setContact(event.target.value);
//   };

//   const handlePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newError = validate();

//     if (Object.keys(newError).length === 0) {
//       const newUser = { userName, email, contact, password };
//       setRegistered([...registered, newUser]);
//       setUserName('');
//       setEmail('');
//       setContact('');
//       setPassword('');
//     } else {
//       setError(newError);
//     }
//   };

//   const validate = () => {
//     const newError = { ...error }; // Create a copy to avoid mutation

//     if (!/^[A-Z]/.test(userName) || userName.trim() === '') {
//       newError.userName = 'Invalid username format';
//     }

//     if (!/\S+@\S+\.\S+/.test(email) || !/[a-z]/.test(email)) {
//       newError.email = 'Invalid email format';
//     }

//     if (!/^\d{10}<span class="math-inline">/\.test\(contact\)\) \{
// newError\.contact \= 'Invalid contact format';
// \}
// if \(
// password\.length \!\=\= 8 \|\|
// \!/\[A\-Z\]/\.test\(password\) \|\|
// \!/\[a\-z\]/\.test\(password\) \|\|
// \!/\\d/\.test\(password\) \|\|
// \!/\[\!@\#</span>%^&*]/.test(password)
//     ) {
//       newError.password = 'Invalid password format';
//     }

//     return newError;
//   };

//   useEffect(() => {
//     // Optional: Persist registered data in local storage or a database
//     // ...
//   }, [registered]); // Dependency: Update effect when registered changes

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label className="Name">
//           Username:
//           <input type="text" value={userName} onChange={handleUserName} />
//           {error.userName && <span className="Error">{error.userName}</span>}
//         </label>
//         <br />
//         <label className="Email">
//           Email:
//           <input type="email" value={email} onChange={handleEmail} />
//           {error.email && <span className="Error">{error.email}</span>}
//         </label>
//         <br />
//         <label className="Contact">
//           Contact:
//           <input type="contact" value={contact} onChange={handleContact} />
//           {error.contact && <span className="Error">{error.contact}</span>}
//         </label>
//         <br />
//         <label className="Password">
//           Password:
//           <input type="password" value={password} onChange={handlePassword} />
//           {error.password && <span className="Error">{error.password}</span>}
//         </label>
//         <br />
//         <button className="Submit" type="submit">
//           Submit
//         </button>
//       </form>
//       {registered.length > 0 && (
//         <div>
//           <h3 className="Regis">Registrations</h3>
//           {registered.map((user, index) => (
//             <div className="Data" key={index}>
//               <p>Username: {user.userName}</p>
//               <p>Email: {user.email}</p>
//               <p>Contact: {user.contact}</p>
//             </div>
//           ))}
//         </





































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































// import React from 'react'
// import {useState} from 'react'
// import './App.css'

// const Forms =()=>{
//     const [userName,email] = useState('')
//     const contact=useState('')
//     const {error:[userName, email]}= useState('')
//     const registered=useState('')
//     }

//     handleUserName=(e)=>{
//         setUsername(e.target.value)
//     }

//     handleEmail=()=>{
//         setEmail(e.target.value)
//     }

//     handleContact=(e)=>{
//         e.preventDefault()
//         const error =validate()
//         if(Object.keys(error).length===0){
//             const newUser={userName:{userName}, email:{email}}
//             {prev}
//         }
//     }

//     validate=()=>{

//     }

//     return(

//         <div>
//             <form>

//             </form>
//         </div>
//     )
// }
