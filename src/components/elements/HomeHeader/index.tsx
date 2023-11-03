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
import { useStorage } from '@/hooks/useStorage'

export const HomeHeader = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { colorMode, toggleColorMode } = useColorMode()
	const location = useLocation()
	const { model, onSetModel } = useStorage()

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
					<ListItem display="flex" justifyContent="space-between" alignItems="center" w="full">
						<chakra.span fontWeight="bold" display="inline-flex" flexDir="column">
							セリフ体
							<chakra.span fontSize={12}>※ 小説本文のフォントが変更されます</chakra.span>
						</chakra.span>
						<Switch
							isChecked={model.fontStyle === 'serif'}
							onChange={(e) => {
								onSetModel({
									...model,
									fontStyle: e.target.checked ? 'serif' : 'gothic',
								})
							}}
							size="lg"
						/>
					</ListItem>
					{location.pathname !== APP_URLS.HOME && (
						<ListItem>
							<Href link={APP_URLS.HOME}>作品一覧へ戻る</Href>
						</ListItem>
					)}
				</List>
			</BasicModal>
		</>
	)
}
