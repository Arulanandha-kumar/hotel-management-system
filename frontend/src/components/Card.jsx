const Card = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <h2 className="text-3xl text-black font-bold mt-2" style={color={color}}>
        {value}
      </h2>
    </div>
  );
};

export default Card;