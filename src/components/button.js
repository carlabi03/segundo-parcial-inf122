import React, { useState } from 'react';
import styles from './button;

const button = document.getElementById('button');
const myList = document.getElementById('myList');

let itemId = 0;

button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.id = `item${itemId}`;
    listItem.textContent = `Elemento ${itemId}`;
    myList.appendChild(listItem);
    itemId++;
});




















    /*<div className={button}>
      <button onClick={agregarMeta} className={button}>AgregarMeta</button>
      <ul>
        {metas((meta) => (
          <li onClick={() => actualizarMeta(NuevaLista))} style={{ textDecoration: metacompletada ? 'line-through' : 'none' }}>
            {meta.texto}
          </li>
        ))}
      </ul>
      <p className={styles.completadas}>completadas: {Completadas}</p>
      <p className={styles.pendientes}>pendientes: {Pendientes}</p>
    </div>
  );
};
*/
