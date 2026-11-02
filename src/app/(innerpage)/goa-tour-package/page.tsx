import React from 'react'
import BreadCumb from '../../Components/Common/BreadCumb'
import GoaPackages from '../../Components/Goapackages'

export const metadata = {
  title: 'Goa Tour Packages 2026 | Resort, Cab & Breakfast Included',
  description:
    'Goa tour packages with beach resort stay, airport or station pickup and drop, daily breakfast and sightseeing. 3 to 5 day plans, honeymoon and premium options.',
}

export default function Page() {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Goa Tour Packages"
      />
      <GoaPackages />
    </>
  )
}