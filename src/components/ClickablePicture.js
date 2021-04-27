import React, {useState} from 'react';

function ClickablePicture(props) {
    let [toggle, setToggle] = useState(false);
    const switchPicture = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <img onClick={switchPicture} src={toggle ? props.imgClicked : props.img}/>
        </div>
    );
}

export default ClickablePicture;