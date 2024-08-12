![Numida](../logo.numida.png)

# What are we looking for in an engineer?

We are looking for an experienced frontend engineer which is very familiar with contemporary Native landscape and can lead the evolution process of our codebase.

Now, before we start. Let's apply the algorithm of success:

```js
while(noSuccess) {
    tryAgain();
    if(Dead) {
        break;
    }
}
```

## What are we testing for in this assessment?

- Your skill as a frontend developer.
- Your skill as a mobile developer.
- Your ability to structure your code.
- Your ability to write well-typed code.
- Your ability to write reusable components.
- Your ability to write readable and extendable code by following the right design principles.
- Your familiarity with contemporary frameworks and libraries.

## Expectations

- Although we strive for perfection we don't expect everything to be perfect, **just do you**.
- Given the size of the assignment we don't expect everything to be done, **do what you can given the time**.

> The assignment should take about a maximum of **3 hours** to complete.

# Assessment:

## Objective:

Create a simple fintech mobile application to apply for a loan.

## Figma Design:

Find the application Design [Here](https://www.figma.com/design/GqPXXirX8o5yAuzOnlxn5U/Test?node-id=0-1&t=s8HM6XG5VcUZAPgs-1)

> This design is illustrative and we don't expect yours to be the exact same, but it would be nice ;)

## Setting Up Local Server

Please refer to the server [README](server/README.md) file in the root directory of the project to set up the local server.

## Requirements

1. **Data Fetching with GraphQL**:
   - Fetch a list of loan products using a GraphQL query.
   - Display the loan products in a user-friendly format shown in the attached Figma design.

2. **Form Submission with REST API**:
   - Implement a form that allows users to apply for a loan.
   - Submit the form data to a REST API endpoint.

3. **Application Structure**:
   - Use React Native for building the application.
   - Use any styling approach (e.g., Styled Components, React Native's StyleSheet).
   - State management can be handled using React Native's built-in hooks or any state management library of your choice.

## Instructions:

1. **Setup**: All the resources you require to do this assessment will be provided along with this README.

2. **GraphQL Data Fetching**:
   - Create a GraphQL query to fetch the following loan product data:
     - `id`
     - `name`
     - `interestRate`
     - `maximumAmount`
   - Display the fetched loan products on the homepage.

3. **Form Submission**:
   - Create a form that includes the following fields:
     - Full Name
     - Email Address
     - Loan Amount
     - Loan Purpose
   - Validate the form fields (e.g., ensure email is in the correct format, loan amount is a positive number).
   - On form submission, send a POST request to the following REST API endpoint: `http://localhost:5000/apply-loan`.
   - Handle the response from the API and display a success or error message to the user.

4. **Bonus**:
   - Implement a loading spinner or some form of feedback while data is being fetched or the form is being submitted.
   - Add error handling for both the GraphQL query and the REST API call.
   - Use TypeScript to add type safety to your application.
   - Any form of tests (unit/functional)
   - Note down additional suggestions, given more time
   - Recording of your project

5. **Submission**:
   - Ensure your code is well-documented and formatted.
   - Push your code to your GitHub repository.
   - Provide a link to your repository and a brief description of your approach.

6. **Follow-Up Questions**:
   - Be prepared to explain your code, discuss your approach, and suggest improvements during a follow-up session.
   - You may be asked to extend the functionality of your application during the follow-up.

## Evaluation Criteria:

- Correctness and completeness of the implementation.
- Code quality and organization.
- User experience and interface design.
- Ability to handle errors and edge cases.
- Explanation and understanding of your approach during the follow-up session.

## Resources:

- [GraphQL Documentation](https://graphql.org/learn/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [REST API Guide](https://restfulapi.net/)

## Hints

- Clear and easy to understand setup instructions.
- Keep it simple...
- Have fun!

Good luck! We look forward to reviewing your application.
