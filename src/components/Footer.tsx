import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to Shop.{"  "}
            <span className="underline text-blue">Find an Apple Store </span>
            or
            <span className="underline text-blue"> other retailer</span>
            near you.
          </p>

          <p className="text-xs font-semibold text-gray">
            Or call 000000-020-1920
          </p>
        </div>
        <div className="my-5 bg-neutral-700 h-[1px] w-full" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            {" "}
            Copyright @ 2024 Apple In. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={i} className="mt-1 text-xs font-semibold text-gray">
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
