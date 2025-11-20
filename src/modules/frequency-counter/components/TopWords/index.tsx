import Card_impl from '@/core/ui/components/Card'

function TopWords_impl() {
  return (
    <Card_impl header="Top 5 Words">
      <div className="w-full">
        <div className="grid grid-cols-3 w-full text-gray-700 font-bold text-xs border-b border-gray-300 py-2">
          <div className="uppercase">TOP</div>
          <div className="uppercase">WORD</div>
          <div className="uppercase">TOTAL</div>
        </div>

        <div className="divide-y divide-gray-300 border-b border-gray-300">
          <div className="grid grid-cols-3 w-full text-sm font-normal text-gray-800 py-4">
            <div>1</div>
            <div>-</div>
            <div>-</div>
          </div>
          <div className="grid grid-cols-3 w-full text-sm font-normal text-gray-800 py-4">
            <div>2</div>
            <div>-</div>
            <div>-</div>
          </div>
        </div>
      </div>
    </Card_impl>
  )
}

export default TopWords_impl
