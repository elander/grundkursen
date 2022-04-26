# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Skapa en mapp med startgrejor:

npx create-react-app --template typescript trello-kopia

Varför TypeScript:
https://twitter.com/i/status/1517112341183225856

Länk till dokumentation om package.json:
https://docs.npmjs.com/cli/v8/configuring-npm/package-json

Förklaring till "browserslist" i package.json
https://github.com/browserslist/browserslist

Förklaring till tsconfig.json
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

Förklaring till reportWebVitals:
https://create-react-app.dev/docs/measuring-performance/

Web Vitals:
https://web.dev/vitals-measurement-getting-started/

react-env.d.ts refererar till
node_modules/react-scripts/lib/react-app.d.ts

Styling:

styled-components, dokumentation
https://styled-components.com/docs

css-modules
https://create-react-app.dev/docs/adding-a-css-modules-stylesheet

classnames-biblioteket för att kombinera css-klasser i js/ts:
https://www.npmjs.com/package/classnames

Skapa komponent med type för props
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/

Vad är en hook?
https://reactjs.org/docs/hooks-reference.html

Använd useReducer för tillståndshantering:
https://reactjs.org/docs/hooks-reference.html#usereducer

Replay för att spela in vad som händer i en app:
https://www.replay.io

Använda Context för att dela en gemensam datastruktur mellan flera komponenter:
https://felixgerschau.com/react-typescript-context/

Peta in ett tomt objekt med rätt typ när du behöver default-värde men inte har något
https://stackoverflow.com/questions/45210111/destructuring-nullable-objects/45210379#45210379

Installera nanoid för att generera hyfsat unika id
Installera use-immer för att kunna använda Immer för icke-muterbara variabler (typ vårt globala tillstånd) och useImmerReducer för att göra reducern enklare.

https://immerjs.github.io/immer/example-setstate

Flytta saker: generiska typer i TypeScript för moveItem:
https://www.typescriptlang.org/docs/handbook/2/generics.html

Installera react-dnd:
https://react-dnd.github.io/react-dnd/about

https://react-dnd.github.io/react-dnd/docs/api/use-drag

Sida med bra tips för tester:
https://kentcdodds.com/blog/write-tests

Dokumentation till react-testing-library (som ingår i React):
https://testing-library.com/docs/

Higher Order Components för att ladda data
https://reactjs.org/docs/higher-order-components.html
