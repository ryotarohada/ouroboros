/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChakraProvider, extendTheme, Heading, Text } from '@chakra-ui/react'
import { CustomColorOptions } from '@/theme/colors'
import { CustomComponentOptions } from '@/theme/components'
import { CustomStyleOptions } from '@/theme/styles'
import { customConfigOptions } from '@/theme/configs'
import { customFontsOptions } from '@/theme/fonts'

type CustomThemeProviderProps = {
	children: React.ReactNode
}

// https://chakra-ui.com/docs/styled-system/customize-theme
export const theme = extendTheme({
	colors: CustomColorOptions,
	components: CustomComponentOptions,
	styles: CustomStyleOptions,
	config: customConfigOptions,
	fonts: customFontsOptions,
})

// 小説閲覧ページ用のテーマ
export const storyTheme = {
	h1: (props: any) => {
		const { children } = props
		return (
			<Heading as="h1" fontWeight="bold" mb={12}>
				{children}
			</Heading>
		)
	},
	h2: (props: any) => {
		const { children } = props
		return (
			<Heading as="h2" fontWeight="bold" fontSize={24} mb={8}>
				{children}
			</Heading>
		)
	},
	p: (props: any) => {
		const { children } = props
		return (
			<Text mb={8} lineHeight="2">
				{children}
			</Text>
		)
	},
}

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
