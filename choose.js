function tap() {
    // 1. 取得三個輸入框的值
    const val1 = document.getElementById('one').value.trim();
    const val2 = document.getElementById('two').value.trim();
    const val3 = document.getElementById('three').value.trim();

    // 2. 將有填寫的內容放進陣列（過濾掉空白）
    const options = [val1, val2, val3].filter(item => item !== "");

    // 3. 防呆機制：如果都沒有輸入，就跳出警告
    if (options.length === 0) {
        alert("請至少輸入一個選項喔！");
        return;
    }

    // 4. 隨機決定一個索引
    const randomIndex = Math.floor(Math.random() * options.length);
    const finalResult = options[randomIndex];

    // 5. 將結果填入彈出視窗，並加上 .active 顯示動畫
    document.getElementById('resultValue').innerText = finalResult;
    document.getElementById('resultModal').classList.add('active');
}

function closeModal() {
    // 移除 .active 隱藏彈出視窗
    document.getElementById('resultModal').classList.remove('active');
}