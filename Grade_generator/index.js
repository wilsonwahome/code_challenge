// Function to calculate grades for 5 subjects
function getGrade() {
    let grades = [];
    
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
        
        // Store the subject name and grade in the grades array
        grades.push({ name: subjectName, grade: grade });
    }

    // Create a result string to display the grades
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += `${grades[i].name}: ${grades[i].grade}<br>`;
    }

    // Display the result in the HTML element with id 'result'
    document.getElementById('result').innerHTML = result;
}
