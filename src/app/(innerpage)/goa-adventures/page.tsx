import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import GoaAdventures from '../../Components/Goaadventures';

export default function GoaAdventuresPage() {
  return (
    <>
      <BreadCumb
        bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
        Title="Goa Adventures"
      />

      <GoaAdventures />
    </>
  );
}