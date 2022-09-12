window.addEventListener('load',()=>{
    const acordeon = document.querySelector('.acordeon');
    const despliegue = document.querySelectorAll('.bloque');
    const titulo = document.querySelectorAll('.titulo')
    
    titulo.forEach((item,idx)=>{
        item.addEventListener('click',()=>{
       

            despliegue[idx].classList.toggle('activo')        

        })
    })
})