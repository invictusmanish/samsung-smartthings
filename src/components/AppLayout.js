import Header from './Layout/Header';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
