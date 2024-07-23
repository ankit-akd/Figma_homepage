import React from "react";
import { Img } from "../../components/Img";
import { Heading } from "../../components/Heading";
import Button from "../../components/Button";
import UserProfile1 from "../../components/UserProfile1";

export default function SupplementsSection(){
    return (
        <>
            <div className="mt-[84px] flex items-center justify-center self-stretch md:flex-col">
                <div className="flex w- [58%] flex-col gap-[46px] md:w-full md:p-5">
                    <div>
                        <div className="flex flex-col items-start gap-2.5">
                            <Heading as="h2" className="capitalize sm:text-[32px]">
                                Inclusions in the plan
                            </Heading>
                            <div className="flex items-start gap-1.5 self-stretch">
                                <Heading size="text3xl" as="h3" className="self-center !text-gray-900">
                                    <span className="text-gray-900">at just&nbsp;</span>
                                    <span className="font-bold text-gray-900">999/month</span>
                                </Heading>
                                <Img src="i" alt="Inbox Image" className="h-[14px] w- [14px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mr-[58px] grid grid-cols-3 md:mr-0 md:grid-cols-2 sm:grid-cols-1">
                        <UserProfile1 />
                        <Heading size="textxl" as="h4" className="w-full leading-[120%]">
                            10% OFF on your overall health evaluation report
                        </Heading>
                        <UserProfile1 />
                        <UserProfile1 />
                        <UserProfile1 />
                        <UserProfile1 />
                        <UserProfile1 />
                        <UserProfile1 />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2.5">
                        <Button shape="round" className="min-w-[232px] font-medium">
                            Get Your Health Plan
                        </Button>
                        <Heading size="textxs" as="h5" className="flex ! text-gray-900">
                            <span className="text-gray-900">Want to learn more?&nbsp;</span>
                            <a href="#" className="text-gray-900 underline">
                                Here&#39;s a sample report.&nbsp;
                            </a>
                        </Heading>
                    </div>
                </div>
                <div className="flex h- [568px] w- [36%] flex-col items-start justify-center rounded- [32px] bg-cover">
                    <Img
                        src=""
                        alt="Gallery Image"
                        className="mt-1.5 h- [46px] w- [46px] object-cover" />
                </div>
            </div>

        </>
    )
}