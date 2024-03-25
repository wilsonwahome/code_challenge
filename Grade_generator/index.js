function getGrade() {
    let grades = [];
    let totalMarks = 0;
    
    // Loop through each subject
    for (let i = 1; i <= 5; i++) {
        // Get the marks for the current subject
        let subjectMarks = parseInt(document.getElementById('marks' + i).value, 10) || 0;
        let grade = '';

        // Determine the grade based on the marks
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

        // Get the name of the current subject
        let subjectName = document.getElementById('marks' + i).getAttribute('name');
        
        // Store the subject name, marks, and grade in the grades array
        grades.push({ name: subjectName, marks: subjectMarks, grade: grade });
        
        // Accumulate total marks
        totalMarks += subjectMarks;
    }

    // Calculate the average marks
    const averageMarks = totalMarks / 5;

    // Determine the total grade based on the average marks
    let totalGrade = '';
    if (averageMarks > 79) {
        totalGrade = 'A';
    } else if (averageMarks >= 60) {
        totalGrade = 'B';
    } else if (averageMarks >= 50) {
        totalGrade = 'C';
    } else if (averageMarks >= 40) {
        totalGrade = 'D';
    } else {
        totalGrade = 'E';
    }

    // Create a result string to display the grades, total marks, and total grade
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += `${grades[i].name}: ${grades[i].grade}<br>`;
    }
    result += `Total Marks: ${totalMarks}<br>`;
    result += `Total Grade: ${totalGrade}`;

    // Display the result in the HTML element with id 'result'
    document.getElementById('result').innerHTML = result;
}
