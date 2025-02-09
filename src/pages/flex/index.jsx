import Pokemon from "../../component/pokemon";

const Flex = () => {
  return (
    <div className="container">
      <h1>Flex</h1>
      <p>
        Flex is a CSS layout property that allows you to create flexible and
        responsive layouts without using floats or positioning.
      </p>
      <div>
        <h2>Flex Container</h2>
        <p>
          To create a flex container, you need to set the display property to
          flex or inline-flex.
        </p>
        <pre>
          <code>{`<div style={{ display: 'flex' }}>...</div>`}</code>
        </pre>
      </div>
      <div>
        <Pokemon displayType={"flex"} />
      </div>
    </div>
  );
};

export default Flex;
