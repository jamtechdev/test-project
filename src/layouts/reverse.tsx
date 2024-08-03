
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ReverseLayout({ children }: React.PropsWithChildren<{}>) {

    return (
        <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
            <Footer />
            {children}
            <Header />
        </div>
    );
}
export const letLayout = (page: React.ReactElement) => (
    <ReverseLayout>{page}</ReverseLayout>
);
