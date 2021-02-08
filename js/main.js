$(function(){
    $(".btn-toggle").on("click",function(){
        $("#gnb").addClass("show");
    });
});
$(function(){
    $(".btn-close").on("click",function(){
        $("#gnb").removeClass("show");
    });
});
$(function(){
    var val=location.href.substr(
        location.href.lastIndexOf("=")+1
    );
    console.log(val);
    //시놉시스 페이지면 팝업창 출력
    if(val==1){
        $("#synop_popup").addClass("show");
        $("#gnb ul li").removeClass("active");
        $("#gnb ul li").eq(2).addClass("active");
        $("#content .box").css("display","none");
        $("title").text("시놉시스 > 극장판 귀멸의 칼날: 무한열차 편");
    }else{
        $("#synop_popup").removeClass("show");
    }
});
$(function(){
    $("#main>.thumb>li").on("click",function(){
        let getUrl=$(this).find("img").attr("src");
        console.log(getUrl);
        $("#main>figure>img").attr("src",getUrl);
    });
});