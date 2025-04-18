'use client';

import React from 'react';
import Modal, { ModalProps } from '@/app/components/modal';
import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';

export interface CompanyFormModalProps extends ModalProps {
  onSubmitAction: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmitAction,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmitAction} />
    </Modal>
  );
}
