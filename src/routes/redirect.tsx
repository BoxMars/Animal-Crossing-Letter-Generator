import { useEffect } from "react";

export function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return <></>;
}

export default Redirect;