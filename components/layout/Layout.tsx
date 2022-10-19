import { ReactNode } from 'react';
import EnquireNow from './EnquireNow';
import Footer from './Footer';
import SiteNavBar from './SiteNavBar';

const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <SiteNavBar />
      <main>{props.children}</main>
      <EnquireNow />
      <Footer />
    </>
  );
};

export default Layout;
