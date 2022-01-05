const postBtn = document.querySelector("#postBtn")
const title = document.querySelector("#posttitle")
const content = document.querySelector("#postbox")
const blogSpace = document.querySelector("#blog-space")

const postFunction = () => {
  if (title.value === "" || content.value === "") {
    alert("Please fill in all fields")
  } else {
    console.log("post success")
    blogSpace.innerHTML += `
    <div class="card m-1" style="width: 18rem;">
  <div class="card-body">
  <img src="https://img.icons8.com/color/48/000000/flower.png"/>
    <h4 class="card-title">Title : ${title.value}</h4>
    <p class="card-text">${content.value}</p>
  </div>
</div>
    `
    title.value = ""
    content.value = ""
  }
}

postBtn.addEventListener("click", postFunction)
