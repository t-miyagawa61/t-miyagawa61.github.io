function sendDataToUnity() {
    const data = "PlayEffect";
    
    // 引数：( "オブジェクト名", "関数名", "渡したい文字列" )
    unityInstance.SendMessage('SampleAnimetion_0', 'PlayAnimation', data);
}