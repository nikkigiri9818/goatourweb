import { notFound } from 'next/navigation'
import BreadCumb from '../../../Components/Common/BreadCumb'
import GoaPackageDetails from '../../../Components/Goapackagedetails'
import { goaPackages, getPackage, formatINR } from '../../../Components/Goapakagesdata'

export function generateStaticParams() {
  return goaPackages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pkg = getPackage(slug)
  if (!pkg) return {}
  return {
    title: `${pkg.title} from ${formatINR(pkg.price)} per person | Goa Tour Package`,
    description: pkg.overview,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pkg = getPackage(slug)
  if (!pkg) notFound()

  return (
    <>
      <BreadCumb
        bgimg={pkg.image}
        Title={pkg.title}
      />
      <GoaPackageDetails pkg={pkg} />
    </>
  )
}