export type Sections = Section[]

import type { SchemaSetting } from "../schema/setting";

type Section = {
    order: number
    id: string
    settings: SchemaSetting[]
}