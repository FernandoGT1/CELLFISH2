export default function Card({imagen}){
    return(
        <div className="flex flex-row h-40 p-4 rounded-2xl" style={{background:`url(${imagen})`, backgroundSize: `cover`}}>

        </div>
    )
}