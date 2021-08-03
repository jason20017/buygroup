const cards = document.getElementsByClassName('card');
const popup_container = document.querySelector('.popup_container');
const popclose = document.querySelector('.pop_close');

const openPopup = function () {
    this.addEventListener('click', function () {
        popup_container.classList.add('show');
        document.body.classList.add('popup--open');
    });
};

Array.from(cards).forEach(function (card) {
    card.addEventListener('click', openPopup, true);
});

// for (let index in cards) {
//     const card = cards[index];
//     console.log(card);
//     // card.addEventListener('click', function () {
//     //     popup_container.classList.toggle('show');
//     // });
// }

popclose.addEventListener('click', function () {
    popup_container.classList.remove('show');
});

/*由 addEventListener 來進行，觸發click，執行後續的程式
     classList.add/.remove (增加或刪除 css 的類別)*/
