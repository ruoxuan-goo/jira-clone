import { PropsWithChildren } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
        <div className="mx-auto max-w-screen-2xl p-4">
            <nav className="flex justify-between items-center">
                <Image src="/logo.svg" height={56} width={152} alt="logo" />
                <Button variant="secondary">Sign up</Button>
            </nav>
            <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
            {children}
            </div>
        </div>
    </main>
  );
};

export default AuthLayout;
