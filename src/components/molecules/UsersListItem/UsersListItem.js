import React, { useContext } from "react";
import PropTypes from "prop-types";
import DeleteButton from "components/atoms/DeleteButton/DeleteButton";
import { StyledAverage, StyledInfo, Wrapper } from "./UsersListItem.styles";
import { UsersContext } from "providers/UsersProvider";

const UsersListItem = ({ userData: { average, name, attendance = "0%" } }) => {
   const { deleteUser } = useContext(UsersContext);
   return (
      <Wrapper>
         <StyledAverage value={average}>{average}</StyledAverage>
         <StyledInfo>
            <p>
               {name}
               <DeleteButton onClick={() => deleteUser(name)} />
            </p>
            <p>Teilnahmefrequenz: {attendance}</p>
         </StyledInfo>
      </Wrapper>
   );
};

UsersListItem.propTypes = {
   userData: PropTypes.shape({
      average: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      attendance: PropTypes.string,
   }),
};

export default UsersListItem;
