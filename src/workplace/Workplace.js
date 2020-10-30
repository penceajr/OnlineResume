import React from 'react';
import './Workplace.css';

export class Employement extends React.Component{
    render(){
        return(
            <div >
                    <h2 className="work-title">Employements</h2>
                    <div className="work-main-content">
                <div className="first-content">
                    <p className="work-info">Automation and Performance Specialist <br></br>at Betfair Romania Development<br></br>
                        <span className="span-color">2017 to present</span>
                    </p>
                </div>

                <div className="second-content">
                    <p className="work-info">Data entry specialist at Iron Mountain Company<br></br>
                        <span className="span-color">2016-2017</span>
                    </p>
                </div>
                </div>
            </div>
        )
    }
}