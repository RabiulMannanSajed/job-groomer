import FewJobs from "../../FewJobs/FewJobs/FewJobs";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import TalentAndJob from "../TalentAndJob/TalentAndJob";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Search></Search> */}
      <TalentAndJob></TalentAndJob>
      <Info></Info>
      <FewJobs></FewJobs>
    </div>
  );
};

export default Home;
