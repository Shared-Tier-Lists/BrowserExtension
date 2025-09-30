import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: "1rem", width: "200px" }}>
            <h3>Hello from React + TS!</h3>
            <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
        </div>
    );
}

export default App;