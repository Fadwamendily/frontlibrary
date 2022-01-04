import React from 'react'
import { useContext, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { AuthContext } from "../context/AuthContext";
import BookItem from '../user/oderNewBook/abookItem'
import { selectbookListstatus } from '../../features/Books/bookSlice';
import {useSelector } from 'react-redux';
import { Row, Col } from 'antd';
export default () => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
/*     const { userDetails } = useSelector(selectuserdetails)
 */    const Books = useSelector(selectbookListstatus)
    return (<section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Books</h2>
                <h3 class="section-subheading text-muted">“There is no friend as loyal as a book.” ― Ernest Hemingway </h3>
            </div>
            <>
            <Layout style={{  height: "100%" , padding:0 , marginTop:'70px', display:'flex' }} >
                    <Content style={{ marginLeft: '20px' }} >
                        <div style={{ gridColumnGap: "50px", }} >
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
        </div>
    </section>)
}