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
             const li = document.createElement('ul')
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
             const li = document.createElement('ul')
             li.innerHTML = `<li>
             <td>${element} </td>
 
             </li>          
             `
             brandElem.appendChild(li)
         })
     })

     axios
     .get('https://api-tutor.herokuapp.com/v1/cars')
     .then(function(result){
         console.log(result.data)

         const li = document.createElement('h3')
         li.innerHTML = `Cars`
         carElem.appendChild(li)

         result.data.forEach(element => {
             const li = document.createElement('ul')
             li.innerHTML = `<li>
             <td>${element.reg_number} </td>
 
             </li>          
             `
             carElem.appendChild(li)
         })
     })