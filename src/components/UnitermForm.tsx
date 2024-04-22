import {Form} from "react-bootstrap";
import {ChangeEvent, FC} from "react";

interface UnitermFormProps {
  title: string;
  op: string;
  uniValues: {
    value1: string;
    value2: string;
  }
  fieldsName: {
    name1: string;
    name2: string;
  }
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UnitermForm: FC<UnitermFormProps> = (props: UnitermFormProps) => {
  const {op, title, uniValues, fieldsName, handleChange} = props
  return (
      <>
        <h1>{title}</h1>
        <Form onSubmit={console.log} className="mb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Parametr 1</Form.Label>
            <Form.Control
                name={fieldsName.name1}
                type="text"
                placeholder="A"
                value={uniValues.value1}
                onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Parametr 2</Form.Label>
            <Form.Control
                name={fieldsName.name2}
                type="text"
                placeholder="B"
                value={uniValues.value2}
                onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zmiana separatora</Form.Label>
            <Form.Check
                label=","
                value=","
                name={op}
                type="radio"
                onChange={handleChange}
                id={`reverse-radio-1`}
            />
            <Form.Check
                label=";"
                name={op}
                value=";"
                type="radio"
                onChange={handleChange}
                id={`reverse-radio-2`}
            />
          </Form.Group>
        </Form>
      </>
  )
}

export default UnitermForm
