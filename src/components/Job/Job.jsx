import { MdLocationPin  } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
//   console.log(job);
  const { logo, id , job_title, company_name, remote_or_onsite ,salary, job_type, location} = job;
  return (
    <div className=" card-compact p-2  bg-base-100 shadow-xl my-10">
      <figure>
        <img className="p-2"
          src={logo}
         
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="">
            <button className="px-5 py-2 font-extrabold border rounded-lg border-blue-400 mr-4 text-blue-500">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded-lg border-blue-400 mr-3 text-blue-500">{job_type}</button>
        </div>
        <div className="flex my-4 mr-4">
            <p className="flex items-center text-xl"><MdLocationPin className="text-2xl"></MdLocationPin> {location}</p>
            <p className="flex items-center text-xl"><HiCurrencyDollar className="mr-3 text-2xl"></HiCurrencyDollar>salary:  {salary}</p>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
