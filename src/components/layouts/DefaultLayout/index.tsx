import { HomeHeader } from '@/components/elements/HomeHeader'
import { Container, ContainerProps, chakra } from '@chakra-ui/react'

type Props = {
	children?: React.ReactNode
} & ContainerProps

export const DefaultLayout = ({ children, p = 4, ...props }: Props) => {
	return (
		<Container p={p} maxW={800} {...props}>
			<chakra.div
				position="fixed"
				top={0}
				left={0}
				right={0}
				margin="auto"
				width="full"
				maxW={800}
				zIndex={10}
			>
				<HomeHeader />
			</chakra.div>
			<chakra.div mt={10}>{children}</chakra.div>
		</Container>
	)
}
