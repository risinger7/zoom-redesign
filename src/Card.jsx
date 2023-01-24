
export default function Card(props) {

    const {icon, title} = props

    return (
        
        <div className="flex flex-col hover:bg-zoom-blue hover:text-white items-center p-6 border border-zoom-blue rounded-xl">
            {icon}
            <p className="font-open-sans font-bold text-center">{title}</p>
        </div>
    )
}