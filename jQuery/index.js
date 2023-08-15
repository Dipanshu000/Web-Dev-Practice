// $("h1").addClass("big-title margin-50");

$("h1").text("Sri SitaRam");

// $("button").click(()=>{
//     $("h1").css("color","purple")
// })

// $("button").css("background-color","pink").text("JAI");

$("button").html("<em>Jai</em>");

$("a").attr("href","https://www.youtube.com");

// $("input").keydown((event)=>{
//     $("h1").text(event.key)
// })

// $("h1").on("mouseover",()=>{
//     $("h1").css("color","pink")
// })

// $("button").on("click",()=>{
//     $("h1").fadeToggle() 
// })

// $("button").on("click",()=>{
//     $("h1").slideToggle() 
// })
$("button").on("click",()=>{
    $("h1").slideUp().slideDown().animate({opacity : 0.5}) 
})