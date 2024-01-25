# Workflow CA

In this assignment I was tasked with improving the quality of a package by establishing helpful workflows that make the development process more efficient.

## Configuration

- **Prettier**: Code formatter that enforces a consistent style.
- **ESLint**: Used to find and fix problems with the JavaScript code.
- **Husky**: Using two tools, lint-staged and husky, that will automatically run ESLint and Prettier on all files in the repository.
- **Jest**: Unit testing to confirm that a single atom of functionality is working.
- **Cypress**: e2e testing framework that runs in the browser.

[![deploystatic to page and deploy to Github Pages](https://github.com/Frederik-Rustad/social-media-client/actions/workflows/static.yml/badge.svg?branch=workflow)](https://github.com/Frederik-Rustad/social-media-client/actions/workflows/static.yml)

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
