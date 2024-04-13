import React,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { DLT } from '../redux/actions/action';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { UseDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table'
function Header() {
    

    const [price,setPrice]=useState(0);
    const getData=useSelector((state)=>state.cartReducer.carts);
    console.log(getData);

    const dispatch=useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt=(id)=>{
        dispatch(DLT(id))
    }

    const total=()=>{
        let price=0;
        getData.map((ele,k)=>{
            price=ele.price + price
        });
        setPrice(price);
    }
    useEffect(()=>{
      total();
    },[total]);
      return (
        <>
        <Navbar  bg="dark" variant='dark'>
          <Container>
            <NavLink to="/"  className="text-decoration-none text-light">Add to Cart</NavLink>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            
            >
  <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
</Badge>
            
          </Container>

              <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getData.length?
                        <div className='card_details'>
                            <Table>
                                <thead>
                                    <tr>
                                       <th>Photo</th>
                                       <th>Restaurant Name</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData.map((e)=>{
                                            return(
                                                <>
                                                <tr>
                                                    <td>
                                                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}}/>
                                                        </NavLink>
                                                        
                                                    </td>
                                                    <td>
                                                        <p>{e.rname}</p>
                                                        <p>Price : Rs.{e.price}</p>
                                                        <p>Quantity :{e.qnty}</p>
                                                        <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                    </td>
                                                    <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td> 
                                                   
                                                </tr>
                                                </>
                                            )
                                        })
                                    }
                                                                        <p className='text-center'>Total :{price}</p>
                                </tbody>
                            </Table>
                        </div>:
                        <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10}}>
                        <i className='fas fa-close smallclose' style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}
                        onClick={handleClose}
                        ></i>
                        <p style={{fontSize:22}}>You cart is Empty</p>
                        <img src='../img/Cart.jpg' alt='cart-img' style={{width:'5rem',padding:10}}></img>
                    </div>

                    }
                
                </Menu>

        </Navbar>
        </>
        
      );
    }
    
    


export default Header