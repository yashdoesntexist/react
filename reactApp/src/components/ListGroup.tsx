function ListGroup() {
  const items = ["New York", "California", "Tokyo", "Vancouver", "London"];
  // const message = items.length == 0 ? <p>No items found</p> : null;

  const getMessage = () => {
    return items.length == 0 && <p>No items found</p>;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
