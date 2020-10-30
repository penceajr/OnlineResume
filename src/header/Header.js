import React from 'react';
import './Header.css';


export class Header extends React.Component{
    render(){
        return(
            <div className="header">
                
                <a href="/" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Home</a>
             
                <a href="/my-projects" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Projects</a>
                
                <a href="/skills" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Skills</a>
                
                <a href="/" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Employement</a>
               
                <a href="/" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>About me</a>
            
                <a href="/" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Contact</a>
              
            </div>
        )
    }
}