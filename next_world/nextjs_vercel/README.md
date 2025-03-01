# React Foundations

## Building blocks of a web application

- User Interface
- Routing
- Data Fetching
- Rendering - when and where you render static or dynamic content
- Integrations
- Performance
- Scalability
- Developer Experience

## Rendering User Interfaces

- HTML renders to DOM (Document Object Model)

## Updating UI with Javascript

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

### Imperative vs Declarative programming

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

## Building UI with Components

### React core concepts

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

- State
