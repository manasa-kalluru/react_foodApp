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
- 