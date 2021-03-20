# Veristart certificate test

## To run:

To start the project you will need to create the Dummy JSON server with:

`npm run start-backend` (prerequisite: 'npm install -g json-server')

Please run `npm start` to run the client.

## Features:

- User may navigate to a form and upload their certificate details (including image), with a preview
- The user certificate is combined in the first position in the pool of certificates
- Certificates displayed in randomly generated sizes in a grid that automatically tries to fill blank space
- The site is responsive
- Minimal use of third party libraries used for core functionality; native API's for image upload, React Context for State management
- Atomic design principles

## Outstanding work and to-do:

- Add linting
- Add proptypes
- Add absolute imports
- Form Validation
- Reduce image sizes (causing drag in relation with expensive grid-auto-flow property)
- Grid item sizes require tweaking to have zero blank space
- Create custom button over inconsistent file input button (very hacky)
- Move text content to JSON files

## Figma design:

https://www.figma.com/file/ThLWF01ZQCHf2IuS6eonCP/verisart-project?node-id=0%3A1


## Time breakdown:

- Design and mockup: 25min
- Boilerplate setup and config: 30mins
- Implementation: 5h (a lot of custom css was written :P)