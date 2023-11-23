"use client";

import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';

export default function Diary() {
  const [judul, setJudul] = useState([]);
  const [isiDiary, setIsiDiary] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  const endpointAPI = "https://6555c4c184b36e3a431e4a9e.mockapi.io/diaryku";

  async function getDiary() {
    try {
      const res = await axios.get(endpointAPI);
      const data = res.data;

      //ambil judul
      const judul = data.map((item) => item.judul);
      setJudul(judul);

      //ambil isi_diary
      const isi_diary = data.map((item) => item.isi_diary);
      setIsiDiary(isi_diary);

      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false); // Set loading to false in case of an error
    }
  }

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div>
      {isLoading ? ( // Check loading state
        "API is loading"
      ) : judul.length > 0 ? (
        <ul>
          {judul.map((item, idx) => (
            <Link href={`/diary/${item}/${isiDiary[idx]}`}>

            <li key={idx}> {/* Add key prop for list items */}
            
              <div className={`diary-container ${idx === judul.length -1? 'last-item' : ''}`}>
                <h1>{judul[idx]}</h1>
                <p className="p-diary">{isiDiary[idx]}</p>
              </div>
            </li>

            </Link> 
          ))}
        </ul>
      ) : (
        "API not loading"
      )}
    </div>
  );
}
