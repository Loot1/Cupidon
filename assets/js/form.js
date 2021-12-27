let form = document.getElementById("form")
let percent = document.getElementById("score")

form.addEventListener("submit", function(e) {

    e.preventDefault()
    const data = new FormData(form)
    let score = parseInt(loveCalculator(data.get("aName"),data.get("bName")).join(""))

    let i = 0
    let interval = setInterval(() => {
        percent.innerHTML = `${i}%`
        if(i === score) clearInterval(interval)
        i++
    },20)

})