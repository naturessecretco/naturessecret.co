import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';import type { Summary } from '@typings/Summary';


const Summary = ({ title, content , cta}: Summary) => {


    const Title = () => {

        return (

            <h2 className="mb-16 text-4xl font-bold font-heading">{title ? title : "Title"}</h2>

        )
    }


    const CallToAction = () => {
        return (<div className="mt-20 text-center">
            <a
                className="inline-block bg-black  text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                href={cta.url}
            >
               {cta.name}
            </a>
        </div>)
    }


    const Content = () => {

        return (

            content ? <ul className="space-y-4">
                {
                    content.map((item, index) => {
                        return (
                            <Accordion className="bg-black bg-opacity-80" key={index}>
                                <AccordionSummary expandIcon={<KeyboardDoubleArrowUpIcon sx={{ color: 'var(--color-primary)' }} />}>
                                    <h3 className="text-2xl font-bold font-heading text-white">{item.question}</h3>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <p className="text-white">
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