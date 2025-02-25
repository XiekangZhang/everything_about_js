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

- Components
- Props
- State
