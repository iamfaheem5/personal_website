import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
      {children}
    </main>
    </div>
  )
}