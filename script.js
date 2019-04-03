$(".after").hide();
$(".timeline").hide();
$(".timeline2").hide();
$(".apps").hide();
$(".intro").hide();
$(".starter").hide();
$(".turn").hide();
$(".photography").hide();
$(".recording").hide();
$(".movingPicture").hide();
$(".telegraphing").hide();
$(".telephon").hide();
$(".radi").hide();
$(".tv").hide();
$(".pc").hide();
$(".videoGame").hide();
$(".interne").hide();
$(".smartPhone").hide();
$(".idk1, .idk2, .idk3, .idk4, .idk5, .idk6, .idk7, .idk8, .idk9, .idk10, .idk11").hide();
$(".almostkilledme").hide(); 


$(".warning").click(function(){
    $(".starter").fadeIn();
    $(".warning").hide();
    $(".warning2").hide();
    $(".flash").hide();
    $(".turn").fadeIn();

});

$(".starter").click(function(){
    $(".apps").fadeIn();
    $(".starter").hide();
    $(".intro").fadeIn();
    $(".turn").hide();



});

$(".photo").click(function(){
    $(".idk1").show();
    $(".photography").show();
    $(".after").show();
    $(".apps").hide();
    $(".timeline").show();
    $(".intro").hide();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
});


$(".sound").click(function(){
    $(".idk2").show();
    $(".recording").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
});

$(".moving").click(function(){
    $(".idk3").show();
    $(".movingPicture").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    });
    
$(".telegraph").click(function(){
    $(".idk4").show();
    $(".telegraphing").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    });
    
$(".telephone").click(function(){
    $(".idk5").show();
    $(".telephon").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    });

$(".radio").click(function(){   
    $(".idk6").show();
    $(".radi").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    });
 
$(".televsion").click(function(){ 
    $(".idk7").show();
    $(".tv").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    });

$(".personal").click(function(){  
    $(".idk8").show();
    $(".pc").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    });

$(".games").click(function(){
    $(".idk9").show();
    $(".videoGame").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    });

$(".internet").click(function(){  
    $(".idk10").show();
    $(".interne").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    });

$(".phone").click(function(){ 
    $(".idk11").show();
    $(".idk1").hide();
    $(".photography").hide();
    $(".smartPhone").show();
    $(".after").show();
    $(".apps").hide();
    $(".intro").hide();
    $(".timeline").show();
    document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WeepyBowedHalicore-size_restricted.gif')";
    }); 
    
    
    
$(".timeline").click(function(){
     document.body.style.backgroundImage = "url('')";
    document.body.style.backgroundColor = "#f4f4f2";
    $(".timeline").hide(); 
    $(".results").hide(); 
    $(".after").hide(); 
    $(".almostkilledme").show(); 
});
