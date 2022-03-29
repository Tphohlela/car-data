console.log(axios)
let carElem = document.querySelector('.cars')
axios
     .get('https://api-tutor.herokuapp.com/v1/cars')
     .then(function(result){
         console.log(result.data)

         result.data.forEach(element => {
             const li = document.createElement('tr')
             li.innerHTML = `<tr>
             <td>${element.reg_number} </td>
             <td>${element.color} </td>
             <td>${element.make}</td> 
             </tr>          
             `
             carElem.appendChild(li)
         })
     })