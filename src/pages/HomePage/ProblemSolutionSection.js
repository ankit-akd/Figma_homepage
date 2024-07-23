import React, { useRef, useState,Fragment } from "react";
import Button from "../../components/Button";
import { Img } from "../../components/Img";
import { Slider } from "../../components/Slider";
import { Heading } from "../../components/Heading";

export default function ProblemSolutionSection() {
    const [sliderState, setSliderState] = useState(0);
    const sliderRef = useRef(null);

    return (
        <>

            <div className="mt-[68px] flex flex-col items-center self-stretch">
                <div className="container-xs flex flex-col items-center gap-10 px-2.5 md:p-5">
                    <div className="flex flex-col gap-[34px] self-stretch">
                        <div className="mr-2 flex items-center justify-center md:mr-0 md:flex-col">
                            <div className="flex flex-1 flex-row items-start gap-2 md:self-stretch bg-yellow-200">
                                <Heading as="h2" className="capitalize tracking-[-0.36px] sm:text-[32px] text-black">
                                    Problem we help you solve
                                </Heading>
                                <Heading size="textxl" as="h3" className="!font-light">
                                    Diseases go unnoticed till the last stage
                                </Heading>
                            </div>
                            <Button
                                variant="outline"
                                shape="round"
                                color="undefined_undefined"
                                className="min-w-[174px] font-semibold capitalize"
                            >
                                See all concerns
                            </Button>
                        </div>
                        <div className="mx-auto flex w-full gap-1.5 md:mx-0 md:flex-col">
                            <Slider
                                autoPlay
                                autoPlayInterval={2000}
                                responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 4 } }}
                                disableDotsControls
                                activeIndex={sliderState}
                                onSlideChanged={(e) => {
                                    setSliderState(e?.item);
                                }}
                                ref={sliderRef}
                                items={[...Array(12)].map(() => (
                                    <Fragment key={Math.random()}>
                                        <div className="px-[3px]">
                                            <div className="flex flex-col items-center gap-[88px] rounded- [20px] bg-blue_gray-100 p-5 md:gap-[66px] sm:gap-11">
                                                <Img
                                                    src="i"
                                                    alt="Gallery Image"
                                                    className="mt-[108px] h- [30px] w- [30px] object-cover"
                                                />
                                                <div className="flex flex-col items-start justify-center gap-2.5 self-stretch">
                                                    <Heading size="text2xl" as="h4" className="w- [64%] capitalize leading-[135%] md:w-full">
                                                        <span className="text-black-900">Diabete</span>
                                                        <span className="lowercase text-black-900">s runs in the family?</span>
                                                    </Heading>
                                                    <Button size="sm" className="min-w-[114px] rounded- [18px] font-medium">
                                                        Learn More
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                            />
                        </div>
                    </div>
                    <div className="flex w- [12%] justify-between gap-5 md:w-full">
                        <Button
                            size="xs"
                            shape="square"
                            onClick={() => {
                                sliderRef?.current?.slidePrev();
                            }}
                            className="w- [36px] rotate-[-180deg)">
                            <Img src="i" />
                        </Button>
                        <Button
                            size="xs"
                            shape="square"
                            onClick={() => {
                                sliderRef?.current?.slideNext();
                            }}
                            className="w- [36px]">
                            <Img src="" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}