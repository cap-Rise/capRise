import React, { useState } from 'react';

const InputPin = () => {
    const [pin, setPin] = useState(new Array(4).fill(''));

    const handleChange = (element, index,e) => {
        if (isNaN(element.value)) return false;

        setPin([...
            pin.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    
    return (
        <div>
            <h1>ENTER YOUR PIN</h1>
            {pin.map((data, index) => {
                return (
                    <input
                
                        type="password"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                    />
                );
            })}
            <button onClick={e=> alert(pin.join(""))}>Verify</button>
        </div>
    );
};

export default InputPin;
