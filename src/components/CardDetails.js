import { Tab } from 'bootstrap'
import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux'
function CardDetails() {


    const [data,setData]=useState([]);
    console.log(data);
    const {id}=useParams();

    const getData=useSelector((state)=>state.cartReducer.carts);
    //console.log(getData);
    const compare=()=>{
        let comparedata=getData.filter((e)=>{
            return e.id==id
        });
        setData(comparedata);
    }
    useEffect(()=>{
    compare();
    },[id]);
  return (
    <>
    <div className='container mt-2'>
        <h2 className='text-center'>Items Details</h2>
         <section className='container mt-3'>
         <div className='itemsdetails'>
            {
                data.map((ele)=>{
                    return(
                        <>
                         <div className='items_img'>
        <img src={ele.imgdata} alt=""/>
        </div>

        <div className='details'>
          <Table>
            <tr>
                <td>
                   <p></p> 
                   <p>< strong>Restaurant</strong>
: {ele.rname}</p> 
                   <p>< strong>Price</strong> : Rs.{ele.price}</p> 
                   <p>< strong>Dishes</strong> : {ele.address}</p>
                   <p> <strong>Total</strong> : Rs. 309</p>
                   
</td>
<td>
<p><strong>Rating :</strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★</span></p>
<p><strong>Order Review :</strong><span>{ele.somedata}</span></p>
<p><strong>Remove :</strong><span><i className='fas fa-trash'
style={{color:"red",fontSize:20,cursor:"pointer"}} ></i></span></p>
</td>

</tr>
</Table>
</ div>
                        
                        </>
                    )
                })
            }
       
</div>

         </section>
    </div>
    </>
  )
}

export default CardDetails