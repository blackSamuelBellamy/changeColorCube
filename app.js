/* requerimientos del desafio */

const blueDivs = document.querySelectorAll('.blue');
const orangeDivs = document.querySelectorAll('.orange');
const yellowDivs = document.querySelectorAll('.yellow');
let colorElegido = 'will be changed :( ';

const cambiaColor = (colorDiv, colorVariable) => {

        colorDiv.forEach(color => {
        color.addEventListener('click', () => {
            document.querySelector('.container').style.setProperty(colorVariable, colorElegido);
        })       
    })      
}

document.addEventListener('keydown', (e) => {
    e.key == 'a' ? colorElegido = '#FF0002':
        e.key == 's' ? colorElegido = '#889999' :
            e.key == 'd' ? colorElegido = '#E8AF3C' : colorElegido = '#000';

            document.querySelectorAll('.cubo').forEach(cubo => {
                cubo.style.cursor = 'pointer';
            })
            cambiaColor(blueDivs, '--blue');
            cambiaColor(orangeDivs, '--orange');
            cambiaColor(yellowDivs, '--yellow');
})





/* fin de requerimientos del desafio */


























