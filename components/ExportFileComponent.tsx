"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

const ExportFileComponent = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
    },
  });
  return (
    <div>
      <div className="">
        <div
          {...getRootProps()}
          className={`flex ${
            files[0]
              ? "border-2 border-[#144909]  bg-white"
              : "border-2 border-gray-200 rounded-lg"
          } rounded-lg justify-between items-center cursor-pointer  p-2`}
        >
          <div>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p
                className={`flex text-xs md:text-sm items-center gap-1 ${
                  files[0] && "hidden"
                }`}
              >
                <IoCloudUploadOutline /> Export
              </p>
            )}
            {files[0] && (
              <div className="text-sm border-0  text-[#144909] ">
                <strong className="flex items-center gap-1 ">
                  Exported <IoMdCheckmark />
                </strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportFileComponent;
