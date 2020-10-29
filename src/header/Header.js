import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <Link to="/">
                    <a href="#" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Home</a>
                </Link>
                <Link to="/">
                <a href="#" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Projects</a>
                </Link>
                <Link to="/">
                <a href="#" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Skills</a>
                </Link>
                <Link to="/">
                <a href="#" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Employement</a>
                </Link>
                <Link to="/">
                <a href="#" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>About me</a>
                </Link>
                <Link to="/">
                <a href="#" className="hbtn hb-fill-middle2-bg-br hbor3 hpill"><i className="fa fa-caret-square-o-right" aria-hidden="true"></i>Contact</a>
                </Link>
            </div>
        )
    }
}