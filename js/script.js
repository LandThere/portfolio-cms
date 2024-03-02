// Timeline for Work and Education
function showEducationTab() {
    document.querySelector('.work-tab').style.display = 'none';
    document.querySelector('.education-tab').style.display = 'block';
    document.querySelector('.work').classList.remove('selected');
    document.querySelector('.educ').classList.add('selected');
}

function showWorkTab() {
    document.querySelector('.work-tab').style.display = 'block';
    document.querySelector('.education-tab').style.display = 'none';
    document.querySelector('.educ').classList.remove('selected');
    document.querySelector('.work').classList.add('selected');
}
