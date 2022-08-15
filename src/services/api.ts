import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Oportunities } from "../@types/Oportunities";
import { Periods } from "../@types/Periods";
import { Values } from "../@types/Values";

const baseUrl = "https://5fpaprjjbl.execute-api.us-east-1.amazonaws.com";

export const businessApi = createApi({
  reducerPath: "businessApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOportunities: builder.query<Oportunities, void>({
      query: () => `/test`,
    }),
    getValues: builder.query<Values, void>({
      query: () => `/test/values`,
    }),
    getPeriods: builder.query<Periods, void>({
      query: () => `/test/installments`,
    }),
  }),
});

export const {
  useGetOportunitiesQuery,
  useGetValuesQuery,
  useGetPeriodsQuery,
} = businessApi;
