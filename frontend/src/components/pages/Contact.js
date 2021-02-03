import React, {useState, useCallback, useEffect} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import {getForms, postForm} from '../../services/Api'

export default function Contact() {
    const [inputFields, setInputFields] = useState({fullName: '', email: '', message: ''})

    const submitFormDetails = useCallback(
        async event => {
            event.preventDefault();
            const {fullName, email, message} = event.target.elements;
            try {
                // set values in state object
                setInputFields({ fullName: fullName.value, email: email.value, message: message.value });
            } catch (error) {
                alert(error);
            }
        }
    );

    // When the input fields are updated post data to api
    useEffect(() => {
        postForm(inputFields);
    }, [inputFields])

    return (
        <div>
            <div className="section">
                <Header/>
                <div className="container mt-5">
                    <div className="row">
                        <div className="card bg-light col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center mt-3 font-weight-bold">Contact us</h2>
                            <form className="card-body" onSubmit={submitFormDetails}>
                                <div className="form-group">
                                    <p>Full Name:</p>
                                    <input type="text" name="fullName" placeholder="Your full name" class="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <p>Email:</p>
                                    <input type="email" name="email" placeholder="Your email address" class="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <p>Message:</p>
                                    <textarea type="text" name="message" placeholder="Write your message here.." class="form-control" required/>
                                </div>
                                <div>
                                    <button className="btn btn-primary" rows={6} style={{width: '100%'}} type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
