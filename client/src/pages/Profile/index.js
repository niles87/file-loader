import React, { Fragment } from "react";
import { Upload } from "../../components/Upload";
import { Album } from "../../components/Album";

export const Profile = () => {
  return (
    <Fragment>
      <h1>Welcome xxxx</h1>
      <Upload />
      <Album />
    </Fragment>
  );
};
