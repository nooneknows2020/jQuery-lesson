;(function($){
    $(function(){
        "use strict";

        // console.log("呼び出し側");

        // オプションを指定する
        $(".currentTime1").CurrentTime({
            backgroundColor: "skyblue",
            padding: "20px"
        });

        $(".currentTime2").CurrentTime();
        
    });
})(jQuery);