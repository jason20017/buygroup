
const card = document.querySelector('.card')
const popup_container = document.querySelector('.popup_container')
const popclose = document.querySelector('.pop_close')

card.addEventListener('click', ()=>{
    popup_container.classList.add('show');
});

popclose.addEventListener('click', ()=>{
    popup_container.classList.remove('show');
});

/*由 addEventListener 來進行，觸發click，執行後續的程式
     classList.add/.remove (增加或刪除 css 的類別)*/