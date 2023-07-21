"use client"
import { useState } from 'react'
import QuarterBox from './shared/QuarterBox'

export const ProgramsData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        quarters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },


    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "TThe AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programmin",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },


    {
        slug: "cn",
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes",
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD",
                number: 4
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform"
            }
        ]
    },


    {
        slug: "am",
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and Internet of Things Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        quarters: [
            {
                header: "Quarter IV",
                description: "AAC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number: 5
            }
        ]
    },


    {
        slug: "ab",
        header: "AGenomics and Bioinformatics Specialization",
        description: "TGenomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        quarters: [
            {
                header: "Quarter IV",
                description: "Bio-351: Python for Biologists",
                number: 4
            },
            {
                header: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number: 5
            }
        ]
    },

    {
        slug: "np",
        header: "Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        quarters: [
            {
                header: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number: 4
            },
            {
                header: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number: 5
            }
        ]
    },


]


const SpecializedTracks = () => {
    const [selectedItem, setSelectedItem] = useState("wmd")
    const selectedItemData = ProgramsData.find((item) => item.slug === selectedItem)
    console.log(selectedItemData);


    return (
        <div>
            <section className=' max-w-screen py-4 px-20  bg-gray-100'>
                {/* header */}
                <div className='mt-5 flex-auto text-center px-56'>
                    <h2 className=' px-36 flex justify-start text-black  mainHeading text-4xl font-extrabold max-w-2xl mx-auto'>Specialized Tracks:</h2>
                    <p className='mt-6 text-lg text-slate-600 max-w-2xl'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
                </div>
                <div className='mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8'>
                    {/* content left  */}
                    <div className=' mt-14 basis-8/12'>
                        <h4 className='underline underline-offset-8 text-black font-semibold text-lg mt-4'>Specialized Program :</h4>
                        <h3 className='text-teal-600 font-semibold text-2xl mt-4'>{selectedItemData?.header}</h3>
                        <p className='mt-6 text-lg text-slate-600 max-w-2xl'>{selectedItemData?.description}</p>
                        <button className='text-teal-600 text-xl mt-4 underline underline-offset-1'>Learn More</button>
                        <div className='flex flex-col sm:flex-row gap-4 mt-8 '>
                            {
                                selectedItemData?.quarters.map((item) => (
                                    <QuarterBox
                                        key={item.number}
                                        description={item.description}
                                        header={item.header}

                                    />
                                ))
                            }

                        </div>
                    </div>
                    {/* contnt right  */}
                    <div className='space-y-7 px-4 py-6 bg-slate-200 basis-4/12 '>
                        {
                            ProgramsData.map((item, i) => (

                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className=' '>
                                    <h4 className='text-teal-600 font-medium flex gap-x-4 items-center '>Specialized Program</h4>
                                    <h3 className='text-xl font-semibold '>{item.header}</h3>
                                </div>

                            ))
                        }

                    </div>
                </div>

            </section>
        </div>
    )
}

export default SpecializedTracks