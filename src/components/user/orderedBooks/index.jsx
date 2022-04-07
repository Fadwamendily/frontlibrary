import React, { useContext } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Adminsidebar from '../../../layouts/Sidebar/AdminSidebar';
import { AuthContext } from "../../context/AuthContext";
import styles from './order.css'
import Readersidebar from '../../../layouts/Sidebar/ReaderSidebar';
import Usersidebar from '../../../layouts/Sidebar/UserSidebar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, selectorderedbooks } from '../../../features/Books/bookSlice';

export default (total, createOrder) => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
       const orderedBooks = useSelector(selectorderedbooks)
       console.log(orderedBooks);
      const dispatch= useDispatch()
    /*     const { url } = useContext(Adminsidebar, UserSidebar)
 */  
const deleteItem = () =>{
    dispatch(reset())

}

    return (
        <>
            <Layout style={{ padding: 0, height: "100vh" }} >
                <Layout style={{ padding: '70px 0px' }} >
                    {user.role === "Admin" ? <Adminsidebar /> :
                        user.role === "Reader" ? <Readersidebar /> : <Usersidebar />}
                    <Content style={{ marginLeft: '20px' }} >
                       <pre> {orderedBooks.length}</pre>

                       <button onClick={deleteItem}>click me plz to reset</button>

                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>





    )
}