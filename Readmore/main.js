const readMore = document.querySelector('.btn');
const text = document.querySelector('.text');

readMore.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(readMore.innerHTML ==="Readmore"){
        readMore.innerHTML ="Read Less";
    }
    else
    {
        readMore.innerHTML ="Readmore";
    }
});