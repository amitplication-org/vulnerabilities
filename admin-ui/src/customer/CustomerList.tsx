import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { SCORE_TITLE_FIELD } from "../score/ScoreTitle";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="cnumber" source="cnumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Phone" source="phone" />
        <ReferenceField label="Score" source="score.id" reference="Score">
          <TextField source={SCORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="test" source="test" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
