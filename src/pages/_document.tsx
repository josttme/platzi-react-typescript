import { Footer } from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (): JSX.Element {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
