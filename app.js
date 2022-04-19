//BOTON TOP
const botonUp = document.getElementById('arriba');
const lista = document.getElementById('lista');
const botonMenu = document.getElementById('boton-menu');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100){
        botonUp.classList.remove('oculto');
        botonUp.classList.add('active');
    }else{
        botonUp.classList.remove('active');
        botonUp.classList.add('oculto');
    }
});

botonUp.addEventListener('click', ()=>{
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
});

botonMenu.addEventListener('click',()=>{
    lista.classList.toggle('menu-movil')
})

window.onresize = lookWidth;

function lookWidth() {
    
    if(window.innerWidth > 769){
        
        lista.classList.remove('menu-movil');
        lista.classList.add('normal')
    }
     
 };
