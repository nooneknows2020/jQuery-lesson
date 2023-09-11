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
        this.navLineHeight = 0;
    };

    // プロトタイプ:メモリの節約
    Scroll.prototype = {
        // どのオブジェクトでも変わらないので、プロトタイプに定義する
        defaults : {
            time : 1000,
            easing : "linear"
        },
        // 初期化する関数
        init : function(option){
            // defaultsをoptionの値で上書きする
            this.ops = $.extend(this.defaults, option);

            // ナビゲーションの高さを取得する
            this.navLineHeight = parseInt($("nav").css("lineHeight"));
            console.log(this.navLineHeight);
            

            this.run();     // メイン処理を呼び出す
        },
        // 実行する関数
        run : function(){

            const self = this;  // ここのスコープのthisは、Scrollを指す

            // 実際の処理内容を記述する
            $("a[href*=\"#\"]").click(function(e){
                // aタグのデフォルトの動作を防止する
                e.preventDefault();
                // console.log(e.target);

                // アニメーションを途中で止めて、以降のアニメーションを実行する
                $("html").stop().animate({
                    scrollTop : $(this.hash).offset().top - self.navLineHeight
                }, self.ops.time, self.ops.easing);
            });
        }
    };

})(jQuery, window);
