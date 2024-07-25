import Header from './Layout/Header';

const AppLayout = ({ isShowHeader = true, children}) => {
  return (
    <>
    {isShowHeader && (<div className= 'relative z-10 mb-[-4em]'><Header/></div>)}
    <main>
        {children}
    </main>
    </>
  )
}

export default AppLayout
