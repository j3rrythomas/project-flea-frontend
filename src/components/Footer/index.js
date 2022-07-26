import { LogoSmall } from "../../assets/images";
const Footer = () => {
  return (
    <div className="w-full flex-row bg-black mt-20">
      <footer className="footer place-items-center py-10 px-4 text-base-content bg-black">
        <div className="flex-col">
          <span className="footer-title"></span>
          <a className="link link-hover text-white text-xl">About us</a>
          <a className="link link-hover text-white text-xl">Contact</a>
        </div>
        <div className="flex-col text-xl">
          <LogoSmall className="h-40 w-40 text-white fill-white" />{" "}
          <p>THE FLEA STORE</p>
        </div>
        <div className="flex-col">
          <span className="footer-title text-xl">Legal</span>
          <a className="link link-hover text-white text-xl">Terms of use</a>
          <a className="link link-hover text-white text-xl">Privacy policy</a>
          <a className="link link-hover text-white text-xl">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
