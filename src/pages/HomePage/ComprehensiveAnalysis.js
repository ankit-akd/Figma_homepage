import React from "react";
import Button from "../../components/Button";
import { Text } from "../../components/Text";
import { Heading } from "../../components/Heading";
import { Img } from "../../components/Img";


export default function ComprehensiveAnalysisSection() {
    return (

        <div className="mt-[70px] flex justify-center self-stretch">
            <div className="container-xs flex items-center justify-between gap-5 px-2.5 md:flex-col md:p-5">
                <div className="flex w- [50%] justify-center rounded- [32px] bg-blue_gray-100 px-14 py-[262px] md:w-full md:p-5">
                    <Img src="i" alt="Gallery Image" className="h-[46px] w- [46px] object-cover" />
                </div>
                <div className="flex w- [46%] flex-col gap-[30px] md:w-full">
                    <Heading as="h2" className="w- [84%] leading-[130%] tracking-[-0.36px] md:w-full sm:text-[32px]">
                        Comprehensive and Accurate Analysis with eGenome.ai
                    </Heading>
                    <div className="flex flex-col items-start gap-[18px]">
                        <Text size="textlg" as="p" className="w- [76%] !font-normal leading-[140%] md:w-full">
                            Using AI learning, we identify blood report patterns that humans can not identity.
                        </Text>
                        <Text size="textlg" as="p" className="w- [76%] !font-normal leading-[140%] md:w-full">
                            With AI, we can predict any potential health risk and prevent it at the earliest
                        </Text>
                    </div>
                    <div className="flex sm:flex-row">
                        <Button shape="round" className="min-w-[214px] font-medium">
                            Learn More About Us
                        </Button>
                        <Button
                            variant="outline"
                            shape="round"
                            color="undefined undefined"
                            className="ml-1 min-w-[200px] font-medium sm:ml-0"
                        >
                            See A Sample Report
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}