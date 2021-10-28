import React, { useContext, useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Adminsidebar from '../../../layouts/Sidebar/AdminSidebar';
import Usersidebar from '../../../layouts/Sidebar/UserSidebar';
import { AuthContext } from "../../context/AuthContext";
import Readersidebar from '../../../layouts/Sidebar/ReaderSidebar';
import './profile.css'
import moment from 'moment'
import { CameraOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { getme, uploadavatar, updateuser, selectuserdetails, selectavatarstatus } from '../../../features/users/userSlice';
import { useDispatch } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
export default () => {
    const { Content, Footer } = Layout;

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getme())
    }, [])

    const { user } = useContext(AuthContext)
    const userdetails = useSelector(selectuserdetails)

    const [userDetails, setuserDetails] = useState(userdetails)
    const [disabled, setdisabled] = useState(true)

    /*   useEffect(() => {
          dispatch(getme())
          setuserDetails(newuser)
      }, [avstatus]) */
    /*  const onFinish = (values) => {
         console.log('Received values of form: ', values);
         dispatch(updateuser(values))
     };
  */
       const handleChange = e => {
           const { name, value } = e.target;
           setuserDetails(prevState => ({
               ...prevState,
               [name]: value
           }));
   
       };
       const handlePicChanged = (e) => {
   
           let fdata = new FormData()
           fdata.append('image', e.target.files[0])
           let data = {
               id: userdetails._id,
               data: fdata
           }
           dispatch(uploadavatar(data))
       }

      const handleupdate = () => {
           let data = {
               id: userdetails._id,
               data: userDetails
           }
               dispatch(updateuser(data))
       }
    return (
        <>
            <Layout style={{ padding: 0, height: "110vh" }} >
                <Layout style={{ padding: '78px 0px' }} >
                    {user.role === "Admin" ? <Adminsidebar /> :
                        user.role === "Reader" ? <Readersidebar /> : <Usersidebar />}
                    <Content style={{ marginLeft: '20px' }} >
                        <div style={{ marginTop: '0px' }}  >
                            <div className=" rounded bg-white mt-5 mb-5">
                               
                            {userDetails && 

                                <div className="row">
                                    <div className="col-md-3 border-right">
                                      

                                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                            <input type="file" id='upload' hidden onChange={handlePicChanged} />

                                           <img className="rounded-circle mt-5" width="150px" style={{ height: "150px" }} src={'http://localhost:5000/getfile/' +  userdetails.avatar  } /> <CameraOutlined onClick={() => document.getElementById('upload').click()} className='upload' />
                                       </div>
                                    </div>
                                    <div className="col-md-5 border-right">
                                        <div className="p-3 py-5">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="text-right">Profile Settings</h4>
                                                <EditOutlined className="upload" onClick={() => setdisabled(!disabled)} />
                                            </div>
                                            <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" value={ userDetails.firstName} onChange={handleChange} name="firstName" disabled={disabled} /></div>
                                            <div className="col-md-12"><label className="labels">Last name</label><input value={ userDetails.lastName} onChange={handleChange} name="lastName" type="text" className="form-control" disabled={disabled} /></div>
                                            <div className="col-md-12"><label className="labels">Adresse</label><input type="text" className="form-control" value={ userDetails.adresse} onChange={handleChange} name="adresse" disabled={disabled} /></div>
                                            <div className="col-md-12"><label className="labels">Gender</label><input type="text" className="form-control" value={ userDetails.gender} onChange={handleChange} name="gender" disabled={disabled} /></div>
                                            <div className="col-md-12"><label className="labels">birthDate</label><input type="text" className="form-control" value={(userDetails.birthDate.slice(0, 10))} onChange={handleChange}  name="birthDate" disabled={disabled} /></div>
                                            <div className="col-md-12"><label className="labels">Email ID</label><input type="email" className="form-control" value={userDetails.email} onChange={handleChange} name="email" disabled={disabled} /></div>
                                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick ={handleupdate}>save</button></div>
                                        </div>
                                    </div>
                                </div>}
                            </div>



                        </div>
                    </Content>
                </Layout>

                <Footer>Footer</Footer>
            </Layout>
        </>





    )
}