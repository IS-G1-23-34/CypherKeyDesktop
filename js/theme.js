/*
    Init theme check. Preference is stored locally.
 */
let theme = localStorage.getItem('theme');
if(theme === null){
    localStorage.setItem('theme', 'light');
} else {
    document.body.setAttribute('data-bs-theme', localStorage.getItem('theme'));
    changeFieldTheme();
}
/*
    Function that changes stored locally preference light to dark and dark to light.
 */
function switchTheme(){

    let theme = localStorage.getItem('theme');
    if (theme === 'light'){
        localStorage.setItem('theme', 'dark');
    } else if (theme === 'dark'){
        localStorage.setItem('theme', 'light');
    }
    document.body.setAttribute('data-bs-theme', localStorage.getItem('theme'));
    changeFieldTheme();
}


function changeFieldTheme(){
    var r = document.querySelector(':root');
    let theme = localStorage.getItem('theme');
    let inputs = document.getElementsByTagName("input");
    let textareas = document.getElementsByTagName("textarea");
    let selects = document.getElementsByTagName("select");
    if (theme === 'dark') {
        r.style.setProperty('--bg', '#15212E');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.add('bg-dark');
            inputs[i].classList.add('text-white');
        }
        for (let i = 0; i < textareas.length; i++) {
            textareas[i].classList.add('bg-dark');
            textareas[i].classList.add('text-white');
        }
        for (let i = 0; i < selects.length; i++) {
            selects[i].classList.add('bg-dark');
            selects[i].classList.add('text-white');
        }
    } else {
        r.style.setProperty('--bg', '#e1e7f3');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('bg-dark');
            inputs[i].classList.remove('text-white');
        }
        for (let i = 0; i < textareas.length; i++) {
            textareas[i].classList.remove('bg-dark');
            textareas[i].classList.remove('text-white');
        }
        for (let i = 0; i < selects.length; i++) {
            selects[i].classList.remove('bg-dark');
            selects[i].classList.remove('text-white');
        }
    }
}