function getGrade() {
    let grades = [];
    
    for (let i = 1; i <= 5; i++) {
        let subjectMarks = parseInt(document.getElementById('marks' + i).value, 10) || 0;
        let grade = '';

        if (subjectMarks > 79) {
            grade = 'A';
        } else if (subjectMarks >= 60) {
            grade = 'B';
        } else if (subjectMarks >= 50) {
            grade = 'C';
        } else if (subjectMarks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        let subjectName = document.getElementById('marks' + i).getAttribute('name');
        grades.push({ name: subjectName, grade: grade });
    }

    let result = '';
    for (let i = 0; i < 5; i++) {
        result += `${grades[i].name}: ${grades[i].grade}<br>`;
    }

    document.getElementById('result').innerHTML = result;
}
