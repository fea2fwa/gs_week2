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

    document.location.reload();


// ↓この括弧群消しちゃダメ
});

$("#save2").on("click", function(){

    // jQueryで値を取る時は必ずvalを利用する。他の方法はない！
    const key = $("#key").val();
    const value = $("#memo").val();

    // console.log(key)
    // console.log(value)

    // データを保存する
    localStorage.setItem(key, value);
    const html = '<tr><th>'+key+'</th><td>'+value+'</td></tr>';

    $("#list").append(html);

    document.location.reload();


// ↓この括弧群消しちゃダメ
});


//2.clear クリックイベント
$("#clear").on('click', function(){

    // 保存されたデータ（localStorage)を消す
    localStorage.clear();

    //id="list"の中身を削除する
    $("#list").empty();

});

$("#clear2").on('click', function(){

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

$("#cleartext2").on("click", function(){
    $("#memo").html("");
});


// Listに保存されたデータの処理パート
// ダブルクリックで保存した情報をテキストエリアに復活
$("tr").on("dblclick", function(){

    let i = $("tr").index(this);
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(value);
    $("#memo").append(value);

    $(this).removeClass("btn_clicked");
});

// Clear Rowで1行消す処理
$("tr").on("click", function(){

    $(this).addClass("btn_clicked");

    const i = $("tr").index(this);
    console.log(i);
    key = localStorage.key(i);
    $("#rowclear").on("click", function(){
        localStorage.removeItem(key);
    });

    $("#rowclear2").on("click", function(){
        localStorage.removeItem(key);
    });
});

// 書き込まれたListに対する処理
$("tr").hover(function(){
    $(this).css("color", "#FF0000");
}, function(){
    $(this).css("color", "#000000");
});