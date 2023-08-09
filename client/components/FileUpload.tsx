import React, {
  ChangeEvent,
  FC,
  ReactNode,
  useRef,
} from "react";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode
}

const FileUpload: FC<FileUploadProps> = ({
  // component props
  setFile,
  accept,
  children,
}) => {
  const inputRef = useRef<HTMLInputElement>();

  function handleInputRef() {
    inputRef?.current?.click();
  }
  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  }
  return (
    <div onClick={handleInputRef}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{
          display: "none",
        }}
        onChange={handleFileChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
