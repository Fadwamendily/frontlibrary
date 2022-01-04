import React, { useContext } from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined, EllipsisOutlined, } from '@ant-design/icons';
import { FcViewDetails } from 'react-icons/fc';
import { FiShoppingCart } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';

const BookItem = ({ book }) => {
  const { user } = useContext(AuthContext)

  const { Meta } = Card;

  return (

    <Card
      style={{ width: 300, marginTop: 30 }}
      cover={<img
        alt="book"
        src={"http://localhost:5000/getfile/" + book.image}
        style={{ width: 300, height: 400 }}
      />}>
      <Meta>
        <FiShoppingCart style={{ width: "30px", height: "30px", marginLeft: "220px" }} />
        <FcViewDetails style={{ width: "30px", height: "30px", marginLeft: "220px" }} />
      </Meta>
      <Meta
        title={book.title}
      />
      <Meta
        title="Created at"
        description={book.publicationDate.slice(0, 10)}
      />
    </Card>)
}


export default BookItem
