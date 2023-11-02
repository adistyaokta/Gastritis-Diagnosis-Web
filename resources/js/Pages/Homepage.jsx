import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="flex flex-col items-center min-h-screen bg-teal-800 text-white text-2xl">
            <Head title={props.title} />
            <p>{props.description}</p>
            {props.gejala ? (
                <table className="border-collapse border border-white mt-4">
                    <thead>
                        <tr>
                            <th className="border border-white p-2">Kode Gejala</th>
                            <th className="border border-white p-2">Nama Gejala</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.gejala.map((data, i) => (
                            <tr key={i}>
                                <td className="border border-white p-2">{data.kode_gejala}</td>
                                <td className="border border-white p-2">{data.nama_gejala}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : ""}
        </div>
    )
}
