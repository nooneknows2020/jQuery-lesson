// ページをスクロールする

// 即時関数
// ; ← エラー対策
;(function($, window){    // $をjQueryオブジェクトとして使う

    "use strict";

    $.fn.Scroll = function(option){
        return this.each(function(){
            new Scroll().init(option);
        });
    };

    // コンストラクタを作る
    const Scroll = function(){
        this.ops = {};

        this.defaults = {
            time : 1000,
            easing : "linear"
        }
    };

    // プロトタイプ:メモリの節約
    Scroll.prototype = {
        // 初期化する関数
        init : function(option){
            // defaultsをoptionの値で上書きする
            this.ops = $.extend(this.defaults, option);

            this.run();     // メイン処理を呼び出す
        },
        // 実行する関数
        run : function(){

            const self = this;  // ここのスコープのthisは、Scrollを指す

            // 実際の処理内容を記述する
            $("a[href*=\"#\"]").click(function(e){
                // aタグのデフォルトの動作を防止する
                e.preventDefault();
                console.log(e.target);

                $("html").animate({
                    scrollTop : $(this.hash).offset().top
                }, self.ops.time, self.ops.easing);
            });
        }
    };

})(jQuery, window);
