import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { APP_URLS } from '@/constants/appUrls'
import { CustomThemeProvider } from '@/theme'

// @plop-main-page-import - Please don't delete. Comments for automatic addition by plop.
import { StoryPage } from '@/pages/story'
import { HomePage } from '@/pages/home'

const router = createBrowserRouter([
	// @plop-main-route - Please don't delete. Comments for automatic addition by plop.
	{
		path: APP_URLS.STORY,
		element: <StoryPage />,
	},
	{
		path: APP_URLS.HOME,
		element: <HomePage />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomThemeProvider>
			<RouterProvider router={router} />
		</CustomThemeProvider>
	</React.StrictMode>,
)
