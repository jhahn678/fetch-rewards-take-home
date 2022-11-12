<a name="readme-top"></a>

<br />
<div align="center">
    <img src="public/fetch-logo.png" alt="Logo" width="80" height="80">

<h3 align="center">Fetch Reward Take Home</h3>

  <p align="center">
    A simple user registration application
    <br />
    <br />
    <a href="https://fetch-rewards-take-home.vercel.app">View Demo</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

The task for this test was to create a simple user registration application that does the following:
<ul>
  <li>Fetches field options from an API endpoint</li>
  <li>Validates the user's inputs</li>
  <li>Submits the form to an API endpoint</li>
  <li>Provides feedback to the user on success</li>
</ul>

My preferred front-end framework is React.js, so I chose to complete this test using Next.js and MUI.


### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![MUI][MUI]][MUI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is a Next.js project bootstrapped with create-next-app.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jhahn678/fetch-rewards-take-home.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```
4. Open http://localhost:3000 with your browser to see the result.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Features

<ul>
   <li>Initial Request</li>
   <ul>
     <li>
       The initial request made to the form data endpoint is performed using server-side rendering, eliminating the hassle of managing loading states. 
     </li>
  </ul>
  <li>Validation</li>
  <ul>
     <li>
        The form reducer performs some minor validation. Email and Password are both validated against a regex expression. The rest of the fields are simply given the required property. The entire form is also evaluated, and if marked as valid, the the submit button is enabled and the user may submit the form.
     </li>
  </ul>
  <li>Global State</li>
  <ul>
     <li>
       Upon successfully submitting the form, the response from the server is saved to global state. Once the user is redirected to the success page, they can view this state in the <i>View my profile</i> modal.
     </li>
  </ul>
</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/

