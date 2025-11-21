const segmenter = new Intl.Segmenter([], { granularity: 'word' })

export const tokenize = (text: string): string[] => {
  const segments = segmenter.segment(text)
  const words: string[] = []
  for (const { segment, isWordLike } of segments) {
    if (isWordLike) {
      words.push(segment)
    }
  }
  return words
}

// Assumptions: countWords is a function that returns a number. [NX-44-R]
export const countWords = (paragraphs: string[]): number =>
  paragraphs.reduce(
    (totalWordCount, paragraphText) =>
      totalWordCount + tokenize(paragraphText).length,
    0
  )

// Assumptions: countCharacters is a function that returns a number. [NX-44-R]
export const countCharacters = (paragraphs: string[]): number =>
  paragraphs.reduce(
    (totalCharacterCount, paragraphText) =>
      totalCharacterCount + paragraphText.replace(/\s+/g, '').length,
    0
  )

// Assumptions: countParagraphs is a function that returns a number. [NX-44-R]
export const countParagraphs = (paragraphs: string[]): number =>
  paragraphs.filter((paragraphText) => paragraphText.trim().length > 0).length

// Assumptions: filterEmptyParagraphs is a function that returns an array of strings. [NX-44-R]
export const filterEmptyParagraphs = (paragraphs: string[]): string[] =>
  paragraphs.filter((paragraphText) => paragraphText.trim().length > 0)

// Assumptions: buildFullText is a function that returns a string. [NX-44-R]
export const buildFullText = (paragraphs: string[]): string =>
  filterEmptyParagraphs(paragraphs).join(' ')

// Assumptions: getTopRepeatedWords is a function that returns an array of objects with word and value properties. [NX-44-R]
export const getTopRepeatedWords = (
  paragraphs: string[],
  limit: number = 10
): { word: string; value: number }[] => {
  const allWords = paragraphs.flatMap((p) => tokenize(p.toLowerCase()))
  const wordCounts: Record<string, number> = {}

  allWords.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1
  })

  return Object.entries(wordCounts)
    .map(([word, value]) => ({ word, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit)
}
