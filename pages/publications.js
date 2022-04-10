import { useState } from 'react';
// const moment = require('moment');

const POSTS = [
    // { title: , publication: , date: , link: },
    { title: 'Justin Bibis: From a viral video to Pakistan’s Coke Studio stars', publication: 'Al Jazeera', date: '07/04/2022', link: 'https://www.aljazeera.com/features/2022/4/7/justin-bibis-from-a-viral-video-to-pakistans-coke-studio-stars'},
    { title: 'Will Pakistan’s Inflation Crisis Bring Down Imran Khan?', publication: 'Foreign Policy', date: '25/03/2022', link: 'https://foreignpolicy.com/2022/03/25/pakistan-inflation-imran-khan-no-confidence-vote/'},
    { title: 'A refugee in Pakistan, Afghan Shah Rukh Khan seeks a twist in his career', publication: 'TRT World', date: '01/03/2022', link: 'https://www.trtworld.com/magazine/a-refugee-in-pakistan-afghan-shah-rukh-khan-seeks-a-twist-in-his-career-55182'},
    { title: 'Shaheen Shah Afridi: From Landi Kotal to top of cricketing world', publication: 'Al Jazeera', date: '22/02/2022', link: 'https://www.aljazeera.com/sports/2022/2/22/shaheen-shah-afridi-from-landi-kotal-to-worlds-best'},
    { title: 'In Pakistan, can cricket be a celebration for its women?', publication: 'TRT World', date: '22/12/21', link: 'https://www.trtworld.com/magazine/in-pakistan-can-cricket-be-a-celebration-for-its-women-52894'},
    { title: "Stateless and helpless: The plight of ethnic Bengalis in Pakistan", publication: "Al Jazeera", date: "29/09/2021", link: "https://www.aljazeera.com/features/2021/9/29/stateless-ethnic-bengalis-pakistan" },
    { title: "Can social media being justice for women in Pakistan?", publication: "Foreign Policy", date: "21/09/21", link: "https://foreignpolicy.com/2021/09/21/pakistan-noor-mukadam-social-media-justice/"},
    { title: "“We do not feel safe”: A Kabul-based crisis alert app struggles to protect its own employees", publication: 'Rest of World', date: '17/08/2021', link: 'https://restofworld.org/2021/kabul-based-crisis-alert-app-struggles-to-protect-its-own-employees/'},
    { title: "How Abul Kalam Azad's idea of united India was defeated in 1946", publication: 'TRT World', date: '13/08/2021', link: 'https://www.trtworld.com/magazine/how-abul-kalam-azad-s-idea-of-united-india-was-defeated-in-1946-49169'},
    { title: "A herder becomes a ranger to save the snow leopard in the Himalayas", publication: "TRT World", date: "07/07/21", link: "https://www.trtworld.com/magazine/a-herder-becomes-a-ranger-to-save-the-snow-leopard-in-the-himalayas-47323" },
    { title: "How football offers solace for Hazara women battling trauma, fear", publication: "Al Jazeera", date: "23/05/2021", link: "https://www.aljazeera.com/sports/2021/5/23/football-solace-for-hazara-women-battling-trauma-fear" },
    { title: "Science: Tracking the changing COVID-19", publication: "Dawn", date: "16/05/2021", link: "https://www.dawn.com/news/1623815/science-tracking-the-changing-covid-19" },
    { title: "'Dark Day': Pakistan football HQ attacked, women’s event scrapped", publication: "Al Jazeera", date: "28/03/2021", link: "https://www.aljazeera.com/sports/2021/3/28/pakistan-football-federation-office-attacked"},
    { title: "Pakistan: Conspiracy theories hamper COVID vaccine drive", publication: "Deutsche Welle", date: "12/03/2021", link: "https://www.dw.com/en/pakistan-conspiracy-theories-hamper-covid-vaccine-drive/a-56853397" },
    { title: 'How Syrian baristas diversified the Turkish coffee market', publication: 'TRT World', date: '12/02/2019', link: 'https://www.trtworld.com/magazine/how-syrian-baristas-diversified-the-turkish-coffee-market-24099'},
    { title: "Opinion: Film can help Pakistan garner international influence", publication: "China Global Television Network", date: "02/02/2019", link: "https://news.cgtn.com/news/3d3d514d3055444e32457a6333566d54/index.html"},
    { title: "Can Imran Khan shift Pakistan's brand image?", publication: "Anadolu Agency", date: "10/11/18", link: "https://www.aa.com.tr/en/analysis-news/can-imran-khan-shift-pakistan-s-brand-image/1307938" },
    { title: 'How fair is the democratic transition in Pakistan?', publication: 'TRT World', date: '25/07/2018', link: 'https://www.trtworld.com/magazine/how-fair-is-the-democratic-transition-in-pakistan--19144'},
    { title: "Footprints: The Unknown Soldier", publication: "Dawn", date: "20/07/2018", link: "https://www.dawn.com/news/1421262/footprints-the-unknown-soldier" },
    { title: "Footprints: Iqbal's Enduring Legacy", publication: "Dawn", date: "20/04/2018", link: "https://www.dawn.com/news/1402706/footprints-iqbals-enduring-legacy"},
    { title: "Is Pakistan's populist leader facing a political dead end?", publication: 'TRT World', date: '18/01/2018', link: 'https://www.trtworld.com/magazine/is-pakistan-s-populist-leader-facing-a-political-dead-end--14366'},
];

const BOOKS = [
    { title: 'Reporting War and Conflict in the 21st Century', date: '08/06/2021', link: 'https://researchcentre.trtworld.com/featured/reporting-war-and-conflict-in-the-21st-century/'},
    { title: 'The Refugee’s Messenger: Lost Stories Retold', date: '14/06/2019', link: 'https://researchcentre.trtworld.com/books/the-refugees-messenger-lost-stories-retold/'},
];

const RESEARCH = [
    { title: 'Coronavirus in India: A Public Health Disaster in the Making?', date: '20/04/2020', link: 'https://researchcentre.trtworld.com/discussion-papers/coronavirus-in-india-a-public-health-disaster-in-the-making/'},
    { title: 'Identity and Belonging in Modi’s India: The Legitimisation of Hindutva and the Citizenship Amendment Act', date: '27/03/2020', link: 'https://researchcentre.trtworld.com/discussion-papers/identity-and-belonging-in-modis-india-the-legitimisation-of-hindutva-and-the-citizenship-amendment-act/'},
    { title: 'Indian General Elections 2019', date: '04/04/2019', link: 'https://researchcentre.trtworld.com/info-packs/indian-general-elections-2019/'},
    { title: 'Through Trials and Triumph: A New Spell of Democratic Transition in Pakistan', date: '21/11/2018', link: 'https://researchcentre.trtworld.com/discussion-papers/through-trials-and-triumph-a-new-spell-of-democratic-transition-in-pakistan/'},
    { title: 'Pakistan’s General Elections 2018', date: '12/07/2018', link: 'https://researchcentre.trtworld.com/info-packs/pakistans-general-elections-2018/'},
]

const HEADERS = ["Articles", "Books", "Research"]

export default () => {
    const [chosenHeader, setHeader] = useState('Articles')

    const renderList = (header) => {
        if (header == 'Articles') {
            return POSTS.map(({ title, publication, date, link }) => (
                <div className='pb-8 border-gray-400 rounded-md'>
                    <a href={link} className='space-x-2 group'>
                        <span className='pb-4 italic text-gray-800 text-md md:text-lg group-hover:text-brown'>{title}</span>
                        <span className="font-thin text-brown">{publication}, {date}</span>
                    </a>
                </div>
            ))
        }
        else if (header == 'Books') {
            return BOOKS.map(({ title, date, link }) => (
                <div className='pb-8 border-gray-400 rounded-md'>
                    <a href={link} className='space-x-2 group'>
                        <span className='pb-4 italic text-gray-800 text-md md:text-lg group-hover:text-brown'>{title}</span>
                        <span className="font-thin text-brown">{date}</span>
                    </a>
                </div>
            ))
        }
        
        return RESEARCH.map(({ title, date, link }) => (
            <div className='pb-8 border-gray-400 rounded-md'>
                <a href={link} className='space-x-2 group'>
                    <span className='pb-4 italic text-gray-800 text-md md:text-lg group-hover:text-brown'>{title}</span>
                    <span className="font-thin text-brown">{date}</span>
                </a>
            </div>
        ))
    }
    
    return (
    <div className="flex flex-col">
        <div className="flex flex-row justify-between mb-8 border-b w-80 border-brown">
        {HEADERS.map((header, index) => (
            <p onClick={() => setHeader(header)} 
                className={`flex items-center justify-center pb-4 px-4 text-xl ${chosenHeader === header ? 'border-b-2 text-brown' : undefined} border-brown cursor-pointer hover:text-brown`}
            >
                {header}
            </p>
        ))}
        </div>
        
        {renderList(chosenHeader)}
    </div>
)}