function sendDataToUnity() {
    const data = "PlayEffect";
    
    // 引数：( "オブジェクト名", "関数名", "渡したい文字列" )
    unityInstance.SendMessage('SampleAnimetion_0', 'PlayAnimation', data);
    
    
    location.href = "result.html";
}

let button = document.getElementById("button");
button.addEventListener("click",sendDataToUnity);


