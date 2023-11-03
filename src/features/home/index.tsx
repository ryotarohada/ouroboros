import { Href } from '@/components/elements/Href'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { APP_URLS } from '@/constants/appUrls'
import { useStorage } from '@/hooks/useStorage'
import { Heading, List, ListItem, Text, chakra } from '@chakra-ui/react'

export const HomeFeature = () => {
	const { model } = useStorage()

	return (
		<DefaultLayout mt={16}>
			<Heading as="h1" fontSize={60}>
				<chakra.span>
					<chakra.span color="red.600">ウ</chakra.span>ロボロス
				</chakra.span>
				<chakra.br />
				<chakra.span>の少年</chakra.span>
			</Heading>

			<Text fontSize={16} mt={8}>
				著：羽田涼太郎
			</Text>

			<List mt={16} spacing={4} fontSize={20}>
				{model.lastStoryId && model.lastPageId && (
					<ListItem>
						<Href
							link={`${APP_URLS.STORY}?id=${model.lastStoryId}&page=${model.lastPageId}`}
							fontSize={16}
							color="red.400"
						>
							続きから読む
						</Href>
					</ListItem>
				)}
				<ListItem>
					<Href link="/story?id=0&page=1">Part1 Emotion</Href>
				</ListItem>
				<ListItem ml={4}>
					<Href link="/story?id=1&page=1">忘却花火</Href>
				</ListItem>
			</List>

			<Text fontSize={16} mt={14}>
				2023/11/03 更新
			</Text>
		</DefaultLayout>
	)
}
