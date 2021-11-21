const POSTS = [
    {title: "A herder becomes a ranger to save the snow leopard in the Himalayas", publication: "TRT World", date: "7 June '21", link: "https://www.trtworld.com/magazine/a-herder-becomes-a-ranger-to-save-the-snow-leopard-in-the-himalayas-47323"}
];

export default () => (
    <div className="flex w-full items-center">
        {POSTS.map(({title, publication, date, link}) => (
            <div className='p-4 rounded-md border-gray-400'>
            <a href={link} className='divide-y-2 divide-solid divide-gray-400'>
                <h3 className='text-2xl italic pb-4'>{title}</h3>
                <p className="pt-4 text-gray-500 font-thin">{publication}, {date}</p>
            </a>
            </div> 
        ))}
    </div>
)