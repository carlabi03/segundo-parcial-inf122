import React, { useState } from 'react';
import styles from './button';

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


