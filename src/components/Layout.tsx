import type React from "react"

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <div className="flex flex-col md:flex-row">
      {children}
    </div>
  )
}

export default Layout
