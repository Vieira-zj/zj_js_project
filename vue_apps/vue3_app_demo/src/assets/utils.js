import axios from 'axios'

/* eslint-disable no-unused-vars */

// helper

function getScreenHeight () {
  return window.screen.height
}

function deepCopy (obj) {
  const str = JSON.stringify(obj)
  return JSON.parse(str)
}

function sleep (mills) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(), mills)
  })
}

// env

// getRunEnv returns run env as "development" or "production".
function getRunEnv () {
  return import.meta.env.MODE
}

function isDevEnv () {
  return import.meta.env.DEV
}

// storage

function localStorageSet (key, value) {
  localStorage.setItem(key, value)
}

function localStorageGet (key) {
  return localStorage.getItem(key)
}

function sessionStorageSet (key, value) {
  window.sessionStorage.setItem(key, value)
}

function sessionStorageGet (key) {
  return window.sessionStorage.getItem(key)
}

// rest api


function getServerHost () {
  if (isDevEnv()) {
    // go proxy for cors
    return 'http://localhost:5173/api'
  }
  return 'http://localhost:8081'
}

async function apiPingServer () {
  const url = getServerHost() + '/ping'
  try {
    const { data } = await axios.get(url)
    console.log('ping resp:', data.message)
  } catch (err) {
    console.error('ping server error:', err)
  }
}

export {
  getRunEnv,
  isDevEnv,
  getScreenHeight,
  deepCopy,
  sleep,
  apiPingServer,
}
