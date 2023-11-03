/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChakraProvider, extendTheme, Heading, Text } from '@chakra-ui/react'
import { CustomColorOptions } from '@/theme/colors'
import { CustomComponentOptions } from '@/theme/components'
import { CustomStyleOptions } from '@/theme/styles'
import { customConfigOptions } from '@/theme/configs'
import { customFontsOptions } from '@/theme/fonts'
import { useStorage } from '@/hooks/useStorage'

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
		// コンポーネント判定されずlintエラーが出るため、無効化
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { model } = useStorage()
		return (
			<Heading
				as="h1"
				fontWeight="bold"
				mb={12}
				fontFamily={
					model.fontStyle === 'serif' ? "'Noto Serif JP', serif" : 'Noto Sans JP, sans-serif'
				}
			>
				{children}
			</Heading>
		)
	},
	h2: (props: any) => {
		const { children } = props
		// コンポーネント判定されずlintエラーが出るため、無効化
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { model } = useStorage()
		return (
			<Heading
				as="h2"
				fontWeight="bold"
				fontSize={24}
				mb={8}
				fontFamily={
					model.fontStyle === 'serif' ? "'Noto Serif JP', serif" : 'Noto Sans JP, sans-serif'
				}
			>
				{children}
			</Heading>
		)
	},
	p: (props: any) => {
		const { children } = props
		// コンポーネント判定されずlintエラーが出るため、無効化
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { model } = useStorage()
		return (
			<Text
				mb={8}
				lineHeight="2"
				fontFamily={
					model.fontStyle === 'serif' ? "'Noto Serif JP', serif" : 'Noto Sans JP, sans-serif'
				}
			>
				{children}
			</Text>
		)
	},
}

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
