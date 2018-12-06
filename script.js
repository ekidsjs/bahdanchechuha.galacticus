function run () {
    const rightAnswers=['2','1','3','1','3'];
    const userAnswers=[];
    let raiting=0;
    let status='';
    const name=prompt("Введите свое имя:","Пользователь");
    const years=prompt("Сколько вам лет",'100')
    userAnswers[0]=prompt("Луна это планета?\n1. Да\n2. нет",'1')
    userAnswers[1]=prompt("Из чего состоит солнце?\n1. Из газа\n2. Изо льда\n3. Из ваты",'1');
    userAnswers[2]=prompt("Какой по счоту от солнца?\n1. 1-й\n2. 3-й\n3. 4-й",'1');
    userAnswers[3]=prompt("Есть ли у урана кольца?\n1. Да\n2. Нет",'1');
    userAnswers[4]=prompt("Какая самая большая планета солнечной системы?\n1. Земля\n2. Луна\n3. Юпитер",'1');
    if(rightAnswers[0] === userAnswers[0]) {
        raiting += 1;
    }
    if(rightAnswers[1] === userAnswers[1]) {
        raiting += 1;
    }
    if(rightAnswers[2] === userAnswers[2]) {
        raiting += 1;
    }
    if(rightAnswers[3] === userAnswers[3]) {
        raiting += 1;
    }
    if(rightAnswers[4] === userAnswers[4]) {
        raiting += 1;
    }
    
    if (raiting <=2) {
        status='ты очень мало знаеш о космосе, тебе стоит читать больше книг.'
    }
    else if (raiting < 5) {
        status='ты довольно хорошо знаеш космос, пожалуй  в таком духе и ты станеш космическим рейнджером.'
}
else {
    status='ты знаеш о космосе практически всё,продолжай в таком же духе,ты молодец!'
}
alert(`Привет,${name}! Тебе уже ${years}лет и ${status}`);
}

