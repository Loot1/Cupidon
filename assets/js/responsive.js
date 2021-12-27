function size() {
    document.body.style.height = `${window.innerHeight}px` 

    let margin = (0.0194664377803*window.innerWidth) - 4.3220813091679
    document.getElementById("borne").style.marginRight = `${margin}%`
    document.getElementById("borne").style.marginLeft = `${margin}%`

    let width = 100 - 2 * margin
    document.getElementById("borne").style.width = `${width}%`
}

window.onload = () => size()
window.onresize = () => size()