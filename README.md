# jQueryプラグインの練習

- alert:クリックした要素のテキストをアラートで表示する
- navigation:ナビゲーションバーをクリックでスクロールする
- currentTime:現在時刻を表示する

## alert

クリックした要素のテキストをアラートで表示する。

[実行例](https://nooneknows2020.github.io/jQuery-lesson/alert/lesson1/)

## navigation

ナビゲーションバーをクリックでスクロールする。

- lesson1:ナビゲーションを作る→[実行例](https://nooneknows2020.github.io/jQuery-lesson/navigation/lesson1/)
- lesson2:プラグイン化→[実行例](https://nooneknows2020.github.io/jQuery-lesson/navigation/lesson2/)
- lesson3:オプション設定→[実行例](https://nooneknows2020.github.io/jQuery-lesson/navigation/lesson3/)
- lesson4:スタイルを調整する→[実行例](https://nooneknows2020.github.io/jQuery-lesson/navigation/lesson4/)

### lesson1:ナビゲーションを作る

```javascript
// タグのデフォルトの動作を防止する
preventDefault();
```

### lesson4:スタイルを調整する

```javascript
// アニメーションを途中で止めて、以降のアニメーションを実行する
stop();
```

```javascript
// ナビゲーションの高さを取得する
// parseInt()で数値を取得できる
this.navLineHeight = parseInt($("nav").css("lineHeight"));
```

## currentTime

現在時刻を表示する。

- lesson1:現在時刻を毎秒表示する→[実行例](https://nooneknows2020.github.io/jQuery-lesson/currentTime/lesson1/)
- lesson2:プラグイン化→[実行例](https://nooneknows2020.github.io/jQuery-lesson/currentTime/lesson2/)
- lesson3:任意の要素から実行できるようにする→[実行例](https://nooneknows2020.github.io/jQuery-lesson/currentTime/lesson3/)
- lesson4:オプション設定→[実行例](https://nooneknows2020.github.io/jQuery-lesson/currentTime/lesson4/)

### lesson1:現在時刻を毎秒表示する

```javascript
// 現在時刻を1000ミリ秒ごとに更新する
setInterval(showCurrentTime, 1000);
```

### lesson3:任意の要素から実行できるようにする

アロー関数では、thisはアロー関数自身が宣言された場所によって決まる。ここでは、コンストラクタが示すthis(インスタンス)を指す。

```javascript
// 現在時刻を更新する
setInterval(() => {
    this.run();
}, 1000);
```

## プラグインのテンプレートの在処

- jQueryのプラグインのテンプレート
    - https://gist.github.com/nooneknows2020/9445db4c986034bf2ce6422a9cf41972
- jQueryのプラグインのテンプレート:オプション設定あり
    - https://gist.github.com/nooneknows2020/165898ad237aec5c8f81ac41c99f115b

## 参考

- https://www.youtube.com/watch?v=s4YQvmclfag

