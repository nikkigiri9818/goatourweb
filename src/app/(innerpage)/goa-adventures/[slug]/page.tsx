// Is file ko app/goa-adventure/[slug]/page.tsx naam se rakhna (square brackets ke saath).
import { notFound } from 'next/navigation'
import BreadCumb from '../../../Components/Common/BreadCumb'
import GoaAdventureDetails from '../../../Components/Goaadventuredetails'
import { goaAdventures, getAdventure } from '../../../Components/Goaadventuresdata'

export function generateStaticParams() {
  return goaAdventures.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getAdventure(slug)
  if (!item) return {}
  return { title: `${item.title} | Goa Adventure`, description: item.short }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getAdventure(slug)
  if (!item) notFound()

  return (
    <>
      <BreadCumb bgimg="/assets/img/breadcrumb/breadcrumb.jpg" Title={item.title} />
      <GoaAdventureDetails item={item} />
    </>
  )
}