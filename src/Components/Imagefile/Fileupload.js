import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Fileupload = () => {
    const [file, setFile] = useState(null);

    const fileHandler = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        toast.success('file Uploaded Successfully ..!');
    }

    return (
        <div className="container">
            <div className="row">
                <ToastContainer />
                <div className="col-lg-5 m-auto mt-5">
                    <h4 className="m-0 text-center">Image Upload</h4>
                    <div className="bg-success mt-3 d-flex justify-content-between p-4 rounded rounded-3 gap-2">
                        <div className="form-group w-100">
                            <input className="form-control" type="file" accept='image/*' onChange={fileHandler} />
                        </div>
                    </div>
                </div>
                {file && <img src={URL.createObjectURL(file)} alt='banner' />}
            </div>
        </div>
    )
}
export default Fileupload;