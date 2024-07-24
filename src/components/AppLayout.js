import Header from './Layout/Header';

const AppLayout = ({ isShowHeader = true, children}) => {
  return (
    <>
    {isShowHeader && (<Header/>)}
    <main>
        {children}
    </main>
    </>
  )
}

export default AppLayout
