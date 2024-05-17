import React from "react";
import { 
    useNavigate, 
    useLoaderData, 
    Form,
    redirect,
    useActionData,
    useNavigation
 } from "react-router-dom";
import { loginUser } from "../api"

export function loader ({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action ({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect(pathname)
    } catch (err) {
        return err.message
    }

}

export default function Login () {
    const navigation = useNavigation()
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigate = useNavigate()

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <p className="red">{message}</p>}
            {errorMessage && <p className="red">{errorMessage}</p>}

            <Form 
                method="post" 
                className="login-form" 
                replace
            >
                <input 
                    name="email"
                    type="email"
                    placeholder="Email address"
                    
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={navigation.state === 'submitting'}>
                  {navigation.state === 'submitting' ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )
}