import { getRanking } from '@/http/api'
import Image from 'next/image'
import bronze from '../../../assets/medal-bronze.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export async function Rank() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leasing-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankPosition = index + 1

          return (
            <div
              key={item.id}
              className="relative roundex-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankPosition}º</span> |{' '}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>
              {rankPosition === 1 && (
                <Image src={gold} alt="" className="absolute top-0 right-8" />
              )}
              {rankPosition === 2 && (
                <Image src={silver} alt="" className="absolute top-0 right-8" />
              )}
              {rankPosition === 3 && (
                <Image src={bronze} alt="" className="absolute top-0 right-8" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
