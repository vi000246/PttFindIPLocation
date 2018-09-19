$('html').on('keyup keypress mousedown', function(e) {
    var html = $("#mainContainer").html();
    var reg = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\s(\d{2}\/\d{2}\s\d{2}:\d{2})/g;
    var result;
    while((result = reg.exec(html)) !== null) {
        console.log(result[1]);//這是IP
        console.log(result[2]);//這是日期
        $('#mainContainer').find("span[data-type='bbsline']").find('span').find('span:contains("'+result[1]+'")').text("hello"+result[1]+" "+result[2]);
    }
});
