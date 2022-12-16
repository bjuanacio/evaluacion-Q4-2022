import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/'
})

export default Api