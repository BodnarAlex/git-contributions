window.onload = function () {
    let checkbox = document.querySelector(".offLight");
    checkbox.addEventListener('change', e => {
        if(e.target.checked){
            document.documentElement.style.setProperty('--back', '#21262d');
            document.documentElement.style.setProperty('--border', '#b1bac4');
            document.documentElement.style.setProperty('--header', '#161b22');
            document.documentElement.style.setProperty('--text', '#c9d1d9');
        }else{
            document.documentElement.style.setProperty('--back', '#f6f8fa');
            document.documentElement.style.setProperty('--border', '#c9d1d9');
            document.documentElement.style.setProperty('--header', '#c9d1d9');
            document.documentElement.style.setProperty('--text', '#1F2328');
        }
    });
}