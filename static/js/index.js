$('.banner-abs').hide().eq(0).show();
$('.banner-abs').hide().eq(0).show();
$('.index-news-content').hide().eq(0).show();
$('.news-list').eq(0).css('border','none');
$('.index-fix-nav').hide();



$('.circle').eq(0).addClass('width-circle');
$(function(){
    /*首页*/
    var topnav=$('.topnav','.topnav-box');
    var fixnav=$('.index-fix-nav');
    var topnavul=$('.topnav-ul');
    var triangleimg=$('.triangleimg');
    var triangleleft=parseInt(triangleimg.css('left'));
    topnav.each(function(i){
        $(this).hover(function(){
            fixnav.show().find("ul").hide().eq(i-1).show();
            triangleimg.css('left',triangleleft+(i-1)*118);
            if(i==0){
                fixnav.hide();
            }
        },function(){
            fixnav.hide();
        })
    });
    fixnav.hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
    });


    var bannerabs=$('.banner-abs');
    var bannernum=bannerabs.size();
    for(var j=0;j<bannernum;j++){
        $('<div class="circle fl"></div>').appendTo('.circle-box');
    }
    var circle=$('.circle');
    circle.eq(0).addClass('width-circle');
    circle.click(function(){
        bannerindex=$(this).index();
        $(this).addClass('width-circle').siblings().removeClass('width-circle');
        bannerabs.hide().eq(bannerindex).show();
    });
    var tt=setInterval(move,3000);
    var bannerindex=0;
    function move(){
        circle.eq(bannerindex).addClass('width-circle').siblings().removeClass('width-circle');
        bannerabs.hide().eq(bannerindex).show();
        bannerindex++;
        if(bannerindex==bannernum){
            bannerindex=0;
        }
    }


    var newslist=$('ul.news-list');
    var newscontent=$('.index-news-content');
    newslist.click(function(){
        var newsindex=$(this).index()/2;
        newscontent.hide().eq(newsindex).show();
    });

    /*投资者关系*/
    $('.report-content-box:gt(0)').css("border-top","none");


    /*资料下载*/
    $('.relative-document-load:gt(0)').css("border-top","none");

    /*历年分红*/
    $('.relative-history-bonus:gt(0)').css("border-top","none");
    $('.data:last','.relative-history-bonus').css("border-right","none");


    /*定期报告*/
    $('.report-subtitle').find('p span').click(function () {
        $(this).addClass('red').siblings().removeClass('red');
    })


    /*历年分红等页翻页*/
    $('.number','.report-page').removeClass('active').eq(0).addClass('active').end().click(function () {
        $('.number','.report-page').removeClass('active');
        $(this).addClass('active');
    });


    /*历年分红颜色*/
    $('.date','.index-box').first().css("color","#919191");
    $('.data:lt(4)').css("color","#919191");



});
