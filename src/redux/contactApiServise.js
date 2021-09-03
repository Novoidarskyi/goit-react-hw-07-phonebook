import { combineReducers } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { filter } from 'redux/redusers';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61328c92ab7b1e001799b53c.mockapi.io/',
  }),
  tagTypes: ['contact'],
  keepUnusedDataFor: 30,
  endpoints: builder => ({
    getContact: builder.query({
      query: () => 'contacts',
      providesTags: ['contact'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['contact'],
    }),
    addContact: builder.mutation({
      query(body) {
        return {
          url: 'contacts',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;

export const rootReducer = combineReducers({
  filter,
  [contactApi.reducerPath]: contactApi.reducer,
});
