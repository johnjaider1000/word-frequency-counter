import Card_impl from '@/core/ui/components/Card'
import IconDocumentation from '@/modules/frequency-counter/assets/icons/icon-documentation.png'

function RepeatedWordsCard_impl() {
  return (
    <Card_impl
      header={'Repeated Words - Bar Chart'}
      className="RepeatedWordsCard_impl"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center rounded-xl min-h-[250px] gap-6">
          <img
            src={IconDocumentation}
            alt="Documentation Icon"
            className="h-28"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-bold text-gray-700">
              Generate the text to graph the words
            </p>
            <p className="text-sm font-normal text-gray-600">
              Please enter above the source of data
            </p>
          </div>
        </div>
      </div>
    </Card_impl>
  )
}

export default RepeatedWordsCard_impl
