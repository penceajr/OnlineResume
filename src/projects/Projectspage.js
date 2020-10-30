import React from 'react';
import "./Projectspage.css";
import movie from '../../src/movie101.jpg';

export class ProjectPage extends React.Component{
    render(){
        return(
            <div className="projectPageContainer">
                <h2 className="projects-title">My projects from Informal School of IT</h2>
                <div className="maincontainer">
            <div className="back">
                <h2>Movie 101</h2>
                <p>Welcome to my very first project from Web Development course. It's a website with movie ratings where you can search by name, year, categories etc. You have an advanced search so you can find what you're looking for. You cand also register, and once you're sign in you can edith, delete and add movies. Here you can access my github link.<br></br><br></br> Enjoy!<br></br>
               <br></br> <br></br></p>
               <p className="git-link" onClick={()=>{
                window.open("https://github.com/penceajr/movies101","_blank")
            }}>https://github.com/penceajr/movies101?fbclid=IwAR2Ko79fCVfz0j1QnK5DB0nNS7YYDmvdQ5umtE5ld0Ygv823RZ08EjxRBCA</p>
            </div>
            <div className="front">
                <div className="image">
                <img src={movie} className="movie101"/>
                </div>
            </div>
        </div>

            </div>
        )
    }
}
