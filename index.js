


let getButtons  = async ()=>{
    let buttonContainer = document.getElementById('all-buttons-container');
    let fachData = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    let dataObject = await fachData.json();
    // console.log(dataObject)
    let dataArray = dataObject.categories;
    for (let item of dataArray){
        let div = document.createElement('div');
        div.classList = 'w-fit px-3 py-2';
        div.innerHTML = `
            <button class="btn">
                <p>${item.category}</p>
            </button>
        `;
        buttonContainer.appendChild(div)
        // console.log(item.category)
    }
}

getButtons()





