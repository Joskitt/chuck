
createChuckJoke(document.body)


function createChuckJoke(parentElement) {
    const element = document.createElement('div');
    element.classList.add('jokeComponent');
    parentElement.append(element);

    let isLoading = true;
    let joke = 0;
    let img = 0;
 

    const render = () => {
        element.innerHTML = `
        <h2>Random Chuck Norris joke!</h2>
        <img src="${ img }">
        ${
            isLoading
                ? `<div class="lds-dual-ring"></div>`
                : `
                <div>${ joke }</div>
                `
        }
        `;
    }

    const load = async () => {
        isLoading = true;
        const res = await fetch(`https://api.chucknorris.io/jokes/random`)

        const data = await res.json();

        joke = data.value;
        img = data.icon_url

        isLoading = false;
        render();
    }

    load();
    render();
}