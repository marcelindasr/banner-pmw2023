"use client"
import "@styles/diary.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Diary() {
  const [getJudul, setGetJudul] = useState([]);
  const [getIsiDiary, setGetIsiDiary] = useState([]);
  const [getKoleksiData, setGetKoleksiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Tambahkan state isLoading

  const endpointAPI = "https://6555c4c184b36e3a431e4a9e.mockapi.io/diaryku";

  async function getDiary() {
    setIsLoading(true); // Atur isLoading menjadi true saat mengambil data
    try {
      const res = await axios.get(endpointAPI);
      const dataJSON = res.data;

      setGetKoleksiData(dataJSON);

      const judul = dataJSON.map((item) => item.judul);
      setGetJudul(judul);

      const isi_diary = dataJSON.map((item) => item.isi_diary);
      setGetIsiDiary(isi_diary);

      setIsLoading(false); // Atur isLoading menjadi false setelah data berhasil diambil
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false); // Atur isLoading menjadi false dalam kasus error
    }
  }

  async function postDiary() {
    const updatedDiary = [
      ...getKoleksiData,
      { judul: postTulisJudul, isi_diary: postTulisDiary },
    ];

    setGetKoleksiData(updatedDiary);
    setPostTulisJudul("");
    setPostTulisDiary("");

    try {
      const res = await axios.post(endpointAPI, {
        judul: postTulisJudul,
        isi_diary: postTulisDiary,
      });

      if (res.status >= 200 && res.status < 300) {
        getDiary();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      alert("Failed to post data: " + error);
    }
  }

  const [postTulisJudul, setPostTulisJudul] = useState("");
  const [postTulisDiary, setPostTulisDiary] = useState("");

  const handleInputJudul = (event) => {
    setPostTulisJudul(event.target.value);
  };

  const handleInputIsiDiary = (event) => {
    setPostTulisDiary(event.target.value);
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      postDiary();
    }
  };

  useEffect(() => {
    getDiary();
  }, []);

  return (
    <div>
      {/* Bagian POST DIARY */}
      <div className="banner-container">
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <input
            name="input-judul"
            type="text"
            placeholder="Tuliskan judulmu.."
            onChange={handleInputJudul}
            onKeyDown={handleKeyEnter}
            value={postTulisJudul}
          />
          <input
            name="input-diary"
            type="text"
            placeholder="Tuliskan isi diarymu.."
            onChange={handleInputIsiDiary}
            onKeyDown={handleKeyEnter}
            value={postTulisDiary}
          />
          {postTulisJudul && postTulisDiary ? (
            <div className="cta-button" onClick={postDiary}>
              <p>Submit Diary</p>
            </div>
          ) : (
            <div
              className="cta-button disabled"
              onClick={() => alert("Isi terlebih dahulu!")}
            >
              <p>Disabled</p>
            </div>
          )}
        </div>
      </div>

      {/* Bagian MAP LIST DIARY */}
      {isLoading ? (
        "API is loading"
      ) : getKoleksiData.length > 0 ? (
        <ul>
          {getJudul.map((item, idx) => (
            <Link key={idx} href={`/diary/${item}/${getIsiDiary[idx]}`}>
              <li key={idx}>
                <div
                  className={`diary-container ${
                    idx === getJudul.length - 1 ? "last-item" : ""
                  }`}
                >
                  <h1>{getJudul[idx]}</h1>
                  <p className="p-diary">{getIsiDiary[idx]}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        "API is not loading"
      )}
    </div>
  );
}
