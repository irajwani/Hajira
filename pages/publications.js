const POSTS = [
    {title: "A herder becomes a ranger to save the snow leopard in the Himalayas", publication: "TRT World", date: "7 June '21", link: "https://www.trtworld.com/magazine/a-herder-becomes-a-ranger-to-save-the-snow-leopard-in-the-himalayas-47323"}
];

export default () => (
    <>
        {POSTS.map(({title, publication, date, link}) => (
            <div className='p-4 border-gray-400 rounded-md'>
                <a href={link} className='space-x-2 group'>
                    <span className='pb-4 italic text-gray-700 text-md group-hover:text-pink-600'>{title}</span>
                    <span className="font-thin text-gray-500">{publication}, {date}</span>
                </a>
            </div> 
        ))}
    </>
)