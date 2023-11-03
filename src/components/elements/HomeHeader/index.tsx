import { CloseIcon, SettingsIcon } from '@chakra-ui/icons'
import {
	HStack,
	List,
	ListItem,
	Switch,
	useColorMode,
	useDisclosure,
	chakra,
	Text,
	CircularProgress,
} from '@chakra-ui/react'
import { BasicModal } from '../BasicModal'
import { Href } from '../Href'
import { APP_URLS } from '@/constants/appUrls'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useStorage } from '@/hooks/useStorage'
import { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { usePageVisibility } from 'react-page-visibility'

export const HomeHeader = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { colorMode, toggleColorMode } = useColorMode()
	const location = useLocation()
	const [searchParams] = useSearchParams()
	const { model, onSetModel } = useStorage()
	const isVisible = usePageVisibility()
	const [isSpeak, setIsSpeak] = useState(false)
	const [isAudioLoading, setIsAudioLoading] = useState(true)

	const storyId = searchParams.get('id')
	const pageId = searchParams.get('page')

	console.log(storyId, pageId)

	return (
		<>
			<HStack justify="flex-end" width="full" height={10} px={6} pt={6}>
				<SettingsIcon w={6} h={6} onClick={onOpen} />
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
					{location.pathname === APP_URLS.STORY && (
						<>
							<ListItem display="flex" justifyContent="space-between" alignItems="center" w="full">
								<chakra.span fontWeight="bold" display="inline-flex" flexDir="column">
									読み上げ機能（α版）
									<chakra.span fontSize={12}>※ このページの文章を読み上げます</chakra.span>
								</chakra.span>
								<Switch
									isChecked={isSpeak}
									onChange={() => {
										if (!isSpeak) {
											scrollTo(0, 0)
										}
										onClose()
										setIsSpeak(!isSpeak)
									}}
									size="lg"
								/>
							</ListItem>
							<ListItem>
								<Href link={APP_URLS.HOME}>作品一覧へ戻る</Href>
							</ListItem>
						</>
					)}
				</List>
			</BasicModal>

			{isSpeak && (
				<HStack
					bgColor="purple.600"
					position="fixed"
					w="calc(100% - 32px)"
					borderRadius="md"
					bottom={4}
					left={4}
					px={4}
					py={4}
					justify="space-between"
					color="white"
					fontFamily="Noto Sans JP, sans-serif"
				>
					{isAudioLoading ? (
						<HStack spacing={6}>
							<CircularProgress isIndeterminate color="gray.600" />
							<Text>音声ファイル取得中</Text>
						</HStack>
					) : (
						<Text>読み上げ中</Text>
					)}
					<CloseIcon
						onClick={() => {
							setIsSpeak(false)
						}}
					/>
					<ReactAudioPlayer
						src={`/story/${storyId}/${pageId}.wav`}
						autoPlay
						loop={false}
						onCanPlay={() => {
							setIsAudioLoading(false)
						}}
						onEnded={() => {
							setIsSpeak(false)
						}}
						muted={!isVisible}
					/>
				</HStack>
			)}
		</>
	)
}
