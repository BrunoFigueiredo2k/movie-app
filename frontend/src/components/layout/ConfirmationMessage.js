import React from 'react'

export default function ConfirmationMessage(props) {
    const type = props.type;
    console.log(typeof type)

    // TODO: fill in message content with props.message
    const returnTypeMessage = () => {
        switch (type){
            case 'success':
                console.log(type)
                console.log(props.message)
                return <div class="alert-box success mt-3">{props.message}</div>;
            case 'failure':
                return (<div class="alert-box failure mt-3">{props.message}</div>);
            case 'warning':
                return (<div class="alert-box warning mt-3">{props.message}</div>);
        }
    }

    return (
        <div>
            {returnTypeMessage()}
        </div>
    )
}
