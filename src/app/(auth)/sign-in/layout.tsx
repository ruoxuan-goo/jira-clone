import { PropsWithChildren } from "react"

const SignInLayout = ({children}: PropsWithChildren) => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            {children}
        </div>
    )
}

export default SignInLayout