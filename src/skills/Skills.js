import React from 'react';
import '../skills/Skills.css';
import html from '../../src/html-5.svg';
import css from '../../src/css.svg';
import javascript from '../../src/javascript.svg';
import react from '../../src/react.svg';

export class SkillsPage extends React.Component{
   
    render(){
        return(
            <div className="skills-page-container">
  
  <div className="testimotionals">
  <div className="card">
    <div className="layer">
      
    </div>
    <div className="content">
      <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and latest major version of HTML that is a World Wide Web Consortium (W3C) recommendation. </p>
      <div className="image">
        <img  width="100px" src={html} alt=""/>
        
      </div>
      <div className="details">
        <h2> HTML 5 <br></br> <span>Web Development</span></h2>
      </div>
    </div>
  </div>
</div>



<div className="testimotionals">
  <div className="card">
    <div className="layer">
      
    </div>
    <div className="content">
      <p>CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
      <div className="image">
        <img  width="100px" src={css} alt=""/>
        
      </div>
      <div className="details">
        <h2> CSS <br></br> <span>Web Development</span></h2>
      </div>
    </div>
  </div>
</div>



<div className="testimotionals">
  <div className="card">
    <div className="layer">
      
    </div>
    <div className="content">
      <p>JavaScript or JS, is a programming language. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications.</p>
      <div className="image">
        <img align="center" width="140px"  src={javascript} alt=""/>
        
      </div>
      <div className="details">
        <h2> JAVASCRIPT <br></br> <span>Web Development</span></h2>
      </div>
    </div>
  </div>
</div>

         
<div className="testimotionals">
  <div className="card">
    <div className="layer">
      
    </div>
    <div className="content">
      <p>React Js is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      <div className="image">
        <img  width="100px" src={react} alt=""/>
        
      </div>
      <div className="details">
        <h2> REACT JS <br></br> <span>Web Development</span></h2>
      </div>
    </div>
  </div>
</div>   

    </div>
        )
    }
}
