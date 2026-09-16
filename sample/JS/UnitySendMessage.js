
function sendDataToUnity() {
  
  console.log('sendDataToUnity()を呼びました');
  //document.body.style.display = 'none';
  //document.body.style.display = 'none !important';
  

  document.body.style.setProperty('display', 'none', 'important');
  document.body.style.visibility = 'hidden';
  //location.href = "result.html";
  Unity.call("PlayEffect");
  
}

let button = document.getElementById("button");
button.addEventListener("click",sendDataToUnity);


// Unityから呼び出される関数をあらかじめ定義しておく
function showResult(status) {
  
  //console.log('showResultを実行');
  document.body.style.setProperty('display', 'none', 'important');
  document.body.style.visibility = 'hidden';
  location.href = "result.html";
  
}
/*  
// HTMLの解析が終わり、DOMツリーが完成したタイミング（画像などは未ロードでもOK）
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMの準備ができました');
  //Unity.call("PlayEffect");       
});

// 画像やスタイルシートも含め、すべてのリソースが読み込み完了したタイミング
window.addEventListener('load', () => {
  console.log('すべてのリソースの読み込みが完了しました');
  //Unity.call("PlayEffect");
});
*/
