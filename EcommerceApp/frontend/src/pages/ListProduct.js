import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

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

    return (
        <>
            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2><u>List Product</u></h2>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
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
                                products.map((item,index) => 
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
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ListProduct;