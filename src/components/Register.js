import React, { useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import AuthService from './services/AuthService';
import Author from './assets/images/author.png'
import Reader from './assets/images/reader.png'
import Library from './assets/images/library.png'
import './../components/assets/css/register.css'
import 'antd/dist/antd.css';
import abc from '../../src/components/assets/images/abc.png'
import '../views/Login/login.css'
import moment from 'moment'

import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
} from 'antd';

export default function Register(props) {
    const [role, setrole] = useState('');
    const { setUser, setIsAuth } = useContext(AuthContext);

    return (
     
       <div>
        <div className='registerform' >
            {role === '' &&
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center'}} >
                    <div  >
                        <span className='spanf' style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}  >
                            Are you ?
                        </span>
                    </div>
                    <div className='actors' style={{ display: "flex", flexWrap: 'nowrap' }} >

                        <div >
                            <div className="Author">
                                <img onClick={() => setrole('Entreprise')} src={Author} alt="" align="center" />
                                <h4>Entreprise</h4>
                            </div>
                        </div>
                        <div   >
                            <div className="Author">
                                <img onClick={() => setrole('Freelancer')} src={Reader} alt="" align="left" />
                                <h4>Freelancer</h4>
                            </div>
                        </div>
                    </div>

                </div>}
            {
                (role === 'Library' || role === 'Reader' || role === 'Author') && <>
                  <div>   <img src={abc} alt="" align="left" style={{width: "700px" , height:"500px" }} /> </div> 
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
                    
                    autoComplete="off"
                  /*  style= {{backgroundImage:`url(${abc})`}} */
                   >

                    <Form.Item name='firstName'  label="First Name">
                        <Input />
                    </Form.Item>
                    <Form.Item name='lastName'  label="Last Name">
                        <Input />
                    </Form.Item>
                    <Form.Item name='email' label="Email">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm password"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name='adresse' label="Adresse">
                        <Input />
                    </Form.Item>
                    <Form.Item name='gender' label="Gender">
                        <Select>
                            <Select.Option value="Male">Male</Select.Option>
                            <Select.Option value="Female">Female</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name='gender'label="Register Now" style={{align:"right"}}>
                        <Button type="primary" htmlType="submit" style={{align:"right", background:"orange"}}> Submit</Button>
                    </Form.Item>
                </Form>
                </>

            }
        </div>
        </div> 

    )


}
