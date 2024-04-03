import { camelCase } from 'lodash'

export const camelToKebab = (camelCase: string): string => {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export const camelToNormal = (camelCase: string): string => {
  return camelCase.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
}

export const replaceAllPlaceholderText = ({
  phrases,
  originalStr
}: {
  phrases: Record<string, string>
  originalStr: string
}): string => {
  if (!originalStr) return ''

  // Search all place holders in string
  const textPatterns = searchAllTextPattern(originalStr)

  let result: string = originalStr

  textPatterns.map((text) => {
    const camelKey = camelCase(text)
    if (phrases[camelKey]) {
      result = result.replaceAll(`{{${text}}}`, phrases[camelKey])
    }
  })

  return result
}

// Search all text pattern in input string. Text pattern will be in double curly braces
// For example : {{product name}}
const searchAllTextPattern = (inputText: string): string[] => {
  const pattern = /\{\{([^}]+)\}\}/g
  const matches = inputText.match(pattern)

  if (matches) {
    // Remove the double curly braces and trim whitespace
    return matches.map((match) => match.replace(/\{\{|\}\}/g, '').trim())
  } else {
    return []
  }
}
