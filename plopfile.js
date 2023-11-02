import fs from 'fs'

// @plop-main-page-import - Please don't delete. Comments for automatic addition by plop.
const APPEND_PATTERN = /\/\/ @plop - Please don't delete. Comments for automatic addition by plop./
const APPEND_PATTERN_MAIN_ROUTE =
	/\/\/ @plop-main-route - Please don't delete. Comments for automatic addition by plop./
const APPEND_PATTERN_MAIN_PAGE_IMPORT =
	/\/\/ @plop-main-page-import - Please don't delete. Comments for automatic addition by plop./

const componentKinds = fs.readdirSync('src/components').map((kind) => {
	return {
		name: kind,
		value: kind,
	}
})

export default function (plop) {
	plop.setGenerator('page', {
		description: 'create page & feature',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'page name please',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/pages/{{camelCase name}}/index.tsx',
				templateFile: 'plop-templates/page/index.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/pages/{{camelCase name}}/index.stories.tsx',
				templateFile: 'plop-templates/page/index.stories.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/features/{{camelCase name}}/index.tsx',
				templateFile: 'plop-templates/feature/index.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/features/{{camelCase name}}/index.stories.tsx',
				templateFile: 'plop-templates/feature/index.stories.tsx.hbs',
			},
			{
				type: 'append',
				path: 'src/constants/appUrls/index.ts',
				templateFile: 'plop-templates/constant/append-appUrls.hbs',
				pattern: APPEND_PATTERN,
			},
			{
				type: 'append',
				path: 'src/main.tsx',
				templateFile: 'plop-templates/main/route.hbs',
				pattern: APPEND_PATTERN_MAIN_ROUTE,
			},
			{
				type: 'append',
				path: 'src/main.tsx',
				templateFile: 'plop-templates/main/import-page.hbs',
				pattern: APPEND_PATTERN_MAIN_PAGE_IMPORT,
			},
		],
	})

	plop.setGenerator('component', {
		description: 'create component',
		prompts: [
			{
				type: 'list',
				name: 'kind',
				message: 'src/components/{path please}',
				choices: componentKinds,
			},
			{
				type: 'input',
				name: 'name',
				message: 'component name please',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{kind}}/{{pascalCase name}}/index.tsx',
				templateFile: 'plop-templates/component/index.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{kind}}/{{pascalCase name}}/index.stories.tsx',
				templateFile: 'plop-templates/component/index.stories.tsx.hbs',
			},
		],
	})
}
