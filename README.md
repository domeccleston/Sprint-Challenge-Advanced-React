# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Why would you use class component over function components (removing hooks from the question)?

React Hooks are a recent introduction to React, and the documentation on the ReactJS website still focuses 
primarily on class components. As such they are more accessible than Hooks. Also resulting from this, a lot of
existing React code is written to use class components and it might make sense to continue to do so rather than
refactoring an entire codebase to use Hooks. 

Additionally, since Hooks are a work in progress there are some advanced lifecycle methods that do not have a 
Hooks equivalent yet (getSnapShotBeforeUpdate and componentDidCatch). The React docs also state that some third-
party libraries may not be compatible with Hooks yet.

- [ ] Name three lifecycle methods and their purposes.

ComponentDidMount: this method is invoked immediately after a React component is inserted onto the DOM. It is often used to execute side effects such as network requests. 

ComponentDidUpdate: this is called immediately after a component updates. It can be used for network requests
or other side effects that are conditional on some previous state or props value.

Render: this is a pure function that takes props and state and returns content to add to the DOM: mainly React
elements and text content. They can also return booleans or arrays in order to render conditionally or return 
multiple elements respectively.

- [ ] What is the purpose of a custom hook?

Custom hooks are used to combine React's built-in hooks and any functions of our own in order to avoid repetition and improve readability. This fits the React philosophy of creating reusable UI components. 

- [ ] Why is it important to test our apps?

Making mistakes during coding is inevitable. Testing allows bugs to be uncovered during or immediately after developing features, rather thah having them uncovered after shipping. Additionally, as codebases grow larger 
and more complex they become more and more error prone, so by implementing testing from the get go it becomes possible to scale projects more safely.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Run `yarn` to download dependencies.
- [ ] Run the server using `yarn start` or `node server.js`.
- [ ] In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- [ ] Still inside the `client` folder run `yarn start` to run the client application.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `k
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write integration tests for your React components

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API
