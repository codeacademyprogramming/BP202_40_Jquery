
// $(document).ready(function(){
$(function(){
  
    $('li').click(function(){
        console.log('clicked')
        console.log(this)
        console.log($(this))
    })
    
})

// document.querySelectorAll('li').forEach(el=>{
//     el.addEventListener('click',function(e){
//         console.log('clicked')
//     })
// })