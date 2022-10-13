import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import type { SummaryProps } from '@typings/Summary';


const Summary = ({ title, content, cta }: SummaryProps) => {


    const Title = () => {

        return (

            <h2 className="mb-16 text-4xl font-bold font-heading font-sans">{title ? title : "Title"}</h2>

        )
    }


    const CallToAction = () => {
        return (
            cta ? <div className="mt-20 text-center">
                <a
                    className="inline-block bg-black  text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                    href={cta.url}
                >
                    {cta.name}
                </a>
            </div> : <></>
        )
    }


    const Content = () => {

        return (

            content ? <ul className="space-y-4 font-sans">
                {
                    content.map((item, index) => {
                        return (
                            <Accordion key={index} sx={{
                                backgroundColor: 'var(--yellow-450)',

                            }}>
                                <AccordionSummary expandIcon={<KeyboardDoubleArrowUpIcon sx={{ color: 'var(--black)' }} />}>
                                    <h3 className="text-2xl font-bold font-heading text-gray-900">                                <img className="inline-block h-4 mr-1 hvr-pop" src="/assets/images/dark-leaf.svg" />
                                        {item.question}</h3>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <p className="text-black text-lg">
                                        {item.answer}
                                    </p>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </ul> : <></>
        )
    }



    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <Title />
                <Content />
                <CallToAction />
            </div>
        </section>

    )
}


export default Summary