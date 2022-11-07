const mapa = document.querySelector('.mapa');
const peru = document.querySelector('.peru');
const preloader = document.querySelector('.centrado');
const body = document.querySelector('body')

mapa.addEventListener('click',() =>{
    mapa.classList.toggle('mapa-animacion');
    const contador1 = setInterval(()=>{
        mapa.style.display = 'none';
        clearInterval(contador1);
    },2000)
    const contador2 = setInterval(()=>{
        peru.classList.toggle('peru-visible');
        clearInterval(contador2);
    },2000)
})

window.onload = function(){
    preloader.style.display = 'none';
    body.style.overflowY = 'auto';
}

window.addEventListener('scroll', () =>{
    const header = document.querySelector('.header');
    const logo = document.querySelector('.Logo');
    const logoscroll = document.querySelector('.LogoScroll')
    header.classList.toggle('mostrar-header',window.scrollY>0);
    logo.classList.toggle('Logo-invisible',window.scrollY>0);
    logoscroll.classList.toggle('LogoScroll-visible',window.scrollY>0);
})