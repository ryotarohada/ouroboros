import { HamburgerIcon } from '@chakra-ui/icons'
import {
	HStack,
	List,
	ListItem,
	Switch,
	useColorMode,
	useDisclosure,
	chakra,
} from '@chakra-ui/react'
import { BasicModal } from '../BasicModal'
import { Href } from '../Href'
import { APP_URLS } from '@/constants/appUrls'
import { useLocation } from 'react-router-dom'

export const HomeHeader = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { colorMode, toggleColorMode } = useColorMode()
	const location = useLocation()

	return (
		<>
			<HStack justify="flex-end" width="full" height={10} px={6} pt={6}>
				<HamburgerIcon w={6} h={6} onClick={onOpen} />
			</HStack>
			<BasicModal isOpen={isOpen} onClose={onClose} title="設定">
				<List w="full" spacing={4}>
					<ListItem display="flex" justifyContent="space-between" alignItems="center" w="full">
						<chakra.span fontWeight="bold">ダークモード</chakra.span>
						<Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} size="lg" />
					</ListItem>
					<ListItem>
						{location.pathname !== APP_URLS.HOME && (
							<Href link={APP_URLS.HOME}>作品一覧へ戻る</Href>
						)}
					</ListItem>
				</List>
			</BasicModal>
		</>
	)
}
