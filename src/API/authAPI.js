import api from "API";

const apiWithAuthTags = api.enhanceEndpoints({ addTagTypes: ['Auth'] });
const authApi = apiWithAuthTags.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    register: builder.mutation({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: (body) => ({
        url: 'auth/logout',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Auth'],
    }),
    refreshTokens: builder.mutation({
      query: (body) => ({
        url: 'auth/refresh-tokens',
        method: 'POST',
        body,
      }),
      extraOptions: { maxRetries: 0 },
      invalidatesTags: ['Auth'],
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: 'auth/forgot-password',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ body, params }) => ({
        url: 'auth/reset-password',
        method: 'POST',
        body,
        params,
      }),
      invalidatesTags: ['Auth'],
    }),
    sendVerificationEmail: builder.mutation({
      query: () => ({
        url: 'auth/send-verification-email',
        method: 'POST',
      }),
    }),
    verifyEmail: builder.mutation({
      query: (params) => ({
        url: 'auth/verify-email',
        method: 'POST',
        params,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshTokensMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useSendVerificationEmailMutation,
  useVerifyEmailMutation,
} = authApi;

export default authApi;