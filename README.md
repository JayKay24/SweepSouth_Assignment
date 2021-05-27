![tests-sweepsouth](https://github.com/JayKay24/SweepSouth_Assignment/actions/workflows/tests-sweepsouth.yaml/badge.svg)

# SweepSouth_Assignment

A simple Next.js application that consumes an API

## Running the Application

- Download and install [docker](https://www.docker.com/)
- Source the shell script to make the `buildAndRunImage` function available
- Call the `buildAndRunImage` function

```
$ . ./common_operations.sh
$ buildAndRunImage
```

## Technical Decisions

### State Management

I'm using the Context API coupled with `useReducer` hook for state management. The application size is small and most of the state is lifted to the App component and made available via the context API's `Provider` wrapper. A single `profilesReducer` hook is responsible for sorting, filtering and setting initial state.

### Next.js

Bonus points for using Next.js. It's an opportunity to widen my scope of the `React` ecosystem.

### Testing

I decided to go with [`React Testing Library`](https://testing-library.com/docs/) because it is recommended by the React team and allows my tests to avoid using implementation details.

### What would I do differently

- In the sort implementation, I decided to sort profiles by the first and last names using javascripts `localCompare` method for strings. This approach works but is rudimentary. Perhaps I would include a sort on birthdays and age ranges to provide more granularity to the sort.
- In the search implementation, I decided not to add debouncing as I set a hard limit on the size of the profiles state array to not be greater than 50. If the size of the profiles state array had been greater than that and was updated with an asynchronous request, then I would have to consider debouncing to limit the network calls and keep the application lean and fast.
- I would also increase the test coverage of the application, particularly adding tests for the search & sort features. I would also introduce end-to-end tests with Cypress to test a key user workflow.
* I would improve the responsiveness of the app for tablets, right now it looks good in desktop and mobile views.
