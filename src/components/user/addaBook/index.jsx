import React, { useContext, useState } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Adminsidebar from '../../../layouts/Sidebar/AdminSidebar';
import Usersidebar from '../../../layouts/Sidebar/UserSidebar';
import { AuthContext } from "../../context/AuthContext";
import Readersidebar from '../../../layouts/Sidebar/ReaderSidebar';
import '../../assets/css/book.css'
import 'antd/dist/antd.css';
import { message } from 'antd';
import 'antd/dist/antd.min.css'
import { selectcategoriesname } from '../../../features/categories/categoriesSlice';
import { selectlanguagesname } from '../../../features/Languages/languagesSlice';
import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    Radio,
    Cascader,
    InputNumber,
    TreeSelect,
    Switch,
    Modal
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { creatbook } from '../../../features/Books/bookSlice';

const { TextArea } = Input;
const { Option } = Select;

export default () => {
    const { Content, Footer } = Layout;
    const { user } = useContext(AuthContext)
    const languages = useSelector(selectlanguagesname)
    const categories = useSelector(selectcategoriesname)
    const dispatch = useDispatch()




    /*   const handletype = (value) => {
          if (value === 'audio'  === 'pdf') {
              showModal()
          }
      } */

    const [file, setfile] = useState(null)
    const [image, setimage] = useState(null)

    const [Book, setBook] = useState({
        title: "",
        price: "",
        publicationDate: "",
        language: "",
        category: "",

    });
    const handleChange = e => {
        const { name, value } = e.target;
        setBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlebook = () => {

        console.log('Book', Book)
        let data = new FormData()
        data.append('file', file)
        data.append('photo', image)
        data.append('language', Book.language)
        data.append('category', Book.category)
        data.append('price', Book.price)
        data.append('publicationDate', Book.publicationDate)
        data.append('title', Book.title)
        console.log('data', data)

        dispatch(creatbook(data))
    }


    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <>
            <Layout style={{ padding: 0, height: "200vh" }} >
                <Layout style={{ padding: '70px 0px' }} >
                    {user.role === "Admin" ? <Adminsidebar /> :
                        user.role === "Reader" ? <Readersidebar /> : <Usersidebar />}
                    <Content style={{ marginTop: '50px', marginLeft: '200px' }} >

                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="col-md-12"><label className="labels">Title</label><input name="title" type="text" className="form-control" onChange={handleChange} /></div>
                                <div className="col-md-12"><label className="labels">Price</label><input name="price" type="number" className="form-control" onChange={handleChange} /></div>
                                <div className="col-md-12"><label className="labels">Publication Date</label><input name="publicationDate" type="date" className="form-control" onChange={handleChange} /></div>
                                <div className="col-md-12"><label className="labels">Language</label>
                                    <select className="form-control" name="language" onChange={handleChange}>
                                        {
                                            languages.map((c, i) => {
                                                return (
                                                    <option value={c._id}>{c.language}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-12"><label className="labels">Category</label>
                                    <select className="form-control" name="category" onChange={handleChange}>
                                        {
                                            categories.map((c, i) => {
                                                return (
                                                    <option value={c._id}>{c.category}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-12"><label className="labels">Image</label>
                                    <input type="file" id="photo" name="photo" accept="image/*" onChange={(e) => setimage(e.target.files[0])} />
                                </div>
                                <div className="col-md-12"><label className="labels">File</label>
                                    <input type="file" id="file" name="file" accept="application/pdf,audio/* " onChange={(e) => setfile(e.target.files[0])} />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success mr-2" style={{ marginLeft: "300px", width: "200px" }} onClick={() => handlebook()}>Submit your New Book</button>
                        </div>

                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout >
        </>





    )
}