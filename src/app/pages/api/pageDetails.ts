import { NextApiRequest, NextApiResponse } from 'next';
import fetcher from '../../../../lib/fetcher';
import { PageFilterEnum, PageResponse } from '../../../../types/generated/types';
import { siteId } from '../../../../config';
import { gql } from 'graphql-request';
import {GraphQLResponse} from'graphql-request/build/esm/types'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { slug } = req.query;
    
    const GET_PAGE_BY_SLUG = gql`
      query getPageBySlug($filter: PageFilterEnum, $slug: String!, $siteId: String!) {
        data: getPageBySlug(filter: $filter, slug: $slug, siteId: $siteId) {
          success
          message
          data {
            id
            name
            body
            slug
          }
        }
      }
    `;
    
    const result = await fetcher<GraphQLResponse<PageResponse>>({
      query: GET_PAGE_BY_SLUG,
      variables: {
        filter: PageFilterEnum.Any,
        slug: slug || 'index',
        siteId,
        token: '',
      },
    });
    
    if (result.data?.success) {
      res.status(200).json({ page: result.data?.data });
    } else {
      res.status(404).json({ message: 'Page not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
