function Cuadro({ titulo, children }) {
  return (
    <div className="cuadro" style={{border: '1px solid'}}>
      <h2>{titulo}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Cuadro;