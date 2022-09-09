window.addEventListener('load',()=>{
    const tema=document.getElementById('theme');
    tema.addEventListener('change',event=>{
        console.log(event.target.value);
        const body = document.querySelector('body');
        body.style.backgroundColor=event.target.value;
    })
})