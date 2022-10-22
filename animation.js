$(".btn").click(function(){
    $(".countainer").addClass('active'),
    setTimeout(()=>{
        $(".countainer").removeClass('active')  
    },7000)
})