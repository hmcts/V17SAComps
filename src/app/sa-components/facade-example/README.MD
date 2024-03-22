# Facade Example

The goal here is to provide a code example that shows the benefits of using the facade design pattern in front end code.

There are two components here the first called polluted component shows a typical component you might end up with following standard NgRx conventions.

One of the weaknesses of the standard approach is that it introduces a close coupling between the UI Component and the state implementation. (The same could be said for React / Redux as well)

A number of things to note, the store implementation (whether that is the global NgRx store or the lighter Component Store) is injected into every component that needs to use it, if for some reason we need to change the implementation we have multiple points of change.

The component becomes responsible to dispatch actions, which again needs an implicit knowledge of the store implementation.

Objects returned from the store are immutable objects,so the component will then need to clone of deep copy the object before editing. This means you end up with data manipulation functions in the component, the code base ends up with lots of these little data manipulation functions (which can slow down the view)

Testing will require copies of the Mock Store, this leads to more complex and slower running tests.

In short the code becomes messy difficult to read and the original programmers intent becomes far less clear.
