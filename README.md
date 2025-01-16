# Paradise Nursery Shopping Cart App

## Introduction

Welcome to the Paradise Nursery Shopping Cart App repository! This project was created as part of IBM's "Developing Front End Apps with React" course. As a final project, I developed a React application that allows users to select plants from an online shop and add them to their shopping cart.

After clicking on the “Get Started” button, users can browse and select plants. Here are some examples:

The app provides feedback during selection to enhance the user experience, such as graying out selected buttons and displaying the number of items in the cart.

Users can view their cart contents and adjust quantities as needed.

If users want to continue shopping, they can click the “Continue Shopping” button.

The checkout button is not implemented in this project. An alert informs users when they click it:

Currently, this is the extent of the application's functionality.

## Course Information

Title: Developing Front End Apps with React<br>
Type: Final Project<br>
Course Provider: IBM<br>

### Tech Stack

For this project, I used:

- HTML
- CSS
- JavaScript
- React
- Redux (with Redux Toolkit)
- Web Hosting: GitHub Pages
- IBM Cloud IDE (based on Theia and Container)

## Getting Started

To visit the website, follow the link in the GitHub repository.<br>
<br>
If you want to clone or fork the code, note that the project was developed using the IBM Cloud IDE. Setup has not been tested on other IDEs.<br>
<br>
Here’s how to set it up in the IBM Cloud IDE:

1. Clone the repository.
2. Change the terminal path to the "paradise-nursery-shopping-cart" folder. For example:

```
cd paradise-nursery-shopping-cart
```

3. Install the necessary packages using npm:

```
npm install
```

4. Run the application, which will start the server on port 4173. In the IBM Cloud IDE, there is an extra feature for this where you enter the port and start the application:

```
npm run preview
```

This command will start the application server and make the app accessible at `http://localhost:4173`. In the IBM Cloud IDE, you can specify the port number (4173 in this case) and start the application directly from the IDE interface, which simplifies the process.

**Note:** `npm run preview` is typically used to preview the production build of the application. It serves the app as it would be in a live environment. On the other hand, `npm run start` is used during development. It starts a development server with features like hot module replacement, which allows you to see changes in real-time as you edit the code.

5. Stop the application with Ctrl + C. Repeat step 4 to see changes.
   <br>
   <br>
   To deploy changes to the hosted GitHub Pages website, first install the required packages as in step 3. Then run:

```
npm run deploy
```
