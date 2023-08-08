import axios from 'axios'

/*eslint-disable no-unused-vars */

// helper

function getScreenHeight () {
  return window.screen.height
}

// rest api

const devHost = 'http://localhost:5173/api'

async function apiPingServer () {
  const url = devHost + '/ping'
  try {
    const { data } = await axios.get(url)
    console.log('ping resp:', data.message)
  } catch (err) {
    console.error('ping server error:', err)
  }
}

export {
  getScreenHeight,
  apiPingServer,
}
