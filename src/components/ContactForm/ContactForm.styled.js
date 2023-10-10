import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';


// Пусті стилі
export const StyleForm = styled(Form)``;

export const FormWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: ${p => p.theme.borders.black};
  padding: ${p => p.theme.spasing(3)};
  margin-bottom: ${p => p.theme.spasing(5)};
  max-width: 400px;
`;

export const InputTitle = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.spasing(3)};
  font-weight: 600;
`;

export const FieldWraper = styled.span`
position: relative;
`;

export const StyleField = styled(Field)`
  display: block;
  margin-bottom: ${p => p.theme.spasing(5)};
  border: ${p => p.theme.borders.grey};
`;

export const StyleErrorMessage = styled(ErrorMessage)`
position: absolute;
left: 0;
top: 100%;
color: ${p => p.theme.colors.error};
`;