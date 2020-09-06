import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_IMG } from "../../utils/mutations";
import { QUERY_SELF } from "../../utils/queries";

export const Upload = () => {
  const [saveImage] = useMutation(SAVE_IMG, {
    refetchQueries: [{ query: QUERY_SELF }],
  });

  const onDrop = useCallback(
    async ([file]) => {
      await saveImage({ variables: { image: file } });
    },
    [saveImage]
  );

  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and Drop image here or click to select image</p>
        )}
      </div>
    </div>
  );
};
