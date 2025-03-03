# Next vercel Tutorial

## React Foundations

### Building blocks of a web application

- User Interface
- Routing
- Data Fetching
- Rendering - when and where you render static or dynamic content
- Integrations
- Performance
- Scalability
- Developer Experience

### Rendering User Interfaces

- HTML renders to DOM (Document Object Model)

### Updating UI with Javascript

```html
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      const app = document.getElementById("app");
      const header = document.createElement("h1");
      const text = "Develop. Preview. Ship.";
      const headerContent = document.createTextNode(text);
      header.appendChild(headerContent);
      app.appendChild(header);
    </script>
  </body>
</html>
```

#### Imperative vs Declarative programming

- Imperative: How to do something (step by step)
- Declarative: What to do (what you want to achieve)

```html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- <script type="text/javascript">
      const app = document.getElementById("app");
      const header = document.createElement("h1");
      const text = "Develop. Preview. Ship.";
      const headerContent = document.createTextNode(text);
      header.appendChild(headerContent);
      app.appendChild(header); 
    </script> -->
    <script type="text/jsx">
      const app = document.getElementById("app");
      const root = ReactDOM.createRoot(app);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
```

### Building UI with Components

#### React core concepts

- Components: User interfaces can be broken down into smaller building blocks called components
  - React components should be **capitalized** to distinguish them from plain HTML and javascript
  - You use React components the same way you'd use regular HTML tags, with **angle brackets <>**

```html
<script type="text/jsx">
  const app = document.getElementById("app");
  function Header() {
    return (<h1>Develop. Preview. Ship.</h1>);
  }
  function HomePage() {
    return (
      <div>
        <Header />
        <p>Next.js is the React framework for production</p>
      </div>
    )
  }
  const root = ReactDOM.createRoot(app);
  root.render(<HomePage />);
</script>
```

- Props: you can pass pieces of information as properties to React components. These are called props. _props_ is an object, you can use object destructuring to explicitly name the values of props inside your function parameters. To use the props, you need to use **curly braces {}**.

```jsx
function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  return (
    <div>
      <Header title="React" />
      <p>Next.js is the React framework for production</p>
      <Header />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

- State: React has a set of functions called hooks. Hooks allow you to add additional logic such as **state** to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.

```jsx
// count: state variable
// setCount: function to update the state variable
// default value: 0
const [count, setCount] = React.useState(0);
```

### Installing Next.js

- `npm install react@latest react-dom@latest next@latest` or `npx create-next-app@latest`
- by using the 1st commandline you create a new empty project. You need create _page.jsx_ and _app_ folder to make the _next_ app work.
- by 1st commandline you need also add `scripts": {"dev": "next dev"}` into your _package.json_ file.

### Server and Client Components

- the environments your application code can be executed in: the server and the client. The network boundary that separates server and client code.
- the client refers to the browser on a user's device that sends a request to a server for your application code. It then turns the response it receives from the server into an interface the user can interact with.
- the server refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.

#### Using Client Components

- Next.js uses Server Components by default.

## Nextjs App Router

- using _pnpm_ to install packages `npm install -g pnpm`
- `npx create-next-app@latest nextjs-dashboard" --use-pnpm`
- `pnpm i` to install the project's packages
- `pnpm dev` to start the development server
- `npm install --save clsx` a tiny utility for constructing className strings conditionally

### Optimizing Fonts and Images

- _Next.js_ automatically optimizes fonts in the application when you use the _next/font_ module.

```tsx
// fonts.ts
import { Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

// layout.tsx
import { inter } from "./fonts";
...
<body className={`${inter.className} antialiased`}>{children}</body>
```

- _next/image_ module prevents layout shift, resizing, lazy loading and serving images in modern formats like WebP and AVIF

### Creating Layouts and Pages

#### Nested routing

- _next.js_ uses file-system routing where folders are used to create nested routes. Each folder represents a route segment that maps to a URL segment. You can create separate UIs for each route using _layout.tsx_ and _page.tsx_ files.
  ![nested routing](./pics/routing.png)

### Navigating Between Pages
