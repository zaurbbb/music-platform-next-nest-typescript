import React, {
  ChangeEvent,
  FC,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

const FileUpload: FC<FileUploadProps> = ({
  // component props
  setFile,
  accept,
  children,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleInputRef() {
    inputRef?.current?.click();
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
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
