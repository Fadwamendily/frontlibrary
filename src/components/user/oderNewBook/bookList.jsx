import React, { useContext, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Adminsidebar from '../../../layouts/Sidebar/AdminSidebar';
import { AuthContext } from "../../context/AuthContext";
import Readersidebar from '../../../layouts/Sidebar/ReaderSidebar';
import Usersidebar from '../../../layouts/Sidebar/UserSidebar';
import BookItem from './abookItem'
import { selectbookListstatus } from '../../../features/Books/bookSlice';
import {useSelector } from 'react-redux';
import { Row, Col } from 'antd';

export default () => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
/*     const { userDetails } = useSelector(selectuserdetails)
 */    const Books = useSelector(selectbookListstatus)

    return (
        <>
            <Layout style={{  height: "100%" , padding:0 , marginTop:'70px' }} >
             
                    {user.role === "Admin" ? <Adminsidebar /> :
                        user.role === "Reader" ? <Readersidebar /> : <Usersidebar />}
                    <Content style={{ marginLeft: '20px' }} >
                        <div style={{ gridColumnGap: "50px", justifyContent: '' }} >
                            <Row>
                                {
                                    Books.map((o, i) => {
                                        return (

                                            <Col span={8}>
                                                <BookItem book={o} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>

                        </div>

                    </Content>
            

            </Layout>
        </>
    )

}

