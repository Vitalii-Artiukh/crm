'use client';

import React from 'react';
import Modal, { ModalProps } from '@/app/components/modal';
import CompanyForm from '@/app/components/company-form';

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
