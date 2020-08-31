import * as React from "react";

export interface HelloWorldProps {
  userName: string;
}

export const App = (props: HelloWorldProps) => (
  <>
    <h1>
        Hi {props.userName} !
    </h1>
    <p>{process.env.API}</p>
  </>
);