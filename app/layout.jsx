import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Prompt App",
    desc: 'Discover & Share AI Prompts'
}

const layout = ({children}) => {
  return (
    <html lang='en-US'>
        <body>
            <Provider>
            <div className="main">
                <div className="gradient">

                </div>
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>

  )
}

export default layout