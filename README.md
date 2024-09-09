# Didomi challenge

## Setup

For this project I decided to use `PNPM` as my package manager, but both `NPM` and `Yarn` should work just fine.

```bash
pnpm install # Install the dependencies
pnpm dev # Start the development server
pnpm test # Run the tests
```

## Stack

### Styles

As it was a requirement of the challenge to use a Material UI library, I've chosen to use `MUI` which is the standard in the market and it's backed by Google.

### State management and API communication

Since most of the state management necessary for this project revolves around API interaction, I've chosen to use to use `@tanstack/react-query`, which in my opinion is an excellent library for handling API communication and caching efficiently.

### Form management

For form management I opted to use `react-hook-form` and `zod`. This combination allows for type safe validation with minimal boilerplate.

### Testing

For testing I've used `vitest` and `react-testing-library`.
