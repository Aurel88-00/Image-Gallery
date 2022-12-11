import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const client_id = '*************************************';

interface QueryParams {
  id: string,
  page: number
}

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/' }),
  endpoints: (builder) => ({
    getPaginatedCollection: builder.query<any, string | any>({
      query: (page : number ) => `collections?client_id=${client_id}&page=${page}`,
    }),
    getPaginatedPhotos : builder.query<any , string | any>({
       query: ({id , page} : QueryParams) => `collections/${id}/photos?client_id=${client_id}&page=${page}&per_page=1000000` 
    }),
  }),
})

export const { useGetPaginatedCollectionQuery , useGetPaginatedPhotosQuery} = collectionApi
