import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type presetsResponse = Settings[]

export const presetsApi = createApi({
  reducerPath: "presetsApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/api/"}),
  endpoints: (builder) => ({
    getPresets: builder.query<presetsResponse, void>({
      query: () => "presets/",
    }),
    getPresetByID: builder.query<Settings, number>({
      query: (id) => `presets/${id}`
    })
  }),
})

export const {useGetPresetsQuery, useGetPresetByIDQuery} = presetsApi;