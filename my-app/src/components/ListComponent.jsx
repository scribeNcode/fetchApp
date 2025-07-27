import "./ListComponent.css"
const ListComponent = ({ items }) => {
  if (!items.length) return <p>No items to display.</p>;

  return (
    <ol className="userWrapper">
      {items.map((user) => (
        <li className="eachList" key={user.id}>
        <strong>{user.name}</strong>
        <div>{user.username}</div>
        </li>

      ))}
    </ol>
  );
};

export default ListComponent;

