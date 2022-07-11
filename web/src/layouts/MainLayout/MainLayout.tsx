import Navigation from 'src/components/Navigation/Navigation'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <header>
      <Navigation />
    </header>

    <main>{children}</main>
  </>
)
export default MainLayout
