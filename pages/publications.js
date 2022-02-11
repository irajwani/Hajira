const moment = require('moment');

const POSTS = [
    { title: "Stateless and helpless: The plight of ethnic Bengalis in Pakistan", publication: "AlJazeera", date: "29/09/2021", link: "https://www.aljazeera.com/features/2021/9/29/stateless-ethnic-bengalis-pakistan" },
    { title: "Can social media being justice for women in Pakistan?", publication: "Foreign Policy", date: "21/09/21", link: "https://foreignpolicy.com/2021/09/21/pakistan-noor-mukadam-social-media-justice/"},
    { title: "A herder becomes a ranger to save the snow leopard in the Himalayas", publication: "TRT World", date: "07/07/21", link: "https://www.trtworld.com/magazine/a-herder-becomes-a-ranger-to-save-the-snow-leopard-in-the-himalayas-47323" },
    { title: "How football offers solace for Hazara women battling trauma, fear", publication: "AlJazeera", date: "23/05/2021", link: "https://www.aljazeera.com/sports/2021/5/23/football-solace-for-hazara-women-battling-trauma-fear" },
    { title: "Science: Tracking the changing COVID-19", publication: "Dawn", date: "16/05/2021", link: "https://www.dawn.com/news/1623815/science-tracking-the-changing-covid-19" },
    { title: "'Dark Day': Pakistan football HQ attacked, women’s event scrapped", publication: "AlJazeera", date: "28/03/2021", link: "https://www.aljazeera.com/sports/2021/3/28/pakistan-football-federation-office-attacked"},
    { title: "Pakistan: Conspiracy theories hamper COVID vaccine drive", publication: "Deutsche Welle", date: "12/03/2021", link: "https://www.dw.com/en/pakistan-conspiracy-theories-hamper-covid-vaccine-drive/a-56853397" },
    { title: "Opinion: Film can help Pakistan garner international influence", publication: "China Global Television Network", date: "02/02/2019", link: "https://news.cgtn.com/news/3d3d514d3055444e32457a6333566d54/index.html"},
    { title: "Can Imran Khan shift Pakistan's brand image?", publication: "Anadolu Agency", date: "10/11/18", link: "https://www.aa.com.tr/en/analysis-news/can-imran-khan-shift-pakistan-s-brand-image/1307938" },
    { title: "Footprints: The Unknown Soldier", publication: "Dawn", date: "20/07/2018", link: "https://www.dawn.com/news/1421262/footprints-the-unknown-soldier" },
    { title: "Footprints: Iqbal's Enduring Legacy", publication: "Dawn", date: "20/04/2018", link: "https://www.dawn.com/news/1402706/footprints-iqbals-enduring-legacy"},
];

export default () => (
    <>
        {POSTS.map(({title, publication, date, link}) => (
            <div className='p-4 border-gray-400 rounded-md'>
                <a href={link} className='space-x-2 group'>
                    <span className='pb-4 italic text-gray-700 text-md group-hover:text-pink-600'>{title}</span>
                    <span className="font-thin text-gray-600">{publication}, {date}</span>
                </a>
            </div> 
        ))}
    </>
)