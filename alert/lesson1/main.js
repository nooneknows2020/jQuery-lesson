;(function($){
    $(function(){
        "use strict";
        
        $(".alert1").Alert();
        $(".alert2").Alert({
            backgroundColor : "cyan"
        });
        $(".alert3").Alert({
            backgroundColor : "magenta"
        });
    });
})(jQuery);