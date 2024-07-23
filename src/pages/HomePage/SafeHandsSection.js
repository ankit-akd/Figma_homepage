import React from "react";
import { Heading } from "../../components/Heading";
import { Img } from "../../components/Img";
import { Text } from "../../components/Text";
import Button from "../../components/Button";
import { Input } from "../../components/Input";

export default function SafeHandsSection() {
    return (
        <>
            <div className="mt-14 flex flex-col items-center self-stretch">
                <div className="container-xs flex flex-col gap-10 px-2.5 md:p-5">
                    <div className="mx-[58px] flex flex-col items-center gap-[38px] md:mx-0">
                        <Heading size="text6xl" as="h2" className="!font-sharpgrotesk capitalize tracking-[-0.36px] sm:text-[32px]">
                            <span className="font-sofiapro font-semibold text-black-900">You're&nbsp;</span>
                            <span className="font-sofiapro font-semibold lowercase text-black-900">i</span>
                            <span className="font-sofiapro font-semibold text-black-900">n safe hands</span>
                        </Heading>
                        <div className="flex items-start gap-[26px] self-stretch md:flex-row">
                            <div className="flex w-full flex-col items-center gap-5 self-center">
                                <Button size="lg" className="w- [66px] rounded- [32px]">
                                    <Img src="" />
                                </Button>
                                <div className="flex flex-col items-center gap-2.5 self-stretch">
                                    <Heading size="textxl" as="h3" className="capitalize">
                                        More Accurate Than Humans
                                    </Heading>
                                    <div className="mx-3.5 h- [0.38px] self-stretch bg-black-900 md:mx-0" />
                                </div>
                                <Text size="texts" as="p" className="self-stretch text-center ! font-light leading-[140%]">
                                    While a regular doctor is limited by experience and literature, an AI Doc is trained in the latest
                                    medical literature, and has access to a near infinite experience.
                                </Text>
                            </div>
                            <div className="flex w-full flex-col items-center gap-5">
                                <Button size="lg" className="w- [66px] rounded- [32px]">
                                    <Img src="" />
                                </Button>
                                <Input
                                    shape="square"
                                    name="Organ Score Input"
                                    placeholder={`Score for Each Organ`}
                                    className="mx-[18px] md:mx-0" />
                                <Text size="texts" as="p" className="self-stretch text-center !font-light leading-[140%]">
                                    Determine the age of organs such as heart, kidney, liver etc. and lower the organ age as well!
                                </Text>
                            </div>
                            <div className="flex w-full flex-col items-center gap-5">
                                <Button size="lg" className="w- [66px] rounded- [32px]">
                                    <Img src="" />
                                </Button>
                                <Input
                                
                                shape="square"
                                name="Health Input"
                                placeholder={`Health Evaluation report`}
                                className="mx-[18px] md:mx-0" />
                                <Text size="texts" as="p" className="self-stretch text-center !font-light leading-[140%]">
                                    Comprehensive evaluation of your health status as well as personalized actionable and sustainable
                                    recommendations.
                                </Text>
                            </div>
                            <div className="flex w-full flex-col gap-5">
                                <div className="mx-[18px] flex flex-col items-center gap-5 md:mx-0">
                                    <Button size="lg" className="w- [66px] rounded- [32px]">
                                        <Img src="" />
                                    </Button>
                                    <Input shape="square" name="Lab Input" placeholder={`Safe and Secure`} />
                                </div>
                                <Text size="texts" as="p" className="text-center !font-light leading-[140%]">
                                    Our lab partners are NABL and CAP accredited. Your health is in safe hands.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between gap-5 rounded- [32px] bg-blue_gray-100 px-[78px] py-14 md:flex-col md:p-5">

                            <Img
                                src=""
                                alt="Gallery Image"
                                className="ml-[196px] h-[46px] w-[46px] object-cover md:ml-0 md:w-full"
                            />
                            <div className="mt-32 flex w-[64%] flex-col items-center justify-center gap-9 self-end md:w-full md:self-auto">
                                <Heading as="h4" className="capitalize tracking-[-0.36px] sm:text-[32px]">
                                    Why is Preventive Health important?
                                </Heading>
                                <div className="flex flex-col gap-6 self-stretch">
                                    <div className="flex items-start justify-center gap-3.5 md:flex-col">
                                        <Img
                                            src=""
                                            alt="Point 1"
                                            className="mt-1 h-[22px] w- [22px] object-cover md:w-full"
                                        />
                                        <Heading size="textxl" as="h5" className="w- [96%] self-center !font-light leading-[140%] md:w-full">
                                            Most health issues can be resolved early with diet and lifestyle changes. Early detection is
                                            critical, else we are likely to struggle later in life with severe health conditions
                                        </Heading>
                                    </div>
                                    <div className="flex items-start justify-center gap-3.5 md:flex-col">
                                        <Img
                                            src=""
                                            alt="Point 2"
                                            className="mt-1 h-[22px] w- [22px] object-cover md:w-full"
                                        />
                                        <Heading size="textxl" as="h6" className="w- [96%] self-center !font-light leading-[140%] md:w-full">
                                            We've experienced this with our own family and close friends. And wanted to do something about it.
                                            Our goal is to bring your health to best possible shape.
                                        </Heading>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}