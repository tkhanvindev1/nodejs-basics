# nodejs-basics
Solidifyed my Node.js skills with this practice repository! This collection of Node.js code examples and exercises is designed to help you reinforce your understanding of key concepts.

<h2>Get Started</h2>
To get started, you will need to install Node.js on your computer. You can download Node.js from the official website at <a href='https://nodejs.org/en'>nodejs.org</a> Once you have Node.js installed, you can open your terminal or command prompt and type node -v to verify that Node.js is installed correctly.

<h2>Create first Node project</h2>
Next, let's create a new Node.js project. In your terminal or command prompt, navigate to the directory where you want to create your project and type npm init. This command will create a new package.json file in your project directory. The package.json file is used to manage your project's dependencies, scripts, and other metadata.

<h2>Node modules</h2>
Now that we have our project set up, let's talk about modules. In Node.js, modules are used to organize code into separate files or modules. Each module can export functions, variables, or other objects that can be used in other parts of your code. To use a module in your code, you can use the require function and specify the path to the module.

For example, we could create a new Express application like this:
<img width="611" alt="Screen Shot 2023-05-07 at 8 59 52 PM" src="https://user-images.githubusercontent.com/107436848/236712432-e5db8e1e-1328-4ccb-bf33-81ad79d8859b.png">

In these two lines, we are importing the express module and creating a new Express application by calling the express function. We assign the resulting object to the variable app.

These two lines configure our Express application to handle incoming JSON and URL-encoded data. We use the use method to add middleware functions provided by the express module to our application. express.json() is used to parse incoming JSON data, and express.urlencoded({extended: false}) is used to parse incoming URL-encoded data.

This line sets up a route for our application that will be used to handle requests related to users. We specify that requests to this route should be handled by the users module located in the routes directory. The require function is used to import the module.

Finally, we start our Express application by calling the listen method on the app object. This method listens for incoming requests on the specified port and starts the server. We specify that we want to listen on port 5051, and log a message to the console when the server starts.
