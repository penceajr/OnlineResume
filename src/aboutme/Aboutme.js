import React from 'react';
import './Aboutme.css';


export class Aboutme extends React.Component{
    render(){
        return(
            <div>

            <h2 className="work-title">About me</h2>
            <h4 className="school-title">Schools</h4>
                    <div className="work-main-content">
                <div className="first-content">
                    <p className="work-info">Babes Bolyai University of Cluj-Napoca
                        FSPAC - Comunication and PR 
                            <br></br>
                        <span className="span-color">2017 - 2020</span>
                    </p>
                </div>

                <div className="second-content">
                    <p className="work-info">Pedagogical high school Gheorghe Lazar, Informatics and Matematics Department<br></br>
                        <span className="span-color">2006-2010</span>
                    </p>
                </div>
                </div>

                <h4 className="school-title">Hobbies</h4>
                <div className="third-content">
                    <p className="work-info">Skiing, Gaming, Driving, Sightseing<br></br>
                        
                    </p>
                </div>
                <br></br>
                <h4 className="school-title">Languages</h4>
                <div className="third-content">
                    <p className="work-info">Roumanian - native<br></br>
                        English- medium
                    </p>
                </div>
                    <br></br>
                <h4 className="school-title">Birthday and contact</h4>
                <div className="third-content">
                    <p className="work-info">Birthday: 26.01.1991<br></br>
                    E-mail: penceajr@yahoo.com<br></br>
                    Phone: +40773 835 909                        
                    </p>
                </div>
            </div>
        )
    }
}