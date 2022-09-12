window.addEventListener('load',()=>{
    const tema=document.getElementById('theme');
    tema.addEventListener('change',event=>{
        const body = document.querySelector('body');
        body.style.backgroundColor=event.target.value;
    })
})