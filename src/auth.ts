import { KAuth } from "@k-auth/next";

export const { handlers, signIn, signOut, auth } = KAuth({
  kakao: {
    clientId: process.env.KAKAO_CLIENT_ID!,
    clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    collectEmail: false,
  },
  naver: {
    clientId: process.env.NAVER_CLIENT_ID!,
    clientSecret: process.env.NAVER_CLIENT_SECRET!,
  },
});
