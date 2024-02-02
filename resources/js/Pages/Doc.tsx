import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import MetaDocs from '@/Components/global/MetaDocs';
import { FilePdfOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useContext, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import html2pdf from 'html2pdf.js';
import { GlobalContext } from '@/context/GlobalContext';
export default function Home({ auth }: PageProps) {
    const [value, setValue] = useState('');
  const {currentUser, SetCurrentUser} = useContext(GlobalContext);
     const saveDocument = () => {
        const opt = {
          margin:       1,
          filename:     'myfile.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
    
        // New Promise-based usage:
        html2pdf().set(opt).from(value).save();
      };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Metadocs  editor de texto colaborativo</h2>}
        >
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex justify-between items-start">

                            <span>Editor de texto</span>
                            <Tooltip placement="top" title={"Dowload PDF"} color='red'>
                            <button onClick={saveDocument} className='hover:shadow-2xl  hover:rounded-md hover:bg-red-100  '> 
                            <FilePdfOutlined className='animate-bounce' style={{ fontSize: '28px', color: 'red' }}
                            /></button>
                            </Tooltip>

                        </div>
                        <MetaDocs currentUser={currentUser} value={value} setValue={setValue} />
                      
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

