import React from 'react'

const AddBlog = () => {
    return (
        <>
            <div className="container shadow">
                <h2 className="text-center my-3">Add a New Blog</h2>
                <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
                    <div className="row">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    id="formGroupExampleInput" placeholder="Blog Title"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput" className="form-label">
                                    Category
                                </label>
                                <select className="form-control" name="category">
                                    <option disabled>Select Category</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formGroupExampleInput2" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    name="description"
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