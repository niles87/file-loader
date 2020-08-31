import React, { Fragment } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_SELF } from "../../utils/queries";
import { REMOVE_IMG } from "../../utils/mutations";
import { Card, Image, X } from "../Images";
import Auth from "../../utils/auth";

export const Album = () => {
  const { data, loading } = useQuery(QUERY_SELF);
  const [removeImg, { error }] = useMutation(REMOVE_IMG);

  if (loading) return <div>Loading...</div>;

  const deleteImg = async (id, imgId) => {
    const token = Auth.getToken();

    if (Auth.loggedIn(token)) return false;

    try {
      const { data } = await removeImg({ variables: { id, imgId } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      {data.self.imageList > 0
        ? data.self.images.map((el) => (
            <Card key={el.title}>
              <X
                style={{ color: "red", fontWeight: "bold", fontSize: 25 }}
                onClick={() => deleteImg(el.id, el.imgId)}
              />
              <Image
                src={el.path}
                style={{ width: 200, height: 200 }}
                alt={el.title}
              />
            </Card>
          ))
        : ""}
    </Fragment>
  );
};
