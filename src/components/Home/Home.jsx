import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategoris] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
     
        <div className="md:flex  gap-10">{categories.map((categorie) => <CategoryList key={categorie.id} category={categorie}></CategoryList>)}
        </div>
      

      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
