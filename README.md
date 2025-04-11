# Congo - Your one-stop online shop!

![alt text](image-2.png)

# https://congo-app.vercel.app/

#### For the Enterprise Software Engineering Module at Ada

# Disclaimer

- I also intended to add user login and registration to the app but was unable to due to time constraints. However, I will discuss briefly some of the decisions that I would have made during development if I had added login/registration.

# Introduction

## Solution Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a lightweight e-commerce site which allows users to browse for items via either predefined shortcuts or by using the search bar. From a results page, users can browse through a variety of items and add them to a basket. From the basket page, users are able to access a mock checkout window.

## Project Aim & Objectives

The main goal of Congo is to allow people to browse for the products they want at an affordable price, while also keeping their user data safe and providing them with a frictionless user experience.

Key objectives:

- Implement real-time server calls
- A dynamic search feature that allows users to find products related to what they are searching for
- Streamlined user interface
- Keeping user data safe

# Enterprise Considerations

### Performance

To ensure that the application was performant, I ensured that functions which sent API calls to the middleware in the backend repository were lean. This means that the functions each had one purpose (Create, Read, Update, or Destroy) as opposed to a few larger functions which take in many parameters and take long to process.

Also, I stored some of the images that I used in the app within the repository itself. This was done to speed up the rendering of some resources that I knew would always be needed.

### Scalability

To ensure that Congo is scalable, I created a `/components` folder and created reusable elements so that parts of the app can be reused again to make new pages, sections or new components.

For the backend, the size of the database used to store items is limited only by Render's hosting costs. For this project, I chose the free tier which offers 1GB of storage and 256MB of RAM. However, if there was an influx of users or of products then additional storage could be purchased to vertically scale the backend effectively.

### Robustness

To ensure that the app could handle errors efficiently and that I could debug any issues, I ensured that most functions incorporated the try/catch method so that if a function failed, then the catch block would be able to handle the error gracefully instead of the application crashing.

This was particularly useful for functions which made calls to the server's API. This is because if the server was down or the call was made incorrectly, then there would be a fallback method. An example of this is the `getBasket` method, which calls `/basket` with a GET request and is expected to return an array containing all the items which the user currently has in their basket. If the server call fails for whatever reason, the `catch` statement returns a blank array `[]` which doesn't cause the server to crash, and can be handled by the basket page seeing that the length of the basket array is 0 and deducing that there are no items in the basket.

### Security

To ensure that people browsing GitHub were not able to see the login details of my database connection or the URL of my hosted backend, I kept those variables safe in a `.env` file, which was not committed to GitHub through the use of the `.gitignore` file.

Additionally, I tried to limit against SQL injection attacks by using the Sequelize ORM (Object Relational Mapping) tool. This was done by using Sequelize's Model methods. They work by parameterising queries so that user input is treated as data, and not as part of the SQL command. The benefit of this is that it adds a layer of abstraction which makes it harder for malicious users to execute commands they're not meant to.

If I had implemented the ability for a user to register/login, I would have used hashing instead of encryption because if a hacker ever got access to the encryption key, they could decrypt all passwords.

I would have hashed passwords before storing them into the database. Hashing is a one-way operation, so even if attackers got the hashed passwords they couldn't do anything with them.
I would have used the bcrypt library to hash passwords as soon as a user inputs them, that way nobody except for the user knows their password. As well as this, to prevent against rainbow table attacks (because hashes can be reversed), I would also have salted each hashed password with a unique salt `(bcrypt.hash(password, 10))` so that each hash is unique, even if two passwords are the same.

CSRF attacks trick users into making unwanted requests on a web application where they're authenticated. I set `sameSite: "Strict"` in the session cookies on the express server to ensure that cookies aren't sent with cross-site requests, which blocks unauthorized actions initiated from other domains.

I also prevent against XSS attacks by using `httpOnly:true` in my middleware to prevent JS from accessing the session cookie and thereby making it harder for hackers to steal auth tokens.

### Deployment

To host the PostgreSQL database, I used a Render instance so that the database could be accessed by both the frontend and the backend of Congo.

To host the backend of Congo, I also used Render which allowed me to set environment variables on the server itself.

To host the frontend, I used Vercel because they also own Next.js so my assumption was that development would be simpler.

# Installation and Usage Instructions

## Prerequisites

To run the app locally and configure it for hosting, you will need the following programs:

- An IDE (VSCode, IntelliJ WebStorm etc.)
- Node.js version 18.18 or later
- A node package manager (npm, yarn etc.)
- A web browser (Chrome, Firefox, Safari etc.)

## Setting up external hosting

The application is hosted by Vercel for the frontend repository, and Render for the backend repository and database. I did this because Next.js is developed by Vercel so my reasoning was that the user experience would be more straightforward.

#### Deploying the PostgreSQL Database

After creating a Render account, I [created a new database](https://dashboard.render.com/new/database) and selected the free tier. Once the database was deployed, I stored the external database URL somewhere safe to be used later.

#### Deploying the Backend repository

I then [deployed a web service](https://dashboard.render.com/web/new) and imported my GitHub repository. After specifying my start command (`node server.js`), I selected the free instance tier. When specifying environment variables, I specified `DATABASE_URL` as the external URL from my PostgreSQL database, and `ALLOWED_ORIGINS` was set as [the live frontend URL](https://congo-app.vercel.app).

#### Deploying the Frontend repository

After logging into Vercel, I allowed it to access to my GitHub repository. Then, it provided me with options to choose my project's name, framework preset, root directory, and most crucially build settings and environment variables.

I setup the repository with `npm run build` and `npm install` as my build and install commands respectively.

For this repository, the only environment variable that I used was `NEXT_PUBLIC_API_URL` which held the URL of my live backend service.

## Running the application locally

Clone this repository and the [backend repository](https://github.com/asherddesouza/congo-ecommerce-backend) using either HTML, SSH or GitHub Desktop. Open both repositories in separate IDE windows, and open terminal sessions for each as well.

To run the frontend app locally, in the frontend repository you must first run `npm install` or `yarn install`, depending on your dev environment. Once dependencies are installed, run `npm run dev` or `yarn dev` to start your local instance of the webpage.

In the backend repository, run `node server.js` to start the development server which the frontend will make API requests to. The middleware for the application is defined in the routes of this repository.

In the frontend repository, I set `NEXT_PUBLIC_API_URL=http://localhost:5000` because that's where the local backend server would be running from.

In the backend repository, I set `DATABASE_URL` as my external database URL and `ALLOWED_ORIGINS` to be "http://localhost:3000" as that's where my local frontend was hosted.

# Feature Overview

### Home (src/app/page.client.tsx)

![alt text](image-3.png)

The first page a user will land on is the Home page. Here, users can click through various categories which will redirect a user to the results page. Users can also access the navbar from here and all other pages, the Navbar's core functionality giving users the ability to search for items, as well as view their baskets.

![alt text](image-4.png)

The code for the homepage is held on the root of the `/app` folder, and although there is both a `page.tsx` file and a `page.client.tsx` there isn't a need for separation here because there are no server calls being made here.

### Navbar (src/app/components/navbar/page.client.tsx)

![alt text](image-5.png)

The navbar component acts as a 'gateway' between different parts of the website. It's visible on every page, so it provides a way to always be able to search for new items or visit the basket.

![alt text](image-6.png)

The main functionality of the navbar comes from the Form component which is wrapped around the searchbar. This component allows the user's input to be used a searchQuery which is then passed onto the results page when that's rendered.

### Results (src/app/results)

The results page is the first page where we can see an API call being made to the backend.

| Frontend                 | Backend API              |
| ------------------------ | ------------------------ |
| ![alt text](image-7.png) | ![alt text](image-8.png) |

In this code comparison, we can see that getResults calls the API with the searchQuery that was received from the form in the Navbar component. On the backend side, we can see that some processing is done and that we look for all the items in the database that match with the user's search term on either name, description or category.

### Basket (src/app/basket)

The basket was the most crucial part of the app to build. Without it, users would just be virtually window shopping! There are three functions in the basket that make API calls directly, and these functions are called by other components within their Server components so that they can get the data they need.

| Frontend                  | Backend API               |
| ------------------------- | ------------------------- |
| ![alt text](image-9.png)  | ![alt text](image-12.png) |
| ![alt text](image-10.png) | ![alt text](image-13.png) |
| ![alt text](image-11.png) | ![alt text](image-14.png) |

These functions allow the user to add items to their basket, clear their baskets and most importantly get their baskets so that they can be seen on the `/basket` page.

### After API call processing

![alt text](image-15.png)

### Final result

![alt text](image-16.png)

Even after the items come back from the API call, we still need to do some processing so that we can present the numbers that we receive from the DB back in a 'nice' format.

![alt text](image-17.png)

Also, I used a modal instead of a page to 'confirm' the user's order. This was done because otherwise they'd have to be returned straight to the homepage without a warning and that's not a good user experience.

# Issues & future enhancements

- To improve performance further, I could have cached some requests from the server so that they would be loaded in faster the next time the API call was made.
- I would have liked to have added a register/login function to Congo, which would have allowed users to sign up for accounts, edit their details, change their password and delete their accounts
- A known bug is that technically, users can complete transactions with nothing in their baskets
- I wanted to add functionality such that the carousel on the homepage automatically cycles through the different slides to improve the user experience by exposing them to more products
- On the results page, images are formatted strangely because all images are squashed to conform to a 2:1 ratio
- If given more time, I would've added greater accessibility support through the use of aria labels so that screen readers can more effectively project content

# References

While developing, I used GitHub Copilot primarily as a tool to predict what I was going to type and do it faster than I could've done it. As well as this, I used its' built-in chat feature in VS Code to help me debug when I didn't know how to approach the solution to a problem.

I did not use any AI to write this README.
