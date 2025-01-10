import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { TemaContext } from './TemaProvider';
import Cuadro from './Cuadro';

export default function Home() {
  const { estaAutenticado } = useContext(AuthContext);
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const { tema } = useContext(TemaContext);

  return (
    <div class="border-1px" style={{
      color: tema === 'light' ? 'black' : 'white',
      backgroundColor: tema !== 'light' ? 'black' : 'white',
    }}>
      <h1>Home {tema}</h1>

      {estaAutenticado ? (
        <p>
          ¡Estás autenticado!{' '}
          <button onClick={() => navigate('/dashboard')}>Ir al Panel</button>
        </p>
      ) : (
        <p>
          No estás autenticado.{' '}
          <button onClick={() => navigate('/login')}>Ir a Iniciar Sesión</button>
        </p>
      )}

      <Cuadro titulo="Información importante">
        <p>Este es el contenido del <b>cuadro</b>.</p>
      </Cuadro>
    </div>
  );
}