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

- in production, whenever _\<Link>_ components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background.

```tsx
import Link from "next/link";
// ...
export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```

- use _usePathname()_ hook to get the current active path (active links)

```tsx
"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// ...

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```

### Fetching Data

#### API layer

- APIs are an intermediary layer between your application code and database. There are a few cases where you might use an API:
  - if you're using third-party services that provide an API
  - if you're fetching data from the client, you want to have an API layer that runs on the server to avoid exposing your database secrets to the client

#### Database queries

- when you're creating a full-stack application, you'll also need to write logic to interact with your database. There are a few cases where you have to write database queries:
  - when creating your API endpoints, you need to write logic to interact with your database
  - if you are using **REACT SERVER COMPONENTS**, you can skip the API layer and query your database directly without risking exposing your database secrets to the client

#### What are request waterfalls?

- A "waterfall" refers to a sequence of network requests that depend on the completion of previous requests. In the case of data fetching, each request can only begin once the previous request has returned data

#### Parallel data fetching

- A common way to avoid waterfalls is to initiate all data requests at the same time - in parallel
- In JavaScript, you can use the _Promise.all()_ or _Promise.allSettled()_ functions to initiate all promises at the same time

### Static and Dynamic Rendering

- static rendering: static rendering is useful for UI with **no data** or **data that is shared across users**, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data which is regularly updated.
- dynamic rendering: With dynamic rendering, content is rendered on the server for each user at **request time** (when the user visits the page). There are a couple of benefits of dynamic rendering:
  - **real-time data**: dynamic rendering allows your application to display real-time or frequently updated data.
  - **user-specific content**: it's easier to serve personalized content, such as dashboards or user profiles, and update he data based on user interaction.
  - **request time information**: dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.

### Streaming

- streaming is a data transfer technique that allows you to break down a rounte into smaller "chunks" and progressively stream them from the server to the client as they become ready. By streaming, you can prevent slow data requests from blocking your whole page.
  This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user.
- you can add a _loading.tsx_ to contain a loading skeleton while the data is being fetched.

#### Route Groups

- route groups allow you to organize files into logical groups without affecting the URL path structure.
- file structure `/dashboard/(overview)/page.tsx` translates to URL path `/dashboard`

#### Streaming a component

- you can use **React Suspense** to specify a component. **Suspense** allows you to defer rendering parts of your application until some condition is met.

```tsx
<Suspense fallback={<LoadingSkeletion />}>
  <Component /> // Make component async
</Suspense>
```

### Partial Prerenderung

- Partial Prerenderung is only availbale with the Next.js canary release. `pnpm install next@canary`

```tsx
// next.config.mjs
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
};

// in your component
import SideNav form '@/app/ui/dashboard/sideNav';

export const experimental_ppr = true;
```

### Adding Search and Pagination

// todo: learn promise
