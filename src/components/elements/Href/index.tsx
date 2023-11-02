import { Text, TextProps } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

type Props = {
	link: string
	children?: React.ReactNode
} & TextProps

export const Href = ({ link, children, textDecor = 'underline', ...props }: Props) => {
	return (
		<Text textDecor={textDecor} {...props}>
			<Link to={link}>{children}</Link>
		</Text>
	)
}
