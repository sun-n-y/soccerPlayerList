import Player from './Player';

const List = ({ players }) => {
  return (
    <div className="person-container">
      {players.map((person) => {
        return <Player {...person} key={person.id} />;
      })}
    </div>
  );
};
export default List;
