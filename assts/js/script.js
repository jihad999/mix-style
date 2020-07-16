$(document).ready(function(){
    $('.submit').click(function(e){
        var text = $('.text').val();
        if(text == ""){
            $('.text').addClass('border-red');
            e.preventDefault();
        }
    });


    const checkbox = document.getElementById('check');
    
    checkbox.addEventListener('change' , () => {
        
        document.body.classList.toggle('dark');
        
    });
    
     
    
    $('i.fas.fa-sync').on('click',function(){
        $('p.size').css('font-size','16px');
    });
    
    $('i.fas.fa-plus').on('click',function(){
        var basicSize = $('.size').css('font-size');
        var basicSizeNum = parseFloat(basicSize);
        var increase = basicSizeNum*1.1;
        $('p.size').css('font-size',increase );
    });
    
    $('i.fas.fa-minus').on('click',function(){
        var basicSize = $('.size').css('font-size');
        var basicSizeNum = parseFloat(basicSize);
        var decrease = basicSizeNum*0.9;
        $('p.size').css('font-size',decrease);
    });
    
})