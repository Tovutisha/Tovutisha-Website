
export default function Card({ title,content, image }) {
    const sliceContent = (content) => {
        if (content.length >= 500) {
            return content.slice(0,500)+ '...'
        }
        return content
    }
    return (
        <div className="w-full rounded-md my-2 md:my-4 border-2 border-gray-200 p-2 flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-4">
            <img src={image} alt={title+ "image"} className=" w-full max-h-[250px] md:max-w-[300px] object-cover" />
            <div className="md:flex-1 p-2">
                <h3 className="pb-2 font-semibold tracking-wide text-[#590000]/80">{title}</h3>
                <p>{ content}</p>
            </div>
        </div>
    )
}