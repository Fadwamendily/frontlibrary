import React, { useContext } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { AuthContext } from "../../components/context/AuthContext";
import Usersidebar from '../../layouts/Sidebar/UserSidebar';
import Adminsidebar from '../../layouts/Sidebar/AdminSidebar';
import abc from "../../components/assets/images/adc.jpg"
import Readersidebar from '../../layouts/Sidebar/ReaderSidebar';

export default () => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
    return (
        <>
            <Layout style={{ padding: 0, height: "100%" }} >
                <Layout style={{ padding: '70px 0px' }} >
                    {user.role === "Admin" ? <Adminsidebar /> : 
                    user.role === "Reader" ?<Readersidebar />: <Usersidebar />}
                    <Content style={{ marginLeft: '20px' }} >
                    <img src={abc} alt="" style={{ height:'900px',	width: "100%",backgroundRepeat: "no-repeat " }}  />
                    </Content>
                </Layout>
            </Layout>
        </>





    )
}