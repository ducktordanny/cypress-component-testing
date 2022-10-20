# Setup and demo



## Getting started

Install: `yarn add --dev cypress` or `npm i --save-dev cypress`

Configuring: `npx cypress open`

Choosing **Component Testing** and follow the process
![](assets/03-cypress-config-window.png)



## Our first test

Open component testing directly: `npx cypress open --component`

Using `cy.mount()` instead of `cy.visit()`:

1. Template code inside a string
2. Config object: MountConfig<T> (extends TestModuleMetadata)
3. Use the same API to make changes and check them



## Demo

![](assets/03-demo.gif)
