import type { Metadata } from 'next'
import { StyledComponentsRegistry } from '../components/StyledComponentsRegistry'
import '../styles/globals.css'
import RemoteHeader from '@/components/RemoteHeader'

export const metadata: Metadata = {
  title: 'OMS App Router',
  description: 'Order Management System with App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Load remote web component scripts */}
        <script
          src="http://localhost:3002/web-components/web-components.umd.js"
          async
        />
        <script
          src="http://localhost:3001/web-components/web-components.umd.js"
          async
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <RemoteHeader />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}