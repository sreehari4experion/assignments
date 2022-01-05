const paramsView = document.querySelector(".params")
const getBtn = document.querySelector(".get")
const postBtn = document.querySelector(".post")
const putBtn = document.querySelector(".put")
const patchBtn = document.querySelector(".patch")
const deleteBtn = document.querySelector(".delete")

// GET

let request = new XMLHttpRequest()

request.open("GET", "https://reqres.in/api/users")
request.send()
getBtn.addEventListener("click", () => {
  if (request.status === 200) {
    console.log(request.response)
    console.log(JSON.parse(request.response))
    paramsView.innerHTML = JSON.stringify(JSON.parse(request.response))
  } else {
    console.log("error")
  }
})

// POST

let params = {
  name: "Sreehari Prathap",
  job: "Software Engineer",
}

let postRequest = new XMLHttpRequest()

postRequest.open("POST", "https://reqres.in/api/users")
postRequest.setRequestHeader("Content-Type", "application/json")
postRequest.send(JSON.stringify(params))
postBtn.addEventListener("click", () => {
  if (postRequest.status === 201) {
    console.log(JSON.parse(postRequest.response))
    paramsView.innerHTML = JSON.stringify(JSON.parse(postRequest.response))
  } else {
    console.log("error")
  }
})
// PUT

let params2 = {
  name: "Sreehari Prathap",
  job: "Software Engineer OF the Year",
}

let putRequest = new XMLHttpRequest()

putRequest.open("PUT", "https://reqres.in/api/users/2")
putRequest.setRequestHeader("Content-Type", "application/json")
putRequest.send(JSON.stringify(params2))
putBtn.addEventListener("click", () => {
  if (putRequest.status === 200) {
    console.log(JSON.parse(putRequest.response))
    paramsView.innerHTML = JSON.stringify(JSON.parse(putRequest.response))
  } else {
    console.log("error")
  }
})

//PATCH

let params3 = {
  name: "Sreehari Prathap",
  job: "Software Engineer OF the Century",
}

let patchRequest = new XMLHttpRequest()

patchRequest.open("PATCH", "https://reqres.in/api/users/2")
patchRequest.setRequestHeader("Content-Type", "application/json")
patchRequest.send(JSON.stringify(params3))
patchBtn.addEventListener("click", () => {
  if (patchRequest.status === 200) {
    console.log(JSON.parse(patchRequest.response))
    paramsView.innerHTML = JSON.stringify(JSON.parse(patchRequest.response))
  } else {
    console.log("error")
  }
})

//DELETE

let deleteRequest = new XMLHttpRequest()

deleteRequest.open("DELETE", "https://reqres.in/api/users/2")
deleteRequest.setRequestHeader("Content-Type", "application/json")
deleteRequest.send(JSON.stringify(params3))
deleteBtn.addEventListener("click", () => {
  if (deleteRequest.status === 204) {
    console.log(JSON.parse(deleteRequest.response))
    paramsView.innerHTML = JSON.stringify(JSON.parse(deleteRequest.response))
  } else {
    console.log("error")
  }
})

// create an object of xmlhttprequest

let registerBtn1 = document.querySelector("#submit")

const register = () => {
  let registerParams = {
    name: document.querySelector("#myName").value,
    job: document.querySelector("#myJob").value,
  }
  let registerrequest = new XMLHttpRequest()
  registerrequest.open("POST", "https://reqres.in/api/users")
  registerrequest.setRequestHeader("Content-Type", "application/json")
  registerrequest.send(JSON.stringify(registerParams))
  registerBtn1.addEventListener("click", () => {
    if (registerrequest.status === 201) {
      console.log(JSON.parse(registerrequest.response))
      paramsView.innerHTML = JSON.stringify(
        JSON.parse(registerrequest.response)
      )
      document.querySelector("#myName").value = ""
      document.querySelector("#myJob").value = ""
    } else {
      console.log("error")
    }
  })
}
