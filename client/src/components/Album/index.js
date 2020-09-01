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

  if (error) console.error(error);

  const deleteImg = async (id, imgId) => {
    const token = Auth.getToken();

    if (Auth.loggedIn(token)) return false;

    try {
      const { data } = await removeImg({ variables: { id, imgId } });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      {data.self.imageList > 0
        ? data.self.images.map((el) => (
            <Card className="card" key={el.title}>
              <X
                className="delete"
                onClick={() => deleteImg(el.id, el.imgId)}
              />
              <Image className="img" src={el.path} alt={el.title} />
            </Card>
          ))
        : ""}
    </Fragment>
  );
};
