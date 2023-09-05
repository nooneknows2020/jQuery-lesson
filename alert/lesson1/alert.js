// クリックした要素のテキストをアラートで表示する

;(function($){
    "use strict";

    $.fn.Alert = function(option){
        return this.each(function(){
            const $this = this;
            new Alert().init($this, option);
        });
    }

    // コンストラクタ
    var Alert = function(){
        // プラグインを実行する要素
        this.$this = undefined;
        // オプションの設定:上書き用
        this.ops = {};
        // デフォルトのオプション設定
        this.defaults = {
            backgroundColor: "pink",
            padding: "10px"
        }
    };

    // プロトタイプ
    Alert.prototype = {
        // 初期化処理
        init : function($this, option){
            this.$this = $this;
            // オプションを上書き設定する
            this.ops = $.extend(this.defaults, option);

            // スタイルを設定する
            this.setStyle();

            // メイン処理を実行する
            this.run();
        },
        // 実行関数
        run : function(){
            // ここのthisは、Alertを指す
            const self = this;

            // クリックした要素のテキストをアラートで表示する
            $(this.$this).on("click", function(e){
                alert($(this).text());
            });

        },
        // スタイルを設定する関数
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