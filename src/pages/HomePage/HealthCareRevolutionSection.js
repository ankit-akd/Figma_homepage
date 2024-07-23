import React from "react";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import Button from "../../components/Button";
import { Img } from "../../components/Img";


export default function HealthcareRevolutionSection() {
    return (

        <div className="mt-[70px] flex flex-col gap-10 self-stretch overflow-auto">
            <div className="container-xs flex flex-col items-center self-center px-14 md:p-5 md:px-5">
                <div className="flex flex-col items-center gap-2">
                    <Heading as="h2" className="capitalize sm:text-[32px]">
                        We are revolutionising Healthcare
                    </Heading>
                    <Text as="p" className="!font-normal capitalize">
                        <span className="text-black-900">B</span>
                        <span className="lowercase text-black-900">ut don't just take our word for it..</span>
                    </Text>
                </div>
            </div>
            <div className="flex gap-3 md:flex-row">
                <div className="h- [412px] w- [16%] rounded- [32px] bg-gray-100_01 md:p-5" />
                <div className="flex w- [16%] flex-col items-end rounded-[32px] bg-gray-200 p-4 md:w-full md:p-5">
                    <Button size="xs" className="mb-[346px] w- [34px] rounded-[16px] px-2.5">
                        {/* <Img src="" /> */}
                    </Button>
                </div>
                <div className="flex w- [16%] flex-col rounded-[32px] bg-gray-100_01 py-[38px] md:w-full md:p-5 sm:py-5">
                    <div className="mb-6 flex flex-col items-end gap-6">
                        <div className="flex justify-end self-stretch md:flex-col">
                            <div className="flex w- [50%] items-center justify-end gap-2 md:w-full">
                                {/* <Img src="" alt="Circleimage" className="h-[54px] w- [54px] rounded- [50%]" /> */}
                                <div className="flex flex-1 flex-col items-start gap-2">
                                    <Heading size="headingxs" as="h2" className="capitalize">
                                        Lauren C.
                                    </Heading>
                                    <Text size="texts" as="p" className="capitalize ! text-black-900_bf">
                                        Diabetic, since 4 years
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <Text as="p" className="mr-[200px] w- [40%] leading-[145%] md:mr-0 md:w-full">
                            After being diagnosed with diabetes, I struggled to manage my condition despite trying various diets and
                            medications. eGenome has been a game-changer for me. The personalized meal plans and detailed health
                            report have helped me keep my blood sugar levels in check. I feel healthier and more energetic than
                            ever!
                        </Text>
                    </div>
                </div>
                <div className="flex w- [16%] flex-col items-end rounded- [32px] bg-gray-200 p-4 md:w-full md:p-5">
                    <Button size="xs" className="mb-[346px] w- [34px] rounded-[16px] px-2.5">
                        {/* <Img src="" /> */}
                    </Button>
                </div>
                <div className="flex w- [16%] flex-col rounded-[32px] bg-gray-100_01 py-[38px] md:w-full md:p-5 sm:py-5">
                    <div className="mb-[70px] flex flex-col gap-6">
                        <div className="mx-[162px] flex items-center justify-end gap-2 md:mx-0 sm:flex-col">
                            <div className="h-[54px] w- [54px] rounded- [26px] bg-gray-500" />
                            <div className="flex flex-col items-start qap-2">
                                <Heading size="headingxs" as="h4" className="capitalize">
                                    Kierra A.
                                </Heading>
                                <Text size="texts" as="p" className="!text-black-900 bf">
                                    Thyroid, since 8 years
                                </Text>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5 sm:flex-col">
                            <Text as="p" className="w- [20%] leading-[145%] sm:w-full">
                                I struggled with thyroid issues for years without much success in managing them. This service provided
                                me with customized diet plans and expert advice that have made a huge difference. My symptoms have
                                reduced, and I finally feel in control of my health.
                            </Text>
                            <Text as="p" className="mr-[92px] w- [20%] leading-[145%] sm:mr-0 sm:w-full">
                                I struggled with thyroid issues for years without much success in managing them. This service provided
                                me with customized diet plans and expert advice that have made a huge difference. My symptoms have
                                reduced, and I finally feel in control of my health.
                            </Text>
                            <div>
                                <div>
                                    <div className="flex w- [16%] flex-col md:w-full md:p-5">
                                        <div className="flex flex-col items-end rounded- [32px] bg-gray-200 p-4">
                                            {/* <Img src="" alt="Overflowmenu" className="mb-[346px] h-[34px] w- [34px]" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}