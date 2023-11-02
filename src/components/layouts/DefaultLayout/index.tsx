import { Container, ContainerProps } from '@chakra-ui/react'

type Props = {
	children?: React.ReactNode
} & ContainerProps

export const DefaultLayout = ({ children, p = 4 }: Props) => {
	return <Container p={p}>{children}</Container>
}
