import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
// import markdown from '@/markdowns/test.md'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { storyTheme } from '@/theme'
import { Button, Center, CircularProgress, HStack } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { APP_URLS } from '@/constants/appUrls'

export const StoryFeature = () => {
	const [markdown, setMarkdown] = useState('')
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const [loading, setLoading] = useState(true)
	const [isFirstStory, setIsFirstStory] = useState(true)
	const [isLastStory, setIsLastStory] = useState(false)

	const fetchStory = async (path: string) => {
		const result = await fetch(path)
		const text = await result.text()
		setLoading(false)
		setMarkdown(text)
	}

	const fetchPrevStory = async (storyId: string, pageId: string) => {
		const prevPageId = Number(pageId) - 1
		if (prevPageId <= 0) {
			return
		}
		fetch(`/story/${storyId}/${prevPageId}.md`).then((response) => {
			if (response.ok) {
				setIsFirstStory(false)
				return
			}
		})
	}

	const fetchNextStory = async (storyId: string, pageId: string) => {
		const nextPageId = Number(pageId) + 1
		fetch(`/story/${storyId}/${nextPageId}.md`).then((response) => {
			if (!response.ok) {
				setIsLastStory(true)
			}
		})
	}

	const storyId = searchParams.get('id')
	const pageId = searchParams.get('page')

	const handleClickNextButton = () => {
		const nextPageId = Number(pageId) + 1
		navigate(`${APP_URLS.STORY}?id=${storyId}&page=${nextPageId}`)
	}

	const handleClickPrevButton = () => {
		const prevPageId = Number(pageId) - 1
		if (prevPageId <= 0) {
			return
		}
		navigate(`${APP_URLS.STORY}?id=${storyId}&page=${prevPageId}`)
	}

	const handleClickBackButton = () => {
		navigate(APP_URLS.HOME)
	}

	useEffect(() => {
		if (!storyId || !pageId) {
			navigate(APP_URLS.HOME)
			return
		}
		window.scrollTo(0, 0)
		setIsFirstStory(true)
		setIsLastStory(false)
		fetchStory(`/story/${storyId}/${pageId}.md`)
		fetchPrevStory(storyId, pageId)
		fetchNextStory(storyId, pageId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navigate, storyId, pageId])

	return (
		<DefaultLayout>
			{loading ? (
				<Center>
					<CircularProgress isIndeterminate color="gray.600" />
				</Center>
			) : (
				<>
					<ReactMarkdown children={markdown} components={ChakraUIRenderer(storyTheme)} skipHtml />
					<HStack justify="flex-end" my={8}>
						{!isFirstStory && <Button onClick={handleClickPrevButton}>前へ</Button>}
						{isLastStory ? (
							<Button onClick={handleClickBackButton}>作品一覧へ戻る</Button>
						) : (
							<Button onClick={handleClickNextButton}>次へ</Button>
						)}
					</HStack>
				</>
			)}
		</DefaultLayout>
	)
}
