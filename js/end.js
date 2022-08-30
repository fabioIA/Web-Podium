import { list } from "./script.js";
let i = 0;

document.getElementById('send').onclick = () => {

    document.querySelector('.all').style.display = 'none';
    document.getElementById('loading').style.display = 'flex';
    document.querySelector('body').style.background = 'linear-gradient(#0007, #0000),#123';

    if(list.length === 1) {
        document.getElementById('podi2').style.display = 'none';
        document.getElementById('podi3').style.display = 'none';
    }

    else if(list.length === 2) {
        document.getElementById('podi3').style.display = 'none';
    }

    let load = setInterval(() => {
        if(i === 0) {
            document.getElementById('t').style.animation = '';
            document.getElementById('f').style.animation = 'load 500ms infinite';
        }

        else if(i === 1) {
            document.getElementById('f').style.animation = ''
            document.getElementById('s').style.animation = 'load 500ms infinite';
        }

        else if(i === 2) {
            document.getElementById('s').style.animation = '';
            document.getElementById('t').style.animation = 'load 500ms infinite';

            i = -1;
        }

        i++;

        }, 500)

    setTimeout(() => {

        document.querySelector('.all2').style.display = 'block';
        document.getElementById('loading').style.display = 'none';

        clearInterval(load);

        Grow('podi1', 5, 60);
        Grow('podi2', 5, 40);
        Grow('podi3', 5, 25);


        function Grow(e, i, max) {

            let time = setInterval(() => {

                document.getElementById(e).style.height = i+"vh";
                i += 0.25;
                
                if(i == max) clearInterval(time);

                document.addEventListener('click', () => {clearInterval(time)});

            }, 10)
        }

        setTimeout(() => {
            Name('n1', 0);
            Name('n2', 1);
            Name('n3', 2);
        }, 2500)

    }, 4000)

    if(list.length > 3) { setTimeout(() => { Rest() }, 2000) };
}

function Name(n, j) {
    let i = 0

    document.getElementById(n).innerHTML = list[j].name;

    let opa = setInterval(() => {
        i += 0.001;

        document.getElementById(n).style.opacity = i;

        if(i >= 1) {clearInterval(opa)}

    }, 10)

}

function Rest() {

    let n = list.length;
    let j = 3;

    for(let i = 3; i < n; i++) {

        let r = Math.floor(Math.random() * 256) - 0;
        let g = Math.floor(Math.random() * 256) - 0;
        let b = Math.floor(Math.random() * 256) - 0;

        document.querySelector('footer').innerHTML += '<div><h2>'+ list[i].name +'</h2><div class="medal"><div class="ball" id="'+ i +'"><div><span>'+ (i+1) +'</span></div></div><div class="flag"><div><div id="tri3"></div><div class="tri3"></div></div><div><div id="tri"></div><div class="tri"></div></div><div><div id="tri2"></div><div class="tri2"></div></div></div></div></div>';
        
        document.getElementById(''+ i +'').style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';

    }
}