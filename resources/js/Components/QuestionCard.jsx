import React from "react";
import PrimaryButton from "./PrimaryButton";

const QuestionCard = ({ nama_gejala, kode_gejala,rule_gejala, onYesClick, onNoClick }) => {
    return (
        <div className="flex flex-col items-center gap-2 rounded-md">
            <h1 className="">
                Apakah anda merasakan {nama_gejala.toLowerCase()} ({kode_gejala})?
            </h1>
            <PrimaryButton
                className="w-1/4 justify-center"
                onClick={onYesClick}
            >
                ya
            </PrimaryButton>
            <PrimaryButton
                className="w-1/4 justify-center "
                onClick={onNoClick}
            >
                tidak
            </PrimaryButton>
        </div>
    );
};

export default QuestionCard;
