// creating react element with React.createElement
const heading= React.createElement("h1", {}, "Namaste React Dev Session One");
const subHeading = React.createElement("h4", {}, "let start industry ready program with Akshay Saini");
const paragraph = React.createElement("p", {}, 
"Here you know about react what actually is it.You know differnet between library and frame work. Know about React js CDN link for development and production ready. You know about how to create and render a element in react.");
// Create Root element with ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
const wrapper = React.createElement("div", {className:"wrapper"}, [heading, subHeading, paragraph]);
// render root element with React.render
//root.render([heading, subHeading, paragraph]);
root.render(wrapper);
