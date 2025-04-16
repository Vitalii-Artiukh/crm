import React, { useState } from 'react';
import Button from '@/app/components/button';

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
    </>
  );
}
