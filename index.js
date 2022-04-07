console.log(axios)
let carElem = document.querySelector('.cars')
let colorElem = document.querySelector('.color')
let brandElem = document.querySelector('.brand')

axios
     .get('https://api-tutor.herokuapp.com/v1/colors')
     .then(function(result){
         console.log(result.data)
         const li = document.createElement('h3')
         li.innerHTML = `Colours`
         colorElem.appendChild(li)

         result.data.forEach(element => {
             const li = document.createElement('p')
             li.innerHTML = `<li>
             <td>${element} </td>
 
             </li>          
             `
             colorElem.appendChild(li)
         })
     })

     axios
     .get('https://api-tutor.herokuapp.com/v1/makes')
     .then(function(result){
         console.log(result.data)
         const li = document.createElement('h3')
         li.innerHTML = `Brands`
         brandElem.appendChild(li)

         result.data.forEach(element => {
             const li = document.createElement('p')
             li.innerHTML = `<li>
             <td>${element} </td>
 
             </li>          
             `
             brandElem.appendChild(li)
         })
     })

    //  axios
    // .get('https://api-tutor.herokuapp.com/v1/cars')
    // .then(function (result) {
    //     console.log(result.data)

    //     const li = document.createElement('tr')
    //     li.innerHTML = `<tr>
    //     <th>Car</th>
    //         <th>Color</th>
    //         <th>Make</th>
    //         <th>Model</th>
    //         <th>Price(R)</th>
    //     </tr>`
    //     display.appendChild(li)

    //     result.data.forEach(element => {
    //         const tr = document.createElement('tr')
    //         tr.innerHTML = `<tr>
    //          <td>${element.reg_number} </td>
    //          <td>${element.color} </td>
    //          <td>${element.make} </td>
    //          <td>${element.model} </td>
    //          <td>${element.price} </td>
    //          </tr>          
    //          `
    //         display.appendChild(tr)
    //     })
    // })


     axios
     .get('https://api-tutor.herokuapp.com/v1/cars')
     .then(function(result){
         console.log(result.data)

        //  const li = document.createElement('h3')
        //  li.innerHTML = `Cars`
        //  carElem.appendChild(li)

         const li = document.createElement('tr')
         li.innerHTML = `<tr>
         <th>Car</th>
             <th>Color</th>
             <th>Make</th>
             <th>Model</th>
             <th>Price(R)</th>
         </tr>`
         carElem.appendChild(li)
 
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
             carElem.appendChild(tr)
         })
     })