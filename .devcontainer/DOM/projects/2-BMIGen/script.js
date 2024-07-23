const form = document.querySelector('form')

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const weightGuide = document.querySelector('#weight-guide')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid ${height}`;
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid ${weight}`;
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }

    if(results.textContent < 18.6){
        weightGuide.textContent = "You're under weight";
    }
    else if(results.textContent >= 18.6 && results.textContent <= 24.9){
        weightGuide.textContent = "Great, You're perfectly fit";
    }
    else if(results.textContent > 24.9){
        weightGuide.textContent = "You're overweight";
    }

})