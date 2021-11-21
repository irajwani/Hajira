const PHOTOS = [
    {url: 'image0.jpeg', colspan: "1", rowspan: "1"},
    {url: 'image1.jpeg', colspan: "1", rowspan: "1"},
    {url: 'image2.jpeg', colspan: "1", rowspan: "1"},
    {url: 'image3.jpg', colspan: "1", rowspan: "1"},
    {url: 'image4.jpeg', colspan: "1", rowspan: "1"},
    {url: 'image5.jpg', colspan: "1", rowspan: "1"},
    {url: 'image6.jpeg', colspan: "1", rowspan: "1"},
    {url: 'image7.jpeg', colspan: "1", rowspan: "1"},
    {url: 'image8.jpeg', colspan: "1", rowspan: "1"},
    {url: 'image9.jpeg', colspan: "1", rowspan: "1"},
]

export default () => {
    return (
        <div>
            <div className="inline-grid justify-items-center grid-cols-1 md:grid-cols-3 gap-2">
                {PHOTOS.map(({url, colspan, rowspan}) => (
                    <img src={`/${url}`} alt="" className={`rounded-lg col-span-${colspan} row-span-${rowspan}`} />
                ))}
            </div>
        </div>
    )
}