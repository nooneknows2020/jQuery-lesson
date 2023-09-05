;(function($){
    "use strict";

    $.fn.CurrentTime = function(option){
        return this.each(function(){
            const $this = this;
            new CurrentTime().init($this, option);
        });
    }

    // コンストラクタ
    var CurrentTime = function(){
        this.$this = undefined;
        // オプションの設定:上書き用
        this.ops = {};

        // デフォルトのオプション設定
        this.defaults = {
            backgroundColor: "pink",
            padding: "10px"
        };
    };

    // プロトタイプ
    CurrentTime.prototype = {
        // 初期化処理
        init : function($this, option){
            this.$this = $this;
            // オプションを上書き設定する
            this.ops = $.extend(this.defaults, option);

            // 実行関数
            this.run();
            // スタイルを設定する
            this.setStyle();

            // 現在時刻を更新する
            setInterval(() => {
                this.run();
            }, 1000);
        },
        // 実行関数
        run : function(){
            // 現在時刻を表示する
            const currentTime = new Date();
            const now = currentTime.toLocaleString();
            $(this.$this).text(now);

            // 確認用
            console.log(now);
        },
        // スタイルの設定
        setStyle: function(){
            var self = this;

            // 上書きしたオプションを設定する
            $(this.$this).css({
                padding: self.ops.padding,
                backgroundColor: self.ops.backgroundColor,
            });
        }
    };

})(jQuery);