
const CanteenCard = ( {canteenName, img} ) => {
    return (
        <div className="bg-slate-300 w-60 h-64 mt-3 mb-3 ml-10 rounded-lg shadow-lg relative">
            <img src={ img } alt="" />
            <h2 className="absolute bottom-2 left-2">{canteenName}</h2>
        </div>
    );
}

export default CanteenCard;
