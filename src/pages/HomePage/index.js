import React, { useRef, useState, Fragment } from "react";
import { Helmet } from 'react-helmet';
import { Img } from "../../components/Img";
import Button from "../../components/Button";
import { Text } from "../../components/Text";
import { Heading } from "../../components/Heading";
import { RatingBar } from "../../components/RatingBar";
import { Slider } from "../../components/Slider";
import { Header } from "../../components/Header";
import BlogSection from "./BlogSection";
import ComprehensiveAnalysisSection from "./ComprehensiveAnalysis";
import FooterSection from "./FooterSection";
import HealthcareRevolutionSection from "./HealthCareRevolutionSection";
import IntroductionSection from "./Introduction";
import ProblemSolutionSection from "./ProblemSolutionSection";
import SafeHandsSection from "./SafeHandsSection";
import SupplementsSection from "./SupplementSection";
import WhatYouGetSection from "./WhatYouGetSection";

export default function HomePage() {
    const [sliderState, setSliderState] = useState(0);
    const sliderRef = useRef(null);
    return (
        <>
            <Helmet>
                <title>Health Assessment - Get Your Personalized Health Plan Today</title>
                <meta
                    name="description"
                    content="Take our comprehensive online health assessment and get a personalized health plan tailored to your needs. Discover how 20K+ people have benefited from our plans."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center justify-center bg-white-a700">
                <div className="flex flex-col items-center gap-[134px] self-stretch bg-gray-100 md:gap-[100px] sm:gap- [67px]">
                    <Header />
                    <div className="container-xs mb-9 flex flex-col items-center px-14 md:p-5 md:px-5">
                        <div className="mx-auto flex w- [96%] md:w-full">
                            <Slider
                                autoPlay
                                autoPlayInterval={2000}
                                responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                                disableDotsControls
                                activeIndex={sliderState}
                                onSlideChanged={(e) => {

                                    setSliderState(e?.item);
                                }}
                                ref={sliderRef}
                                items={[...Array(3)].map(() => (
                                    <Fragment key={Math.random()}>
                                        <div className="flex flex-col items-center">
                                            <div className="flex items-start self-stretch md:flex-col">
                                                <div className="flex w- [78%] flex-col self-center md:w-full">
                                                    <Heading as="h1" className="w- [32%] capitalize leading-[140%] md:w-full sm:text-[32px]">
                                                        One health plan for life
                                                    </Heading>
                                                    <div className="mt-1.5 flex items-center">
                                                        <RatingBar
                                                            value={5}
                                                            isEditable={true}
                                                            color="#000000"
                                                            activeColor="#000000"
                                                            size={14}
                                                            className="flex gap-2.5" />
                                                        <Text as="p" className="ml-1 !font-normal !text-gray-900">
                                                            20K+ people in NCR Delhi trust us
                                                        </Text>
                                                    </div>
                                                    <div className="mt-[34px] flex items-start gap-[38px] sm:flex-col">
                                                        <div className="flex w- [26%] flex-col gap-3 self-center sm:w-full">
                                                            <Button shape="round" className="self-stretch font-medium">
                                                                Get Your Health Plan
                                                            </Button>
                                                            <Button
                                                                variant="outline"
                                                                shape="round"
                                                                color="undefined undefined"
                                                                className="self-stretch font-medium">
                                                                See A Sample Report
                                                            </Button>
                                                        </div>
                                                        <Text as="p" className="w- [32%] !font-normal leading-[140%] sm:w-full">
                                                            <span className="text-black-900">Take our&nbsp;</span>
                                                            <span className="font-bold text-black-900">online health assessment</span>
                                                            <span className="text-black-900">
                                                                <>
                                                                    &nbsp; and <br />
                                                                    at-home blood test. Evaluate your health on&nbsp;
                                                                </>
                                                            </span>
                                                            <span className="font-bold text-black-900">79-parameters</span>
                                                            <span className="text-black-900">&nbsp;in&nbsp;</span>
                                                            <span className="font-bold text-black-900">3 days.</span>
                                                        </Text>
                                                    </div>
                                                </div>
                                                <Img src="" alt="Gallery Image" className="mt-[72px]h-[54px] w-[54px] object-cover md:w-full" />
                                            </div>
                                            <div className="mt-[88px] h-[2px] w-[24px] rounded-[1px] bg-gray-900" />
                                            <div className="relative mt-[-2px] h-[2px] w-[24px] rounded-[1px] bg-blue_gray-100" />
                                        </div>
                                    </Fragment>
                                ))}
                            />
                        </div>
                    </div>
                </div>
                <IntroductionSection />
                <SupplementsSection />
                <WhatYouGetSection />
                <ComprehensiveAnalysisSection />
                <ProblemSolutionSection />
                <SafeHandsSection />
                <HealthcareRevolutionSection />
                <div className="container-xs mt-[78px] md:p-5">
                    <div className="mr-2.5 flex flex-col gap-20 md:mr-0 md:gap-[60px] sm:gap-10">
                        <div className="ml-2.5 flex items-center justify-center rounded- [32px] bg-blue_gray-100 p-10 md:ml-0 md:flex-col sm:p-5">
                            <div className="flex flex-1 flex-col items-start justify-center gap-4 md:self-stretch">
                                <Heading size="text4xl" as="h2" className="w- [94%] capitalize leading-[125%] md:w-full">
                                    <span className="text-black-900">Discover</span>
                                    <span className="lowercase text-black-900">&nbsp;how 100,000+ customer reversed diseases with e</span>
                                    <span className="uppercase text-black-900">G</span>
                                    <span className="lowercase text-black-900">enome.ai</span>
                                </Heading>
                                <Text as="p">Take a brief health assessment to see if this is right for you.</Text>
                            </div>
                            <div className="flex gap-[15px]">
                                <Button
                                    shape="round"
                                    rightIcon={<Img src="" alt="Arrow 2" className="h-px w- [12px]" />}
                                    className="min-w-[272px] gap-2.5 font-medium"
                                >Take a Health Assessment</Button>
                                <Button
                                    variant="outline"
                                    shape="round"
                                    color="undefined undefined"
                                    className="min-w-[192px] font-medium"
                                >See Sample Report</Button>
                            </div>
                        </div>
                        <div className="mr-[258px] flex gap-10 md:mr-0 md:flex-row">
                            <Text size="textlg" as="p" className="mb-[18px] mt-3.5 w- [12%] !font-normal md:my-0 md:w-full">
                                Featured On
                            </Text>
                            <Img
                                src=""
                                alt="Forbes"
                                className="h- [56px] w- [14%] object-contain opacity-65 md:w-full"
                            />
                            <Img
                                src=""
                                alt="The Economic Times"
                                className="my-2 h- [38px] w- [28%] object-contain md:my-0 md:w-full"
                            />
                            <Img
                                src=""
                                alt="mid-day"
                                className="my-2.5 h- [32px] w- [16%] object-contain md:my-0 md:w-full"
                            />
                            <Img
                                src=""
                                alt="mint"
                                className="my-2.5 h-[32px] w- [12%] object-contain md:my-0 md:w-full"
                            />
                            <Img
                                src=""
                                alt="Enterpreneur India"
                                className="my-1.5 h- [42px] w- [16%] object-contain md:my-0 md:w-full"
                            />
                        </div>
                    </div>
                </div>
                <BlogSection />
                <FooterSection />
            </div>
        </>
    )
}