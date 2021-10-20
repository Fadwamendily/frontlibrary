import React, { useContext } from 'react'
import PDF from '../../assets/images/pdf.png'
import Printed from '../../assets/images/printed.png'
import Audio from '../../assets/images/audiobooks.png'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Adminsidebar from '../../../layouts/Sidebar/AdminSidebar';
import Usersidebar from '../../../layouts/Sidebar/UserSidebar';
import { AuthContext } from "../../context/AuthContext";
import Readersidebar from '../../../layouts/Sidebar/ReaderSidebar';
import '../../assets/css/book.css'
import 'antd/dist/antd.css';

import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    Radio,
    Cascader,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';

const { TextArea } = Input;
const { Option } = Select;

export default () => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
/*     const { url } = useContext(Adminsidebar, UserSidebar)
 */    return (
        <>
            <Layout style={{ padding: 0, height: "200vh" }} >
                <Layout style={{ padding: '70px 0px' }} >
                    {user.role === "Admin" ? <Adminsidebar /> :
                        user.role === "Reader" ? <Readersidebar /> : <Usersidebar />}
                    <Content style={{ marginTop: '100px', marginLeft: '60px' }} >
                        <Form name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            /*     onFinish={onFinish}
                                onFinishFailed={onFinishFailed} */
                            autoComplete="off"
                        /*  style= {{backgroundImage:`url(${abc})`}} */
                        >

                            <Form.Item name='title' label="Title">
                                <Input />
                            </Form.Item>
                            <Form.Item name='price' label="Price">
                                <Input />
                            </Form.Item>
                            <Form.Item name='publicationDate' label="Publication Date">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item name='file' label="File"style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}> 

                                <div className='actors' style={{ display: "flex", flexWrap: 'nowrap' }} >

                                    <div >
                                        <div className="Author">
                                            <img /* onClick={() => setrole('Author')}  */ src={PDF} alt="" align="center" />
                                            <h4>PDF</h4>
                                        </div>
                                    </div>
                                    <div   >
                                        <div className="Author">
                                            <img /* onClick={() => setrole('Reader')} */ src={Printed} alt="" align="left" />
                                            <h4>Printed</h4>
                                        </div>
                                    </div>
                                    <div  >
                                        <div className="Author">
                                            <img /* onClick={() => setrole('Library')} */ src={Audio} alt="" align="right" />
                                            <h4>Audio</h4>
                                        </div>
                                    </div>

                                </div>




                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>





    )
}