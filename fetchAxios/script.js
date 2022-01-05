// GET

const getData = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      viewStatus.innerHTML = JSON.stringify(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

// POST

let params = {
  name: "sreehari prathap",
  job: "developer",
}
const postData = () => {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      viewStatus.innerHTML = JSON.stringify(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

//ASYNC AWAIT
//? ASYNC GET
async function getAsyncUsers() {
  const response = await fetch("https://reqres.in/api/users")
  const data = await response.json()
  console.log(data)
  viewStatus.innerHTML = JSON.stringify(data)
}
//? ASYNC POST

async function postAsyncUsers() {
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
  const data = await response.json()
  console.log(data)
  viewStatus.innerHTML = JSON.stringify(data)
}

//AXIOS
const getUsersAxios = () => {
  axios
    .get("https://reqres.in/api/users")
    .then((response) => {
      console.log(response.data)
      viewStatus.innerHTML = JSON.stringify(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
const postUsersAxios = () => {
  axios
    .post("https://reqres.in/api/users", params)
    .then((response) => {
      console.log(response.data)
      viewStatus.innerHTML = JSON.stringify(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

let params2 = {
  name: "sreehari prathap",
  job: "software developer",
}

const putUsersAxios = () => {
  axios
    .put("https://reqres.in/api/users/{6}", params2)
    .then((response) => {
      console.log(response.data)
      viewStatus.innerHTML = JSON.stringify(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
const deleteUsersAxios = () => {
  axios
    .delete("https://reqres.in/api/users/{6}")
    .then((response) => {
      console.log(response.data)
      viewStatus.innerHTML = "data deleted"
    })
    .catch((err) => {
      console.log(err)
    })
}

const getbtn = document.querySelector(".getbtn")
const postbtn = document.querySelector(".postbtn")
const asyncbtn = document.querySelector(".asyncbtn")
const asyncpostbtn = document.querySelector(".asyncpostbtn")
const axiosbtn = document.querySelector(".axiosgetbtn")
const axiospostbtn = document.querySelector(".axiospostbtn")
const axiosputbtn = document.querySelector(".axiosputbtn")
const axiosdeletebtn = document.querySelector(".axiosdeletebtn")
const viewStatus = document.querySelector(".viewparams")
getbtn.addEventListener("click", getData)
postbtn.addEventListener("click", postData)
asyncbtn.addEventListener("click", getAsyncUsers)
asyncpostbtn.addEventListener("click", postAsyncUsers)
axiosbtn.addEventListener("click", getUsersAxios)
axiospostbtn.addEventListener("click", postUsersAxios)
axiosputbtn.addEventListener("click", putUsersAxios)
axiosdeletebtn.addEventListener("click", deleteUsersAxios)
