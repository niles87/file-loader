import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_SELF } from "../../utils/queries";
import { Card, Image, X } from "../Images";

export const Album = () => {
  const { data, loading } = useQuery(QUERY_SELF);

  if (loading) return <div>Loading...</div>;

  return (
    <Fragment>
      {data.self.imageList > 0
        ? data.self.images.map((el) => (
            <Card key={el.title}>
              <X style={{ color: "red", fontWeight: "bold", fontSize: 25 }} />
              <Image src={el.path} style={{ width: 200 }} alt={el.title} />
            </Card>
          ))
        : ""}
    </Fragment>
  );
};
