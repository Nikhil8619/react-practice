import React from "react";
import ReactDOM from "react-dom/client";

//const heading=React.createElement("h1",{"id":"heading"},"Hello React");  using react
//React Element
// const heading=<h1 className="head">Hello react using jsx</h1>

//React functional component

// const HeadingComponent=() => {
//     return <h1 className="heading">Hey React functional components</h1>
// }
//Component composition
const Title=() => (
<h1 className="head">Hello react using jsx</h1>
)

// const title= (
//     <h1 className="head">Hello react using jsx</h1>
//     )

const HeadingComponent=() =>(
    <div id="container">
        {/* <Title />   */}
        {Title()}
        {/* {title} */}
       <h1 className="heading">Hey react functional components</h1>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);