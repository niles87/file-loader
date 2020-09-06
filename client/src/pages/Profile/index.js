import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Upload } from "../../components/Upload";
import { Album } from "../../components/Album";
import { Container } from "../../components/Container";
import { QUERY_SELF } from "../../utils/queries";

export const Profile = () => {
  const { data, loading } = useQuery(QUERY_SELF);
  if (!data) return <h1>You need to login to use this</h1>;
  if (loading) return <h1>Loading</h1>;

  return (
    <Fragment>
      <Upload />
      <Container id="imgContainer">
        <Album />
      </Container>
    </Fragment>
  );
};
