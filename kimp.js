
// setInterval함수를 활용해 실시간 김프값 김프rsi값을 index.html로 보낸다. 
setInterval(function(){ 



$(document).ready(function(){
    $.getJSON("kimp_rate.json",function(data){
        console.log(data)
        $('.BTCp').html(data.BTCp);
        $('.ETCp').html(data.ETCp);
        $('.XRPp').html(data.XRPp);
        $('.SOLp').html(data.SOLp);



    }).fail(function(){
        console.log("김프가격을 계산중입니다. 잠시 기다려 주세요.")
    })
})


$(document).ready(function(){
    $.getJSON("kimp_rsi.json",function(data){
        console.log(data)
        $('.BTCr').html(data.BTCr);
        $('.ETCr').html(data.ETCr);
        $('.XRPr').html(data.XRPr);
        $('.SOLr').html(data.SOLr);



    }).fail(function(){
        console.log("김프 RSI값을 계산중입니다. 잠시 기다려 주세요.")
    })
})


// 헤드라인뉴스기사(headline.json)을 웹페이지에 출력하기

$(document).ready(function(){
    $.getJSON("headline.json",function(data){
        console.log(data)
        $('.headline1').html(data.news1);
        $('.headline2').html(data.news2);
        $('.headline3').html(data.news3);



    }).fail(function(){
        console.log("뉴스기사를 검색하는 중입니다. 잠시만 기다려 주세요.")
    })
})

$(document).ready(function(){
    $.getJSON("upbit_price.json",function(data){
        console.log(data)
        $('.BTC-upbit').html(data.BTCnow);
        $('.ETC-upbit').html(data.ETCnow);
        $('.XRP-upbit').html(data.XRPnow);
        $('.SOL-upbit').html(data.SOLnow);



    }).fail(function(){
        console.log("업비트 가격을 불러오는 중입니다. 잠시 기다려 주세요.")
    })
})

},1000);  