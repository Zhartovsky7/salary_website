function calculateSalary() {
    const days = parseInt(document.getElementById('days').value);
    const myWorkDays = parseInt(document.getElementById('my_work_days').value);
    const highWorkDays = parseInt(document.getElementById('high_work_days').value);
    
    const oklad = 40000 / days;
    const salary = Math.round((myWorkDays * oklad) + (highWorkDays * (oklad * 2)), 1);

    document.getElementById('salaryResult').innerText = `
        Стоимость обычного дня: ${oklad.toFixed(1)} рублей
        Оклад за месяц: ${salary.toFixed(1)} рублей
    `;
}

function calculateBonus() {
    const basicLesson = parseInt(document.getElementById('basic_lesson').value);
    const mediumLesson = parseInt(document.getElementById('medium_lesson').value);
    const highLesson = parseInt(document.getElementById('high_lesson').value);

    const lesson = 250;
    const mediumCoefficient = 1.5;
    const highCoefficient = 2;
    let bonus = basicLesson * lesson;

    if (mediumLesson > 0 || highLesson > 0) {
        bonus += highLesson * lesson;
        bonus += mediumLesson * (lesson * mediumCoefficient - lesson);
    }

    const salaryText = document.getElementById('salaryResult').innerText;
    const salaryMatch = salaryText.match(/Оклад за месяц: ([\d.]+) рублей/);
    let salary = 0;

    if (salaryMatch) {
        salary = parseFloat(salaryMatch[1]);
    }

    document.getElementById('bonusResult').innerText = `Бонус за месяц: ${bonus.toFixed(1)} рублей`;
    document.getElementById('totalIncome').innerText = `Итоговый доход за месяц: ${(salary + bonus).toFixed(1)} рублей`;
}
