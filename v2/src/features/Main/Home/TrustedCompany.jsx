import { trustLogo } from "../../../json/trustLogo";

const TrustedCompany = () => {
  return <div className="grid grid-cols-8 place-items-center px-16 py-8 text-6xl text-dark3">{trustLogo.map((data) => data?.icons)}</div>;
};

export default TrustedCompany;
