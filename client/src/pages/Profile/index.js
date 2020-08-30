import React, { Fragment } from "react";
import { Upload } from "../../components/Upload";
import { Album } from "../../components/Album";

export const Profile = () => {
  return (
    <Fragment>
      <Upload />
      <Album />
    </Fragment>
  );
};
