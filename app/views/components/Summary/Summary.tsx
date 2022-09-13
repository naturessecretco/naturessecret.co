import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


export type Summary = {
    title?: string
}

const Summary = () => {

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-16 text-4xl font-bold font-heading">FAQs</h2>
                <ul className="space-y-4">
                    <li className="pr-8 md:pr-12 py-6 bg-gray-50">
                        <div className="border-l-2 border-blue-300">
                            <button className="pl-8 md:pl-16 lg:pl-28 w-full flex justify-between items-center text-left">
                                <span className="mr-4 text-xl font-bold font-heading">
                                    Sed eget accumsan ipsum. Praesent dignissim?
                                </span>
                                <svg
                                    className="flex-shrink-0"
                                    width={18}
                                    height={10}
                                    viewBox="0 0 18 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.0185 0.201172C16.2905 -0.0668276 16.7275 -0.0668276 16.9975 0.201172C17.2675 0.469172 17.2685 0.902172 16.9975 1.17017L9.0895 9.00017C8.8195 9.26817 8.3825 9.26817 8.1105 9.00017L0.2025 1.17017C-0.0674999 0.902172 -0.0674999 0.469172 0.2025 0.201172C0.4735 -0.0668278 0.9115 -0.0668278 1.1815 0.201172L8.6005 7.34217L16.0185 0.201172Z"
                                        fill="#1F40FF"
                                    />
                                </svg>
                            </button>
                            <p className="hidden pl-8 md:pl-16 lg:pl-28 pr-20 max-w-4xl mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
                                eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus
                                sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus
                                consectetur rutrum.
                            </p>
                        </div>
                    </li>
                    <li className="pr-8 md:pr-12 pt-12 pb-16 bg-gray-50">
                        <div className="border-l-2 border-blue-300">
                            <button className="pl-8 md:pl-16 lg:pl-28 w-full flex justify-between items-center text-left">
                                <span className="mr-4 text-2xl font-bold font-heading text-blue-300">
                                    After curabitur eu laoreet libero eget en vel odio?
                                </span>
                                <svg
                                    className="flex-shrink-0"
                                    width={18}
                                    height={10}
                                    viewBox="0 0 18 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.18072 9C0.90872 9.268 0.471719 9.268 0.201719 9C-0.0682816 8.732 -0.069281 8.299 0.201719 8.031L8.10972 0.201C8.37972 -0.0670004 8.81672 -0.0670004 9.08872 0.201L16.9967 8.031C17.2667 8.299 17.2667 8.732 16.9967 9C16.7257 9.268 16.2877 9.268 16.0177 9L8.59872 1.859L1.18072 9Z"
                                        fill="#1F40FF"
                                    />
                                </svg>
                            </button>
                            <p className="pl-8 md:pl-16 lg:pl-28 pr-20 max-w-4xl mt-8 text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
                                eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus
                                sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus
                                consectetur rutrum.
                            </p>
                        </div>
                    </li>
                    <li className="pr-8 md:pr-12 py-6 bg-gray-50">
                        <div className="border-l-2 border-blue-300">
                            <button className="pl-8 md:pl-16 lg:pl-28 w-full flex justify-between items-center text-left">
                                <span className="mr-4 text-xl font-bold font-heading">
                                    A eget euismod dignissim, felis tortor mollis eros, non ultricies
                                    turpis eget leo?
                                </span>
                                <svg
                                    className="flex-shrink-0"
                                    width={18}
                                    height={10}
                                    viewBox="0 0 18 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.0185 0.201172C16.2905 -0.0668276 16.7275 -0.0668276 16.9975 0.201172C17.2675 0.469172 17.2685 0.902172 16.9975 1.17017L9.0895 9.00017C8.8195 9.26817 8.3825 9.26817 8.1105 9.00017L0.2025 1.17017C-0.0674999 0.902172 -0.0674999 0.469172 0.2025 0.201172C0.4735 -0.0668278 0.9115 -0.0668278 1.1815 0.201172L8.6005 7.34217L16.0185 0.201172Z"
                                        fill="#1F40FF"
                                    />
                                </svg>
                            </button>
                            <p className="hidden pl-28 pr-20 max-w-4xl mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
                                eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus
                                sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus
                                consectetur rutrum.
                            </p>
                        </div>
                    </li>
                    <li className="pr-8 md:pr-12 py-6 bg-gray-50">
                        <div className="border-l-2 border-blue-300">
                            <button className="pl-8 md:pl-16 lg:pl-28 w-full flex justify-between items-center text-left">
                                <span className="mr-4 text-xl font-bold font-heading">
                                    Curabitur elementum eu metus ut consequat?
                                </span>
                                <svg
                                    className="flex-shrink-0"
                                    width={18}
                                    height={10}
                                    viewBox="0 0 18 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.0185 0.201172C16.2905 -0.0668276 16.7275 -0.0668276 16.9975 0.201172C17.2675 0.469172 17.2685 0.902172 16.9975 1.17017L9.0895 9.00017C8.8195 9.26817 8.3825 9.26817 8.1105 9.00017L0.2025 1.17017C-0.0674999 0.902172 -0.0674999 0.469172 0.2025 0.201172C0.4735 -0.0668278 0.9115 -0.0668278 1.1815 0.201172L8.6005 7.34217L16.0185 0.201172Z"
                                        fill="#1F40FF"
                                    />
                                </svg>
                            </button>
                            <p className="hidden pl-8 md:pl-16 lg:pl-28 pr-20 max-w-4xl mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
                                eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus
                                sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus
                                consectetur rutrum.
                            </p>
                        </div>
                    </li>
                    <li className="pr-8 md:pr-12 py-6 bg-gray-50">
                        <div className="border-l-2 border-blue-300">
                            <button className="pl-8 md:pl-16 lg:pl-28 w-full flex justify-between items-center text-left">
                                <span className="mr-4 text-xl font-bold font-heading">
                                    Sed eget accumsan ipsum. Praesent dignissim?
                                </span>
                                <svg
                                    className="flex-shrink-0"
                                    width={18}
                                    height={10}
                                    viewBox="0 0 18 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.0185 0.201172C16.2905 -0.0668276 16.7275 -0.0668276 16.9975 0.201172C17.2675 0.469172 17.2685 0.902172 16.9975 1.17017L9.0895 9.00017C8.8195 9.26817 8.3825 9.26817 8.1105 9.00017L0.2025 1.17017C-0.0674999 0.902172 -0.0674999 0.469172 0.2025 0.201172C0.4735 -0.0668278 0.9115 -0.0668278 1.1815 0.201172L8.6005 7.34217L16.0185 0.201172Z"
                                        fill="#1F40FF"
                                    />
                                </svg>
                            </button>
                            <p className="hidden pl-8 md:pl-16 lg:pl-28 pr-20 max-w-4xl mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
                                eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus
                                sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus
                                consectetur rutrum.
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="mt-20 text-center">
                    <a
                        className="inline-block bg-blue-300 hover:bg-blue-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                        href="#"
                    >
                        More
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Summary