import React from 'react'
import './css.css'
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";

class EditContact extends React.Component {
    constructor(props){
        super(props)
        this.state={
            profile:[],
            details:[]
        }
        this.Ref_firstname = React.createRef()
        this.Ref_lastname = React.createRef()
        this.Ref_email = React.createRef()
        this.Ref_phone = React.createRef()
        this.Ref_address = React.createRef()
    }

    componentDidMount(){
        if(localStorage.getItem(this.props[0])!=null){
            this.state.profile=localStorage.getItem(this.props[0]).split(',')
        }
        console.log(this.state.profile[0])
        this.Ref_firstname.current.value=this.state.profile[0]
        this.Ref_lastname.current.value=this.state.profile[1]
        this.Ref_email.current.value=this.state.profile[2]
        this.Ref_phone.current.value=this.state.profile[3]
        this.Ref_address.current.value=this.state.profile[4]
        this.forceUpdate()
    }

    click=(event)=>{
        this.state.details.push(this.Ref_firstname.current.value)
        this.state.details.push(this.Ref_lastname.current.value)
        this.state.details.push(this.Ref_email.current.value)
        this.state.details.push(this.Ref_phone.current.value)
        this.state.details.push(this.Ref_address.current.value)
        localStorage.setItem(this.props[0],this.state.details)
        this.forceUpdate()
    }

    render() {
        return (
                <div className="home">
                    <h1 className='heading_2'>
                        {this.state.profile[0]} {this.state.profile[1]} - {this.state.profile[2]}
                    </h1>

                    <p>
                        <p className='input_tags' >First Name <span className='input_tag_span' >Last Name</span></p>
                        <input ref={this.Ref_firstname} className='input' type='text' placeholder='First name'></input>
                        <input ref={this.Ref_lastname} className='input' type='text' placeholder='Last name' ></input>
                    </p>
                    <p>
                        <p className='input_tags' >Email</p>
                        <input ref={this.Ref_email} className='input' type='text' placeholder='Email' ></input>
                    </p>
                    <p>
                        <p className='input_tags' >Email</p>
                        <input ref={this.Ref_phone} className='input' type='text' placeholder='Phone #' ></input>
                    </p>
                    <p>
                        <p className='input_tags' >Email</p>
                        <input ref={this.Ref_address} className='input' type='text' placeholder='Address' ></input>
                    </p>
                    <p >
                        <NavLink to="/home">
                            <button onClick={this.click} className='addContact_button'>UPDATE</button>
                        </NavLink>
                        <NavLink to="/home"><button className='addContact_button'>HOME</button></NavLink>
                    </p>
                </div>
        );
      }
}

export default EditContact