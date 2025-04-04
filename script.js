let nov=document.getElementById('nov')
let priziv=document.getElementById('Prizivnik')
let contr=document.getElementById('contr')
let zapas=document.getElementById('zapas')
let nov_cl=document.getElementById('nov_s')
let priziv_cl=document.getElementById('priziv_s')
let contr_cl=document.getElementById('contr_s')
let zapas_cl=document.getElementById('zapas_s')

nov.classList.add('bolder')
priziv_cl.classList.add('vis')
contr_cl.classList.add('vis')
zapas_cl.classList.add('vis')
nov.addEventListener('click',()=>{
    nov.classList.add('bolder')
    priziv.classList.remove('bolder')
    contr.classList.remove('bolder')
    zapas.classList.remove('bolder')

    nov_cl.classList.remove('vis')
    priziv_cl.classList.add('vis')
    contr_cl.classList.add('vis')
    zapas_cl.classList.add('vis')
})
priziv.addEventListener('click',()=>{
    priziv.classList.add('bolder')
    nov.classList.remove('bolder')
    contr.classList.remove('bolder')
    zapas.classList.remove('bolder')
    nov_cl.classList.add('vis')
    priziv_cl.classList.remove('vis')
    contr_cl.classList.add('vis')
    zapas_cl.classList.add('vis')
})

contr.addEventListener('click',()=>{
    priziv.classList.remove('bolder')
    nov.classList.remove('bolder')
    contr.classList.add('bolder')
    zapas.classList.remove('bolder')
    nov_cl.classList.add('vis')
    priziv_cl.classList.add('vis')
    contr_cl.classList.remove('vis')
    zapas_cl.classList.add('vis')
})
zapas.addEventListener('click',()=>{
    priziv.classList.remove('bolder')
    nov.classList.remove('bolder')
    contr.classList.remove('bolder')
    zapas.classList.add('bolder')
    nov_cl.classList.add('vis')
    priziv_cl.classList.add('vis')
    contr_cl.classList.add('vis')
    zapas_cl.classList.remove('vis')
})
let tel=document.getElementById('tel')
tel.addEventListener('click', ()=>{
    navigator.clipboard.writeText(tel.innerText)
        .then(()=>{console.log('успешно')})
        .catch(err=>{console.log('ошибка')})
})
let buter=document.getElementById('buter')
let nav=document.getElementById('nav')
let act=1
nav.style.display='unset'

buter.addEventListener('click',()=>{

    if (act===0){
        nav.style.display='unset'
        act=1
    }else {
        nav.style.display='none'
        act=0
    }

})