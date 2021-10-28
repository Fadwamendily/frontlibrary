import React, { useContext, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Adminsidebar from '../../../layouts/Sidebar/AdminSidebar';
import { AuthContext } from "../../context/AuthContext";
import Readersidebar from '../../../layouts/Sidebar/ReaderSidebar';
import Usersidebar from '../../../layouts/Sidebar/UserSidebar';
import BookItem from './abookItem'
import { getallbook, selectbookListstatus } from '../../../features/Books/bookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getme, selectuserdetails } from '../../../features/users/userSlice';

export default () => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
/*     const { userDetails } = useSelector(selectuserdetails)
 */    const Books = useSelector(selectbookListstatus)

    return (
        <>
            <Layout style={{ padding: 0, height: "300vh" }} >
                <Layout style={{ padding: '70px 0px' }} >
                    {user.role === "Admin" ? <Adminsidebar /> :
                        user.role === "Reader" ? <Readersidebar /> : <Usersidebar />}
                    <Content style={{ marginLeft: '20px' }} >
                        <div >
                            {
                                Books.map((o, i) => {
                                    return (
                                        <>
                                            {/* o.user._id === userDetails._id && */
                                                <BookItem book={o} />
                                            }
                                        </>
                                    )
                                })
                            }
                        </div>

                    </Content>
                </Layout>

            </Layout>
        </>
    )

}

