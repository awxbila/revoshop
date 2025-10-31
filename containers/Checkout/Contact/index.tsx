"use client";

import React, { FC } from "react";
import { Row, Col } from "react-grid-system";
import {
  FormSectionWrapper,
  FormSectionHeader,
  InputRHF,
  ContactFieldGroup,
} from "@/components/Form";
import { CheckoutFormData } from "@/app/schema/checkout.schema";
import { useFormContext } from "react-hook-form";

const ContactInfoSection: FC = () => {
  const { watch } = useFormContext<CheckoutFormData>();
  const phone = watch("phone");
  const phoneIsValid = !!phone && phone.length >= 10;

  return (
    <FormSectionWrapper>
      <FormSectionHeader number={1} title="Contact Information" />
      <Row gutterWidth={20}>
        <Col xs={12} sm={6}>
          <InputRHF id="firstName" label="First Name" required />
        </Col>
        <Col xs={12} sm={6}>
          <InputRHF id="lastName" label="Last Name" required />
        </Col>
      </Row>

      <Row gutterWidth={20}>
        <Col xs={12} sm={6}>
          <ContactFieldGroup isValid={phoneIsValid}>
            <InputRHF id="phone" label="Phone" required type="tel" />
          </ContactFieldGroup>
        </Col>
        <Col xs={12} sm={6}>
          <InputRHF
            id="email"
            label="E-mail"
            type="email"
            required
            placeholder="E-mail"
          />
        </Col>
      </Row>
    </FormSectionWrapper>
  );
};

export default ContactInfoSection;
