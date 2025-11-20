// Assumptions: Layout for the frequency counter page. [NX-42-R]

function PageLayout_impl() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-2xl font-bold text-default">
          Word Frequency Counter
        </span>
      </div>
    </div>
  )
}

export default PageLayout_impl
