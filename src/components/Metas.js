import React, { useState } from 'react';
import styles from './Metas';

const Metas = () => {
  const [nuevaMeta, setNuevaMeta] = useState('');
  const [metas, setMetas] = useState([]);
  const [metasCompletadas, setMetasCompletadas] = useState(0);

  const agregarMeta = () => {
    if (nuevaMeta.trim() !== '') {
      setMetas([...metas, { texto: nuevaMeta, completada: false }]);
      setNuevaMeta('');
    }
  };

  const actualizarMeta = (index) => {
    const nuevasMetas = [...metas];
    nuevasMetas[index].completada = !nuevasMetas[index].completada;
    setMetas(nuevasMetas);

    if (nuevasMetas[index].completada) {
      setMetasCompletadas(metasCompletadas + 1);
    } else {
      setMetasCompletadas(metasCompletadas - 1);
    }
  };

  const contadorMetasPendientes = metas.filter((meta) => !meta.completada).length;

  return (
    <div>
      <h1>Mis metas</h1>
      <input
        type="text"
        value={nuevaMeta}
        onChange={(e) => setNuevaMeta(e.target.value)}
      />
      <button onClick={agregarMeta}>Agregar meta</button>
      <ul>
        {metas.map((meta, index) => (
          <li key={index} onClick={() => actualizarMeta(index)} style={{ textDecoration: meta.completada ? 'line-through' : 'none' }}>
            {meta.texto}
          </li>
        ))}
      </ul>
      <p>Metas completadas: {metasCompletadas}</p>
      <p>Metas pendientes: {contadorMetasPendientes}</p>
    </div>
  );
};

export default Metas;
 
