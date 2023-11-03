import useLocalStorage from 'use-local-storage'
import { INITIAL_MODEL } from '@/constants/initilalModel'

export const useStorage = () => {
	const [model, setModel] = useLocalStorage('app', INITIAL_MODEL, {
		serializer: (obj) => JSON.stringify(obj),
		parser: (str) => JSON.parse(str),
	})

	const onSetModel = (obj: Partial<typeof INITIAL_MODEL>) => {
		setModel({
			...model,
			...obj,
		})
	}

	const clearModel = () => {
		setModel(INITIAL_MODEL)
	}

	return { model, onSetModel, clearModel }
}
