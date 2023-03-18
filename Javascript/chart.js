const skill1Percentage = 55;
const skill2Percentage = 25;
const skill3Percentage = 20;

const totalPercentage = skill1Percentage + skill2Percentage + skill3Percentage;

const skill1Value = (skill1Percentage / totalPercentage) * 100;
const skill2Value = (skill2Percentage / totalPercentage) * 100;
const skill3Value = (skill3Percentage / totalPercentage) * 100;

document.querySelector('.skill-1').value = skill1Value;
document.querySelector('.skill-1 strong').textContent = `Skill Level: ${skill1Percentage}%`;

document.querySelector('.skill-2').value = skill2Value;
document.querySelector('.skill-2 strong').textContent = `Skill Level: ${skill2Percentage}%`;

document.querySelector('.skill-3').value = skill3Value;
document.querySelector('.skill-3 strong').textContent = `Skill Level: ${skill3Percentage}%`;
