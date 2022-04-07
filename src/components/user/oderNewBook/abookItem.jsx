import React, { useContext } from 'react'
import 'antd/dist/antd.css';
import { FcViewDetails } from 'react-icons/fc';
import { FiShoppingCart } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';
import './bookitem.css'
import { getbookById, orderaBook, selectsingleBook } from '../../../features/Books/bookSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';

const BookItem = ({ book }) => {
  const singlebook = useSelector(selectsingleBook)
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOrder = () => {
    dispatch(orderaBook({ id: book._id }))
  }

  let modalView = '';
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (singlebook != null) {
    modalView = <Modal title="Book details " onCancel={handleCancel} visible={isModalVisible} onOk={handleOk} onEdit={handleCancel}>
      <img src={`http://localhost:5000/getfile/${singlebook.image}`} style={{ height: "500px", width: "450px" }} />
      <div style={{ background: "#E6E6FA" }}>
        <h2>
          <div id="baniere">
            <div id="baniere_gauche">Title:</div>
            <div id="baniere_droite">{singlebook.title} </div>
          </div>
        </h2>
        <h5>
          <div id="baniere">
            <div id="baniere_gauche">Price:</div>
            <div id="baniere_droite">{singlebook.price} TND </div>
          </div>
        </h5>
        <h5>
          <div id="baniere">
            <div id="baniere_gauche">Published at:</div>
            <div id="baniere_droite">{singlebook.publicationDate.slice(0, 10)} </div>
          </div>
        </h5>
        <h5>
          <div id="baniere">
            <div id="baniere_gauche">Languages:</div>
            <div id="baniere_droite">{singlebook.language[0].language} </div>
          </div>
        </h5>
        <h5>
          <div id="baniere">
            <div id="baniere_gauche">Category:</div>
            <div id="baniere_droite">{singlebook.category.category} </div>
          </div>
        </h5>
        <h5>
          <div id="baniere">
            <div id="baniere_gauche">Existing type:</div>
            <div id="baniere_droite">{singlebook.file.type} </div>
          </div>
        </h5>
      </div>
    </Modal>
  }

  const { user } = useContext(AuthContext)
  const dispatch = useDispatch()
  const handlebookdetails = () => {
    dispatch(getbookById({ id: book._id }))
    setIsModalVisible(true)
  }


  return (

    <>

      <div style={{ width: 300, marginTop: 30 }}>
        <img src={"http://localhost:5000/getfile/" + book.image} style={{ height: "500px", width: "300px" }} />
        <div style={{ background: "#E6E6FA" }}>
          <h4 >
            <div id="baniere">
              <div id="baniere_gauche">{book.title}</div>
              <div id="baniere_droite">{book.price}TND </div>
            </div>
          </h4>
          {
            user.role == "Reader" ?
              <div style={{ display: "flex", float: "right", }}>
                <button type="button" class="btn btn-success" onClick={handleOrder}>Add to Card</button>
                <button type="button" style={{ marginLeft: "5px", backgroundColor: "ButtonText" }} class="btn btn-success" onClick={handlebookdetails}>More details</button>
              </div>
              :
              <div style={{ display: "flex", float: "right" }}>
                <button type="button" class="btn btn-success" onClick={handlebookdetails}>More details</button>
              </div>

          }
        </div>
      </div>
      {modalView}
    </>
  )
}

export default BookItem
