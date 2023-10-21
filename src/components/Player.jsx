const Player = ({ number, name, image }) => {
  return (
    <div className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>jersey number: {number}</p>
      </div>
    </div>
  );
};
export default Player;
