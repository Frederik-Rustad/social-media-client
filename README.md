# Workflow CA

In this assignment I was tasked with improving the quality of a package by establishing helpful workflows that make the development process more efficient.

## Configuration

- **Prettier**: Code formatter that enforces a consistent style.
- **ESLint**: Used to find and fix problems with the JavaScript code.
- **Husky**: a Git hook manager designed for JavaScript and Node.js projects, enabling streamlined configuration and execution of custom scripts, such as linting
- **Jest**: Unit testing to confirm that a function is working correctly.
- **Cypress**: end-to-end testing framework that runs in the browser.

[![deploy static to pages](https://github.com/Frederik-Rustad/social-media-client/actions/workflows/static.yml/badge.svg?branch=workflow)](https://github.com/Frederik-Rustad/social-media-client/actions/workflows/static.yml)

## Installation and Setup

Clone the repository and install dependencies:

git clone https://github.com/Frederik-Rustad/social-media-client/tree/workflow

```bash
npm install
```
```bash
npm run build
```

## Running Tests

To run unit tests with Jest:

```bash
npm run test-unit
```

To open and run e2e tests with Cypress in browser:

```bash
npm run test-e2e

```
