// const heading=React.createElement("h1",{
//     id:"rick",
//     abc:"xyz"
// },"hello world from sexy react");

const heading = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"my name is sexgod"),React.createElement("h2",{},"my name is dominator pussy")]
        
    )
);




        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);


