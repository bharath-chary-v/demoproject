import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()
  const [isPaid, setIsPaid] = useState(false);
  const toggleSwitch = () => setIsPaid(previousState => !previousState);
  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  
  // const orderDelete = useSelector((state) => state.orderDelete)
  // const {
  //   loading:loadingDelete,
  //   error:errorDelete,
  //   success:successDelete
  //   } = orderDelete
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo, isPaid])
  
  // const deleteHandler = (id) => {
  //   if (window.confirm('Are you sure')) {
  //     dispatch(deleteOrder(id))
  //   }
  // }

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
        // {loadingDelete && <Loader />}
        // {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
        
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>₹{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>{order.isPaid ? (
                    <Button   className='btn-sm' variant='light' >valid</Button>
                  ) : (
                    <Button     className='btn-sm' variant='danger'>invalid</Button>
                  )}
                
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                    {/* <Button
                      variant='danger'
                      className='btn-sm'
                      // onClick={() => deleteHandler(order._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button> */}
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default OrderListScreen
