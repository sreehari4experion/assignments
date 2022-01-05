const getButton = document.querySelector(".get")
const title1 = document.querySelector("#name1")
const email1 = document.querySelector("#email1")
const image1 = document.querySelector("#image1")
const title2 = document.querySelector("#name2")
const email2 = document.querySelector("#email2")
const image2 = document.querySelector("#image2")
const title3 = document.querySelector("#name3")
const email3 = document.querySelector("#email3")
const image3 = document.querySelector("#image3")
const title4 = document.querySelector("#name4")
const email4 = document.querySelector("#email4")
const image4 = document.querySelector("#image4")
let request = new XMLHttpRequest()

request.open("GET", "https://reqres.in/api/users")
request.send()
request.onload = function () {
  if (request.status === 200) {
    console.log(JSON.parse(request.response))
    title1.innerHTML = JSON.stringify(
      JSON.parse(request.response).data[0].first_name
    )
    email1.innerHTML = JSON.stringify(
      JSON.parse(request.response).data[0].email
    )
    image1.src = JSON.parse(request.response).data[0].avatar
    title2.innerHTML = JSON.stringify(
      JSON.parse(request.response).data[1].first_name
    )
    email2.innerHTML = JSON.stringify(
      JSON.parse(request.response).data[1].email
    )
    image2.src = JSON.parse(request.response).data[1].avatar
    title3.innerHTML = JSON.stringify(
      JSON.parse(request.response).data[2].first_name
    )
    email3.innerHTML = JSON.stringify(
      JSON.parse(request.response).data[2].email
    )
    image3.src = JSON.parse(request.response).data[2].avatar
    title4.innerHTML = JSON.stringify(
      JSON.parse(request.response).data[3].first_name
    )
    email4.innerHTML = JSON.stringify(
      JSON.parse(request.response).data[3].email
    )
    image4.src = JSON.parse(request.response).data[3].avatar
  } else {
    console.log("error")
  }
}
// getButton.addEventListener("click", () => {
//   if (request.status === 200) {
//     console.log(JSON.parse(request.response))
//     title1.innerHTML = JSON.stringify(
//       JSON.parse(request.response).data[0].first_name
//     )
//     email1.innerHTML = JSON.stringify(
//       JSON.parse(request.response).data[0].email
//     )
//     image1.src = JSON.parse(request.response).data[0].avatar
//     title2.innerHTML = JSON.stringify(
//       JSON.parse(request.response).data[1].first_name
//     )
//     email2.innerHTML = JSON.stringify(
//       JSON.parse(request.response).data[1].email
//     )
//     image2.src = JSON.parse(request.response).data[1].avatar
//     title3.innerHTML = JSON.stringify(
//       JSON.parse(request.response).data[2].first_name
//     )
//     email3.innerHTML = JSON.stringify(
//       JSON.parse(request.response).data[2].email
//     )
//     image3.src = JSON.parse(request.response).data[2].avatar
//     title4.innerHTML = JSON.stringify(
//       JSON.parse(request.response).data[3].first_name
//     )
//     email4.innerHTML = JSON.stringify(
//       JSON.parse(request.response).data[3].email
//     )
//     image4.src = JSON.parse(request.response).data[3].avatar
//   } else {
//     console.log("error")
//   }
// })
