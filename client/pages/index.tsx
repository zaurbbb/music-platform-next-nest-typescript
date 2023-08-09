import React, { FC } from "react";
import MainLayout from "../layout/MainLayout";

const Index: FC = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome</h1>
          <h3>Best tracks are here!</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column; 
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;

