import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props: Props) => {

    return (
        <>
            <Header />
                <div>
                    {props.children}
                </div>
            <Footer />
        </>
    )
}

export default Layout;