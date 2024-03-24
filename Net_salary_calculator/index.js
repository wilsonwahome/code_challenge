function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
    
    // NHIF rates
    const nhifRates = [
        { min: 0, max: 5999, rate: 150 },
        { min: 6000, max: 7999, rate: 300 },
        { min: 8000, max: 11999, rate: 400 },
        { min: 12000, max: 14999, rate: 500 },
        { min: 15000, max: 19999, rate: 600 },
        { min: 20000, max: 24999, rate: 750 },
        { min: 25000, max: 29999, rate: 850 },
        { min: 30000, max: 34999, rate: 900 },
        { min: 35000, max: 39999, rate: 950 },
        { min: 40000, max: Infinity, rate: 1000 }
    ];

    // KRA tax rates
    const kraTaxRates = [
        { min: 0, max: 24000, rate: 0 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.3 },
        { min: 500001, max: 800000, rate: 0.325 },
        { min: 800001, max: Infinity, rate: 0.35 }
    ];

    // NSSF rate
    const nssfRate = 0.06; // 6% NSSF rate

    // Calculate gross salary/
    const grossSalary = basicSalary + benefits;

    // Calculate NHIF deductions based on the salary
    let nhifDeductions = 0;
    for (let i = 0; i < nhifRates.length; i++) {
        if (grossSalary >= nhifRates[i].min && grossSalary <= nhifRates[i].max) {
            nhifDeductions = nhifRates[i].rate;
            break;
        }
    }

    // Calculate kra tax
    let kratax = 0;
    for (let i = 0; i < kraTaxRates.length; i++) {
        if (grossSalary >= kraTaxRates[i].min && grossSalary <= kraTaxRates[i].max) {
            tax = (grossSalary - kraTaxRates[i].min) * kraTaxRates[i].rate;
            break;
        }
    }

    // Calculate NSSF deductions
    const nssfDeductions = grossSalary * nssfRate;

    // Calculate net salary
    const netSalary = grossSalary - kratax - nhifDeductions - nssfDeductions;

    // Display the result
    document.getElementById('result').innerHTML = `
        <p>Gross Salary: ${grossSalary.toFixed(2)}</p>
        <p>Tax: ${kratax.toFixed(2)}</p>
        <p>NHIF Deductions: ${nhifDeductions.toFixed(2)}</p>
        <p>NSSF Deductions: ${nssfDeductions.toFixed(2)}</p>
        <p>Net Salary: ${netSalary.toFixed(2)}</p>
    `;
}