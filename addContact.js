import React from 'react'
import './css.css'
import {BrowserRouter, Route, Switch, NavLink, Link} from "react-router-dom";

class AddContact extends React.Component {
    constructor(props){
        super(props)
        this.state={
            object:[],
            details:[]
        }
        this.Ref_firstname = React.createRef()
        this.Ref_lastname = React.createRef()
        this.Ref_email = React.createRef()
        this.Ref_phone = React.createRef()
        this.Ref_address = React.createRef()
    }

    click=(event)=>{
        this.state.details.push(this.Ref_firstname.current.value)
        this.state.details.push(this.Ref_lastname.current.value)
        this.state.details.push(this.Ref_email.current.value)
        this.state.details.push(this.Ref_phone.current.value)
        this.state.details.push(this.Ref_address.current.value)
        this.state.object.push(this.state.details)
        this.state.object.map((obj,i)=>{
                localStorage.setItem(i,obj)
        })
        this.Ref_firstname.current.value=''
        this.Ref_lastname.current.value=''
        this.Ref_email.current.value=''
        this.Ref_phone.current.value=''
        this.Ref_address.current.value=''
        this.state.details=[]
        this.forceUpdate()
    }

    render() {
        return (
                <div className="home">
                    <h1 className='heading_2'>CREATE A NEW PROFILE</h1>

                    <p>
                        <input ref={this.Ref_firstname} className='input' type='text' placeholder='First name' ></input>
                        <input ref={this.Ref_lastname} className='input' type='text' placeholder='Last name' ></input>
                    </p>
                    <p><input ref={this.Ref_email} className='input' type='text' placeholder='Email' ></input></p>
                    <p><input ref={this.Ref_phone} className='input' type='text' placeholder='Phone #' ></input></p>
                    <p><input ref={this.Ref_address} className='input' type='text' placeholder='Address' ></input></p>

                    <p >
                    <button onClick={this.click} className='addContact_button'>SUBMIT</button>
                    <Link to="/home"><button className='addContact_button'>HOME</button></Link>
                    </p>
                </div>
        );
      }
}

export default AddContact