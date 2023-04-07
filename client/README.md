# BOOKOHOLIC

Single Page App for listing favourite books made with Angular as a front-end framework, Node.js for back-end and MongoDB for database. The app has verifies if the user is guest or has an account with working Login and Register Forms. If the user logs into their account options such as “Add unlisted book” and Profile Page are available. All of the books are stored in the database and can be explored in the Catalog Page. By selecting a book, dynamic route leads to a Details Page. If the user has added a book, they have the ability to edit or delete the book’s information from the database. The Profile Page contains the user’s info and the books that they have added. The Login and Register Forms have validation for email and password using Regex. Using interceptor for setting headers and X-Authorization. For back-end using Express.js for routing, JTW for verification, access token etc.





# More Information
- Guests can only see three books from the catalog
- Users who have created an account can see all of the books added to the catalog, add book, edit and also delete
- Every user who has an account has a profile page with his/hers listed books



# Exam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
