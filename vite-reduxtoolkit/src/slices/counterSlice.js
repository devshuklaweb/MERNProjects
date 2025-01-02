import { useState } from 'react';
export default function App() {
    const [length, setLength] = useState(0);
    const [color, setColor] = useState("");
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setLength(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let num = parseInt(length);
        if (num >= 10 && num <= 20) {
            setColor("red");
            setMessage("Warning: The value is between 10 and 20!");
        } else if (num > 20) {
            setColor("yellow");
            setMessage("Warning: The value is greater than 20!");
        } else {
            setColor("");
            setMessage("Warning: The value is 10 or less!");
        }
    }
    return (
        <>
            {message && (
                <div style={{ color: color, fontWeight: 'bold', marginTop: '10px' }}>
                    {message}
                </div>
            )}
            <div style={{ color: color }}>Total Length: {length}</div>
            <form onSubmit={handleSubmit}>
                <input type='num' name="total_length" value={length} onChange={handleChange} />
                <button type='submit'>Update</button>
            </form>
        </>
    )
}
