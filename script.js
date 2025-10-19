
window.addEventListener("scroll", ()=>{
    const header = document.querySelector("header")
    if(header.screenY > 100){
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)'
        header.style.padding = '0.5rem 0'
        
    }else{
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
        header.style.padding = '1rem 0'
        header.style.background = 'white'
    }
    
})

// let eventosCards = document.querySelector("#eventosCards")
// let proximosEventos = [...document.querySelectorAll(".proximosEventos")]
// console.log(proximosEventos)
// proximosEventos.map(function(el){
//     const novoElemento = document.createElement("div")
//     const novoElementoSpan = document.createElement("span")
//     novoElemento.setAttribute("class", "cardEventos")
//     novoElementoSpan.setAttribute("class", "dataEventos")
//     novoElemento.textContent = ``
//     novoElementoSpan.textContent = `22 de Outubro - 10h`
//     novoElemento.appendChild(novoElementoSpan)
//     eventosCards.appendChild(novoElemento)
    
    
// })

