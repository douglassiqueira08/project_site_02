var area1 = window.document.getElementById('it1')
area1.addEventListener('click', clicar1)
area1.addEventListener('mouseenter', entrar1)
area1.addEventListener('mouseout', sair1)

function clicar1() {
    window.location.href = 'pgitem1.html'
    area1.style.background = 'transparent'

}
function entrar1() {
    area1.style.background = 'black'
    area1.style.width = '300px'
    
}

function sair1() {
    area1.style.background = 'blue'
    area1.style.width ='230px'
    
}

var area2 = window.document.getElementById('it2')
area2.addEventListener('click', clicar2)
area2.addEventListener('mouseenter', entrar2)
area2.addEventListener('mouseout', sair2)


function clicar2(){
    window.location.href = 'pg004.html'
}
function entrar2() {
    area2.style.background = 'black'
    area2.style.width = '300px'
}

function sair2() {
    area2.style.background = 'blue'
    area2.style.width ='230px'

}
var area3 = window.document.getElementById('it3')
area3.addEventListener('mouseenter', entrar3)
area3.addEventListener('mouseout', sair3)

function entrar3() {
    area3.style.background = 'black'
    area3.style.width = '300px'
}
function sair3() {
    area3.style.background = 'blue'
    area3.style.width ='230px'
}

var area4 = window.document.getElementById('it4')
area4.addEventListener('mouseenter', entrar4)
area4.addEventListener('mouseout', sair4)

function entrar4() {
    area4.style.background = 'black'
    area4.style.width = '300px'
}
function sair4() {
    area4.style.background = 'blue'
    area4.style.width ='230px'
}
