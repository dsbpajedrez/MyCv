window.addEventListener('load',()=>{
    const despliegue = document.querySelectorAll('.bloque');
    const titulo = document.querySelectorAll('.titulo')
    
    titulo.forEach((item,idx)=>{
        item.addEventListener('click',()=>{
            despliegue.forEach(bloque=>{
                if(despliegue[idx]!=bloque) bloque.classList.remove('activo')
            })
            despliegue[idx].classList.toggle('activo')
        })
    })
})