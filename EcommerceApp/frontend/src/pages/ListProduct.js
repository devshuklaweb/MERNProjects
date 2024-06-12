import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(() => {
        getProducts();
    }, []);
    
    const getProducts = async () => {
        const data = await fetch("http://localhost:5000/list-product");
        let result = await data.json();
        setProducts(result);
    }

    const handleDelete = async (id) => {
        const data = await fetch(`http://localhost:5000/del-product/${id}`,{
            method:'delete'
        });
        let result = await data.json();
        if(result) {
            alert("Record deleted.");
            getProducts();
        } else {
            alert("Record not delete.")
        }
    }

    const handleSearch = async (event) => {
        let key = event.target.value;
        if(key) {
            const data = await fetch(`http://localhost:5000/search-product/${key}`,{
                method:'get'
            });
            let result = await data.json();
            if(result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }
    }

    return (
        <>
            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2>
                        <u>List Product</u>
                        <Link style={{float:'right',marginTop:'8px'}} className={`btn btn-primary text-end`} to="/addProduct">Add Product</Link>
                    </h2>
                    <div className='row d-flex justify-content-center' style={{marginTop:'12px',marginBottom:'15px'}}>
                        <input type="text" onChange={handleSearch} className="form-control" id="search" name="search" defaultValue={search} placeholder="Search by name,category,company,price" style={{width:'55%'}}/>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr style={{borderTop:'1px solid #d4d4d4'}}>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Category</th>
                                <th scope="col">Company</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ? products.map((item,index) => 
                                    <tr key={item._id}>
                                        <th scope="row">{index+1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>{item.company}</td>
                                        <td>
                                        <Link className={`btn btn-sm btn-success`} to={`/updateProduct/${item._id}`}>Edit</Link>
                                        &nbsp;
                                        <button className="btn btn-sm btn-warning" onClick={()=>handleDelete(item._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                                :
                                <tr>
                                    <td colSpan={6}><h4>No Result found!</h4></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ListProduct;