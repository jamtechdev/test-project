
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function DefaultLayout({ children }: React.PropsWithChildren<{}>) {
    
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
export const getLayout = (page: React.ReactElement) => (
    <DefaultLayout>{page}</DefaultLayout>
);
