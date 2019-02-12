import axios from 'axios'
import Vue from 'vue'

const baseUrl = process.env.APIURL ? process.env.APIURL : 'http://localhost:3001/'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const fetch = axios.create({
  baseURL: baseUrl,
  headers: headers,
  timeout: 300000
})

fetch.interceptors.response.use( (response) => {
  return response.data
}, error => {
  if(error.status){
    Vue.$Message.newInstance({type: 'error', text: error.status})
  }
})

export default fetch