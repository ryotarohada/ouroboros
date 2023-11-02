import { Button, ButtonProps } from '@chakra-ui/button'

type Props = {
	children?: React.ReactNode
} & ButtonProps

export const BasicButton = ({ children, variant = 'outline', ...rest }: Props) => {
	return (
		<Button variant={variant} {...rest}>
			{children}
		</Button>
	)
}
