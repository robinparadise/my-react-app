import { useState, useEffect, useRef } from 'react';

const products = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honey'
]

function Buscador() {
  const ref = useRef();
  const [termino, setTermino] = useState('');
  const [resultado, setResultado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [items, setItems] = useState([])

  useEffect(() => {
    if (termino === '') {
      setResultado(null);
      return;
    }

    setResultado(`Resultados para "${termino}"`);
    setItems(products.filter(product => product.toLowerCase().includes(termino)))
  }, [termino]);

  const openModal = () => {
    ref.current.showModal()
  }
  const closeModal = () => {
    ref.current.close()
  }
  return (
    <div>
      <button onClick={openModal}>🔍</button>
      <dialog id="search" ref={ref}>
        <button onClick={closeModal}>🗙 </button>
        <input
          type="text"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
          placeholder="Escribe algo para buscar"
        />
        {cargando && <p>Cargando...</p>}
        {resultado && <p>{resultado}</p>}
        <ul>
          {items.map(item => (
            <li><a href="#">{item}</a></li>
          ))}
        </ul>
      </dialog>
    </div>
  );
}

export default Buscador;
