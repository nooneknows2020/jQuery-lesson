;(function($){
    "use strict";

    $.fn.CurrentTime = function(){
        return this.each(function(){
            new CurrentTime().init();
        });
    }

    // コンストラクタ
    var CurrentTime = function(){
    };

    // プロトタイプ
    CurrentTime.prototype = {
        // 初期化処理
        init : function(){
            this.run();
            // 現在時刻を更新する
            setInterval(this.run, 1000);
        },
        // 実行関数
        run : function(){
            const currentTime = new Date();
            const now = currentTime.toLocaleString();
            $(".currentTime").text(now);
            $(".currentTime").css({
                "background-color": "pink",
                "padding": "10px"
            });
            // 確認用
            console.log(now);
        }
    };

})(jQuery);