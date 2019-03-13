import React from 'react'
import './css.css'
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import AddContact from "./addContact"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            object:[],
            details:null
        }
    }

    componentDidMount(){
        for(var i=0;i<20;i++){
            if(localStorage.getItem(i)!=null){
                this.state.object[i]=localStorage.getItem(i).split(',')
            }
        }
        this.forceUpdate()
    }

    click=(e)=>{
        localStorage.setItem(e.target.getAttribute('index'),'null')
        for(var i=0;i<20;i++){
            if(localStorage.getItem(i)=='null'){
                this.state.object[i]='null'
            }
        }
        this.forceUpdate()
    }
    getIndex=(e)=>{
        var index=e.target.getAttribute('index')
        this.props.sendIndex(index)
    }

    render() {
        return (
                <div className="home">
                    <h1 className='heading'>PROFILE LIST</h1>

                    {this.state.object.map((obj,i)=>{
                        if(obj!='null'){
                            return(
                                <div>
                                    <p>
                                        <NavLink className='home_text' to='/editContactDetails'><span onClick={this.getIndex} index={i}> {obj[0]} , {obj[1]} </span></NavLink>
                                        <span className='delete'>
                                            <button onClick={this.click} index={i} className='delete_button' >DELETE</button>
                                        </span>
                                    </p>
                                </div>
                            )
                        }
                    })}

                    <p className='home_button_text'>
                    <Link to="/addContact"><button className='home_button'>NEW PROFILE</button></Link>
                    </p>
                </div>
        );
      }
}

export default Home