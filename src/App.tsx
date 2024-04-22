import {Col, Container, Form, Row} from "react-bootstrap";
import Header from "./components/Header.tsx";
import UnitermForm from "./components/UnitermForm.tsx";
import {ChangeEvent, useState} from "react";
import Canvas from "./canvas/Canvas.tsx";
import FinalCanvas from "./canvas/FinalCanvas.tsx";

interface UnitermValues {
  uni1: string;
  uni2: string;
  uni3: string;
  uni4: string;
  operation1: string;
  operation2: string;
}

const FORM_FIELDS_NAME1 = {
  name1: "uni1",
  name2: "uni2"
}

const FORM_FIELDS_NAME2 = {
  name1: "uni3",
  name2: "uni4"
}

function App() {
  const [values, setValues] = useState<UnitermValues>({
    uni1: '',
    uni2: '',
    uni3: '',
    uni4: '',
    operation1: '',
    operation2: ''
  })
  const [position, setPosition] = useState<undefined | string>()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    console.log(name)
    console.log(value)

    setValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const setState = (state: string) => {
    if (state === position) {
      setPosition(undefined)
    } else {
      setPosition(state)
    }
  }

  return (
      <>
        <Header/>
        <Container className="mt-3">
          <Row>
            <Col lg={6}>
              <UnitermForm
                  fieldsName={FORM_FIELDS_NAME1}
                  handleChange={handleChange}
                  title={"Uniterm 1"}
                  uniValues={{value1: values.uni1, value2: values.uni2}}
                  op={"operation1"}
              />
              <Canvas
                  width="inherit" height="200px"
                  values={{v1: values.uni1, v2: values.uni2, op: values.operation1}}
              />
            </Col>
            <Col lg={6}>
              <UnitermForm
                  fieldsName={FORM_FIELDS_NAME2}
                  handleChange={handleChange}
                  title={"Uniterm 2"}
                  uniValues={{value1: values.uni3, value2: values.uni4}}
                  op={"operation2"}
              />
              <Canvas
                  width="inherit" height="200px"
                  values={{v1: values.uni3, v2: values.uni4, op: values.operation2}}
              />
            </Col>
          </Row>
          <Row>
            <h1>Zamiana unitermów</h1>
            <Col xl={3}>
              <Form>
                <Form.Check
                    onClick={() => {
                      setState('Up')
                    }}
                    disabled={position === "Down"}
                    type="switch"
                    id="custom-switch1"
                    label="Zamień pierwszy parametr"
                />
                <Form.Check
                    disabled={position === "Up"}
                    onClick={() => {
                      setState('Down')
                    }}
                    type="switch"
                    id="custom-switch2"
                    label="Zamień drugi parametr"
                />
              </Form>
            </Col>
            <Col xs={6}>
              <FinalCanvas
                  width="inherit"
                  height="200px"
                  values={values}
                  mainValue={"A"}
                  position={position}
              />
            </Col>
          </Row>
        </Container>
      </>
  )
}

export default App
