# Vue.js
This sub-project is about learning one javascript framework - _vue.js_, which is a progressive framework. 
The idea of progressive is that you are starting with something small and gradually building something bigger.
The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or
existing projects. On the other hand, _Vue_ is also perfectly capable of powering sophisticated Single-Page Applications.

The sources used in this sub-project are:
- [office documentation](https://vuejs.org/guide/introduction.html)

Currently there are two versions of vue supported. There are _vue 2_ and _vue 3_. We will start with _vue 2_, 
due to current development situation about a framework of vue, called _vuetify_. However, we use _vue 3_ new feature.

## Installation
- Install _node js_ (Update _npm_: _npm install -g npm@latest_)
- Install _vue_ : _npm install vue2_ or _npm install latest vue_ for _vue 3_
- Install _vue cli_: _npm install -g @vue/cli_ --> sometimes you need _sudo_ right
  - _vue --version_ 
  - _npm update -g @vue/cli_
- Then create _vue_ project: _vue create project_name_ or _npm install_ with directory of _package-lock.json_

## Getting Started
There are usually two ways to migrate _vue_ into your _javascript_ project. 
The first way is to add _vue_ into _script_ in _html_ file. The method is suitable for small and light-weighted webapp.
The second way is to create _vue_ project, following the __Installation__ part.  

## Useful directive
- _v-html_: run a string as html
- _v-bind_: dynamically bind one or more HTML attributes, or a component prop to an expression, shorthand _:attr_
- _v_if_
- _v_for_
- _v_on_: let users interact with your app. This directive is used to attach event listeners that
invoke methods on our _Vue_ instances, shorthand _@click_ (__v_on:argument.modifiers=value__)
- _v_model_: make two-way binding between form input and app state

## Options API & Composition API
Options API is better for users coming from OOP language backgrounds, whereas composition API is centered around 
declaring reactive state variables directly in a function scope, and composing state from multiple functions together
to handle complexity. Composition API is more free-form, and requires understanding of how reactivity works in _Vue_
to be used effectively. 
### Options API
- _data_: declare reactive state of a component. These instance properties are only added when the instance is first
created. It is possible to add a new property directly to _this_ without including it in _data_. However, properties
added this way will not be able to trigger reactive updates. 
- _methods_: add methods to a component instance
- _mounted_:
- _computed_: adding additional logic for data, _computed_ save the data into cache.
### Composition API
todo
