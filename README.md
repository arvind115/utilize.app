# Process followed

The concerned code is in src/App.js

In total, 3 types of tasks lists are implemented namely, 'working','todo', & 'done'. Each of these lists is droppable, i.e task from one list can be removed from one list & be added to another by drag and drop.

- An HTML element can be made **draggable** by setting the draggable attribute to true.
- An element, or area of an element can be made **droppable** by implementing the 'dragover' event.
- The **drag** event is fired as soon as a 'draggable' element is dragged.
- The **drop** event is captured by a droppable element.
- Any data that might come handy to handle update, can be captured in **onDragStart** event. This event is fired by the **draggable** element. That data can be stored in dataTransfer object.
- In the provided implementation, a single Task is represented by <div> containing a class "draggableTaskDiv". This <div> has the **draggable** attribute & handles the **onDragStart** event. Each Task can be identified by a unique id. This id is captured in onDragStart event & stored in dataTransfer object.

A list of certain type is represented by a <div> that handles **onDragOver** and **onDrop** events. Default behavior is prevented when onDragOver is fired, while in case of onDrop, a function is called to handle updates.

The global state of tasks of all categories is stored in **tasks** array, which can be mutated using **setTasks** function. The state of all 3 types of list is stored separately in 3 different arrays, which in turn, have their own functions associated with them for handling mutations. Yes, we're using useState hook. All the 3 arrays depend upon tasks array for their state.

So, when **onDrop** event is fired, a function is called, which updates the category of the dragged task. This means **tasks** array is changed using setTasks function.

The state of all 3 lists is determined in useEffect hook which fired every time a change is made to tasks array, ( or when the component is rendered for the first time ).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
