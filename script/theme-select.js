const root = document.documentElement;
// Grab the theme picker parent container
const themePicker = document.querySelector('.theme-picker');
themePicker.addEventListener('click', changeTheme);

function changeTheme(e) {

    if (e.target.id !== "Dark" && e.target.id !== "Light"){
        return;
    }

    switch(e.target.id){
        case 'Dark':
            setVarValues(root, '#1f1f1f', 'white', 'rgb(211,211,219)', '#2C2C2C', 'invert(100%) sepia(43%) saturate(0%) hue-rotate(116deg) brightness(110%) contrast(101%)', "rgba(43, 43, 43, 0.534)");
            e.target.id = 'Light';
            break;
        case 'Light':
            setVarValues(root, 'white', 'black', 'rgb(115, 115, 115)', 'rgb(211,211,219)', 'invert(0%) sepia(100%) saturate(0%) hue-rotate(261deg) brightness(107%) contrast(95%)', "rgb(211,211,219 / 70)");
            e.target.id = 'Dark';
            break;
        default:
            setVarValues(root, 'white', 'black', '#0000EE', '#551A8B');
            break;
    }
}

function setVarValues(el, bc, tc, brc, nc, fc, trc){
	el.style.setProperty('--background-color', bc);
	el.style.setProperty('--text-color', tc);
	el.style.setProperty('--brand-color', brc);
	el.style.setProperty('--nav-color', nc);
    el.style.setProperty('--filter-color', fc);
    el.style.setProperty('--nav-color-transparent', trc);
}