import React, { useState } from 'react';
import './main.css'

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <h3>Title here</h3>
                <p>Edit src/App.js and save to reload</p>
            </header>

            <Folder name="desktop" isOpen={true}>
                <File name="write.odt" />
                <File name="sheet.ods" />
            </Folder>

            <Folder name="pictures">
                <File name="pic.png"></File>
                <File name="lewd.jpg"></File>
                <File name="awesome.mp4"></File>
            </Folder>
        </div>
    );
}

const Folder = (props) => {
    const [ isOpen, setIsOpen ] = useState(true);
    const { name, children } = props;
    const borderStyle = { border: '1px solid white', padding: '0.5rem', margin: '0.5rem' };

    const arrow_direction = isOpen ? 'down' : 'right';
    
    console.log(props);
    const handleClick = () => {
        console.log("Span clicked!");
        setIsOpen(!isOpen);
    }

    return <div style={borderStyle}>
        <i className="white folder icon"></i>
        <i className={`white caret ${arrow_direction} icon`}></i>
        <span onClick={handleClick}>{ name }</span>
        { isOpen ? children : null}
    </div>
};

const File = (props) => {
    const {name} = props;
    const ext = name.split('.')[1];
    console.log("Ext:",ext);
    const fileIcons = {
        "mp4": "headphones",
        "jpg": "file image",
        "png": "file image outline",
    }
    return <h4 style={{ color: 'orange', marginLeft: '1.5rem' }}>
        <i className={`${fileIcons[ext]} icon`}></i>
        { name }
        </h4>
}

export default App;
