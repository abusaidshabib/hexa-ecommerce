import Logo from "../../../components/Important/Logo";
import { footer } from "../../../json/menu";

const Footer = () => {
  return (
    <div className="bg-dark3 px-20 py-10 text-sm">
      <div className="border-light2 border-b pb-10 grid grid-cols-6">
        <Logo css="text-light1" />
        <p className="text-light2 col-span-5 flex justify-end items-center">
          E-commerce revolutionizes shopping, bringing the marketplace to your
          fingertips. Seamlessly browse, choose, and purchase a diverse array of
          products online, redefining convenience and accessibility in the
          modern retail landscape.
        </p>
      </div>
      <div className="pt-10 grid grid-cols-6 border-b border-light2">
        {footer.map((data, index) => (
          <ul className="pb-10" key={index}>
            <li className="font-medium text-light1 pb-3">{data?.title}</li>
            {
                data?.menus?.map((data, index) => (
                    <li className="text-light2 hover:text-light1 transition-all delay-100 duration-300" key={index}>{data?.title}</li>
                ))
            }
          </ul>
        ))}
      </div>
      <div>

      </div>
    </div>
  );
};

export default Footer;
