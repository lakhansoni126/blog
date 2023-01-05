import axios from 'axios';
import React ,{useState,useEffect}from 'react';
import { Navigate } from 'react-router-dom';


const AddBlog = () => {
    
    const naviate = Navigate();
    const [input,setInput]= useState({
        title:"",
        description:"",
        category:"",
    });
    const[file,setFile]=useState([])
    const  [category, setCategory] = useState([]);
    
    useEffect(()=> {
        const fetchAllCategory= async()=>{
            const res = await axios.get("http://localhost:9000/api/v1/get/categories",{
                headers:{authotization:`bearer ${localStorage.getItem("token")}`}
            })
            setCategory(res.data);
        };
        fetchAllCategory();

    },[]);

    //form data
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("category", input.category);
    formData.append("description", input.description);
    formData.append("thumbnail", file);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res= await axios.post("http://localhost:9000/api/v1/add/blog",formData);
            alert(res.data.message);
            naviate("/")
        } catch (error) {
            alert(error.resopnse.data.message)
        }
    }

    return (
        <>
            <div className="container shadow">
                <h2 className="text-center my-3">Add a New Blog</h2>
                <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={input.title}
                                    onChange={(e)=> setInput({...input, [e.target.name]:e.target.value})}
                                    className="form-control"
                                    id="formGroupExampleInput" placeholder="Blog Title"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    Category
                                </label>
                                <select className="form-control" name="category"
                                        
                                        onChange={(e)=> setInput({...input, [e.target.name]:e.target.value})}
                                >
                                    <option disabled>Select Category</option>
                                    {category && category.map((item)=>{
                                        return <option value={item._id}>{item.title}</option>
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={input.description}
                                    onChange={(e)=> setInput({...input, [e.target.name]:e.target.value})}
                                    placeholder="Blog Description"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    Thumbnail
                                </label>
                                <input
                                    name="thumbnail"
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Select Thumbnail"
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Add Blog
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddBlog;