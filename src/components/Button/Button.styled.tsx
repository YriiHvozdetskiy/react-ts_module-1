import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: ${props => props.theme.space[0]};

  :not(:last-child) {
    margin-right: ${props => props.type === "button" ? props.theme.space[4] : props.theme.space[0]}px;
  }

  padding: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.normal};
  background: ${props => props.disabled ? props.theme.colors.muted : props.theme.colors.assent};
  color: ${props => props.disabled ? props.theme.colors.primary : props.theme.colors.secondary};
  transition: background-color .25s ease;

  :hover:not(:disabled) {
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;
