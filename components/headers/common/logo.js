import React, { Fragment } from "react";
import Link from "next/link";

const LogoImage = ({ logo }) => {
  return (
    <Fragment>
      <Link href={"/"}>
        <img
          src={`/assets/images/icon/${logo ? logo : "logo.png"}`}
          alt="Logo"
          className="img-fluid"
          style={{ width: "230px", height: "auto" , marginLeft: "-15px"}} // Adjust width and height as needed
        />
      </Link>
    </Fragment>
  );
};

export default LogoImage;
