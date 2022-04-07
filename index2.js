let brandsElem = document.querySelector('.make')
let coloursElem = document.querySelector('.colours')
let displayElem = document.querySelector('.displayCars')
let display = document.querySelector('.cars')
let btnElem = document.querySelector('.btn')

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function (result) {
        console.log(result.data)

        result.data.forEach(element => {
            const dropdown = document.createElement('option')
            dropdown.innerHTML = `<option value="${element}">
        ${element}
            </option>          
            `
            brandsElem.appendChild(dropdown)
        })
    })

axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {
        console.log(result.data)

        result.data.forEach(element => {
            const dropdown = document.createElement('option')
            dropdown.innerHTML = `<option value="${element}">
        ${element}
            </option>          
            `
            coloursElem.appendChild(dropdown)
        })
    })

axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then(function (result) {
        console.log(result.data)

        const li = document.createElement('tr')
        li.innerHTML = `<tr>
        <th>Car</th>
            <th>Color</th>
            <th>Make</th>
            <th>Model</th>
            <th>Price(R)</th>
        </tr>`
        display.appendChild(li)

        result.data.forEach(element => {
            const tr = document.createElement('tr')
            tr.innerHTML = `<tr>
             <td>${element.reg_number} </td>
             <td>${element.color} </td>
             <td>${element.make} </td>
             <td>${element.model} </td>
             <td>${element.price} </td>
             </tr>          
             `
            display.appendChild(tr)
        })
    })


const check = () => {
    var templateString = document.querySelector('.entry-template').innerHTML;
    let arr = [];
    console.log(coloursElem.value);

    axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(function (result) {
            console.log(result.data)

            result.data.forEach(element => {
                if (element.make == brandsElem.value && element.color == coloursElem.value) {
                    arr.push({
                        reg: `${element.reg_number}`,
                        colour: `${element.color}`,
                        brand: `${element.make}`,
                        model:`${element.model}`,
                        price:`${element.price}`
                    })
                }

                else if (element.make == brandsElem.value && coloursElem.value == '') {
                    arr.push({
                        reg: `${element.reg_number}`,
                        colour: `${element.color}`,
                        brand: `${element.make}`,
                        model:`${element.model}`,
                        price:`${element.price}`
                    })
                }

                else if (element.color == coloursElem.value && brandsElem.value == '') {
                    arr.push({
                        reg: `${element.reg_number}`,
                        colour: `${element.color}`,
                        brand: `${element.make}`,
                        model:`${element.model}`,
                        price:`${element.price}`
                    })
                }
            })
            console.log('asdfghjkxc' + arr)

            let context = {
                "table": arr == '',
                "car": arr,
            };

            console.log('sdfghj' + JSON.stringify(context))

            let templateScript = Handlebars.compile(templateString);
            displayElem.innerHTML = templateScript(context);
        })
}

btnElem.addEventListener('click', check)
