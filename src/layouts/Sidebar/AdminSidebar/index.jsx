import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,BookOutlined ,OrderedListOutlined,StockOutlined } from '@ant-design/icons';
export default function Adminsidebar() {
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
/*     const [url, seturl] = useState('')
 */    return (
        <Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >                  
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Subscribers">
                            <Menu.Item key="1"/* onClick={() => seturl('authors')} */>Authors</Menu.Item>
                            <Menu.Item key="2"/* onClick={() => seturl('libraries')} */>Libraries</Menu.Item>
                            <Menu.Item key="3"/* onClick={() => seturl('readers')} */>Readers</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<BookOutlined />} title="Books">
                            <Menu.Item key="5" /* onClick={() => seturl('pdfbooks')} */>PDF books</Menu.Item>
                            <Menu.Item key="6" /* onClick={() => seturl('printedbooks')} */>Printed books</Menu.Item>
                            <Menu.Item key="7" /* onClick={() => seturl('audiobooks')} */>Audio books</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<LaptopOutlined />} title="Orders">
                            <Menu.Item key="9"/* onClick={() => seturl('indelivery')} */>Orders in delivery</Menu.Item>
                            <Menu.Item key="10"/* onClick={() => seturl('delivered')} */>Orders delivered</Menu.Item>

                        </SubMenu>
                        <SubMenu key="sub4" icon={<StockOutlined />} title="Stocks">
                            <Menu.Item key="11"/* onClick={() => seturl('inStock')} */>Books in Stock</Menu.Item>
                            <Menu.Item key="12"/* onClick={() => seturl('outStock')} */>Books out stock</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>



                )




}








