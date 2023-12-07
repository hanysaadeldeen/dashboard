const Toggle = document.querySelector(".site-control .switch")
Toggle.addEventListener("click", (e) => {
    e.preventDefault()
    Toggle.classList.toggle("active")
})

const Toggle2 = document.querySelector(".security-info .switch")
Toggle2.addEventListener("click", (e) => {
    e.preventDefault()
    Toggle.classList.toggle("active")
})
