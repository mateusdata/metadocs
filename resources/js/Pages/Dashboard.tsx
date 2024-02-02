import AuthenticatedLayout2 from '@/Layouts/AuthenticatedLayout2';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { ArrowDownOutlined, FileAddFilled, FileAddOutlined, FileAddTwoTone, FileExclamationTwoTone, FilePdfOutlined, FilePptFilled, OrderedListOutlined } from '@ant-design/icons';
import { Card, Col, Row, Tooltip } from 'antd';
import axios from 'axios';
import {router} from "@inertiajs/react"
import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalContext';
export default function Home({ auth }: PageProps) {
    const {currentUser, SetCurrentUser} = useContext(GlobalContext);

    const createNewDocs = () => {

        axios.get(`create-doc/${auth.user.id}`)
            .then((response) => {
                //console.log(response.data);
                alert("Documento criado ")
                localStorage.setItem("currentUser", JSON.stringify({doc_usu: response.data.doc_usu, docId:response.data.doc_id}))
                SetCurrentUser( {doc_uso: response.data.doc_usu, docId:response.data.doc_id})
                window.location.href = '/documento';

            })
            .catch((error) => {
                console.error(error);
                alert("erro ao crirar o ducumento")
            });
    }



    return (
        <AuthenticatedLayout2
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Metadocs editor de texto colaborativo</h2>}
        >
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex justify-between items-start">
                            <div className='flex flex-col w-full'>
                                <div className='flex flex-col justify-center  gap-3 items-center'>
                                    <FileAddTwoTone  onClick={createNewDocs} className='cursor-pointer' style={{ fontSize: 85, color: "#3172ea" }} />
                                    <button className='text-center'>Documento em branco</button>
                                </div>
                                <div className='flex flex-col justify-start  w-full gap-3 items-start mt-5'>

                                    <button className='text-center'>Documentos recentes <ArrowDownOutlined style={{ fontSize: 20, color: "#3172ea" }} />   </button>
                                </div>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <Card title="Card title" bordered={false}>
                                            Card content
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Card title" bordered={false}>
                                            Card content
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card title="Card title" bordered={false}>
                                            Card content
                                        </Card>
                                    </Col>
                                </Row>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout2>
    );
}

