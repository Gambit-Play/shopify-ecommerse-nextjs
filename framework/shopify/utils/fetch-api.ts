import { ApiFetcherOptions, ApiFetcherResult } from '@common/types/api';

export const fetchApi = async <T>({
	url,
	query,
}: ApiFetcherOptions): Promise<ApiFetcherResult<T>> => {
	const init = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query,
		}),
	};

	const response = await fetch(url, init);
	const { data, errors } = await response.json();

	if (errors) {
		throw new Error(errors[0].message ?? errors.message);
	}

	return { data };
};
