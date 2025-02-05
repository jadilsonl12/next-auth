import Link from "next/link"
import { SignOutButton } from "./sign-out-button"
import { getServerSession } from "next-auth"

const Header = async () => {
    const session = await getServerSession()

    return (
        <header className="fixed w-full h-20 flex items-center bg-amber-950 text-slate-50">
            <nav className="w-full justify-between flex items-center m-auto max-w-screen-xl">
                <Link href="/">logo</Link>
                <ul className="flex items-center gap-10">
                    <li>
                        <Link href="/">inicio</Link>
                    </li>
                    <li>
                        <Link href="/public">publica</Link>
                    </li>
                    <li>
                        <Link href="/private">private</Link>
                    </li>
                    {session && <li><SignOutButton/></li>}
                </ul>
            </nav>
        </header>
    )
}

export { Header }