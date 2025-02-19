import Image from 'next/image'
import bronze from '../../assets/medal-bronze.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Rank() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leasing-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <div className="relative roundex-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Teste
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1337
          </span>
          <Image src={gold} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative roundex-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Teste 2
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            337
          </span>
          <Image src={silver} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative roundex-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Teste 3
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            30
          </span>
          <Image src={bronze} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
