const ListComponent = ({ items }) => {
  if (!items.length) return <p>No items to display.</p>;

  return (
    <div>
      {items.map((user) => (
        <ul key={user.id}>
        <li><h1>{user.name}</h1></li>
        <li><p>{user.username}</p></li>
        </ul>

      ))}
    </div>
  );
};

export default ListComponent;

