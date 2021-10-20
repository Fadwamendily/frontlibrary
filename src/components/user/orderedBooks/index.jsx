import React, { useContext } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Adminsidebar from '../../../layouts/Sidebar/AdminSidebar';
import { AuthContext } from "../../context/AuthContext";

import Readersidebar from '../../../layouts/Sidebar/ReaderSidebar';
import Usersidebar from '../../../layouts/Sidebar/UserSidebar';

export default () => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
/*     const { url } = useContext(Adminsidebar, UserSidebar)
 */    return (
        <>
            <Layout style={{ padding: 0, height: "100vh" }} >
                <Layout style={{ padding: '70px 0px' }} >
                    {user.role === "Admin" ? <Adminsidebar /> :
                        user.role === "Reader" ? <Readersidebar /> : <Usersidebar />}
                    <Content style={{ marginLeft: '20px' }} >
                        ordered books
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>





    )
}