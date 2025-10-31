"use client";

import React, { FC } from "react";
import { Row, Col } from "react-grid-system";
import { CreditCard, Apple } from "lucide-react";
import {
  FormSectionWrapper,
  FormSectionHeader,
  MethodButtonRHF,
} from "@/components/Form";

const PaymentMethodSection: FC = () => {
  const OtherIcon: FC<{ className?: string }> = () => (
    <p className="font-semibold text-sm">OTHER</p>
  );
  const VisaIcon: FC<{ className?: string }> = () => (
    <div className="flex items-center text-gray-700">
      <CreditCard className="w-5 h-5" />
      <span className="ml-1 font-bold text-sm">VISA</span>
    </div>
  );

  return (
    <FormSectionWrapper className="mt-8">
      <FormSectionHeader number={3} title="Payment Method" />

      <Row gutterWidth={10} className="mb-4">
        <Col xs={3}>
          <MethodButtonRHF
            id={"paymentMethod"}
            icon={CreditCard}
            label="Card"
            value="card"
            active={"card"}
            onChange={() => {}}
          />
        </Col>
        <Col xs={3}>
          <MethodButtonRHF
            id={"paymentMethod"}
            icon={VisaIcon}
            label=""
            value="visa"
            active={"visa"}
            onChange={() => {}}
          />
        </Col>
        <Col xs={3}>
          <MethodButtonRHF
            id={"paymentMethod"}
            icon={Apple}
            label="Pay"
            value="apple"
            active={"apple"}
            onChange={() => {}}
          />
        </Col>
        <Col xs={3}>
          <MethodButtonRHF
            id={"paymentMethod"}
            icon={OtherIcon}
            label=""
            value="other"
            active={"other"}
            onChange={() => {}}
          />
        </Col>
      </Row>
    </FormSectionWrapper>
  );
};

export default PaymentMethodSection;
