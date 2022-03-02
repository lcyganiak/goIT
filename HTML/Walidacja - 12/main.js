// const form  =Array.from(document.getElementsByTagName('form')) 

// console.log()
// form.forEach(element => {
//     element.addEventListener('click', (event)=> {
//         event.preventDefault()
//     })
// });

// const onlyPhone = document.getElementById('onlyPhone')
// const regOnlyPhone = new RegExp('^[0-9]*$');
// onlyPhone.addEventListener('change', ()=> {
//     if(!regOnlyPhone.test(onlyPhone)) {
        
//       const val =  onlyPhone.value 
//      const valSp=  val.split('')
//      const onlynumber = valSp.filter(item => {
//          if(Number.parseInt(item)) {
//              return item
//          }
//      })
//      onlyPhone.value = onlynumber.join('')
//     }
// })

const xd = document.getElementById('xd')
xd.addEventListener('click',send )
function send() {
    alert(132)
    const input_email = document.getElementById('input_email')
    console.log(input_email.value)
    if(input_email.value.length < 3) {
        console.log(document.getElementsByClassName('error')[0])
        document.getElementsByClassName('error')[0].style.visibility = 'visible'
    }
}