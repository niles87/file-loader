import React, { useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FormContainer, FormLabel, FormInput } from "../../components/Form";

export const Profile = () => {
  const onDrop = useCallback(
    ([file]) => {
      saveImage({ variables: { file } });
    },
    [saveImage]
  );

  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <h1>Welcome xxxxx</h1>
      <div {...getRootProps()}>
        <FormInput {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and Drop files here or click to select files</p>
        )}
      </div>
    </div>
  );
};
