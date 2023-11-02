import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-teal-500 flex flex-col gap-2 p-5 items-center overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-100 font-bold text-2xl">
                            Selamat datang di Gastritis Diagnosis
                        </div>

                        <div className="justify-center">
                            <Link href={route('diagnose')}>
                            <PrimaryButton>Mulai Diagnose</PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
