import { heroui } from '@heroui/react'
import type { ThemeColors } from '@heroui/theme'

const colors: Partial<ThemeColors> = {
  primary: {
    DEFAULT: '#5e72e4',
    foreground: '#FFFFFF',
  },
}

export default heroui({
  defaultTheme: 'light',
  themes: {
    light: {
      colors: {
        primary: colors.primary,
      },
    },
    dark: {
      colors: {
        primary: colors.primary,
      },
    },
  },
})