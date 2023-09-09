const buttons = document.querySelectorAll(".but"),
      text = document.querySelector(".text"),
      butWrap = document.querySelector(".inner"),
      descr = document.querySelector(".descr"),
      result = document.querySelector(".result");
let count = 0;

function changeContent(correct, content, target) {
    if(target.classList[1] == correct) {
        count++;
        text.textContent = content;
    } else {
        text.textContent = content;
    }
};


buttons.forEach(item => {
    item.addEventListener("click", e => {
        if(text.textContent == "Левое полушарие мозга отвечает за логику, а правое — за творчество") {
            changeContent("false", "Земля — круглая", e.target);
        } else if(text.textContent == "Земля — круглая"){
            changeContent("false", "Эверест — самая высокая гора в мире", e.target);
        } else if(text.textContent == "Эверест — самая высокая гора в мире") {
            changeContent("false", "Банан — это ягода, а клубника — нет", e.target);
        } else if(text.textContent == "Банан — это ягода, а клубника — нет") {
            changeContent("true", "Большая часть бытового мусора на планете — это пластик", e.target);
        } else if(text.textContent == "Большая часть бытового мусора на планете — это пластик") {
            changeContent("false", "У рыб отсутствует долгосрочная память", e.target);
        } else if(text.textContent == "У рыб отсутствует долгосрочная память") {
            changeContent("false", "Алкоголь вреден для мозга", e.target);
        } else if(text.textContent == "Алкоголь вреден для мозга") {
            changeContent("false", "Бумажный пакет — экологичнее, чем пластиковый", e.target);
        } else if(text.textContent == "Бумажный пакет — экологичнее, чем пластиковый") {
            changeContent("false", "Акулы существовали на Земле еще до деревьев", e.target);
        } else if(text.textContent == "Акулы существовали на Земле еще до деревьев") {
            changeContent("true", "Нарния — это выдумка", e.target);
        } else if(text.textContent == "Нарния — это выдумка") {
            changeContent("false", "Стеклянные бутылки разлагаются дольше пластиковых", e.target);
        } else if(text.textContent == "Стеклянные бутылки разлагаются дольше пластиковых") {
            changeContent("true", "Дельфинов тренируют для выполнения боевых задач", e.target);
        } else if(text.textContent == "Дельфинов тренируют для выполнения боевых задач") {
            changeContent("true", "Человек может сам себя пощекотать", e.target);
        } else if(text.textContent == "Человек может сам себя пощекотать") {
            changeContent("false", "Хлопок — максимально экологичный материал", e.target);
        } else if(text.textContent == "Хлопок — максимально экологичный материал") {
            changeContent("false", "Электробусы менее экологичны, чем дизельные автобусы", e.target);
        } else if(text.textContent == "Электробусы менее экологичны, чем дизельные автобусы") {
            changeContent("false", "Тест окончен", e.target);
            butWrap.classList.add("hidden");
            result.textContent = "0";
            text.style.top = "40%";
            descr.classList.add("showed");
            if(count >= 10) {
                result.style.color = "rgb(94, 210, 94)";
            } else {
                result.style.color = "rgb(237, 93, 93)"
            }
            let counter = 0;
            
            const timer = setInterval(add, 250);
            function add() {
                result.textContent = counter;
                counter++;
                if(result.textContent == count) {
                    clearInterval(timer);
                }
            }
        }
    });
});