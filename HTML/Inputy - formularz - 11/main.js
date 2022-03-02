const form  =Array.from(document.getElementsByTagName('form')) 

console.log()
form.forEach(element => {
    element.addEventListener('click', (event)=> {
        event.preventDefault()
    })
});

const onlyPhone = document.getElementById('onlyPhone')
const regOnlyPhone = new RegExp('^[0-9]*$');
onlyPhone.addEventListener('change', ()=> {
    if(!regOnlyPhone.test(onlyPhone)) {
        
      const val =  onlyPhone.value 
     const valSp=  val.split('')
     const onlynumber = valSp.filter(item => {
         if(Number.parseInt(item)) {
             return item
         }
     })
     onlyPhone.value = onlynumber.join('')
    }
})