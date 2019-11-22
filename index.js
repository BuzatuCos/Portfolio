let portItems = document.querySelectorAll('.portBox')
portItems.forEach((port)=>{
    port.addEventListener('mouseover', (e) => {
        e.target.childNodes[1].classList.remove('hidden')
    })
    port.addEventListener('mouseleave', (e) => {
        e.target.childNodes[1].classList.add('hidden')
    })
})