import '@styles/globals.css'

export const metadata = {
    title: "Prompt App",
    desc: 'Discover & Share AI Prompts'
}

const layout = ({children}) => {
  return (
    <html lang='en-US'>
        <body>
            <div className="main">
                <div className="gradient">

                </div>
            </div>

            <main className='app'>
                {children}
            </main>

        </body>
    </html>

  )
}

export default layout