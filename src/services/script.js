const url = "http://ancient-plateau-45399.herokuapp.com"
const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
/* const limit = 3;
const page = 1; */

const searchNames = async searchText =>{
    const res = await fetch ('http://ancient-plateau-45399.herokuapp.com/pessoas');
    const pessoas = await res.json();

    let matches = pessoas.filter(pessoa => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return pessoa.nome.match(regex)
    });

    if(searchText.length === 0){
        matches = []
        matchList.innerHTML = ''
    }

    outputHtml(matches);
}

    const outputHtml = matches =>{
        if(matches.length > 0){
            const html = matches.map(match => `
                <div class="card card-body mb-1">
                    <h4>${match.nome}</h4>
                    <small>${match.email}</small>
                </div>`)
                .join('')
            matchList.innerHTML = html
        }
    }


function getList(){
    fetch(`http://ancient-plateau-45399.herokuapp.com/?limit=${4}&page=${1}`)
    .then(res=>res.json())
    .then(resBody => {
        it.innerHTML = JSON.stringify(resBody)
    })
}

function getList2(){
    fetch(`http://ancient-plateau-45399.herokuapp.com/?limit=${4}&page=${2}`)
    .then(res=>res.json())
    .then(resBody => {
        it.innerHTML = JSON.stringify(resBody)
    })
}

function getList3(){
    fetch(`http://ancient-plateau-45399.herokuapp.com/?limit=${4}&page=${3}`)
    .then(res=>res.json())
    .then(resBody => {
        it.innerHTML = JSON.stringify(resBody)
    })
}

function getAllUsers(){
    let nome = "";
    fetch(`http://ancient-plateau-45399.herokuapp.com/pessoas`)
    .then(res=>res.json())
    .then(resBody => {
        resBody.forEach(element => {
            nome += element.nome + "<br>"
            it.innerHTML = nome
        });
    })
}

search.addEventListener('input', () => searchNames(search.value))

/*

async function busca(){
    const teste = document.getElementById('teste').value //teste
    await axios.get(`${url}`,{
        params:{
            limit: teste,
            page: 1
        }
    })
    .then(response => {
        const data = Array.from(response.data)
        it.innerHTML = JSON.stringify(data)

        }
        )
    .catch(error => console.log(error))
}


function getUser(){
    axios.get(`${url}/?limit=5&page=1`)
    .then(response => {
        const data = Array.from(response.data)
        it.innerHTML = JSON.stringify(data)
        }
        )
    .catch(error => console.log(error))
}
function getUser2(){
    axios.get(`${url}/?limit=5&page=2`)
    .then(response => {
        const data = Array.from(response.data)
        it.innerHTML = JSON.stringify(data)
        }
        )
    .catch(error => console.log(error))
}
function getUser3(){
    axios.get(`${url}/?limit=5&page=3`)
    .then(response => {
        const data = Array.from(response.data)
        it.innerHTML = JSON.stringify(data)
        }
        )
    .catch(error => console.log(error))}





// ------------------------------------------------------------------------------------------------------------






/* 
console.log(data)
const html = {
    get (element){
    return document.querySelector(element);
    }
}


const state = {
    page: 1,
    perPage: 4,
    totalPage: 10,
}

const controls = {
    next(){
        state.page++
        if(state.page > state.totalPage){
            state.page = state.totalPage
        }
    },
    prev(){
        state.page--
        if(state.page < 1){
            state.page = 1
        }
    },
    goTo(){
        state.page = Number(this.value)
        if(state.page < 1){
            state.page = 1
        }
        if(state.page > state.totalPage){
            state.page = state.totalPage
        }
    },
    createListener(){
        html.get('.first').addEventListener('click', controls.prev) // prev
        html.get('.last').addEventListener('click', controls.next) // next
        html.get('.goTo').addEventListener('click', controls.goTo) // goTo


    }
} */