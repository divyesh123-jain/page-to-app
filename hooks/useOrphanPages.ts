import { gql } from "graphql-request"
// import { GraphQLResponse } from "graphql-request/dist/types"

import useSWR from "swr"
// import { PageFilterEnum, PagesResponse } from "types/generated/types"
import { GraphQLResponse } from "graphql-request/build/esm/types"
import fetcher from "../lib/fetcher"
import { PageFilterEnum, PagesResponse } from "../types/generated/types"

const GET_ORPHAN_PAGES_BY_SITE = gql`
	query ($filter: PageFilterEnum, $siteId: String!) {
		data: getAllOrphanPagesBySite(filter: $filter, siteId: $siteId) {
			success
			message
			data {
				id
				name
				slug
				priority
				children {
					id
					name
					slug
					priority
					children {
						id
						name
						slug
						priority
					}
				}
			}
		}
	}
`

const useOrphanPages = (siteId: string) => {
	const response = useSWR([siteId, GET_ORPHAN_PAGES_BY_SITE], () =>
		fetcher<GraphQLResponse<PagesResponse>>({
			query: GET_ORPHAN_PAGES_BY_SITE,
			variables: {
				filter: PageFilterEnum.Any,
				siteId,
			},
			token: process.env.NEXT_TEMP_TOKEN as string,
		})
	)
	return response
}

export default useOrphanPages
