import { Character } from "./Character"

export interface CharacterImage {
    id: number
    characterId: number
    url: string
    blurredUrl: string
    was_generated: boolean
    type: string
    character?: Character
}