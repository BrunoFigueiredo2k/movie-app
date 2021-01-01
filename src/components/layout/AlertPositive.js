import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

export default function AlertPositive(props) {
    const [show, setShow] = useState(true);
    const btnContent = props.details.content.button
    let history = useHistory();

    const handleRouteHideBtn = () => {
        history.push(props.details.hideBtn.route);
    }

    const DisplayHideBtn = () => {
        return (
            <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false), handleRouteHideBtn} variant="outline-success">
                {btnContent}
            </Button>
            </div>
        )
    }

    return (
        <Alert show={show} variant="success">
            <Alert.Heading>{props.details.content.title}</Alert.Heading>
            <p>{props.details.content.description}</p>
            {props.details.hideBtn.display ? 
                <DisplayHideBtn />
            : null}
        </Alert>
    );
}
