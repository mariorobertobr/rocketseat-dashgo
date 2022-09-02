import  Document, { Head, Html, Main, NextScript} from 'next/document'


export default class MyDocument extends Document{
    render(){
        return (
            <Html>

                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,500;8..144,700&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                
                </body>
            </Html>
        )
    }
}