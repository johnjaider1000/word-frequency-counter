// Assumptions: Static navbar with brand name. [NX-43-R]

function PrimaryNavbar_impl() {
  return (
    <nav className="w-full px-10 py-6 backdrop-blur-sm bg-primary">
      <div className="mx-auto flex items-center">
        <h1 className="flex flex-row gap-2 text-h5 text-white">
          <span>Test</span>
          <span className="text-white/80">/</span>
          <span className="text-white/80">Front</span>
        </h1>
      </div>
    </nav>
  )
}

export default PrimaryNavbar_impl
