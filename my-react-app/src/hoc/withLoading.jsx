// Implement an HOC named `withLoading` that shows 
// a loading indicator while data is being fetched.
// Display this component in action in App.jsx.

import React, { useState, useEffect } from "react";

export default function withLoading(Component) {
    function Func(props) {
        const [data, setData] = useState(null)
        function fetchData() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({name: "Hannah"})
                }, 1000)
            })
        }
        useEffect(() => {
            fetchData().then((response) => setData(response));
        }, []);

        if (!data) {return <div>Loading...</div> }

        return <Component data={data} />
    }
    return Func
}


