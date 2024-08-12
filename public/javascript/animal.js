function addAnimalToList() {
    var animalName = document.getElementById('animalName').value;
    if (animalName) {
        var li = document.createElement('li');
        li.textContent = animalName;
        document.getElementById('animalList').appendChild(li);
        document.getElementById('animalName').value = ''; // 입력칸 초기화
    }
}
