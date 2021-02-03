import React, {useCallback, useState, useEffect, useRef} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import {getForms, postForm} from '../../services/Api'
import ConfirmationMessage from '../../components/layout/ConfirmationMessage';
import {checkIfDisplayMesssageChanged} from '../utils';

export default function Contact() {
    const [displayMessage, setDisplayMessage] = useState({
        display: false,
        type: '',
        content: ''
    });

    let fullNameVal = useRef('');
    let emailVal = useRef('');
    let messageVal = useRef('');

    const submitFormDetails = useCallback(
        async event => {
            event.preventDefault();
            const {fullName, email, message} = event.target.elements;
            try {
                // Save values in state
                const inputFields = { fullName: fullName.value, email: email.value, message: message.value };
                postForm(inputFields)
                    .then(res => {
                        // reset input fields when submitted
                        fullNameVal.current.value = '';
                        emailVal.current.value = '';
                        messageVal.current.value = '';

                        // Set succes message
                        setDisplayMessage({
                            display: true,
                            type: 'success',
                            content: 'Thank you very much! Your submission has been received.'
                        });
                    })
                    .catch(err => {
                        alert(err);
                    })
            } catch (error) {
                alert(error);
            }
        }
    );

    checkIfDisplayMesssageChanged(displayMessage, setDisplayMessage, 3000);

    return (
        <div>
            <div className="section">
                <Header/>
                <div className="container mt-5">
                    {displayMessage.display ? <ConfirmationMessage type={displayMessage.type} message={displayMessage.content} /> : null}
                    <div className="row">
                        <div className="card bg-light col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center mt-3 font-weight-bold">Contact us</h2>
                            <form className="card-body" onSubmit={submitFormDetails}>
                                <div className="form-group">
                                    <p>Full Name:</p>
                                    <input type="text" ref={fullNameVal} name="fullName" placeholder="Your full name" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <p>Email:</p>
                                    <input type="email" ref={emailVal} name="email" placeholder="Your email address" className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <p>Message:</p>
                                    <textarea type="text" ref={messageVal} name="message" placeholder="Write your message here.." className="form-control" required/>
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
