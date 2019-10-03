$(function () {
    
    get_notice();
    get_index_list();
    var isMobile=parseInt($(window).width())<=1024 && true,
        goSetImg=null,
        getOffsetTop=function getOffsetTopByBody (el) {
            let offsetTop = 0
            while (el && el.tagName !== 'BODY') {
            offsetTop += el.offsetTop
            el = el.offsetParent
            }
            return offsetTop
        },
        setOffsetTop=function(){
            $(".img").map(function(){
                var IMG=$(this);
                if(IMG.data('load')){
                    IMG.data('offsetTop',getOffsetTop(this));
                    IMG.addClass('loadOffsetTop');
                }
            })
        };

    $(window).resize(function(){
        var liveMedia=parseInt($(window).width())<=1024 && true;
        if(isMobile!=liveMedia){
            isMobile=liveMedia;
            window.location.reload();
        }
        clearTimeout(goSetImg);
        goSetImg=setTimeout(setOffsetTop,500);
    });

    if(isMobile){
        $('body').on('click', '.nav .has_sub', function () {
            $('.showcase .sub_nav').css({'display':'none'});
            if($(this).hasClass('touched')){
                $('.nav .has_sub').removeClass('touched');
                $('.showcase .sub_nav').css({'display':'none'});
                $(this).closest('.nav').removeClass('touched');
                $(this).closest('.ul').removeClass('touched');
            }else{
                $('.nav .has_sub').removeClass('touched');
                $('.showcase .sub_nav').css({'display':'none'});
                $(this).addClass('touched');
                $(this).closest('.nav').addClass('touched');
                $(this).closest('.ul').addClass('touched');
                $('.showcase .sub_nav').eq($(this).index()-1).css({'display':'block'});
            }
        })
    }

    $(document).keyup(function(event){
        if(event.keyCode ==13){
            if ($("#kd").is(":focus")) {
                $("#searchForm").submit();
            }
        }
    });

    $('body').on('click', '.left_bread .icon_plug', function () {
        $('.cover').css({'display':'block'});
        $('.alert_collection').css({'display':'block'});
    });

    $('body').on('click', '.close1', function () {
        $('.cover').css({'display':'none'});
        $(this).closest('.alert').css({'display':'none'});
    });

    var height=document.documentElement.clientHeight,
        acheScrollY=-1,
        minH=height-parseInt($('.page_top').height())-parseInt($('.page_bottom').height());
    $('.main').css({'min-height':minH});
    setOffsetTop();
    var Lazyload=setInterval(function(){
        var scrollY=window.scrollY;
        if(acheScrollY!=scrollY){
            acheScrollY=scrollY;
            var visibleBottom = scrollY + height
            var visibleTop = scrollY;
            $(".img").map(function(){
                var IMG=$(this);
                if(IMG.data('offsetTop')){
                    var centerY = IMG.data('offsetTop') + this.offsetHeight/2;
                    if(centerY>visibleTop && centerY<visibleBottom){
                        IMG.attr('src',IMG.data('load'));
                        IMG.removeAttr('offsetTop');
                        IMG.removeClass('loadOffsetTop');
                    }
                }
            })
        }
        if($('.loadOffsetTop').length<=0){
            clearInterval(Lazyload);
        }
    },500);

})

function get_notice()
{
    $.ajax({
    
    url:'/get_notice',
    async:false,
    dataType:'json',
    type:'GET', //GET
   

    success:function(data){
       if(data.code == 0)
       {
            $("#notice").html(data.data);
            $("#notice_window").html(data.data);
       }

    }
  });
}




function get_index_list()
{
    $.ajax({
    
        url:'/index_list',
        async:false,
        dataType:'json',
        type:'GET', //GET
       
        success:function(data){

            
            if(data.code == 0)
            {
                var html = "";
                var hotHtml = "";
                var newHtml = "";
                var wumaHtml = "";
                var rihanHtml = "";
                var guochanHtml = "";
                var oumeiHtml = "";

                $.each(data.data.porn,function(key,item){
                    
                    html += '<a data-type="porn" id='+ item.id +' sign="'+ item.sign +'" class="showcase checkA" href="javascript:;"><div class="div"><div class="img_wapper">';
                    html += '<img class="img loadOffsetTop" src="./loading.gif" data-load="'+ item.big_url +'" data-offset-top="444">';
                    html += '</div><p class="des" title="'+item.title+'">'+item.title+'</p><div class="sub_des">';
                    html += '<span class="icon_show iconfont">'+item.number+'</span>';
                    html += '<span class="icon_time iconfont">'+item.create_time+'</span></div></div></a>';
                })


                $.each(data.data.hot,function(key,item){
                    
                    hotHtml += '<a data-type="mac" id='+ item.id +' sign="'+ item.sign +'" class="showcase checkA" href="javascript:;"><div class="div"><div class="img_wapper">';
                    hotHtml += '<img class="img loadOffsetTop" src="./loading.gif" data-load="'+ item.d_pic +'" data-offset-top="444">';
                    hotHtml += '</div><p class="des" title="'+item.d_name+'">'+item.d_name+'</p><div class="sub_des">';
                    hotHtml += '<span class="icon_show iconfont">'+item.d_scoreall+'</span>';
                    hotHtml += '<span class="icon_time iconfont">'+item.create_time+'</span></div></div></a>';
                })

                $.each(data.data.new,function(key,item){
                    
                    newHtml += '<a data-type="mac" id='+ item.id +' sign="'+ item.sign +'" class="showcase checkA" href="javascript:;"><div class="div"><div class="img_wapper">';
                    newHtml += '<img class="img loadOffsetTop"  src="./loading.gif" data-load="'+ item.d_pic +'" data-offset-top="444">';
                    newHtml += '</div><p class="des" title="'+item.d_name+'">'+item.d_name+'</p><div class="sub_des">';
                    newHtml += '<span class="icon_show iconfont">'+item.d_scoreall+'</span>';
                    newHtml += '<span class="icon_time iconfont">'+item.create_time+'</span></div></div></a>';
                })


                $.each(data.data.wuma,function(key,item){
                    
                    wumaHtml += '<a data-type="mac" id='+ item.id +' sign="'+ item.sign +'" class="showcase checkA" href="javascript:;"><div class="div"><div class="img_wapper">';
                    wumaHtml += '<img class="img loadOffsetTop"  src="./loading.gif" data-load="'+ item.d_pic +'" data-offset-top="444">';
                    wumaHtml += '</div><p class="des" title="'+item.d_name+'">'+item.d_name+'</p><div class="sub_des">';
                    wumaHtml += '<span class="icon_show iconfont">'+item.d_scoreall+'</span>';
                    wumaHtml += '<span class="icon_time iconfont">'+item.create_time+'</span></div></div></a>';
                })

                $.each(data.data.rihan,function(key,item){
                    
                    rihanHtml += '<a data-type="mac" id='+ item.id +' sign="'+ item.sign +'" class="showcase checkA" href="javascript:;"><div class="div"><div class="img_wapper">';
                    rihanHtml += '<img class="img loadOffsetTop" src="./loading.gif" data-load="'+ item.d_pic +'" data-offset-top="444">';
                    rihanHtml += '</div><p class="des" title="'+item.d_name+'">'+item.d_name+'</p><div class="sub_des">';
                    rihanHtml += '<span class="icon_show iconfont">'+item.d_scoreall+'</span>';
                    rihanHtml += '<span class="icon_time iconfont">'+item.create_time+'</span></div></div></a>';
                })

                $.each(data.data.guochan,function(key,item){
                    
                    guochanHtml += '<a data-type="mac" id='+ item.id +' sign="'+ item.sign +'" class="showcase checkA" href="javascript:;"><div class="div"><div class="img_wapper">';
                    guochanHtml += '<img class="img loadOffsetTop"  src="./loading.gif" data-load="'+ item.d_pic +'" data-offset-top="444">';
                    guochanHtml += '</div><p class="des" title="'+item.d_name+'">'+item.d_name+'</p><div class="sub_des">';
                    guochanHtml += '<span class="icon_show iconfont">'+item.d_scoreall+'</span>';
                    guochanHtml += '<span class="icon_time iconfont">'+item.create_time+'</span></div></div></a>';
                })

                $.each(data.data.oumei,function(key,item){
                    
                    oumeiHtml += '<a data-type="mac" id='+ item.id +' sign="'+ item.sign +'" class="showcase checkA" href="javascript:;"><div class="div"><div class="img_wapper">';
                    oumeiHtml += '<img class="img loadOffsetTop" src="./loading.gif" data-load="'+ item.d_pic +'" data-offset-top="444">';
                    oumeiHtml += '</div><p class="des" title="'+item.d_name+'">'+item.d_name+'</p><div class="sub_des">';
                    oumeiHtml += '<span class="icon_show iconfont">'+item.d_scoreall+'</span>';
                    oumeiHtml += '<span class="icon_time iconfont">'+item.create_time+'</span></div></div></a>';
                })

                $("#porn_div").html(html);
                $("#hot_div").html(hotHtml);
                $("#new_div").html(newHtml);
                $("#wuma_div").html(wumaHtml);
                $("#rihan_div").html(rihanHtml);
                $("#guochan_div").html(guochanHtml);
                $("#oumei_div").html(oumeiHtml);
            }

        }
    });
}