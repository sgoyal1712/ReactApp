import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  
  return (
    <div>
      <h1>
        Oops!!!!!
        Something wend wrong
        {err.status} {err.statusText}
      </h1>
    </div>
  )
}

export default Error