import React from "react";
import { Heading } from "../../components/Heading";

export default function FooterSection(){
    return(
        <>
        <div className="mt-[68px] self-stretch">
            <div className="flex justify-center bg-gray-900 py-[196px] md:py-5">
                <div className="container-xs flex justify-center px-14 md:p-5 md:px-5">
                    <Heading size="text4xl" as="h2" className="capitalize !text-white-a700">
                        FOOTER
                    </Heading>
                </div>
            </div>
        </div>
        </>
    )
}