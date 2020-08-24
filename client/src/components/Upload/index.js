import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_IMG } from "../../utils/mutations";
import { QUERY_SELF } from "../../utils/queries";
// import { FormInput } from "../Form/index";

export const Upload = () => {
  const [saveImage] = useMutation(SAVE_IMG, {
    refetchQueries: [{ query: QUERY_SELF }],
  });

  const onDrop = useCallback(
    ([file]) => {
      saveImage({ variables: { file } });
    },
    [saveImage]
  );

  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and Drop files here or click to select files</p>
        )}
      </div>
    </div>
  );
};
