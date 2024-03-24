

const CategoryList = ({ category }) => {
  const { logo, availability, category_name } = category;
  return (
    <div>


      <div>
        <div className="card my-7 mx-auto text-black bg-gray-400 shadow-xl">
          <div className="card-body">
            <img className="w-10" src={logo} alt="" />
            <p className="font-bold text-xl">{category_name}</p>
            <p className="text-xl">{availability}</p>
        
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
