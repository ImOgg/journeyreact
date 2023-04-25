import React from 'react'
import Card from './Card';

const Input = () => {
    return (
        <div style={{ border: "1px solid orange" }}>
            <form style={{ border: "1px solid pink" }} >
                <input type="text" />
                <button >搜尋</button>
            </form>
            <Card />
        </div>
    )
}

export default Input