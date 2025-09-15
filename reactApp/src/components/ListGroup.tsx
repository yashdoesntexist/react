function ListGroup() {
  let items = ["New York", "California", "Tokyo", "Vancouver", "London"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length == 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
