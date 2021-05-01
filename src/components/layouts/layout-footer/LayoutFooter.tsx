import React from 'react';

interface IProps {
  footerBg?: string;
}

export const LayoutFooter: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <nav className={`layout-footer footer bg-${props.footerBg}`}>
      <div className="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
        <div className="pt-3">
          <span className="footer-text font-weight-bolder">Appwork</span> ©
        </div>
        <div>
          <a href="#d" className="footer-link pt-3">
            About Us
          </a>
          <a href="#d" className="footer-link pt-3 ml-4">
            Help
          </a>
          <a href="#d" className="footer-link pt-3 ml-4">
            Contact
          </a>
          <a href="#d" className="footer-link pt-3 ml-4">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </nav>
  );
};
