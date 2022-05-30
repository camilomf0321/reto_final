// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYELl_tokNrrZ6doa0ubd55jFjWOlaK5M",
  authDomain: "fazt-crud-fb-b2f34.firebaseapp.com",
  projectId: "fazt-crud-fb-b2f34",
  storageBucket: "fazt-crud-fb-b2f34.appspot.com",
  messagingSenderId: "859405626299",
  appId: "1:859405626299:web:a9160ea89b69c3432df29e",
  measurementId: "G-YWQXJCXFVJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Guardar nuevo estudiante
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));


// CLASES

/**
 * Guardar nueva clase
 * @param {string} titulo the title of the class
 * @param {string} descripcion the description of the class
 */

export const saveClass = (titulo, descripcion) =>
    addDoc(collection(db, "clases"), {titulo, descripcion});

export const onGetClasses = (callback) =>
    onSnapshot(collection(db, "clases"), callback);

/**
 *
 * @param {string} id Task ID
 */    

export const deleteClass = (id) => deleteDoc(doc(db, "clases", id));

export const getClass = (id) => getDoc(doc(db, "clases", id));

export const updateClass = (id, newFields) =>
    updateDoc(doc(db, "clases", id), newFields);

export const getclases = () => getDocs(collection(db, "clases"));
