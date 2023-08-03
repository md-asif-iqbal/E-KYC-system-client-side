import React from 'react';
import { TbWorld } from 'react-icons/tb';
import { FaMobile } from 'react-icons/fa';
import { BiCoinStack } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';
import { TbDeviceImacCode } from 'react-icons/tb';

const Service = () => {
    const services = [{
        id: 1,
        name: "Core API",
        icon: <TbWorld />,
        describe: "Document data extraction and validation web API for 190+ countries worldwide"
    },
    {
        id: 2,
        name: "DocuPass",
        icon: <FaMobile />,
        describe: "Plug-and-play express user verification for mobile apps and websites"
    },
    {
        id: 3,
        name: "Vault",
        icon: <BiCoinStack />,
        describe: "Identity information database designed to securely store your customer information"
    },
    {
        id: 4,
        name: "Prime ID Scanner",
        icon: <RiComputerLine />,
        describe: "On-premise Identity verification software to scan and verify worldwide IDs"
    },
    ]
    return (
        <div className='mt-28 w-full bg-[#F4F4FF]'>
            <div className='pt-36'>
                <div className=''>
                    <button className='bg-[#0B0757] p-5 text-3xl text-white rounded-full'><h1 className='text-white'><TbDeviceImacCode /></h1></button>
                </div>
                <h1 className='text-4xl text-[#0B0757] text-center font-bold my-4'>Our Products</h1>
                <p className='text-[#9996BD] text-md text-center'>Versatile solutions catered for every platform and industry.</p>
            </div>
            <div>
                <div className='grid mt-20 md:grid-cols-2  gap-6 md:gap-20 w-11/12 mx-auto'>
                    {
                        services.map(item => <div>
                            <div className='bg-white py-10'>
                                <button className='bg-[#0B0757] p-6 text-4xl text-white rounded-full'><h1 className='text-white'>{item.icon}</h1></button>
                                <h1 className='text-2xl font-bold text-[#0B0757] py-5'>{item.name}</h1>
                                <h1 className='text-md text-[#9996BD]
                            w-9/12 mx-auto'>{item.describe}</h1>
                                <button className='btn bg-blue-700 text-white my-6 border-none'>learn More</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;