/*
// インスタンスを保持する変数
let unityInstance = null;

createUnityInstance(document.querySelector("#unity-canvas"), config, (progress) => {
  // 読み込み進捗の処理
}).then((unityInstance) => {
  // 取得したインスタンスを変数に格納
  unityInstance = unityInstance; 
}).catch((message) => {
  alert(message);
});
*/
function sendDataToUnity() {
    const data = "PlayEffect";
    
    // 引数：( "オブジェクト名", "関数名", "渡したい文字列" )
    //unityInstance.SendMessage('SampleAnimetion_0', 'PlayAnimation', data);
    
    
    location.href = "result.html";
}

let button = document.getElementById("button");
button.addEventListener("click",sendDataToUnity);


