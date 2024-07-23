import React, {Suspense} from "react";
import UserProfile3 from "../../components/UserProfile3";
import { Heading } from "../../components/Heading";

const articlePreviewList = [
    { userName: "Rashmi J on Oct 25, 2023", userDescription: "Lorem Ipsum Dolar Amet", readMoreButton: "Read More" },
    { userName: "Rashmi J on Oct 25, 2023", userDescription: "Lorem Ipsum Dolar Amet", readMoreButton: "Read More" },
    { userName: "Rashmi J on Oct 25, 2023", userDescription: "Lorem Ipsum Dolar Amet", readMoreButton: "Read More" },
  ];
  
  export default function BlogSection() {
    return (
      
      <div className="mt-[70px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-start gap-[34px] md:p-5">
          <Heading as="h2" className="capitalize sm:text-[32px]">
            Explore Blogs
          </Heading>
          <div className="mr-5 flex gap-2.5 self-stretch md:mr-0 md:flex-row">
            <Suspense fallback={<div>Loading feed...</div>}>
              {articlePreviewList.map((d, index) => (
                <UserProfile3 {...d} key={"blogList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    );
  }