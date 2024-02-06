
let likebutton = document.querySelector(".likes img")
let submitcomment = document.querySelector(".entercomment input")
let likestatus = localStorage.getItem("likestatus1") || "unliked"
likebutton.src = likestatus==="unliked" ? "../images/notliked-svgrepo-com.svg" : "../images/liked-svgrepo-com.svg"

let comments = JSON.parse(localStorage.getItem("comments1")) || []
comments.forEach(comment => {
    let newcomment = document.createElement("p")
    newcomment.classList.toggle("comment")
    newcomment.textContent = comment
    document.querySelector(".comments").appendChild(newcomment)
})

likebutton.addEventListener("click", () => {
    likestatus = likestatus==="unliked" ? "liked" : "unliked" 
    localStorage.setItem("likestatus1",likestatus)
    likebutton.src = likebutton.src = likestatus==="unliked" ? "../images/notliked-svgrepo-com.svg" : "../images/liked-svgrepo-com.svg"
})

submitcomment.addEventListener("click",() => {
    let txt = document.querySelector(".entercomment textarea").value
    if(txt==="") return
    let newcomment = document.createElement("p")
    newcomment.classList.toggle("comment")
    newcomment.textContent = txt
    document.querySelector(".comments").appendChild(newcomment)
    let comments = JSON.parse(localStorage.getItem("comments1")) || []
    comments.push(txt)
    localStorage.setItem("comments1",JSON.stringify(comments));
})
