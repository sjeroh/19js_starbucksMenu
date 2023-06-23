
let mainMenu=document.querySelectorAll('.main_menu>li'),
    header=document.querySelector('header');



// mainMenu.forEach((item)=>{
//   item.addEventListener('mouseover',()=>{
//     console.log(this)
//     let submenuHeight = this.querySelector('.sub_menu').offsetHeight;
 
//     header.style.height=`${submenuHeight + 110}px`
//   })
//   item.addEventListener('mouseout',function(){
//     header.style.height=`110px`
//   })
// })


mainMenu.forEach((item)=>{
  item.addEventListener('mouseover',function(){
    let submenuHeight = this.querySelector('.sub_menu').offsetHeight;
    console.log(submenuHeight)
    header.style.height=`${submenuHeight + 110}px`
  })
  item.addEventListener('mouseout',function(){
    header.style.height=`110px`
  })
})

