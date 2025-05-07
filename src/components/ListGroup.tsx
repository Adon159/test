function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Houston",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key ={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
// This code defines a functional component named `ListGroup` that returns a JSX element containing an `<h1>` header with the text "List Group". The `ListGroup` component is then exported as the default export of the module. This component can be imported and used in other parts of the application, similar to how the `Message` component was used in the previous example.
