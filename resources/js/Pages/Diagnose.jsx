import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import QuestionCard from "@/Components/QuestionCard";
import * as groups from "../Utils/helper";
import ResultCard from "@/Components/ResultCard";
import DangerButton from "@/Components/DangerButton";

export default function Diagnose(props) {
    const { auth, gejala, kode_gejala } = props;
    const dataGejala = gejala.gejala;

    const [currentGejalaIndex, setCurrentGejalaIndex] = useState(0);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(2);
    const [result, setResult] = useState("");

    const { groupBreak, ...groupKodeGejala } = groups;
    const allGroups = Object.values(groupKodeGejala);

    const currentGejalaGroup = dataGejala.filter((gejala) =>
        allGroups[currentGroupIndex].includes(gejala.kode_gejala)
    );

    const currentGejala = currentGejalaGroup[currentGejalaIndex];

    const handleButtonClick = (rule) => {
        currentGejala.rule_gejala = rule;
        setSelectedSymptoms([...selectedSymptoms, currentGejala]);

        const delayTime = 500;

        setTimeout(() => {
            setCurrentGejalaIndex(currentGejalaIndex + 1);

            if (rule === 1 && ["G09", "G15", "G19", "G20"].includes(currentGejala.kode_gejala)) {
                setResult(
                    currentGejala.kode_gejala === "G09" ? "Kanker Lambung" :
                    currentGejala.kode_gejala === "G15" ? "Gerd" :
                    currentGejala.kode_gejala === "G19" ? "Dispepsia" : "Tukak Lambung"
                );
            }

            if (currentGejala.kode_gejala === "G08" && rule === 0) {
                setCurrentGejalaIndex(19);
                setResult("Gastroparesis");
            } else if (groupBreak.includes(currentGejala.kode_gejala) && rule === 0) {
                setCurrentGejalaIndex(19);
            }

            if (["G02", "G05", "G06"].includes(currentGejala.kode_gejala) && rule === 0) {
                setCurrentGroupIndex({
                    G02: 1,
                    G05: 0,
                    G06: 4
                }[currentGejala.kode_gejala]);
                setCurrentGejalaIndex(currentGejalaIndex);
            }
        }, delayTime);
    };

    const resetDiagnosis = () => {
        // Reset the state variables to their initial values
        setCurrentGejalaIndex(0);
        setSelectedSymptoms([]);
        setCurrentGroupIndex(2);
        setResult("");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Diagnose
                </h2>
            }
        >
            <Head title="Diagnose" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-teal-400 p-5 text-center rounded-md ">
                        {currentGejalaIndex < currentGejalaGroup.length ? (
                            <QuestionCard
                                nama_gejala={currentGejala.nama_gejala}
                                kode_gejala={currentGejala.kode_gejala}
                                rule_gejala={currentGejala.rule_gejala}
                                onYesClick={() => handleButtonClick(1)}
                                onNoClick={() => handleButtonClick(0)}
                            />
                        ) : (
                            <ResultCard
                                result={result}
                                selectedSymptoms={selectedSymptoms.filter(symptom => symptom.rule_gejala === 1)}
                            />
                        )}
                        {currentGejalaIndex >= currentGejalaGroup.length && (
                            <DangerButton
                                className="m-5"
                                onClick={resetDiagnosis}
                            >
                                Reset Diagnosis
                            </DangerButton>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
