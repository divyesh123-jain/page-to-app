export const __production__: boolean = process.env.NODE_ENV === "production"
export const __development__: boolean = process.env.NODE_ENV !== "production"
export const graphqlEndpoint = __production__
	? (process.env.NEXT_PUBLIC_API_ENDPOINT as string)
	: (process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT as string)
export const siteId: string = process.env.NEXT_PUBLIC_SITE_ID as string
