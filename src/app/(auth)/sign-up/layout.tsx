import { PropsWithChildren } from "react"

const SignUpLayout = ({children}: PropsWithChildren) => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            {children}
        </div>
    )
}

export default SignUpLayout