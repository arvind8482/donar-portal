
import { ChartAreaInteractive } from "@/components/chart-area-interactive" 
import { SectionCards } from "@/components/section-cards"
import Paymentpage from  './payment-page/page'

 

export default function Page() {
  return (
    <div >
          <div  >
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <div className="w-1/2">
                    <ChartAreaInteractive />
                </div>
              </div>
              <div className="px-4 lg:px-6">
                   <Paymentpage/>
              </div>
        
            </div>
          </div>
        </div>
   
  )
}
