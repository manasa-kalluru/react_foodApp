React is a JS library
**CROSSORIGIN** attribute: used in HTML to specify how web browsers should handle cross-origin requests for certain resources, such as images, fonts, and scripts. Properly configuring the crossorigin attribute helps prevent security issues and ensures resources from different origins are loaded safely and correctly within your web pages.
**React.createElement**: returns an object
The order of importing in a html files ihas to be css, react and JS since JS files have functions that refers to react.
render() function replaces the existing page content of the html.
React ia a minimal JS Library and not a fulll fledged frame work that can only be applied to specific portions of our page.
ReactElement(Object) => HTML(Understood by Browser)
**package.json**: package.json is a configuration for npm. It is a way to get dependencies into project.
Dependencies are two kinds- 1. Dev Dependencies that are used in development 2. Normal dependencies that can also be used in production
**Bundler**: A bundler is a tool that takes all your JavaScript code, along with any other assets like CSS or images, and combines them into a single file (or a few files) that can be served to the browser. EX: Webpack,rollu,parcel.Bundling is done in development phase and not on production. Hence bundlers are devDependencies.
**Example**: devDependencies": {
    "parcel": "^2.10.2"
  }. The '^' symbol in above dependency indicates to install minor upgrades to the package automatically. '~' if used indicates to install all updates of package into the project.
 **package.json vs package-lock.json** package.json is only a configuration of npm and the dependencies. package-lock.json contains all the details about the exact version of dependencies and sub-dependencies installed. And it is so big because there can be transitive dependencies i.e dependencies that our dependency depends on.
 **What to commit to git?**: Since node_modules is too heavy, we put it in gitignore file. Instead we commit package.json and package-lock.json which can be used to regenerate node_modules.We just have to do npm install to get node_modules.
 **npx**: npx commands executes the package. npx parcel index.html leads to parcel going to source index.html and builds our application
 **Injecting React**: Using cdn react links in script tags to introduce react in a project is not ideal since fetching from unpkg is costly. React can be imported as a part of node modules and all the concerned dependencies can also be installed.
 **Import React**:The script tag importing js file that is rendering react has to be specified of type "module" since browser scripts cannot have imports or exports.

## Parcel
- Does dev build
- creates a local server
- does HMP - Hot Module Replacement - Uses file watching algorithm written in c++ to do this
- Does Faster builds through caching
- image Optimization
- Minification
- Bundling 
- Compress file sizes served to browser
- Uses Consistent Hashing Algorithm - to generate unique file names for cache and so there is no need to manually clear browser cache
- Differential Bundling - support older browsers through diff bundles for diff browsers
- Error Handling
- HTTPS
- Tree Shaking - removes unused code
- Diff prod and dev bundles

## Browserslist

# Chapter-03

- Instead of writing npm parcel index.html we write the required scripts in package.json that can be accessed using the name of the script.

## JSX
- JSX is a HTML-like or XML-like syntax but its not HTML inside JavaScript.
- JSX is asyntax.
- React.createElement and a JSX rendered tags are all objects.
- JS engine or a browser cannot understand JSX. 
- * JSX code is transpiled before it reaches a JS Engine or a browser. The Babel package of parcel does this transpilation. Babel is a JavaScript compiler.
- JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTML Element(render)
- Attributes of JSX follows camel case syntax.
- When JSX is multi-lined, we write our code in paranthesis.
- we can use {} to inject any js code or variables into JSX
- Prevents cross-siting attacks

## React Components
- Class Based Components - old
- Functional Components - new

## React Functional Component
- Is a regular JS Function that returns JSX code
- Always named with Capital Letters
- render as <FunctionalComponent />
- Rendering one component inside another component is component composition

## Config Driven UI

- const {resData} = resData?.data -- **optional Chaining**
- unique key is necessary to prevent re-rendering all of the elements of the loop and not just something newly updated or added.
- Using index is not recommended since order of elements could be changed

/*
App Component
- Header
- Body 
- Footer
Header Component
- Hamburger Button
- Logo
- Current Location
- Search Bar
- Cart
Body Component
- Restaurant Container
  - Restaurant Cards
     - Image
     - Restaurant Name
     - Rating
     - Delivery Charges
     - Delivery time
Footer Component
- Logo
- Links
- Download from Appstore, Playstore
- Facebook, Twitter, Instagram
- Terms Links


*/

## Exports
- named exports export const Component; 
  import {Component} from "path";
- default exports - export default Component;
  import Component from "path"

## Hooks - useEffect
- whenever a state variable is updated react **re-renders the entire component** (react triggers reconciliation cycle)
- React hook is a regular JS utility function imported through npm
- useState() - state variables - named import - const [arg,function] = useState(initialValurForArg)
- useEffect() - useFfect(() => {}, []) - the first argument i.e call back function is called after the component is rendered, the second argument is a dependency array that determines when the callback function is called
- If there is no dependency array-> useFfect(() => {}) -> useEffect is called on every render.
- If dependency arrais empty -> useFfect(() => {}, []) -> useEffect is called on intial render(just once)
- If dependency array is a variable say {btnName}, useEffect is called everytime btnName is updated
- The return statement of the call back function of useEffect can be used to clean up re-occuring code like setInterval.

## DOs and Donts Hooks
- Hooks are used to create local state variables inside a component. So hooks can only be called inside a component.
- Never create useState inside an if loop, it leads to incosistencies in react code.
- Never create hooks inside a for loop or a function bcz same reason as above.
- 

## DOM
- Reconciliation Algo- React fiber - Came up in React16 to update DOM
- virtual DOM is a representation of actual DOM - is a nested object
- Diff Algorithm - finds diff btwn old virtual DOM and new virtual DOM and updates DOM for every render cycle
- React is fast because it does efficient DOM manipulation

## Microservices
- Monoliths have APIs,UIs,Authentication,DAtabase and other aspects all in one project and any change done in any part needs a complete deployment of all
- Microservices have different services for diff jobs which combined together forms a big application. 
- This is separation of concerns or **single responsibility** principle where each service has its own job.
- benefits- Reusable, Testable, Maintainable code.

## Rendering
- page loads -> API is called => Renders
- Page Loads => Renders => API called => Re-renders -> React follows this since having layout is better and react is fast at rendering

## Shimmer UI
- A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear

## ROUTING
- is imported using npm install **react-router-dom**
- is initiated in the main app.js using **createBrowserRouter** which takes a list of paths.
- react-router-dom also provides a component called **RouterProvider** to render all the contents of createBrowserROuter.It provides routing configuration.
- `root.render(<RouterProvider router={appRouter} />);`

## useRouteError hook
- reat-router-dom provides us a useRouteError hooks that gives us more info about the error that occures. We can just initialize the hook to a variable and log the error.
- `const err = useRouteError();
  console.log(err);`

## Outlet component from react-router-dom
- The outlet comonent renders the relevant element from createBrowserRouter's children whenevr there is a change in the path.
- The outlet component however will not be in the html when rendered bit instead is replaced by the child route element
- whenevr there is a change in the path, only the outlet is re-render but the header and footer will just remain same

## rafce - generates component in vs code

## <a> usage to route to diff page
- Using <a> tag to navigate to a new pge will lead to reloading of the entire page.

## Link component from react-router-dom
- This works similar to <a>. But it only 
- **This is why react applications are **Single Page Web Applications**. since all the pages are rendered through children of one single components created through createBrowserRouter.**

## 2 types of Routing in Web Apps
- Client Side Routing - Like react when tha app is loaded the first time all the componets are loaded and the component is just renderes and no network calls are made.
- Server Side Routing - a network call is made to fetch the html and the html response is rendered. 

## Dynamic routing
- `path: "/restaurant/:resId",` - :resId is dynamic

## useParams

- useParams is a hook provided by react-router-dom to extract params from the request url

## Class Components
- Class based components are just javascript classes extends React.component from react so that react can track them as components.
- Class components contains a render function that returns a JSX element.
- Uses constructor() to access props. Call super(props) to properly extend Component and set up this.props
-  you do not need to write a constructor to access props in class-based components in React 16.3 and aabove since syntax in javascript itself is simplified.
- state variables are created in constuctor
- Never directly update state variables. i.e this.state.count =5
- whenever a class component is mounted on the application, the constructor is called first before everything else.
- Life Cycle in class based components: 
    - Parent Constructor
    - Parent Render
    - Child Constructor
    - Child Render
    -  Child Component Did Mount
    - Parent Component Did Mount

## ComponentDidMount

- called after the component is loaded
- API calls are made inside componentDidMount - Allowing react to render the component first instead of waiting to fetch data from API

## react lifecycle methods
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- After mounting, thr render phase of child components is bundled into one batch so that the expensive commiting phase of DOM manipulation can be done at a time for all the child components thus making react faster.
- that is why the life cycle looks like below:
    - Parent Constructor
    - Parent Render
    - First Child Constructor
    - First Child Render
    - Second Child Constructor
    - Second Child Render
    DOM MANIPULATION BEGINS
    - First Child Component Did Mount
    - Second Child Component Did Mount
    - Parent Component Did Mount

## 

- Mounting
   - Constructor (Dummy Data-initialized data)
   - Render (Dummy Data)
        - <HTML  (Dummy Data)>
   - Component Did Mount 
        - API called
        - <this.setState> -> State Variable is updated 
- Updating 
        - Render (API data)
        - <HTML (new API Data)>
        - Component Did Update

- Instance:
        - Parent Constructor
        - Parent Render
        -  Name Child Constructor
        - Name Child Render
        - Name Child Component Did Mount
        -  Parent Component Did Mount
        -  Manasa Kalluru Child Render
        - Component Did Update

## App chunking, Code Splitting, Dynamic Bundling, Lazy Loading, On Demand Loading, Dynamic Import
-  lazy() is a named export from react which takes a call back function as parameter which returns a react component from the import.

## Tailwind CSS
- learn about scss, caas, stylesheets,material UI, chakra UI, Bootsrap
- Post CSS is a tool for transforming CSS with JS. Tailwind CSS uses Post CSS.