import { siteId } from "../config"
import { gql } from "graphql-request"
import { GraphQLResponse } from "graphql-request/build/esm/types"
import fetcher from "../lib/fetcher"
import {default as useSWR,  SWRResponse } from "swr"
import { SiteResponse } from "../types/generated/types"

const GET_SITE_BY_ID = gql`
	query GetSiteById($id: String!) {
		data: getMySiteById(id: $id) {
			data {
				id
				name
				textLogo
				# Pages with ShowInHeader = true
				headerPages {
					id
					name
					slug
					children {
						id
						name
						slug
					}
				}
			}
		}
	}
`

const useSite = (): SWRResponse<GraphQLResponse<SiteResponse>> => {
	const result = useSWR(
		["GET_SITE_BY_ID", siteId],
		() =>
			fetcher<GraphQLResponse<SiteResponse>>({
				query: GET_SITE_BY_ID,
				variables: { id: siteId },
				token: "",
			}),
		{}
	)
	return result
}

export default useSite
