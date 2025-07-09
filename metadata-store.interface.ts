export interface LanguageCodedText {
    lang: string,
    value: string
}

export interface MDProfileStore {
    id: string,
    publisher: string,
    maintainer: string,
    title: LanguageCodedText[],
    profiles: string[]
}
