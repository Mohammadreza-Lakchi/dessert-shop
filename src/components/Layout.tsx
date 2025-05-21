import type React from "react"

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div className="flex flex-col items-center px-5 py-5 md:flex-row md:items-start gap-5 bg-rose-50  md:px-30 md:py-25">
      {children}
    </div>
  )
}

export default Layout
