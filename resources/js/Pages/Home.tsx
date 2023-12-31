import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import MetaDocs from '@/Components/global/MetaDocs';

export default function Home({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Metadocs editor de texto colaborativo</h2>}
        >
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Voce esta logado</div>
                        <MetaDocs/>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
