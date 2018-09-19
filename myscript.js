$('html').on('keyup keypress mousedown', function(e) {
    var html = $("#mainContainer").html();
    var reg = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\s(\d{2}\/\d{2}\s\d{2}:\d{2})/g;
    var result;
    while((result = reg.exec(html)) !== null) {
        var ip = result[1];
        var bbsDate = result[2];
        console.log(ip);//這是IP
        console.log(bbsDate);//這是日期

        $.ajax({
            url: "https://extreme-ip-lookup.com/json/"+ip,
            async:false,
            success: function(data) {
                if(data.countryCode){
                    //總長度一定要29字元
                    var newContent = (ip+"("+data.countryCode+") "+bbsDate).padEnd(29, ' ');
                    var currentLine = $('#mainContainer').find("span[data-type='bbsline']").find('span').find('span:contains("'+ip+'")');
                    currentLine.text(newContent);
                }
            }
        });

        
    }
});

