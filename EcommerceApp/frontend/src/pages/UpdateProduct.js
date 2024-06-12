import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
const UpdateProduct = () => {
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState(false);
    const params = useParams();

    useEffect(()=> {
        getProductDetails();
    },[]);

    const getProductDetails = async () => {
        const data = await fetch(`http://localhost:5000/get-product/${params.id}`);
        let result = await data.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const handleSubmit = async () => {
        if(!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'));
        const data = await fetch(`http://localhost:5000/update-product/${params.id}`,{
            headers: {
                'Content-Type':'application/json'   
            },
            method:'put',
            body:JSON.stringify({name,price,category,company,userid:userId._id})
        });
        let result = await data.json();
        if(result) {
            alert("Product updated successfully.");
            setName("");setPrice("");setCategory("");setCompany("");
            navigate("/listProduct");
        } else {
            console.log(result,"API Failed");
        }
    }

    return (
        <>
            <div className="container">
                <div className="sectionbody text-center" style={{ marginTop: '60px' }}>
                    <h2><u>Update Product</u></h2>
                    <form>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="name" name="name" defaultValue={name} />
                                { error && !name && <div class="badge bg-danger text-start" style={{width:'100%'}}>Please enter product name</div> }                                
                            </div>                            
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e) => setPrice(e.target.value)} className="form-control" id="price" name="price" defaultValue={price} />
                                { error && !price && <div class="badge bg-danger text-start" style={{width:'100%'}}>Please enter product price</div> }    
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e) => setCategory(e.target.value)} className="form-control" id="category" name="category" defaultValue={category} />
                                { error && !category && <div class="badge bg-danger text-start" style={{width:'100%'}}>Please enter product category</div> }    
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="company" className="col-sm-2 col-form-label">Company</label>
                            <div className="col-sm-10">
                                <input type="text" onChange={(e) => setCompany(e.target.value)} className="form-control" id="company" name="company" defaultValue={company} />
                                { error && !company && <div class="badge bg-danger text-start" style={{width:'100%'}}>Please enter product company</div> }    
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <button type="button" className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default UpdateProduct;