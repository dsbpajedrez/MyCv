window.addEventListener('load',()=>{
    const acordeon = document.querySelectorAll('.acordeon');
    const despliegue = document.querySelectorAll('.encoge');
    acordeon.forEach((item,idx),()=>{
        item.addEventListener('clic',()=>{
            despliegue[idx].classList.remove('despliegue')
        })
        
    })
})