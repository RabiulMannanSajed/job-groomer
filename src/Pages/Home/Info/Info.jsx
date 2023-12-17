import logo from "../../../assets/img/jobentryLogo.png";
const Info = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={logo} className=" rounded-lg w-1/2" />
        <div>
          <h1 className="text-5xl font-bold text">
            We Help To Get The Best Job And Find A Talent
          </h1>
          <p className="py-6">
            To provide you with relevant job information, I'll need more
            specific details. Could you please specify the type of job,
            industry, or any particular information you're looking for?
            Additionally, let me know if you have any preferences or
            requirements for the job information you're seeking
          </p>
          <ul className="py-6">
            <li>
              1. Streamline job hunting with advanced filters, enabling users to
              refine searches based on location, industry, and experience.
            </li>
            <li>
              2. Employ AI-driven algorithms to deliver personalized job
              suggestions, ensuring a more efficient and relevant job-seeking
              experience
            </li>
            <li>
              3. Enhance accessibility and satisfaction through an intuitive
              interface, simplifying navigation and optimizing the overall user
              experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
