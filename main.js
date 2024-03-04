import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyATgcvem8XVd_Au44mcR2FKjKctx1MmZsQ",
    authDomain: "produl.firebaseapp.com",
    projectId: "produl",
    storageBucket: "produl.appspot.com",
    messagingSenderId: "77023582951",
    appId: "1:77023582951:web:5fd60105e5b08cda366042",
    measurementId: "G-G6X2VN52QK"
  };

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarProduk() {
  const refDokumen = collection(db, "produk");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      Nama: dok.data().Nama,
      Alamat: dok.data(). Alamat,
      Notlpn: dok.data().Notlpn,
    });
  });
  
  return hasil;
}

export function formatAngka(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export async function tambahPembeli(Nama, Alamat, Notlpon) {
  try {
    const dokRef = await addDoc(collection(db, 'produk'), {
      Nama: Nama,
      Alamat: Alamat,
      Notlpn: Notlpn
    });
    console.log('Berhasil menambah Pembeli' + dokRef.id);
  } catch (e) {
    console.log('Gagal menambah Pembeli' + e);
  }
}