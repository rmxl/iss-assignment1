const modeToggle = document.querySelector(".toggle")
const p = document.querySelectorAll(".sublist p")
modeToggle.addEventListener("click",() => {
    document.body.classList.toggle("dark-mode")
    const section = document.querySelectorAll(".section")
    section.forEach(part => {
        part.classList.toggle("dark-mode")
    })
    p.forEach(part => {
        part.classList.toggle("dark-mode")
    })
})
p.forEach(part => {
    document.addEventListener("scroll",() => {
        let elementPosition = part.getBoundingClientRect().top;
        let trigger = window.innerHeight - 50;
        if(elementPosition < trigger) part.classList.add("visible");
        else part.classList.remove("visible");
    });
})
