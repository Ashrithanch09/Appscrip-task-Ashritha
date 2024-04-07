import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default MyComponent;
