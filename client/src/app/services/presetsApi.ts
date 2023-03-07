import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type presetsResponse = Settings[]

export const presetsApi = createApi({
  reducerPath: "presetsApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/api/"}),
  tagTypes: ['Preset'],
  endpoints: (builder) => ({

    getPresets: builder.query<presetsResponse, void>({
      query: () => "presets/",
      providesTags: [{type: 'Preset', id: 'LIST'}]
    }),

    getPresetByID: builder.query<Settings, number>({
      query: (id) => `presets/${id}`
    }),

    addPreset: builder.mutation<Settings, Partial<Settings>>({
      query: (body) => ({
        url: "presets/",
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Preset', id: 'LIST'}]
    }),

    deletePreset: builder.mutation<Settings, number>({
      query: (id) => ({
        url: `presets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{type: 'Preset', id: 'LIST'}]
    })
  }),
})

export const {useGetPresetsQuery, useGetPresetByIDQuery, useAddPresetMutation, useDeletePresetMutation} = presetsApi;