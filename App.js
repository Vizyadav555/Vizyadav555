const parent = React.createElement("parent", {}, React.createElement("child", {}, [React.createElement("h1", {}, "I am an h1 tag. "), React.createElement("h2", {}, "I am an h2 tag. ")]));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);




