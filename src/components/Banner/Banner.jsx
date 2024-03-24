const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="  flex justify-between lg:flex-row-reverse ">
          <img className="max-w-lg rounded-lg shadow-2xl"
            src="https://i.ibb.co/5rCgW4F/05-removebg.png"
            
          />
          <div>
            <h1 className="text-5xl font-bold">
              One Step <br /> Closer To Your <br />
              <span className="text-violet-500">Dream Job</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut
              assumenda excepturi exercitationem quasi. <br /> In deleniti eaque
              aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h3 className="text-5xl text-center  mt-10">jobs Category List</h3>
      <p className="text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    </div>
  );
};

export default Banner;
