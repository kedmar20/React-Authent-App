import React, { useState, useContext } from "react";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { Title } from "components/atoms/Title/Title";
import { UsersContext } from "providers/UsersProvider";

const initialFormState = {
   name: "",
   attendance: "",
   average: "",
};
//
const AddUser = () => {
   const [formValues, setFormValues] = useState(initialFormState);
   const context = useContext(UsersContext);

   const handleInputChange = (e) => {
      setFormValues({
         ...formValues,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmitUser = (e) => {
      e.preventDefault();
      context.handleAddUser(formValues);
      setFormValues(initialFormState);
   };

   return (
      <ViewWrapper as="form" onSubmit={handleSubmitUser}>
         <Title>Neuen Studenten hinzufügen:</Title>
         <FormField label="Nachname:" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
         <FormField label="Teilnahmefrequenz:" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
         <FormField label="Durchschnitt:" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
         <Button type="submit">Add</Button>
      </ViewWrapper>
   );
};

export default AddUser;
