window.onload = function () {
    let checkbox = document.querySelector(".offLight");
    let mounths = document.querySelector("#months");
    let block = document.querySelector("#block_item");

    let mounth_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    checkbox.addEventListener('change', e => {
        if (e.target.checked) {
            document.documentElement.style.setProperty('--back', '#21262d');
            document.documentElement.style.setProperty('--border', '#b1bac4');
            document.documentElement.style.setProperty('--header', '#161b22');
            document.documentElement.style.setProperty('--text', '#c9d1d9');

            document.documentElement.style.setProperty('--stage1', '#0e4429');
            document.documentElement.style.setProperty('--stage2', '#006d32');
            document.documentElement.style.setProperty('--stage3', '#26a641');
            document.documentElement.style.setProperty('--stage4', '#39d353');

            document.documentElement.style.setProperty('--invert', '1');
        } else {
            document.documentElement.style.setProperty('--back', '#f6f8fa');
            document.documentElement.style.setProperty('--border', '#c9d1d9');
            document.documentElement.style.setProperty('--header', '#c9d1d9');
            document.documentElement.style.setProperty('--text', '#1F2328');

            document.documentElement.style.setProperty('--stage1', '#39d353');
            document.documentElement.style.setProperty('--stage2', '#26a641');
            document.documentElement.style.setProperty('--stage3', '#006d32');
            document.documentElement.style.setProperty('--stage4', '#0e4429');

            document.documentElement.style.setProperty('--invert', '0');
        }
    });

    addMounth();
    addDays();

    let mouseDown = false;
    document.addEventListener('mousedown', arrow => { mouseDown = true });
    document.addEventListener('mouseup', arrow => { mouseDown = false });

    document.querySelectorAll(".item").forEach((item, index) => {
        item.addEventListener('mouseout', arrow => {
            if (mouseDown) {
                let newClass = (!item.classList[1]) ? 'stage0' : item.classList[1];
                item.classList.remove(newClass);
                let numberOfClass = (Number(newClass[5]) < 4) ? Number(newClass[5]) + 1 : 0;
                item.classList.add('stage' + numberOfClass);
            }
        })
    })

    function addMounth() {
        for (let i = 0; i < 12; i++) {
            let div = document.createElement('div');
            div.innerHTML = mounth_array[i];
            mounths.append(div);
        }
    }

    function addDays() {
        for (let i = 0; i < 371; i++) {
            let div = document.createElement('div');
            div.className = 'item';
            block.append(div);
        }
    }
}