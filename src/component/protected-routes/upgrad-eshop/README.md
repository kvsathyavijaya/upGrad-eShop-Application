## Adherence to Coding Guidelines

- All components follow React's functional component pattern.
- File and folder naming conventions are consistent and meaningful.
- Component names start with a capital letter (PascalCase), and variables use camelCase.
- Code is formatted for readability with proper indentation.
- Logical separation of concerns is followed: layout, styling, and logic are modularized.
- Reusable components like `CustomInputField` and `CustomButton` follow DRY principles.
- Inline styles and `sx` props are used consistently with MUI standards.

## Best Coding Practices

- Used `useState` for local component state and controlled inputs.
- Ensured all form elements are accessible and labeled.
- Added input validation to prevent incorrect quantity selection.
- Modularized UI by creating custom components for inputs and buttons.
- Used React Router for navigation and clear routing (`/login`, `/signup`, `/products`, etc.).
- Avoided hardcoded values where reusable logic or constants can be used.
- Followed clean folder structure: components, pages, common, and styles are separated.
- Maintained readability by limiting lines per function and avoiding deeply nested JSX.

