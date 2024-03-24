import { useLoaderData, useParams } from "react-router-dom";
import { HiCurrencyDollar } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from "../Utlity/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job=> job.id === idInt)
    const {job_responsibility,job_description,experiences,educational_requirements, salary, job_title, location, company_name} = job;
    // console.log(job);

    const handleApplyJob=()=>{
        saveApplication(idInt);
        toast("you have applied successfully");
    }
    return (
        <div>
            <h2 className="text-4xl text-center my-4">job details </h2>
            <div className="grid gap-4 md:grid-cols-4 mb-10">
                
            <div className="border md:col-span-3">
                <h2 className="my-8 p-4"><span className="font-bold">company_name : </span>{company_name}</h2>
                <h2 className="my-8 p-4"><span className="font-bold">job_description : </span>{job_description}</h2>
                <h2 className="my-8 p-4"><span className="font-bold">job_responsibility : </span>{job_responsibility}</h2>
                <h2 className="my-8 p-4"><span className="font-bold">educational_requirements : </span>{educational_requirements}</h2>
                <h2 className="my-8 p-4"><span className="font-bold">experiences : </span>{experiences}</h2>
                
            </div>
            <div className="border bg-blue-200 text-black p-2">
                <h2 className="text-xl border-b-2">Job Details </h2>
                <p className="flex items-center text-sl my-3"><HiCurrencyDollar className="mr-3 text-2xl"></HiCurrencyDollar>salary:  {salary}</p>
                <p><span>job_title : </span> {job_title} </p>
                
                <p className="font-bold border-b-2 my-3">Contact Information</p>
                <p>number : 01849317388</p>
                <p>email : </p>
                <p className="mb-64">Address : {location}</p>
                <button onClick={handleApplyJob} className="btn w-full bg-blue-700">Apply Now</button>
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;