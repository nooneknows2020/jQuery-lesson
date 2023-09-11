// ページをスクロールする

// 即時関数
// ; ← エラー対策
;(function($, window){    // $をjQueryオブジェクトとして使う

    "use strict";

    // コンストラクタを作る
    var Scroll = function(){
    };

    // プロトタイプ:メモリの節約
    Scroll.prototype = {
        // 初期化する関数
        init : function(){
            this.run();     // メイン処理を呼び出す
        },
        // 実行する関数
        run : function(){
            // console.log("test");
            // 実際の処理内容を記述する
            $("a[href*=\"#\"]").click(function(e){
                // aタグのデフォルトの動作を防止する
                e.preventDefault();
                console.log(e.target);

                $("html").animate({
                    scrollTop : $(this.hash).offset().top
                }, 1000, "linear");
            });
        }
    };

    // オブジェクトの生成
    var scroll = new Scroll();
    scroll.init();

})(jQuery, window);
