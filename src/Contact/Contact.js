import React from 'react';
import './Contact.css';
import emailjs from "emailjs-com";

export class Contact extends React.Component{

  sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ve3ede8', 'template_azx4acc', e.target, 'user_lfDtmspXFxTCuHtVAnmeE')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        e.target.reset();
        }

      render() {
        return(
            <div>
            <div className="container">
                <h2>Contact me</h2>
            <form onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Your Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
      }
    }
    
 
