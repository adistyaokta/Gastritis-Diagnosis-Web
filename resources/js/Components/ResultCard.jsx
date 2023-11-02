import React, { useEffect, useState } from "react";
import DangerButton from "./DangerButton";

const ResultCard = ({ result, selectedSymptoms }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="flex flex-col items-center gap-5 rounded-md">
            <h2 className="text-3xl font-bold">Hasil Diagnosis</h2>
            <div className="bg-white w-full h-20 shadow-md justify-center items-center flex rounded-md">
                <p className="text-2xl animate-fade animate-duration-[3000ms]">
                    {result ? result : "Tidak Ada Penyakit"}
                </p>
            </div>
            <div className="bg-white w-full h-auto rounded-md flex flex-col gap-3 p-2 shadow-md justify-center items-center">
                <p className="text-xl font-semibold m-2">Gejala yang dipilih</p>
                {selectedSymptoms.length > 0 ? (
                    <ul className=" p-5 grid grid-cols md:grid-cols-3 gap-5 text-lg text-justify">
                        {selectedSymptoms.map((symptom, index) => (
                            <li
                                className={`mx-5 ${
                                    animate ? "animate-fade-right" : ""
                                }`}
                                key={index}
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                }}
                            >
                                {symptom.nama_gejala}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-lg m-2">Tidak ada gejala yang dipilih</p>
                )}
            </div>
        </div>
    );
};

export default ResultCard;
