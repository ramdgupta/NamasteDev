# What is Emmet?
	Emmet is a free add-on for your text editor that allows you to 
	type shortcuts that are then expanded into full pieces of code


# Difference between a Library and Framework?
	Library provide functionly to solve a perticular problem Just like react 
	providing vertual dom feature and  Component driven methodology follow to 
	develope extensive UI but but we need to call other Libarary to enhance it's 
	feature like statemangement we use Redux, for unit test use Jest etc. 

	Where frameWork is solve a vast problem you say framework is a colleaction 
	of Libarary. Framework have inbuild function and Library within there program.


# What is CDN? Why do we use it?
	A CDN is a network of servers that distributes content from an “origin” server 
	throughout the world by caching content close to where each end user is accessing 
	the internet via a web-enabled device. The content they request is first stored on 
	the origin server and is then replicated and stored elsewhere as needed


# Why is React known as React?
	React (also known as React.js or ReactJS) is a free and open-source front-end 
	JavaScript library for building user interfaces based on UI components.


# What is crossorigin in script tag?
	The crossorigin attribute sets the mode of the request to an HTTP CORS Request. 
	Web pages often make requests to load resources on other servers. Here is where 
	CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, 
	iframes, images, fonts, or scripts) from another domain.


# What is React & React.DOM?
	ReactDOM is s a package that provides DOM specific methods, the 
	difference between ReactDOM and react is that ReactDOM renders React 
	Elements to the DOM, so it’s for web development.

	ReactDOM is for bigger interfaces and React is for a simple plateform 
	that’s why it’s mainly used on mobile devices.


# What is difference between react.development.js and react.production.js files via CDN?
	react.development.js only meant for development, and are not suitable for production. 
	Minified and optimized production versions of React are available at react.production.js.


# What is async and defer?
	Async - means execute code when it is downloaded and do not block DOM construction during 
	downloading process. Defer - means execute code after it's downloaded and browser finished 
	DOM construction and rendering process.


# What is React.createRoot?
	createRoot() controls the contents of the container node you pass in. 
	Any existing DOM elements inside are replaced when render is called.

	createRoot() does not modify the container node (only modifies the 
	children of the container).

	
# What is React.crateElement ?
	Rect element are pure javascript object. They use to create Browser DOM 
	elment in react.

	React.createElement(
    		type,
    		{ props},
    		children
  	);


	Types : Type of the HTML element is (h1,div,span) etc
	Props : Properties of the object (style, class,id,ref,index) etc.
	Children : Anything that needs to display on the screen

	Example 
		React.createElement(
    			'h1',
    			{ className: 'greeting' },
    		'Hello'
  	);

For more info Note: https://dev.to/fromaline/reactdomcreateroot-reactdomrender-1jg6
						https://reactjs.org/docs/cdn-links.html
