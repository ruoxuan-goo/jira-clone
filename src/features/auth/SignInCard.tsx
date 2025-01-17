import DottedSeparator from "@/components/DottedSeperator";
import { Button } from "@/components/ui/button";
import {
    Card, 
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignInCard = () => {
    return (
        <Card className="w-full h-full border-none shadow-none md:w-[500px]">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl"> 
                    Welcome back!
                </CardTitle>
            </CardHeader>
            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input 
                        required
                        type= "email"
                        value={""}
                        onChange={()=>{}}
                        placeholder="Email address"
                    />
                    <Input 
                        required
                        type= "password"
                        value={""}
                        onChange={()=>{}}
                        placeholder="Password"
                        min={8}
                        max={256}
                    />
                    <Button size='lg' className="w-full">Login</Button>
                </form>
            </CardContent>
            <div className="px-7 mb-2">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button size='lg' variant="secondary" className="w-full"><FcGoogle />Login with Google</Button>
                <Button size='lg' variant="secondary" className="w-full"><FaGithub />Login with Github</Button>
            </CardContent>
        </Card>
    )
}

export default SignInCard