import {
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalProps,
} from '@chakra-ui/react'

type Props = {
	title?: string
	closeIcon?: boolean
	blurred?: boolean
} & ModalProps

export const BasicModal: React.FC<Props> = ({
	children,
	title = '',
	onClose,
	blurred = true,
	...rest
}) => {
	return (
		<Modal isCentered onClose={onClose} {...rest}>
			<ModalOverlay
				backgroundColor="rgba(0, 0, 0, 0.5)"
				backdropFilter={blurred ? 'blur(4px)' : undefined}
				h="full"
			/>
			<ModalContent w="calc(100% - 32px)" overflow="scroll" py={2}>
				{title && (
					<ModalHeader>
						<Heading as="h2" fontSize={20}>
							{title}
						</Heading>
						<ModalCloseButton />
					</ModalHeader>
				)}
				<ModalBody py={4}>{children}</ModalBody>
			</ModalContent>
		</Modal>
	)
}
