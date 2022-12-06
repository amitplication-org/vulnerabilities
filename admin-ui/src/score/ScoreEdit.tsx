import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const ScoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="customers"
          reference="Customer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerTitle} />
        </ReferenceArrayInput>
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
