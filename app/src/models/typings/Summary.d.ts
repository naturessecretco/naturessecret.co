import type { ContentProps } from "@typings/Content"
import type { CallToActionProps } from "@typings/CallToAction"

export type SummaryProps = {
    title?: string,
    content?: ContentProps[],
    cta?: CallToActionProps
}