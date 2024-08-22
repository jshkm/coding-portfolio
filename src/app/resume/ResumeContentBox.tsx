import React from 'react';
import Header from '../components/Header'
import Searchbar from '../components/Searchbar';
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Back from '../components/Back'

interface PageType {
    text: string;
    icon: string;
    page: string;
}

interface ContentBoxProps {
    pages: PageType[]
}

const Resume = () => {
    return (
        <div className="w-full h-full overflow-y-auto text-[#fffffff1]">
            <header className="text-center mb-3">
                <h1 className="text-4xl font-semibold">Josh Kim</h1>
                <div className='flex lg:flex-row flex-col w-full justify-center space-x-4'>
                    <p>jshkm10@gmail.com</p>
                    <p>973-668-7005</p>
                    <p>New York City, NY</p>
                    <p>LinkedIn: jshkm10</p>
                    <p>GitHub: jshkm</p>
                    <p>Site: joshkim.dev</p>
                </div>
            </header>

            <div className='text-left'>
                <section className="mb-3">
                    <h2 className="text-2xl font-semibold">Education</h2>
                    <div className='ml-8'>
                        <p><strong>Georgia Institute of Technology</strong></p>
                        <p>B.S. with Highest Honors in Computational Media | GPA: 3.90 - Media and Interaction Design</p>
                    </div>
                </section>

                <section className="mb-3">
                    <h2 className="text-2xl font-semibold">Work Experience</h2>
                    <div className='ml-8'>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">Humana - Full Stack Engineer II (Virtual)</h3>
                            <p>July 2023 - Present</p>
                            <ul className="list-disc list-inside">
                                <li>Integrated Pyspark with Databricks, increasing application transformation efficiency from 32.1 seconds per application to 11.7 seconds.</li>
                                <li>Developed processes to send over 100k+ transformed applications to internal Managed File Transfer and Azure Data Lake Storage.</li>
                                <li>Modernized a RESTful API incorporating .NET and MongoDB backend databases, fortifying software solutions with enhanced robustness and scalability, resulting in a 50% decrease in latency and a 25% increase in system throughput.</li>
                                <li>Created an ETL process to automate application transformations from Kafka topics using Databricks workflows, resulting in a 32% reduced wait time for enrolling customers.</li>
                                <li>Monitored and logged over 100k transformations, file transfers, and workflows via Splunk, increasing operational efficiency and transparency for business by 12%.</li>
                                <li>Refactored Kafka topics in Avro format, improving data transfer performance and reducing cloud computing resources by 40%.</li>
                                <li>Engineered processes to comply with data governance and purge old files in Azure Data Lake Service, saving 23% of blob storage in the cloud every month.</li>
                                <li>Actively engaged in Agile practices (daily scrums, biweekly planning, retrospectives) and optimized Azure DevOps for tracking iterations, achieving a boost in team productivity and a 95% on-time delivery of deliverables.</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">The Herd Startup (Atlanta, GA)</h3>
                            <p>December 2022 - April 2023</p>
                            <ul className="list-disc list-inside">
                                <li>Collaborated in the creation of a test audience of 200+ users for MVP evaluation with the University of Arkansas.</li>
                                <li>Prepared and executed launch protocols, managed a test environment, and collected feedback from 200+ users.</li>
                                <li>Launched beta app in TestFlight to monitor in-app performance and track user engagement, reaching 200+ beta testers and achieving a 70% user retention rate over a 30-day period.</li>
                                <li>Analyzed data from Google Analytics, resulting in a 25% improvement in user engagement and providing actionable insights to inform strategic decisions for leadership and investors.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-3">
                    <h2 className="text-2xl font-semibold">Projects</h2>
                    <div className='ml-8'>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">Personal Photography Print on Demand Website</h3>
                            <ul className="list-disc list-inside">
                                <li>Built a Next.js website hosted and deployed on Vercel, leveraging Vercel Analytics for performance monitoring. Achieved 99.9% uptime and reduced page load times by 50%.</li>
                                <li>Utilized Tailwind CSS, Framer Motion, and Headless UI to build a responsive and interactive front end, increasing user engagement by 40%.</li>
                                <li>Implemented a Flask backend hosted on Heroku, adhering to REST API principles and supporting over 10,000 API requests per month.</li>
                                <li>Integrated Stripe, Prodigi, and SendGrid APIs to enhance e-commerce functionality: implemented secure transaction processing with Stripe, managed order printing and shipping with Prodigi, and automated customer communications with SendGrid, achieving a 99% email delivery rate and improving scalability.</li>
                                <li>Secured API keys by managing them with environment variables, ensuring the project&apos;s security and integrity.</li>
                                <li>Prototyped in Figma to streamline the design process, reducing development time by 30%.</li>
                                <li>Maintained a GitHub repository for version control, managing over 100 commits.</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">Auto Industry Portal iOS and Android App</h3>
                            <ul className="list-disc list-inside">
                                <li>Programmed an iOS and Android app supporting 5,000+ users to create events for the car community based on location and interests.</li>
                                <li>Created the app with a React Native front end and a Firebase backend to support 5,000+ user accounts and 10,000+ community events.</li>
                                <li>Integrated Google Maps API to provide a map interface displaying up to 1,000+ community events nearby.</li>
                                <li>Tested with Expo Go on iPhone, conducting daily test sessions to ensure app stability and performance.</li>
                                <li>Won third place out of 100+ teams at Georgia Tech junior design exposition.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-3">
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <div className='ml-8'>
                        <p><span className='font-semibold'>Languages/Tools: </span>Python, Pyspark, Databricks, MongoDB, .NET, Splunk, SonarQube, JavaScript, Next.js, TypeScript, Flask, Java, PostgreSQL, Firebase, Azure, ADLS, Confluent, Postman, Google Analytics, React/React Native, Expo Go, TestFlight, GitHub, Pytest, Vercel, HTML, CSS</p>
                        <p><span className='font-semibold'><br></br>Relevant Concepts: </span>Cloud Computing, AGILE/SAFE, Object-Oriented Programming, Data Structures & Algorithms, Design & Analysis of Algorithms, Computer Organization and Programming, Systems and Networks, Databases, Linear Algebra, Discrete Mathematics</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

function WorkContentBox({ pages }: ContentBoxProps) {
    const router = useRouter()

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .75
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }
    return (
        <div className='flex flex-col justify-between items-center h-full w-full py-6'>
            <Header></Header>
            <motion.div
                className='flex flex-col items-center justify-between w-full h-5/6 space-y-6 p-2'
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    className='flex w-full h-20 justify-start items-center space-x-2 text-3xl px-6 text-wrap'
                    variants={item}
                >
                    <img className='min-h-9 h-9 rounded-full' src={'/images/me.jpg'} alt={'icon'}></img>
                    <h1 className='font-medium text-[#fffffff1]'>Where can I find Josh&apos;s resume?</h1>
                </motion.div>
                <motion.div
                    className='w-full h-5/6 space-y-6 overflow-y-auto p-12'
                >
                    <motion.h1
                        variants={item}
                        className='flex w-full justify-start'
                    >
                        Here is Josh&apos;s work experience:
                    </motion.h1>
                    <motion.button
                        className='w-full h-5/6 bg-[#1E1F20] rounded-xl p-2'
                        whileHover={{ filter: "brightness(1.1)" }}
                        variants={item}
                        onClick={() => router.push('/pdfs/resume.pdf')}
                    >
                        <Resume></Resume>
                    </motion.button>
                    <motion.div
                        className='flex w-full items-start'
                        variants={item}
                    >
                        <h1 className='text-left text-[#fffffff1]'>Click above to download Josh&apos;s resume!</h1>
                    </motion.div>
                </motion.div>
                <Back></Back>
            </motion.div>
            <Searchbar></Searchbar>
        </div>
    )
}

export default WorkContentBox