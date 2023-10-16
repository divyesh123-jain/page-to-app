import { GraphQLClient, RequestDocument } from "graphql-request"

type FetchWithTokenArgs = {
	query: RequestDocument
	variables?: Record<string, any>
	token?: string
}

const fetchWithToken = async <TData>({
	query,
	variables = {},
	token,
}: FetchWithTokenArgs): Promise<TData> => {
	const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`
	const graphqlClient = new GraphQLClient(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return graphqlClient.request<TData>(query, variables)
}

export default fetchWithToken
