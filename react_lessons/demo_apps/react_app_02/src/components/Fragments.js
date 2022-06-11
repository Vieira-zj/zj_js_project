import React from 'react'
import UserCard from './UserCard'

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

const Message = ({ message }) => (
  <>
    <h1>{message}</h1>
  </>
)

const Login = () => (
  <>
    <h3>Please Login</h3>
  </>
)

const Welcome = () => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
    <UserCard />
  </div>
)

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

class TechList extends React.Component {
  render () {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

export {
  HexaColor,
  Message,
  Login,
  Welcome,
  Button,
  TechList,
}
