"use client";

import React, { FC } from "react";
import { Row, Col } from "react-grid-system";
import { Store, Truck } from "lucide-react";
import SwitchStatement, {
  FormSectionWrapper,
  FormSectionHeader,
  InputRHF,
  SelectRHF,
  MethodButtonRHF,
  ContactFieldGroup,
} from "@/components/Form";
import { CheckoutFormData } from "@/app/schema/checkout.schema";
import { useFormContext } from "react-hook-form";

const DeliveryMethodSection: FC = () => {
  const { watch, setValue } = useFormContext<CheckoutFormData>();
  const currentMethod = watch("deliveryMethod");
  const handleMethodChange = (id: any, value: string) => {
    setValue(id, value);
  };

  return (
    <FormSectionWrapper className="mt-8">
      <FormSectionHeader number={2} title="Delivery Method" />

      <Row gutterWidth={10} className="mb-6">
        <Col xs={6}>
          <MethodButtonRHF
            id={"deliveryMethod"}
            icon={Store}
            label="Store Pickup"
            value="store"
            active={currentMethod}
            onChange={handleMethodChange}
          />
        </Col>
        <Col xs={6}>
          <MethodButtonRHF
            id={"deliveryMethod"}
            icon={Truck}
            label="Home Delivery"
            value="delivery"
            active={currentMethod}
            onChange={handleMethodChange}
          />
        </Col>
      </Row>

      <SwitchStatement condition={currentMethod === "delivery"}>
        <>
          <Row gutterWidth={20} className="mt-4">
            <Col xs={12} sm={6}>
              <ContactFieldGroup isValid={true} iconType="calendar">
                <InputRHF id="deliveryDate" label="Delivery Date" type="date" />
              </ContactFieldGroup>
            </Col>
            <Col xs={12} sm={6}>
              <ContactFieldGroup isValid={true} iconType="clock">
                <SelectRHF
                  id="convenientTime"
                  label="Convenient Time"
                  options={[
                    "08:00 - 10:00",
                    "10:00 - 12:00",
                    "12:00 - 14:00",
                    "14:00 - 16:00",
                    "16:00 - 18:00",
                  ]}
                />
              </ContactFieldGroup>
            </Col>
          </Row>

          <Row gutterWidth={20} className="mt-2">
            <Col xs={12} sm={4}>
              <SelectRHF
                id="city"
                label="City"
                options={["New Jersey", "New York", "Chicago"]}
              />
            </Col>
            <Col xs={12} sm={4}>
              <InputRHF id="address" label="Address" required />
            </Col>
            <Col xs={12} sm={4}>
              <InputRHF id="zipCode" label="Zip Code" required />
            </Col>
          </Row>
        </>
      </SwitchStatement>
    </FormSectionWrapper>
  );
};

export default DeliveryMethodSection;
