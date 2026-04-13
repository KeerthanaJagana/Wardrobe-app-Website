import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#fdf6f0] flex items-center justify-center">
      <SignUp />
    </div>
  );
}
