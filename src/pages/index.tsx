import { getLayout } from "@/layouts/default";
import Link from "next/link";

function Page() {
    return <>
        <h1>Hello, Next.js!</h1>
        <Link href={'/about'}>About</Link>
    </>
}
Page.getLayout = getLayout;
export default Page;