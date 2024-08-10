function changeBackgroundColor() {
    // 랜덤한 색상을 생성합니다.
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // 바디의 배경 색깔을 랜덤한 색상으로 변경합니다.
    document.body.style.backgroundColor = randomColor;
}
