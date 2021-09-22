// input select
const gradeForm = document.getElementById('grade-form');
const math = document.getElementById('math')
const english = document.getElementById('english')
const bangla = document.getElementById('bangla')
const physic = document.getElementById('physic')
const chemistry = document.getElementById('chemistry')
const biology = document.getElementById('biology')
const ict = document.getElementById('ict')
const agriculture = document.getElementById('agriculture')

// result select
const msg = document.getElementById('msg')
const totalMark = document.getElementById('total-mark');
const averageMark = document.getElementById('average-mark');
const grade = document.getElementById('grade');

// mark select
const markSheet = document.getElementById('markSheet');
const mathMark = document.getElementById('mathMark');
const englishMark = document.getElementById('englishMark');
const banglaMark = document.getElementById('banglaMark');
const PhysicMark = document.getElementById('PhysicMark');
const ChemistryMark = document.getElementById('ChemistryMark');
const biologyMark = document.getElementById('biologyMark');
const ictMark = document.getElementById('ictMark');
const agricultureMark = document.getElementById('agricultureMark');

gradeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mathParse = parseFloat(math.value);
    const englishParse = parseFloat(english.value)
    const banglaParse = parseFloat(bangla.value);
    const physicParse = parseFloat(physic.value);
    const chemistryParse = parseFloat(chemistry.value);
    const biologyParse = parseFloat(biology.value);
    const ictParse = parseFloat(ict.value);
    const agricultureParse = parseFloat(agriculture.value);


    const allSubMark = mathParse + englishParse + banglaParse + physicParse + chemistryParse + biologyParse + ictParse + agricultureParse;

    if (mathParse < 33 || englishParse < 33 || banglaParse < 33 || physicParse < 33 || chemistryParse < 33 || biologyParse < 33 || ictParse < 33 || agricultureParse < 33) {
        msg.innerHTML = 'sorry you have been failed';
        averageMark.innerHTML = '';
        totalMark.innerHTML = '';
        markSheet.style.display = 'none';
        grade.innerHTML = 'Your Grade = F';
    }
    else {
        msg.innerHTML = 'congratulation you have been pass'
        if ((allSubMark / 8) >= 80 && (allSubMark / 8) <= 100) {
            averageMark.innerHTML = `Average Marks = ${(allSubMark / 8).toFixed(2)} %`;
            totalMark.innerHTML = `Total Marks = ${allSubMark}`;
            grade.innerHTML = 'Your Grade = A+'
        }
        else if ((allSubMark / 8) >= 70) {
            averageMark.innerHTML = `Average Marks = ${(allSubMark / 8).toFixed(2)} %`;
            totalMark.innerHTML = `Total Marks = ${allSubMark}`;
            grade.innerHTML = 'Your Grade = A'
        }
        else if ((allSubMark / 8) >= 60) {
            averageMark.innerHTML = `Average Marks = ${(allSubMark / 8).toFixed(2)} %`;
            totalMark.innerHTML = `Total Marks = ${allSubMark}`;
            grade.innerHTML = 'Your Grade = A-'
        }
        else if ((allSubMark / 8) >= 50) {
            averageMark.innerHTML = `Average Marks = ${(allSubMark / 8).toFixed(2)} %`;
            totalMark.innerHTML = `Total Marks = ${allSubMark}`;
            grade.innerHTML = 'Your Grade = B'
        }
        else if ((allSubMark / 8) >= 40) {
            averageMark.innerHTML = `Average Marks = ${(allSubMark / 8).toFixed(2)} %`;
            totalMark.innerHTML = `Total Marks = ${allSubMark}`;
            grade.innerHTML = 'Your Grade = C'
        }
        else if ((allSubMark / 8) >= 33) {
            averageMark.innerHTML = `Average Marks = ${(allSubMark / 8).toFixed(2)} %`;
            totalMark.innerHTML = `Total Marks = ${allSubMark}`;
            grade.innerHTML = 'Your Grade = D'
        }

        markSheet.style.display = 'block'
        mathMark.innerHTML = mathParse;
        englishMark.innerHTML = englishParse;
        banglaMark.innerHTML = banglaParse;
        PhysicMark.innerHTML = physicParse;
        ChemistryMark.innerHTML = chemistryParse;
        biologyMark.innerHTML = biologyParse;
        ictMark.innerHTML = ictParse;
        agricultureMark.innerHTML = agricultureParse;
    }
})