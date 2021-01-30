export const getCurrentDate = () => {
    var currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0
    var yyyy = currentDate.getFullYear();

    currentDate = mm + '/' + dd + '/' + yyyy;

    return currentDate
}

export const checkIfDisplayMesssageChanged = (displayMessage, setDisplayMessage, duration) => {
    if (displayMessage.display){
        const timer = setTimeout(() => {
            setDisplayMessage(false);
        }, duration);
        return () => clearTimeout(timer);
    }
}