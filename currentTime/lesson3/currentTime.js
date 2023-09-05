;(function($){
    "use strict";

    $.fn.CurrentTime = function(){
        return this.each(function(){
            const $this = this;
            new CurrentTime().init($this);
        });
    }

    // コンストラクタ
    var CurrentTime = function(){
        this.$this = undefined;
    };

    // プロトタイプ
    CurrentTime.prototype = {
        // 初期化処理
        init : function($this){
            this.$this = $this;

            this.run();

            // 現在時刻を更新する
            setInterval(() => {
                this.run();
            }, 1000);
        },
        // 実行関数
        run : function(){
            const currentTime = new Date();
            const now = currentTime.toLocaleString();
            $(this.$this).text(now);
            $(this.$this).css({
                "background-color": "pink",
                "padding": "10px"
            });
            // 確認用
            console.log(now);
        }
    };

})(jQuery);