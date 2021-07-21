interface SectionModuleData {
    section: string;
    info: [string,string,string][]
}

const data : SectionModuleData[] = [
    {
        section: "Experience",
        info: [
            ["Company Name #1", "Front-end Engineer", "Jan 2020 - Dec 2020"],
            ["Company Name #2", "Front-end Engineer", "Jan 2021 - May 2021"],
        ],
    },
    {
        section: "Education",
        info: [
            ["Course Name #1", "Webacademy", "2019"],
            ["Course Name #2", "Webacademy", "2018"],
            ["Course Name #3", "Webacademy", "2017"],
        ],
    },
]

class EduSection {
    private HTMLoutput = ""
    constructor(private sectionName: string, private sectionCards: [string,string,string][] = []) {}

    showSection () {
        console.log(`${this.sectionName} has ${this.sectionCards.length} entries`)
    }

    render (this : EduSection) {
        this.HTMLoutput += `<h2 class="education--header">${this.sectionName}</h2>\n`
        this.sectionCards.forEach(item => {
            const [name,company,dates] = item
            this.HTMLoutput += 
            `<div class="education--card">
            <h3 class="section--text">${name}</h3>
            <p class="section--text">${company}</p>
            <p class="section--text">${dates}</p>
            </div>`
        })
        return this.HTMLoutput
    }
}


export default function EducationModule():string {
    let educationHTML : string = ""
    data.forEach((item : SectionModuleData) => {
        const {section, info} = item
        const eduSection = new EduSection(section, info)
        educationHTML += eduSection.render()
        })
    return educationHTML
}

