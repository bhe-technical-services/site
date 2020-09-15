require('dotenv').config();
const axios = require('axios')

const url = process.env.NETLIFY_BUILD_HOOK

axios
  .post(`${url}`, {
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    // console.log(`headers: ${res.headers}`)
    // console.log(`config: ${res.config}`)
  })
  .catch(error => {
    console.error(error)
  })