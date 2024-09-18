function information() {
    let name = prompt("Введите ваше полное имя:");
    let gender = prompt("Введите ваш пол:");
    let age = prompt("Введите ваш возраст:");
    let email = prompt("Введите ваш e-mail:");
    
    let confirmation = confirm(`Ваши данные:
    ФИО: ${name}
    Пол: ${gender}
    Возраст: ${age}
    E-mail: ${email}
    
    Все верно?`);
    if (confirmation) {
        alert("Спасибо! Данные сохранены.");
    } else {
        alert("Ошибка");
    }
}
information();