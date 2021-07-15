const data = [
  {section : "Experience",
  info: [
      ["Company Name #1", "Front-end Engineer", "Jan 2020 - Dec 2020"],
      ["Company Name #2", "Front-end Engineer", "Jan 2021 - May 2021"]
  ]},
  {section : "Education",
  info: [
      ["Course Name #1", "Webacademy", "2019"],
      ["Course Name #2", "Webacademy", "2018"],
      ["Course Name #3", "Webacademy", "2017"],
  ]},
];

export default function EducationModule () {
  const experienceData = data[0].info;
  const educationData = data[0].info;
  let educationHTML = "";
  educationHTML += `<h2 class="education--header">Experience</h2>`;
  experienceData.forEach(elem => 
    educationHTML += `<div class="education--card">
    <h3 class="section--text">${elem[0]}</h3>
    <p class="section--text">${elem[1]}</p>
    <p class="section--text">${elem[2]}</p>
  </div>
  `);
  educationHTML += `<h2 class="education--header">Education</h2>`;
  educationData.forEach(elem => 
    educationHTML += `<div class="education--card">
    <h3 class="section--text ">${elem[0]}</h3>
    <p class="section--text">${elem[1]}</p>
    <p class="section--text">${elem[2]}</p>
  </div>
  `);

 return educationHTML;
}
  