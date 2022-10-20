# E2E vs Component Testing



## The same test runner, commands, and API

![](assets/02-same-but-different.gif)



## E2E

- Rendering within a complete website
- Tests match the user experience
- Can be used for integration testing as well
- Can be written by developers or QA Teams


- More difficult to set up, run, and maintain
- Testing certain scenarios require more setup



## Component

- Using a development server
- Easier to test components in isolation
- Easy to set up specific scenarios in tests
- Fewer dependencies on infrastructure
- Fast and reliable

- Do not call into external APIs/Services
- Usually written by developers working on the component
