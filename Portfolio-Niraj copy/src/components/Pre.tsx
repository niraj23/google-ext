import React from "react";
function Pre(props: any) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
