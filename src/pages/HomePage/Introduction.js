import React,{Suspense} from "react";
import { Heading } from "../../components/Heading";
import UserSubscriptionDetails from "../../components/UserSubscriptionDetails";
import { Text } from "../../components/Text";
import { Img } from "../../components/Img";

export default function IntroductionSection() {
    return (
      
      <div className="mt-[50px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[70px] md:gap-[52px] md:p-5 sm:gap- [35px]">
          <Heading size="text5xl" as="h2" className="w- [52%] text-center leading-[135%] md:w-full sm:text-[26px]">
            <span className="text-black-900">Join the&nbsp;</span>
            <span className="font-bold text-black-900">
              20,000+ people who successfully reversed diseases by finding them in their early stages.
            </span>
          </Heading>
          <div className="self-stretch rounded- [32px] bg-gray-100 p-5">
            <div className="mb-[50px] flex flex-col items-start">
              <Text as="p" className="!font-medium uppercase tracking-[0.80px] ">
                What happens next?
              </Text>
              <Heading as="h3" className="mt-1 capitalize tracking-[-0.36px] sm:text - [32px]">
                <span className="text-black-900">How&nbsp;</span>
                <span className="text-black-900">eGenome</span>
                <span className="text-black-900">&nbsp;works?</span>
              </Heading>
              <div className="mt-[26px] flex w- [94%] items-start justify-between gap-5 md:w-full md:flex-col">
                <div className="mt-4 flex w- [76%] gap-3.5 self-end md:w-full md:flex-col md:self-auto">
                  {/* <Suspense fallback={<div>Loading feed...</div>}>
                    {healthPlanOptions.map((d, index) => (
                      <UserSubscriptionDetails {...d} key={"featuresList" + index} />
                    ))}
                  </Suspense> */}
                </div>
                <Img
                  src=""
                  alt="Gallery Image"
                  className="h- [38px] w- [38px] object-cover md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }