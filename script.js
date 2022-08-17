const cont = document.querySelector('.container');
const btn = document.querySelector('.btn2');

btn.addEventListener('click',()=>{
    cont.classList.toggle('active');
})

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
});

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}
