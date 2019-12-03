// jsを記述する際はここに記載していく

$(".mainvisual").fadeIn(1000);
$("main").slideDown(1000);

//1.Save クリックイベント
$("#save").on("click", function(){

    // jQueryで値を取る時は必ずvalを利用する。他の方法はない！
    const key = $("#key").val();
    const value = $("#memo").val();

    // console.log(key)
    // console.log(value)

    // データを保存する
    localStorage.setItem(key, value);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';

    $("#list").append(html);


// ↓この括弧群消しちゃダメ
});


//2.clear クリックイベント
$("#clear").on('click', function(){

    // 保存されたデータ（localStorage)を消す
    localStorage.clear();

    //id="list"の中身を削除する
    $("#list").empty();

});

//3.ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';

    $("#list").append(html);
}

// Text Clearボタンを押すとテキストがクリアされる
$("#cleartext").on("click", function(){
    $("#memo").html("");
});

// Listに保存されたKeyとValueの処理
$("tr").on("dblclick", function(){

    let i = $("tr").index(this);
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(value);
    $("#memo").append(value);

});

$("tr").on("click", function(){

    let i = $("tr").index(this);
    console.log(i);
    $("#rowclear").on("click", function(){
        key = localStorage.key(i);
        localStorage.removeItem(key);
    });

});