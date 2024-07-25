import Header from './Layout/Header';

const AppLayout = ({ isShowHeader = true, children }) => {
  return (
    <>
      {isShowHeader && (
        <div className="relative z-10">
          <Header />
        </div>
      )}
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
