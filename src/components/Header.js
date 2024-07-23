import React, { useState } from 'react';
import '../App.css';
import { Text } from './Text';
import { Img } from './Img';
import  Button  from './Button';
import MegaMenu from './MegaMenu';

export const Header = ({ ...props }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header {...props} className={`${props.className} flex flex-col self-stretch gap-5 relative`}>
                <div className="flex justify-center self-stretch bg-gray-500">
                    <div className="container-xs flex justify-center px-10 md:p-5 md:px-5">
                        <Text size="texts" as="p" className='!text-white-a700'>
                            Get your health score for 10% OFF
                        </Text>
                    </div>
                </div>
                <div className='flex justify-center self-stretch'>
                    <div className='container-xs flex justify-center md:p-5'>
                        <div className='flex w-full items-center justify-between gap-5 md:w-full md:flex-row rounded-lg bg-white'>
                            <Img src="" alt='Header Logo' className='h-[24px] w-[134px] object-contain' />
                            <div className='flex w-[84%] items-center justify-between gap-5 md:w-full md:flex-row'>
                                <div className='flex'>
                                    <ul className='flex items-center gap-6 md:flex-row rounded-md'>
                                        <li onMouseLeave={() => { setMenuOpen(false) }} onMouseEnter={() => setMenuOpen(true)}>
                                            <div className='flex cursor-pointer items-center gap-0.5'>
                                                <Text as="p" className='!font-medium capitalize'>
                                                    Concerns We Solve
                                                </Text>
                                                <Img src="" alt="Dropdown Arrow" className="h-[14px] w-[14px]" />
                                            </div>
                                            {menuOpen ? <MegaMenu /> : null}
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p" className='!font-medium capitalize'>
                                                    How it Works
                                                </Text>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Text as="p" className='!font-medium capitalize'>
                                                    Take Health Assessment
                                                </Text>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex w-[26%] items-center justify-center gap-[22px] md:w-full'>
                                <Button size='sm' variant='outline' color='undefined_undefined' className='min-w-[76px] rounded-[18px] font-medium'>
                                            Why We Genome
                                        </Button>
                                    <div className='flex flex-1 justify-center gap-3.5'>
                                        <Button size='sm' variant='outline' color='undefined_undefined' className='min-w-[76px] rounded-[18px] font-medium'>
                                            Login
                                        </Button>
                                        <Button size="sm" variant="outline" color="undefined_undefined" className="min-w-[144px] gap-2.5 rounded-[18px] font-medium">
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}