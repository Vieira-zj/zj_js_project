import React from 'react';
import ReactDOM from 'react-dom';
import meCharton from './images/me_charton.png';

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

/* 
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {author.firstName} {author.lastName}</p>
      <small>{date}</small>
    </div>
  </header>
)
*/
// Header Component
const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>Instructor: {author.firstName} {author.lastName}</p>
        <small>{date}</small>
      </div>
    </header>

  )
}

// JSX element, main
const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1982
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

/*
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
*/
// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// import media objects
/*
const user = (
  <div>
    <img src={meCharton} id='me_pic' alt='me charton' />
  </div>
)
*/
// User Card Component
const UserCard = () => {
  return (
    <div>
      <img src={meCharton} id='me_pic' alt='me charton' />
      <h4>{author.firstName} {author.lastName}</h4>
    </div>
  )
}

/*
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)
*/
// Main Component
const Main = () => {
  return (
    <main>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
        :
      </p>
        <ul>
          <TechList />
        </ul>
        {result}
        {personAge}
        <UserCard />
      </div>
    </main>
  )
}

// JSX element, footer
const copyRight = 'Copyright 2020'

/* 
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)
*/
// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <p>{copyRight}</p>
      </div>
    </footer>
  )
}

// JSX element, app, a container or a parent
/*
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)
*/
// The App, or the parent or the container component
const App = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
