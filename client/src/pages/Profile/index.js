import React, { Fragment } from "react";
import { Upload } from "../../components/Upload";
import { Album } from "../../components/Album";
import { Container } from "../../components/Container";

export const Profile = () => {
  return (
    <Fragment>
      <Upload />
      <Container id="imgContainer">
        <Album />
      </Container>
    </Fragment>
  );
};
