import React from 'react'

export default function ConfirmationMessage(props) {
    const type = props.type;

    const returnTypeMessage = () => {
        switch (type){
            case 'success':
                return <div class="alert-box success mt-3 horizontal-center">{props.message}</div>;
            case 'failure':
                return (<div class="alert-box failure mt-3 horizontal-center">{props.message}</div>);
            case 'warning':
                return (<div class="alert-box warning mt-3 horizontal-center">{props.message}</div>);
        }
    }

    return (
        <div>
            {returnTypeMessage()}
        </div>
    )
}
