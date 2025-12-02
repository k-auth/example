import { auth, signIn } from "@/auth";
import { Button } from "@k-auth/next/ui";
import { SignOutButton } from "@/components/sign-out-button";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          K-Auth 예제
        </h1>

        {session?.user ? (
          <div className="flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                환영합니다!
              </p>
              <p className="text-xl font-semibold text-zinc-900 dark:text-white">
                {session.user?.name}
              </p>
              <p className="text-sm text-zinc-500">
                {session.user?.email}
              </p>
            </div>
            <SignOutButton />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              소셜 로그인을 선택하세요
            </p>
            <div className="flex flex-col gap-3">
              <form
                action={async () => {
                  "use server";
                  await signIn("kakao");
                }}
              >
                <Button.Kakao type="submit" size="lg" className="w-72" />
              </form>
              <form
                action={async () => {
                  "use server";
                  await signIn("naver");
                }}
              >
                <Button.Naver type="submit" size="lg" className="w-72" />
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
