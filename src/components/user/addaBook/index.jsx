import React, { useContext, useState } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Adminsidebar from '../../../layouts/Sidebar/AdminSidebar';
import Usersidebar from '../../../layouts/Sidebar/UserSidebar';
import { AuthContext } from "../../context/AuthContext";
import Readersidebar from '../../../layouts/Sidebar/ReaderSidebar';
import '../../assets/css/book.css'
import 'antd/dist/antd.css';
import { message } from 'antd';
import { selectcategoriesname } from '../../../features/categories/categoriesSlice';
import { selectlanguagesname } from '../../../features/Languages/languagesSlice';
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
    Modal
} from 'antd';
import { useSelector } from 'react-redux';

const { TextArea } = Input;
const { Option } = Select;

export default () => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
    const languages = useSelector(selectlanguagesname)
    const categories = useSelector(selectcategoriesname)
    const [isModalVisible, setIsModalVisible] = useState(false);
  /*   const handletype = (value) => {
        if (value === 'audio'  === 'pdf') {
            showModal()
        }
    } */

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <>
            <Layout style={{ padding: 0, height: "200vh" }} >
                <Layout style={{ padding: '70px 0px' }} >
                    {user.role === "Admin" ? <Adminsidebar /> :
                        user.role === "Reader" ? <Readersidebar /> : <Usersidebar />}
                    <Content style={{ marginTop: '50px', marginLeft: '00px' }} >
                        <Form name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 12,
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
                            <Form.Item name='category' label="Category">
                                <Select>
                                    {
                                        categories.map((c, i) => {
                                            return (
                                                <Select.Option value={c._id}>{c}</Select.Option>

                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item name='language' label="Language">
                                <Select>
                                    {
                                        languages.map((c, i) => {
                                            return (
                                                <Select.Option value={c._id}>{c}</Select.Option>

                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item name='image' label="Image">
                                <input type="file" multiple />
                            </Form.Item>

                            <Form.Item name='file' label="Files">
                                <Button type="primary" onClick={showModal}>
                                Create 
                                </Button>
                                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                                    <Form.Item name='type' label="Type" >
                                        <Select span="6">
                                            <Select.Option value="pdf" >PDF</Select.Option>
                                            <Select.Option value="audio">Audio</Select.Option>
                                            <Select.Option value="printed" >Printed</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name='name' label="File title" >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name='file' label="Files" >
                                        <input type="file" multiple />
                                    </Form.Item>
                                </Modal>
                            </Form.Item>
            
                        </Form>  

                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>





    )
}