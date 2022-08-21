export const list = [];

let add = document.getElementById('add');
let input = document.querySelector('input');
let i = 1;

// Função principal que adiciona os nomes na tabela
input.onkeyup = () => {

    input.value !== '' ? document.querySelector('#add').style.display = 'block' : document.querySelector('#add').style.display = 'none';

    add.onclick = () => {

        if(input.value === '') return;

        let nome = input.value;

        if(Verifica(nome, list) == 1) {
            input.style.border = 'solid 2px brown';
            input.style.color = 'brown';
            document.querySelector('.in').style.animation = 'erro 0.7s steps(30) normal';

            setTimeout( function() {
                input.style.border = 'solid 2px transparent';
                input.style.color = 'black';
                
                document.querySelector('.in').style.animation = '';
                
            }, 1000)

            return;

        }
        
        list[i-1] = {name: '',};

        document.querySelector('.table-add').innerHTML += '<div id="d'+ i +'"><span id="pos">'+ i +'°</span><span id="barra">|</span><span class="nom" id="s'+ i +'">'+ nome +'</span></div>';

        document.querySelector('.table').style.display = 'block';

        list[i-1].name = nome;

        input.value = '';

        input.placeholder = ''+ (i+1) +'° colocado';

        i ++;
    }
}

// Limpando a tabela ao clicar no botão
document.getElementById('clear').onclick = () => {

    document.querySelector('.table').style.display = 'none';
    document.querySelector('.table-add').innerHTML = '';
    input.placeholder = '1° colocado';

    i = 1;

    for(let j in list) {
        list[j].name = '';

    }
}

// Verificando se há dois ou mais nomes iguais na tabela
function Verifica(nome, list) {
    let k = 0;

    for(let j in list) {

        if(nome == list[j].name) {
            k++;
            
        }

    }

    if(k >= 1) {
        return 1;

    }else {
        return 0;
    }
}