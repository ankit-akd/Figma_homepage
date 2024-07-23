import React from "react";
import { Text } from "../../components/Text";
import { Heading } from "../../components/Heading";
import UserProfile2 from "../../components/UserProfile2";

export default function WhatYouGetSection() {
    return (
        <>
            <div className="mt-[70px] flex flex-col items-center self-stretch">
                <div className="container-xs flex flex-col gap-[94px] px-2.5 md:gap-[70px] md:p-5 sm:gap- [47px]">
                    <div className="mx-[196px] flex flex-col items-center gap-10 md:mx-0">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <Text as="p" className="!font-medium uppercase tracking-[0.80px]">
                                What you get?
                            </Text>
                            <Heading as="h2" className="capitalize tracking-[-0.36px] sm:text-[32px]">
                                One health plan for life
                            </Heading>
                        </div>
                        <div className="grid grid-cols-3 justify-center gap-[34px] self-stretch md:grid-cols-2 sm:grid-cols-1">
                            <UserProfile2 />
                            <UserProfile2
                                keyOrgansHealthScore="At-home blood test"
                                overallHealthEvaluation={
                                    <>
                                        Our team will collect your blood sample <br />
                                        at home.
                                    </>
                                }
                            />
                            <UserProfile2
                                keyOrgansHealthScore="Personalised Diet Plan"
                                overallHealthEvaluation="Get a plan to reach the prime of your health with the right nutrition and diet." />
                            <UserProfile2
                                keyOrgansHealthScore="FREE Nutritionist Consultation"
                                overallHealthEvaluation={
                                    <>
                                        Talk to our Nutritionist anytime you <br />
                                        have a question.
                                    </>
                                }
                            />
                            <UserProfile2 />
                            <UserProfile2
                            />
                            keyOrgansHealthScore="FREE Workout Lifestyle Plans"
                            overallHealthEvaluation="Get workout and lifestyle recommendations to optimize your health and wellness"
                            <Text size="texts" as="p" className="w-full text-center leading-[140%]">
                                Talk to our 24x7 available AI doctor anytime you have a question.
                            </Text>
                        </div>
                    </div>
                    <div className="flex justify-center rounded- [32px] bg-blue gray-100 p-10 md:flex-row sm:p-5">
                        <div className="flex w-[30%] flex-col items-start gap-1 md:w-full">
                            <Heading size="text7xl" as="h3" className="capitalize">
                                100%
                            </Heading>
                            <Text size="textlg" as="p" className="w- [84%] leading-[140%] md:w-full">
                                users recommended <br />
                                the health plan to their friends & family
                            </Text>
                        </div>
                        <div className="flex w-[28%] flex-col items-start gap-1 md:w-full">
                            <Heading size="text7xl" as="h4" className="capitalize">
                                20%
                            </Heading>
                            <Text size="textlg" as="p" className="w- [84%] leading-[140%] md:w-full">
                                improvement in overall health parameters in 90-days
                            </Text>
                        </div>
                        <div className="flex w-[22%] flex-col items-start gap-1 md:w-full">
                            <Heading size="text7xl" as="h5" className="capitalize">
                                95%
                            </Heading>
                            <Text size="textlg" as="p" className="w-full leading-[140%]">
                                people said the report was life-changing
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}