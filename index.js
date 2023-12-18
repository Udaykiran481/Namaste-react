// const heading = React.createElement(
//     "h1",
//     {id:"heading",style:{color:'blue'}},
//     "Hello World From REACT!!"
//     );
// console.log(heading);//provides object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


{/* <div id="parent">
    <div id="child">
        <h1> hey i'm headimg</h1>
        <h2> sibbling </h2>
    </div>
</div> */}

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "i'm heading"),React.createElement(
                "h2",
                {},
                "silbling")]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);