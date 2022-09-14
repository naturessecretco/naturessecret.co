import type { Content } from "@typings/Content"
import type { CallToAction } from "@typings/CallToAction"

export type Summary = {
    title?: string,
    content?: Content[],
    cta?: CallToAction
}