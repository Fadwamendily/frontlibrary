import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, BookOutlined, OrderedListOutlined, StockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
export default function Readersidebar() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
/*     const [url, seturl] = useState('')
 */    return (
        <Sider className="site-layout-background" width={200}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title='My Profile'>
                    <Link to='/myprofile'><Menu.Item key="1">Update</Menu.Item></Link>
                </SubMenu>
                <SubMenu key="sub3" icon={<LaptopOutlined />} title="My Orders">
                    <Link to='/odernewbook'><Menu.Item key="2">Order a book</Menu.Item></Link>
                    <Link to='/myorderedbooks'><Menu.Item key="3">My Ordered books</Menu.Item></Link>
                </SubMenu>

            </Menu>
        </Sider>)}