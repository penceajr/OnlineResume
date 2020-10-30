import React from 'react';
import './Homepage.css';
import photo from '../cristi.jpg';

export class Homepage extends React.Component{
   
    render(){
        return(
            <div className="main-content">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="ih-item circle effect3 left_to_right"><a href="/">
                            <div className="img"><img src={photo} alt="img"/>
                            </div>
                            <div className="info">
                <h3>Cristian Pencea</h3>
                <p>I'm a junior Web Developer!</p>
                </div></a></div>
                </div>
                </div>

                <div className="homepage-content">
                    
                    <h3>I am an automation and performance specialist</h3>
                    <p>I build Robotic  procesess that automates manual and repetitive tasks.</p>
                    <h2 className="welcome-letters">Welcome to my website!</h2>
                </div>

                </div>
  )
}

}