# VTTP 2022 Batch 2 Final Project

The application consists of a minimum of 2 logical parts: 

![MEAN Stack](https://developer.okta.com/assets-jekyll/blog/angular-deployment/angular-deployment-aa038e7c55bc19f49878a8f524efbd332c0da232416f63e359da689d3cb095d6.png)

| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" width="50" height="50" style="display: block; margin: 0 auto" />   | <img src="https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png" width="50" height="50" style="display: block; margin: 0 auto"/>  |
| ------------- | ------------- |
| Frontend - Angular  | Backend - SpringBoot  |
| **Focus:** What users visually see and interact with on their browser or application | **Focus:** Consists of the Server, Application and Database |
| Uses PrimeNG as the UI component framework  | Connects to MySQL & AmzonS3 Database  |
| Deployed on Railway  | Deployed on Railway  |


## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" width="30" height="30" /> Angular

| Requirements  | Fulfilled? |
| ------------- | ------------- |
| Reactive Forms  | ✓ (All forms used are Reactive) |
| Use GET, POST, PUT, DELETE to communicate  | ✓ |
| SPA with 4 views  | ✓ |
| Abstract common functionalities into Services  | ✓ |
| Include application manifest  |   |

## <img src="https://static-00.iconduck.com/assets.00/spring-icon-256x256-2efvkvky.png" width="30" height="30" /> Spring Boot

| Requirements  | Fulfilled? |
| ------------- | ------------- |
| Use POST to handle either x-www-form-urlencoded and/or JSON and/or multipart payload | ✓ |
| Making HTTP request to external RESTful API |  ✓ |
| Parameterized Routes | ✓ |
| Query String | ✓  |
| Support more than 1 user | ✓  |

## Database
| Requirements  | Fulfilled? |
| ------------- | ------------- |
| Use MySQL | ✓ |
| Modeling data relationship: 1 to 1, 1 to Many (User Account, Bookshelf, Todo List) | ✓ |
| Demonstrate data integrity and consistency when updating multiple tables - Transactional | ✓ |
| Use another database - Amazon S3 Bucket (Profile Pictures) | ✓ |
| Use another database - MongoDB (Book Reviews) |  |


## Deployment
| Requirements  | Fulfilled? |
| ------------- | ------------- |
| Publicly accessible | ✓ |
| Deployed to Railway | ✓ |


## Additional Requirements
| Type | Requirements  | Fulfilled? |
| -------------| ------------- | ------------- |
SpringBoot Backend | Integrating with payment gateway - Stripe | ✓ |
SpringBoot Backend| Sending email - Uses SendGrid | ✓ |
Angular Frontend | Use map eg Google Map - PrimeNG GMap | ✓ |
Angular Frontend | Use UI component framework - PrimeNG | ✓ |
Deployment | Apply a domain name and configure your application to use the domain name| ✓ |

## APIs

### User Account
| Created? | Methods  | Urls | Actions |
| -------------| ------------- | ------------- | ------------- |
|  | **GET** | /api/user/{id} | access specific User's content |
|  | **GET** | /api/mod/{id} | access specific Moderator's content |
|  | **GET** | /api/admin/{id} | access specific Admin's content |
| ✓ | **POST** | /api/auth/signup | signup for a new account if email does not exist. |
| ✓ | **POST** | /api/auth/signin | login to an existing account |
|  | **POST** | /api/auth/signout | logout of an existing account |
|  | **PUT** | /api/auth/user/{id} | update an existing account |
|  | **DELETE** | /api/auth/user/{id} | delete an existing account by the id provided |


## Flow of Spring Boot Login and Registration 
The diagram shows flow of how we implement User Registration, User Login/Logout and Authorization process.

![Login and Registration](https://www.bezkoder.com/wp-content/uploads/2022/01/spring-boot-security-login-jwt-example-h2-database-flow.png)

A legal JWT will be stored in HttpOnly Cookie if Client accesses protected resources.

![Refresh Token](https://www.bezkoder.com/wp-content/uploads/spring-security-refresh-token-jwt-spring-boot-flow.png)

## How It Works

### Angular HttpClient

It performs the GET, POST, PUT, DELETE operations using the built-in service class. It uses the RxJS Observable-based APIs (similar to Promise and helps to manage async code), which means it returns the observable and what we need to subscribe it.

When we use HttpClient and returns the observables, below are the following points we need to consider:

- When we ```subscribe```, it will initiate the request, otherwise nothing happens.
- When the ```get()``` request returns successful, the observable emits the result and is then complete.
- When the ```get()``` request fails, the observable emits the error.

**HttpClient POST**

The HttpClient.post() method is similar to get() in that it has a type parameter, which you can use to specify that you expect the server to return data of a given type. The method takes a resource URL and two additional parameters:

```console
post(url: string, body: any, options: { headers?: [HttpHeaders]; 
context?: [HttpContext]; 
observe?: "body"; 
params?: [HttpParams]; 
reportProgress?: boolean; 
responseType: "text"; 
withCredentials?: boolean;  }):  Observable<string>
```

**Parameters**

- url: The back-end service url of type string.
- body: The content to send or replace with, of type any.
- options: The HTTP options of type object.

**Returns**

HTTP POST returns the observable response of type string.

### PrimeNG Components

**Dynamic Dialog**

Dialogs can be created dynamically with any component as the content using a [DialogService](https://www.primefaces.org/primeng-v13/dynamicdialog).

- Dynamic dialogs require an instance of a DialogService that is responsible for displaying a dialog with a component as its content. 
- Since the dynamically loaded content is not defined at build time, a configuration is necessary using the entryComponents of your parent module. 


### SendGrid 
SendGrid is a cloud-based SMTP provider that allows you to send email without having to maintain email servers. SendGrid manages all the technical details, from scaling the infrastructure to ISP outreach and reputation monitoring to whitelist services and real-time analytics. For more detailed information on how this was implemented, head over here: [Sending emails with SendGrid and spring boot](https://medium.com/javarevisited/sending-emails-with-sendgrid-and-spring-boot-81e9637a1f05)

**Dependency Required:**

```
<dependency>
<groupId>com.sendgrid</groupId>
<artifactId>sendgrid-java</artifactId>
<version>4.0.1</version>
</dependency>
```

### Spring Boot security with JSON Web Token (JWT) 
JSON Web Token or JWT, as it is more commonly called, is an open Internet standard (RFC 7519) for securely transmitting trusted information between parties in a compact way. The tokens contain claims that are encoded as a JSON object and are digitally signed using a private secret or a public key/private key pair.

The JWT token is usually generated in the server and sent to the client where it is stored in the session storage or local storage. To access a protected resource the client would send the JWT in the header.

A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.

**How JWT authentication works**

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--paCGhFRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tppls6i2nbdqevr2nybr.png" />  

1. User sign-in using username and password or google/facebook.
2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
4. Resource server then verifies the authenticity of the token using the secret salt/ public key.


**Structure of JWT Token**

<img src="https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png" />  

**Dependency Required:**

- Needs at least Java 17 for SpringBoot Security to work

### Activate New Account via Email

To verify the account, here is the high level standard process.

1. Customer perform registration.
2. Create account and mark account as pending verification.
3. Generate a security token with defined validity
4. Send out email to customer with the token to verify the email.
5. Customer click on the verification link on the email.
6. Verify if the token is valid and not expired.
7. Verify if the token belongs are the correct user
8. Activate the user account.

### [Angular Google Map](https://angular-maps.com/) 


### Stripe Payment

**General Flow**

The charge of the credit card will be done in five simple steps, involving the front-end (run in a browser), back-end (our Spring Boot application), and Stripe:

1. A user goes to the checkout page and clicks “Pay with Card”.
2. A user is presented with Stripe Checkout overlay dialog, where fills the credit card details.
3. A user confirms with “Pay <amount>” which will:
4. Send the credit card to Stripe
5. Get a token in the response which will be appended to the existing form
6. Submit that form with the amount, public API key, email, and the token to our back-end
7. Our back-end contacts Stripe with the token, the amount, and the secret API key.
8. Back-end checks Stripe response and provide the user with feedback of the operation.


![Stripe Payment Flowchart](https://www.baeldung.com/wp-content/uploads/2017/04/stripe-charge-1-1.png)


### Angular Route Guard

Based on user requirements, we can implement different guards. Angular provides the following different types of router guards:


1. **CanActivate**: Checks to see if we can visit a route based on condition.
2. **CanActivateChild**: Checks to see if we can visit route children based on condition.
3. **CanDeactivate**: Prevent the user from navigating away from the current content based on condition.
4. **canLoad**: Used to determine whether the user can navigate to a lazy-loaded module prior to loading it
5. Resolve Delay navigation until a task is complete before the route activation.


### Question Bank JSON Format

- Use MongoDB and AmazonS3 Bucket to upload worksheet questions

Format:



## Timeline

### Week 0: 14 - 19 February (Project Ideation & Set-up) 

**Project Set-up**
- [X] Receive Project Requirements
- [X] Set-up Files
    - [X] Set-up Design Files for Angular
    - [X] Set-up Config Files for Spring Boot
    - [X] Angular Client project folder
    - [X] Spring Boot project folder
    - [X] MySQL Database name - Worksheet Quest
    - [X] MongoDB Database name - Worksheet Quest
    - [X] Create Github Repository
- [X] Deployment
    - [X] Deploy Front-end on Vercel
    - [X] Deploy Back-end on Railway
    - [X] Connect Angular & Spring Boot using Cross-Origin Deployment
- [X] Decide on APIs for Users

**Client - Angular**
- [X] Create the landing page
- [X] Create User Registration Form 
- [X] Create Dynamic Dialog for Login and Registration so it appears as a pop-up

**Client --> Server**
- [X] Do a POST request to register a new user from an Angular User Registration Form and send it to the server backend to store in the MySQL Database using Services

**Server - SpringBoot**
- [X] Create the following folders:
    - [X] Controllers
    - [X] Models
    - [X] Repositories
    - [X] Services
- [X] Create User SQL Schema (schema.sql)
- [X] Create SQL Query in Repositories
- [X] Create AppConfig to resolve CORS issue
- [X] Create a POST request: /api/auth/signup

### Week 1: 20 - 26 February (User Login & Registration) 

**Planning**
- [X] Draw out the whole registration flow and how to integrate with SendGrid

**Client - Angular**
- [X] Create User Login Form 

**Server - SpringBoot**
- [X] Create a POST request: /api/auth/signin
- [X] Install Spring Security in POM Dependency
- [X] Install Sendgrid in POM Dependency
- [X] Create the MailService and MailRESTController
- [X] Test out sending a mail using POSTMAN

### Week 2: 27 February - 05 March (User Login, Logout & Registration - with Authentication & Email Verification) 

**Client - Angular**
- [X] Create 404 Error Page
- [X] Create Home Page Component
- [X] Create Product Page Component
- [X] Create Pricing Page Component
- [X] Create About Page Component
- [X] Create Top NavBar Component
- [X] Create Footer Navbar Component
- [X] Move the Top NavBar ```html``` code for the Homepage to Top NavBar Component
- [X] Create Routing for Homepage, Product, Pricing and About Pages
- [X] Update About Page information 
    - [X] Implement Angular Google Map under About Page to show the location of the office   

### Week 3: 06 - 12 March (User Login, Logout & Registration - with Authentication & Email Verification) 

**Client - Angular**
- [X] Update Homepage information with details of the product

**Client --> Server**
- [X] After user registers and POSTS request to the SpringBoot Backend, it will trigger a Dynamic Verification email to be sent welcoming the user with their first name. 
- [] If user already exists:
    - [X] do not send a verification email
    - [] prompt user to login to their account

**Server - SpringBoot**
- [X] Update the SendGrid Email Repo, Service and Controllers

### Week 4: 13 - 19 March (JWT Tokens, OAuth and Email Verification )

**Planning**
- [X] Submit PDF copy of project requirement 

**Client - Angular**
- [X] Create Application Manifest
- [X] Upload custom logo and ico


**Server - SpringBoot**
- [X] Implement Google Oauth for users to create account and login

### Week 5: 20 - 26 March (Set up Main Pages)

**Client - Angular**
- [] Set-up Main Page
    - [] Landing Page
    - [] About Page
    - [] Features Page
    - [] Pricing Page
    - [X] Login Page

### Week 6: 27 March - 02 April (Worksheet Generation)

**Planning**
- [] Draw out the whole login flow and how to integrate with Spring Boot security with JWT
- [] Figure out the JSON format of the questions to be stored in MongoDB
- [] Identify the components of the User Dashboard

**Client - Angular**
- [] Set-up Main Page
    - [] Landing Page
    - [] About Page
    - [] Features Page
    - [] Pricing Page
    - [X] Login Page

- [] Register Page
    - [] User can register for an account using Google OAuth
    - [] User can register for an account using Facebook OAuth

- [] Login Page
    - [] After the user logins, it will redirect to the Dashboard

- [] User Dashboard
    - [X] Create Dashboard page
    - [] Create Question Bank page
    - [] Create Worksheet page
    - [] Create Classroom page
    - [] Create User Dashboard with AuthGuard
    - [] Create a Question Submission Form 

- [] Update Pricing Page information 
    - [] Implement Stripe payment to allow users to pay for a specific access
    - [] Update Product Page information with details and screenshots of the product

**Client --> Server**
- [] Once the user clicks on the Verification email link, it will send a POST request to the SpringBoot Backend to update the MySQL Database. (Verification token is generated by Spring Security)
- [] Do a POST request to login to an existing account from an Angular User Registration Form and store the JWT token in LocalStorage
- [] Do a POST request to store the question in a MongoDB Database and media images in Amazon S3 Bucket

**Server - SpringBoot**
Database (MySQL)
- [] Implment Verification code and Verified status when user clicks on link in email
- [] Create another table to identify who is an "Admin", "Teacher", and "Student"

Database (MongoDB)
- [X] Create schema to save worksheet questions

- [] Call a RESTFUL External API for the User Dashboard 
- [] Implement Stripe payment
- [] Implement Spring Security with JWT Tokens
- [] Implement Facebook Oauth for users to create account and login
- [] Create a POST request: /api/question


### Week 7: 03 - 09 April 

**Planning**
- [] 

**Client - Angular**
- [] 

**Client --> Server**
- [] 

**Server - SpringBoot**
- [] 


### Week 8: 10 - 16 April ()

**Planning**
- [] 

**Client - Angular**
- [] 

**Client --> Server**
- [] 

**Server - SpringBoot**
- [] 


### Week 9: 17 - 23 April (Finalise and Debug Issues)

**Planning**
- [] 

**Client - Angular**
- [] 

**Client --> Server**
- [] 

**Server - SpringBoot**
- [] 


## Issues Encountered & Resolution

### Issue 1: CORS Error
**Issue Description:**
- After enabling Spring Security on the Backend side, there was a CORS error and the Angular Front-end was unable to POST or GET from the the Backend. 

**Resolved By:**
- Creating a proxy file 


### Issue 2: CORS Error with OAuth
- After adding the OAuth dependency and creating the SecurityFilterChain with CORS, Angular was unable to connect to the backend and CORS error was triggered.
- Suspect that there might be a conflict with my previous CORS file and this new SecurityFilterChain one

**Resolved By:**

